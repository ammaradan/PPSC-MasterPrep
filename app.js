/**
 * PPSC MasterPrep & Question Bank - Main Application Logic
 */

const App = {
  // State
  state: {
    activeTab: 'dashboard',
    bookmarks: JSON.parse(localStorage.getItem('ppsc_bookmarks') || '[]'),
    mistakes: JSON.parse(localStorage.getItem('ppsc_mistakes') || '[]'),
    
    // Active Exam / Practice Session
    exam: {
      inProgress: false,
      title: 'PPSC General Ability Full Mock Test',
      questions: [],
      currentIndex: 0,
      userAnswers: {}, // { [questionIndex]: selectedOption }
      flagged: {},     // { [questionIndex]: boolean }
      mode: 'exam',    // 'exam' (timed) | 'practice-instant' | 'practice-quiz'
      timeRemaining: 90 * 60, // seconds
      timerInterval: null,
      submitted: false,
      startTime: null
    },

    // Flashcards state
    flashcards: {
      items: [],
      currentIndex: 0,
      isFlipped: false
    }
  },

  init() {
    this.bindEvents();
    this.renderDashboard();
    this.renderQuestionBank();
    this.renderPastPapers();
    this.renderMistakes();
    this.initFlashcards();
    this.updateHeaderStats();
    
    // Pre-populate mock exam questions so it is ready immediately
    this.startFullMockExam(false); // false = silent start without switching tab
  },

  bindEvents() {
    // Navigation tab switching
    document.querySelectorAll('#mainNav .nav-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Question Bank Search & Filter
    const searchInput = document.getElementById('bankSearchInput');
    const subjectFilter = document.getElementById('bankSubjectFilter');
    const difficultyFilter = document.getElementById('bankDifficultyFilter');

    if (searchInput) searchInput.addEventListener('input', () => this.renderQuestionBank());
    if (subjectFilter) subjectFilter.addEventListener('change', () => this.renderQuestionBank());
    if (difficultyFilter) difficultyFilter.addEventListener('change', () => this.renderQuestionBank());

    // Past Papers Search & Filters
    const ppSearch = document.getElementById('pastPaperSearchInput');
    const ppDept = document.getElementById('pastPaperDeptFilter');
    const ppYear = document.getElementById('pastPaperYearFilter');
    const ppBps = document.getElementById('pastPaperBpsFilter');

    if (ppSearch) ppSearch.addEventListener('input', () => this.renderPastPapers());
    if (ppDept) ppDept.addEventListener('change', () => this.renderPastPapers());
    if (ppYear) ppYear.addEventListener('change', () => this.renderPastPapers());
    if (ppBps) ppBps.addEventListener('change', () => this.renderPastPapers());

    // Bookmarks badge click
    const bookmarkBadge = document.getElementById('userBookmarksBadge');
    if (bookmarkBadge) {
      bookmarkBadge.addEventListener('click', () => {
        this.switchTab('question-bank');
        const searchInput = document.getElementById('bankSearchInput');
        if (searchInput) searchInput.value = '';
        this.filterBookmarkedQuestions();
      });
    }
  },

  switchTab(tabId) {
    this.state.activeTab = tabId;

    // Update Nav
    document.querySelectorAll('#mainNav .nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Update Panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // If switching to mock exam and questions not loaded, start immediately
    if (tabId === 'mock-exam' && (!this.state.exam.questions || this.state.exam.questions.length === 0)) {
      this.startFullMockExam(true);
    }

    // Refresh context if needed
    if (tabId === 'mistake-book') this.renderMistakes();
    if (tabId === 'question-bank') this.renderQuestionBank();
  },

  updateHeaderStats() {
    const totalCountEl = document.getElementById('totalQuestionsCount');
    const savedCountEl = document.getElementById('savedCount');
    const dashTotalEl = document.getElementById('dashTotalMCQs');

    const total = typeof EXPANDED_PPSC_QUESTIONS !== 'undefined' ? EXPANDED_PPSC_QUESTIONS.length : 0;
    if (totalCountEl) totalCountEl.textContent = total;
    if (dashTotalEl) dashTotalEl.textContent = total + '+';
    if (savedCountEl) savedCountEl.textContent = this.state.bookmarks.length;
  },

  // Resilient subject matching helper
  matchesSubject(qSubj, targetSubj) {
    if (!targetSubj || targetSubj === 'All') return true;
    if (!qSubj) return false;
    const q = qSubj.toLowerCase().trim();
    const t = targetSubj.toLowerCase().trim();
    return q === t || q.includes(t) || t.includes(q);
  },

  // ==========================================
  // DASHBOARD & SUBJECTS
  // ==========================================
  renderDashboard() {
    const grid = document.getElementById('subjectsGrid');
    const practiceGrid = document.getElementById('practiceSubjectsQuickGrid');
    if (!grid || typeof PPSC_SYLLABUS === 'undefined') return;

    let html = '';
    let practiceHtml = '';

    PPSC_SYLLABUS.generalAbility.subjects.forEach(subj => {
      const qCount = EXPANDED_PPSC_QUESTIONS.filter(q => this.matchesSubject(q.subject, subj.name)).length;
      
      html += `
        <div class="subject-card" onclick="App.startSubjectDirect('${subj.name}')">
          <div class="subject-card-header">
            <div class="subject-badge-icon" style="background: ${subj.color}20; color: ${subj.color};">
              <i class="fa-solid ${subj.icon}"></i>
            </div>
            <span class="subject-weight-tag">${subj.weight} Weight</span>
          </div>
          <div class="subject-name">${subj.name}</div>
          <div class="subject-desc">${subj.topics[0]} & more...</div>
          <div class="subject-card-footer">
            <span><i class="fa-solid fa-layer-group"></i> ${qCount} Questions</span>
            <span style="color: var(--primary); font-weight: 600;">Practice <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
      `;

      practiceHtml += `
        <div class="subject-card" onclick="App.startSubjectDirect('${subj.name}')">
          <div class="subject-card-header">
            <div class="subject-badge-icon" style="background: ${subj.color}20; color: ${subj.color};">
              <i class="fa-solid ${subj.icon}"></i>
            </div>
            <span class="subject-weight-tag">${qCount} MCQs</span>
          </div>
          <div class="subject-name">${subj.name}</div>
          <div class="subject-card-footer" style="margin-top: 1rem;">
            <span style="color: var(--text-muted);">Launch Practice</span>
            <span style="color: var(--primary);"><i class="fa-solid fa-play"></i></span>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
    if (practiceGrid) practiceGrid.innerHTML = practiceHtml;
  },

  startSubjectDirect(subjectName) {
    const select = document.getElementById('practiceSubjectSelect');
    if (select) select.value = subjectName;
    const countSelect = document.getElementById('practiceCountSelect');
    if (countSelect) countSelect.value = "100";
    this.startSubjectPractice(subjectName, 100);
  },

  // ==========================================
  // PAST PAPERS DIRECTORY (245 SOLVED PAPERS)
  // ==========================================
  renderPastPapers() {
    const container = document.getElementById('pastPapersArchiveGrid');
    if (!container || !PPSC_SYLLABUS.pastPapersArchive) return;

    const search = (document.getElementById('pastPaperSearchInput')?.value || '').toLowerCase().trim();
    const dept = document.getElementById('pastPaperDeptFilter')?.value || 'All';
    const year = document.getElementById('pastPaperYearFilter')?.value || 'All';
    const bps = document.getElementById('pastPaperBpsFilter')?.value || 'All';

    let filtered = PPSC_SYLLABUS.pastPapersArchive.filter(p => {
      const matchDept = dept === 'All' || p.department.toLowerCase().includes(dept.toLowerCase()) || dept.toLowerCase().includes(p.department.toLowerCase());
      const matchYear = year === 'All' || String(p.year) === year;
      const matchBps = bps === 'All' || p.bps === bps;
      const matchSearch = !search || 
        p.title.toLowerCase().includes(search) || 
        p.department.toLowerCase().includes(search) ||
        (p.bps && p.bps.toLowerCase().includes(search));

      return matchDept && matchYear && matchBps && matchSearch;
    });

    const countBadge = document.getElementById('totalPastPapersCount');
    if (countBadge) countBadge.textContent = filtered.length;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color); color: var(--text-muted);">
          <i class="fa-solid fa-file-circle-xmark" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-dim);"></i>
          <h3>No matching past papers found</h3>
          <p style="font-size: 0.88rem; margin-top: 0.35rem;">Try adjusting your department or year filters.</p>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(paper => {
      html += `
        <div class="subject-card" onclick="App.startPastPaperExam('${paper.title.replace(/'/g, "\\'")}')">
          <div class="subject-card-header">
            <div class="subject-badge-icon" style="background: rgba(245, 158, 11, 0.15); color: var(--warning);">
              <i class="fa-solid fa-book-bookmark"></i>
            </div>
            <div style="display: flex; gap: 0.4rem;">
              <span class="subject-weight-tag" style="color: var(--warning); border-color: rgba(245,158,11,0.3); font-weight: 700;">${paper.year} Paper</span>
              <span class="subject-weight-tag" style="background: rgba(99, 102, 241, 0.15); color: #818CF8; border-color: rgba(99, 102, 241, 0.3);">${paper.bps || 'BS-16'}</span>
            </div>
          </div>
          <div class="subject-name" style="font-size: 1.05rem; font-weight: 700;">${paper.title}</div>
          <div class="subject-desc" style="font-size: 0.82rem; color: var(--text-muted);"><i class="fa-solid fa-building-columns" style="margin-right: 4px; color: var(--text-dim);"></i> ${paper.department}</div>
          <div class="subject-card-footer">
            <span><i class="fa-solid fa-list-check" style="color: var(--primary);"></i> ${paper.totalMCQs} Solved MCQs</span>
            <span style="color: var(--warning); font-weight: 700;">Launch Paper <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  startPastPaperExam(paperTitle) {
    const isPro = typeof PPSC_AUTH !== 'undefined' && PPSC_AUTH.state.isPro;
    const count = isPro ? 100 : 50;
    const questions = generateMockExam(count);
    
    if (!isPro) {
      this.showToast('Free Demo: 50 Questions loaded. Upgrade to Pro (Rs. 1,299) for full 100-MCQ solved paper.', 'info');
    }

    this.setupExamSession({
      title: `${paperTitle} ${!isPro ? '(50 MCQs Demo)' : ''}`,
      questions: questions,
      durationMinutes: isPro ? 90 : 45,
      mode: 'exam',
      switchTabNow: true
    });
  },

  // ==========================================
  // EXAM & PRACTICE ENGINE
  // ==========================================
  startFullMockExam(switchTabNow = true) {
    const isPro = typeof PPSC_AUTH !== 'undefined' && PPSC_AUTH.state.isPro;
    const count = isPro ? 100 : 50;
    const examQuestions = generateMockExam(count);

    if (!isPro && switchTabNow) {
      this.showToast('Free Demo: 50 Questions unlocked. Upgrade to Pro (Rs. 1,299) for full 100-MCQ Mock Exam.', 'info');
    }

    this.setupExamSession({
      title: isPro ? 'PPSC General Ability Full Mock Test (100 MCQs)' : 'PPSC General Ability Free Demo Test (50 MCQs)',
      questions: examQuestions,
      durationMinutes: isPro ? 90 : 45,
      mode: 'exam',
      switchTabNow: switchTabNow
    });
  },

  startSubjectPractice(selectedSubject = null, customCount = null) {
    const isPro = typeof PPSC_AUTH !== 'undefined' && PPSC_AUTH.state.isPro;
    const subject = selectedSubject || document.getElementById('practiceSubjectSelect')?.value || 'All';
    let requestedCount = customCount || parseInt(document.getElementById('practiceCountSelect')?.value, 10) || 100;
    
    // Strict 50 MCQs Demo limit for non-pro users
    let count = requestedCount;
    if (!isPro && count > 50) {
      count = 50;
      this.showToast('Free Demo limit: Practicing 50 MCQs. Unlock Pro (Rs. 1,299) for 100+ questions.', 'info');
    }

    const modeType = document.getElementById('practiceModeSelect')?.value || 'instant'; // 'instant' | 'quiz'

    let pool = getQuestionsBySubject(subject);
    if (pool.length === 0) pool = EXPANDED_PPSC_QUESTIONS;

    // Deep Fisher-Yates shuffle across pool
    const shuffled = [...pool]
      .sort(() => 0.5 - Math.random())
      .slice(0, count)
      .map((q, idx) => ({
        ...q,
        examQuestionId: idx + 1,
        options: [...q.options].sort(() => 0.5 - Math.random())
      }));

    this.setupExamSession({
      title: `${subject === 'All' ? 'Mixed Syllabus' : subject} Practice Session (${shuffled.length} MCQs${!isPro && requestedCount > 50 ? ' - Demo' : ''})`,
      questions: shuffled,
      durationMinutes: Math.ceil(shuffled.length * 0.9), // ~45 mins for 50 Qs, ~90 mins for 100 Qs
      mode: modeType === 'instant' ? 'practice-instant' : 'practice-quiz',
      switchTabNow: true
    });
  },

  setupExamSession({ title, questions, durationMinutes, mode, switchTabNow = true }) {
    if (this.state.exam.timerInterval) {
      clearInterval(this.state.exam.timerInterval);
    }

    this.state.exam = {
      inProgress: true,
      title: title,
      questions: questions,
      currentIndex: 0,
      userAnswers: {},
      flagged: {},
      mode: mode,
      timeRemaining: durationMinutes * 60,
      timerInterval: null,
      submitted: false,
      startTime: Date.now()
    };

    // Update UI
    const titleEl = document.getElementById('examTitle');
    const badgeEl = document.getElementById('examTotalBadge');
    if (titleEl) titleEl.textContent = title;
    if (badgeEl) badgeEl.textContent = `${questions.length} Questions`;
    
    // Show/hide immediate explain button
    const explainBtn = document.getElementById('examExplainBtn');
    if (explainBtn) {
      explainBtn.style.display = mode === 'practice-instant' ? 'inline-flex' : 'none';
    }

    this.renderExamPalette();
    this.renderCurrentExamQuestion();
    this.startExamTimer();
    
    if (switchTabNow) {
      this.switchTab('mock-exam');
      this.showToast(`Starting ${title}! Good luck.`, 'info');
    }
  },

  startExamTimer() {
    const timerText = document.getElementById('examTimerText');
    const timerBox = document.getElementById('examTimerBox');

    const updateDisplay = () => {
      const minutes = Math.floor(this.state.exam.timeRemaining / 60);
      const seconds = this.state.exam.timeRemaining % 60;
      timerText.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      if (this.state.exam.timeRemaining <= 300) {
        timerBox.classList.add('warning');
      } else {
        timerBox.classList.remove('warning');
      }

      if (this.state.exam.timeRemaining <= 0) {
        clearInterval(this.state.exam.timerInterval);
        this.submitExam(false);
      }
      this.state.exam.timeRemaining--;
    };

    updateDisplay();
    this.state.exam.timerInterval = setInterval(updateDisplay, 1000);
  },

  renderCurrentExamQuestion() {
    const { questions, currentIndex, userAnswers, mode, submitted } = this.state.exam;
    if (!questions || questions.length === 0) return;

    const q = questions[currentIndex];
    const isUrdu = /[\u0600-\u06FF]/.test(q.question);

    // Tags
    document.getElementById('examQSubject').textContent = q.subject;
    document.getElementById('examQCategory').textContent = q.category || 'General';
    document.getElementById('examQSource').textContent = q.paperSource || 'PPSC Past Paper';
    document.getElementById('examQDifficulty').textContent = q.difficulty || 'Medium';

    // Question Text
    const qTextEl = document.getElementById('examQText');
    qTextEl.textContent = `Q${currentIndex + 1}. ${q.question}`;
    if (isUrdu) {
      qTextEl.classList.add('urdu-font');
    } else {
      qTextEl.classList.remove('urdu-font');
    }

    // Bookmark Status
    const isBookmarked = this.state.bookmarks.some(b => b.id === q.id || b.question === q.question);
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    if (bookmarkBtn) {
      bookmarkBtn.innerHTML = isBookmarked 
        ? '<i class="fa-solid fa-bookmark" style="color: var(--accent);"></i> Saved' 
        : '<i class="fa-regular fa-bookmark"></i> Bookmark';
    }

    // Options
    const optContainer = document.getElementById('examOptionsContainer');
    let optsHtml = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, idx) => {
      const letter = letters[idx];
      const isSelected = userAnswers[currentIndex] === opt;
      let extraClass = isSelected ? 'selected' : '';

      // If in instant feedback mode and answered, or after exam submission, highlight correct/wrong
      if ((mode === 'practice-instant' && userAnswers[currentIndex]) || submitted) {
        if (opt === q.answer) {
          extraClass += ' correct';
        } else if (isSelected && opt !== q.answer) {
          extraClass += ' wrong';
        }
      }

      optsHtml += `
        <div class="option-item ${extraClass}" onclick="App.selectExamOption('${opt.replace(/'/g, "\\'")}')">
          <div class="opt-radio-bullet">${letter}</div>
          <div style="flex: 1; font-size: 0.98rem; ${/[\u0600-\u06FF]/.test(opt) ? 'direction: rtl; font-family: \'Noto Nastaliq Urdu\', serif;' : ''}">${opt}</div>
        </div>
      `;
    });
    optContainer.innerHTML = optsHtml;

    // Explanation Box
    const expBox = document.getElementById('examExplanationBox');
    const expText = document.getElementById('examExplanationText');
    if ((mode === 'practice-instant' && userAnswers[currentIndex]) || submitted) {
      expBox.classList.add('show');
      expText.textContent = q.explanation || `Correct Answer: ${q.answer}`;
    } else {
      expBox.classList.remove('show');
    }

    // Update Flag state
    const flagBtn = document.getElementById('examFlagBtn');
    if (flagBtn) {
      flagBtn.innerHTML = this.state.exam.flagged[currentIndex]
        ? '<i class="fa-solid fa-flag" style="color: var(--warning);"></i> Flagged'
        : '<i class="fa-regular fa-flag"></i> Flag for Review';
    }

    // Update Palette active state
    this.updatePaletteActiveItem();
  },

  selectExamOption(option) {
    if (this.state.exam.submitted) return;

    const { currentIndex, questions, mode } = this.state.exam;
    this.state.exam.userAnswers[currentIndex] = option;

    const q = questions[currentIndex];

    // Check if wrong, record to mistake book
    if (option !== q.answer) {
      this.recordMistake(q);
    }

    this.renderCurrentExamQuestion();
    this.renderExamPalette();
  },

  toggleImmediateExplanation() {
    const expBox = document.getElementById('examExplanationBox');
    const { questions, currentIndex } = this.state.exam;
    const q = questions[currentIndex];
    document.getElementById('examExplanationText').textContent = q.explanation || `Correct Answer: ${q.answer}`;
    expBox.classList.toggle('show');
  },

  prevExamQuestion() {
    if (this.state.exam.currentIndex > 0) {
      this.state.exam.currentIndex--;
      this.renderCurrentExamQuestion();
    }
  },

  nextExamQuestion() {
    if (this.state.exam.currentIndex < this.state.exam.questions.length - 1) {
      this.state.exam.currentIndex++;
      this.renderCurrentExamQuestion();
    }
  },

  jumpToExamQuestion(index) {
    this.state.exam.currentIndex = index;
    this.renderCurrentExamQuestion();
  },

  toggleFlagQuestion() {
    const idx = this.state.exam.currentIndex;
    this.state.exam.flagged[idx] = !this.state.exam.flagged[idx];
    this.renderCurrentExamQuestion();
    this.renderExamPalette();
  },

  renderExamPalette() {
    const grid = document.getElementById('examPaletteGrid');
    const countEl = document.getElementById('paletteAnsweredCount');
    const { questions, userAnswers, flagged, currentIndex } = this.state.exam;

    let answeredCount = Object.keys(userAnswers).length;
    if (countEl) countEl.textContent = `${answeredCount}/${questions.length} Answered`;

    let html = '';
    questions.forEach((_, idx) => {
      let cls = 'palette-btn';
      if (idx === currentIndex) cls += ' active';
      if (userAnswers[idx]) cls += ' answered';
      if (flagged[idx]) cls += ' flagged';

      html += `<button class="${cls}" onclick="App.jumpToExamQuestion(${idx})">${idx + 1}</button>`;
    });

    grid.innerHTML = html;
  },

  updatePaletteActiveItem() {
    const buttons = document.querySelectorAll('#examPaletteGrid .palette-btn');
    buttons.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === this.state.exam.currentIndex);
    });
  },

  submitExam(isManual = true) {
    if (isManual && !confirm("Are you sure you want to submit your exam?")) return;

    if (this.state.exam.timerInterval) {
      clearInterval(this.state.exam.timerInterval);
    }

    this.state.exam.submitted = true;

    // Calculate score with PPSC negative marking rules
    const { questions, userAnswers } = this.state.exam;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    questions.forEach((q, idx) => {
      const selected = userAnswers[idx];
      if (!selected) {
        skipped++;
      } else if (selected === q.answer) {
        correct++;
      } else {
        wrong++;
      }
    });

    // PPSC negative marking: +1 for correct, -0.25 for wrong
    const negativePenalty = wrong * 0.25;
    const finalScore = Math.max(0, (correct * 1.0) - negativePenalty);
    const accuracy = (correct + wrong > 0) ? Math.round((correct / (correct + wrong)) * 100) : 0;
    const timeSpentMins = Math.round((Date.now() - this.state.exam.startTime) / 60000);

    // Update Modal
    document.getElementById('modalExamSubtitle').textContent = this.state.exam.title;
    document.getElementById('modalFinalScore').textContent = finalScore.toFixed(2);
    document.getElementById('modalMaxScore').textContent = `/ ${questions.length} Marks`;
    document.getElementById('modalCorrectCount').textContent = correct;
    document.getElementById('modalWrongCount').textContent = wrong;
    document.getElementById('modalSkippedCount').textContent = skipped;
    document.getElementById('modalAccuracy').textContent = `${accuracy}%`;
    document.getElementById('modalNegativePenalty').textContent = `-${negativePenalty.toFixed(2)} marks`;
    document.getElementById('modalTimeTaken').textContent = `${timeSpentMins} mins`;

    const passBadge = document.getElementById('modalPassBadge');
    if (finalScore >= (questions.length * 0.40)) {
      passBadge.textContent = "PASSED (Qualified Target)";
      passBadge.style.color = "var(--primary)";
    } else {
      passBadge.textContent = "NEEDS IMPROVEMENT (< 40%)";
      passBadge.style.color = "var(--danger)";
    }

    // Open Modal
    document.getElementById('resultModal').classList.add('active');
    this.renderCurrentExamQuestion();
    this.renderExamPalette();
  },

  closeResultModal() {
    document.getElementById('resultModal').classList.remove('active');
  },

  // ==========================================
  // QUESTION BANK TAB
  // ==========================================
  stateBank: {
    page: 1,
    pageSize: 50
  },

  renderQuestionBank(resetPage = false) {
    const list = document.getElementById('qBankList');
    if (!list) return;

    if (resetPage) this.stateBank.page = 1;

    const search = (document.getElementById('bankSearchInput')?.value || '').toLowerCase().trim();
    const subject = document.getElementById('bankSubjectFilter')?.value || 'All';
    const difficulty = document.getElementById('bankDifficultyFilter')?.value || 'All';

    let filtered = EXPANDED_PPSC_QUESTIONS.filter(q => {
      const matchSubject = this.matchesSubject(q.subject, subject);
      const matchDiff = difficulty === 'All' || (q.difficulty && q.difficulty.toLowerCase() === difficulty.toLowerCase());
      const matchSearch = !search || 
        q.question.toLowerCase().includes(search) ||
        q.options.some(opt => opt.toLowerCase().includes(search)) ||
        (q.explanation && q.explanation.toLowerCase().includes(search)) ||
        (q.paperSource && q.paperSource.toLowerCase().includes(search));

      return matchSubject && matchDiff && matchSearch;
    });

    if (filtered.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color); color: var(--text-muted);">
          <i class="fa-solid fa-file-circle-xmark" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-dim);"></i>
          <h3>No matching questions found</h3>
          <p style="font-size: 0.88rem; margin-top: 0.35rem;">Try adjusting your search query or subject filters.</p>
        </div>
      `;
      return;
    }

    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / this.stateBank.pageSize);
    if (this.stateBank.page > totalPages) this.stateBank.page = totalPages;
    if (this.stateBank.page < 1) this.stateBank.page = 1;

    const startIndex = (this.stateBank.page - 1) * this.stateBank.pageSize;
    const paginatedItems = filtered.slice(startIndex, startIndex + this.stateBank.pageSize);

    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; color: var(--text-muted); font-size: 0.88rem;">
        <div>Showing <strong style="color: #fff;">${startIndex + 1}–${Math.min(startIndex + this.stateBank.pageSize, totalItems)}</strong> of <strong style="color: var(--primary);">${totalItems.toLocaleString()}</strong> questions</div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 0.8rem;" onclick="App.changeBankPage(-1)" ${this.stateBank.page === 1 ? 'disabled style="opacity:0.5;"' : ''}>
            <i class="fa-solid fa-chevron-left"></i> Prev
          </button>
          <span style="font-size: 0.82rem; font-weight: 600;">Page ${this.stateBank.page} / ${totalPages}</span>
          <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 0.8rem;" onclick="App.changeBankPage(1)" ${this.stateBank.page === totalPages ? 'disabled style="opacity:0.5;"' : ''}>
            Next <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    `;

    paginatedItems.forEach((q, idx) => {
      const globalIdx = startIndex + idx;
      const isUrdu = /[\u0600-\u06FF]/.test(q.question);
      const isBookmarked = this.state.bookmarks.some(b => b.id === q.id || b.question === q.question);

      html += `
        <div class="q-card-item">
          <div class="q-card-top">
            <div class="q-card-title ${isUrdu ? 'urdu-font' : ''}">
              <span style="color: var(--primary); font-family: 'Outfit'; font-weight: 700; margin-right: 6px;">#${globalIdx + 1}</span>
              ${q.question}
            </div>
            <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 0.75rem;" onclick="App.toggleBookmarkById('${q.id}')">
              <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark" style="color: ${isBookmarked ? 'var(--accent)' : 'inherit'};"></i>
            </button>
          </div>

          <div class="q-card-options-grid">
            ${q.options.map((opt, oIdx) => `
              <div class="q-card-opt ${opt === q.answer ? 'is-correct' : ''}">
                <strong>${['A', 'B', 'C', 'D'][oIdx]}.</strong> ${opt}
                ${opt === q.answer ? '<i class="fa-solid fa-circle-check" style="margin-left: 4px;"></i>' : ''}
              </div>
            `).join('')}
          </div>

          ${q.explanation ? `
            <div style="font-size: 0.85rem; color: #CBD5E1; background: rgba(255,255,255,0.02); padding: 0.75rem; border-radius: 6px; margin-bottom: 0.85rem;">
              <strong style="color: var(--primary);"><i class="fa-solid fa-lightbulb"></i> Note:</strong> ${q.explanation}
            </div>
          ` : ''}

          <div class="q-card-footer">
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span class="tag-badge subject">${q.subject}</span>
              <span class="tag-badge">${q.category || 'General'}</span>
            </div>
            <span style="color: var(--info);">${q.paperSource || 'PPSC Past Paper'}</span>
          </div>
        </div>
      `;
    });

    html += `
      <div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.5rem; align-items: center;">
        <button class="btn btn-secondary" onclick="App.changeBankPage(-1)" ${this.stateBank.page === 1 ? 'disabled style="opacity:0.5;"' : ''}>
          <i class="fa-solid fa-chevron-left"></i> Previous Page
        </button>
        <span style="font-size: 0.88rem; color: var(--text-muted);">Page <strong>${this.stateBank.page}</strong> of <strong>${totalPages}</strong></span>
        <button class="btn btn-primary" onclick="App.changeBankPage(1)" ${this.stateBank.page === totalPages ? 'disabled style="opacity:0.5;"' : ''}>
          Next Page <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    `;

    list.innerHTML = html;
  },

  changeBankPage(delta) {
    const isPro = typeof PPSC_AUTH !== 'undefined' && PPSC_AUTH.state.isPro;
    if (!isPro && this.stateBank.page + delta > 1) {
      if (typeof PPSC_AUTH !== 'undefined') PPSC_AUTH.openPaywallModal('bank');
      this.showToast('Free Demo limit (50 MCQs) reached. Unlock Pro (Rs. 1,299) to browse all 3,600+ questions!', 'danger');
      return;
    }
    this.stateBank.page += delta;
    this.renderQuestionBank(false);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  },

  filterBookmarkedQuestions() {
    const list = document.getElementById('qBankList');
    if (this.state.bookmarks.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); color: var(--text-muted);">
          <i class="fa-regular fa-bookmark" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--accent);"></i>
          <h3>No Bookmarks Saved Yet</h3>
          <p style="font-size: 0.88rem;">Click the bookmark icon on any MCQ to save it for quick revision.</p>
        </div>
      `;
      return;
    }

    let html = '';
    this.state.bookmarks.forEach((q, idx) => {
      html += `
        <div class="q-card-item">
          <div class="q-card-top">
            <div class="q-card-title">
              <span style="color: var(--primary); font-family: 'Outfit'; font-weight: 700; margin-right: 6px;">#${idx + 1}</span>
              ${q.question}
            </div>
            <button class="btn btn-danger" style="padding: 4px 10px; font-size: 0.75rem;" onclick="App.toggleBookmarkById('${q.id}')">
              <i class="fa-solid fa-trash"></i> Remove
            </button>
          </div>
          <div class="q-card-options-grid">
            ${q.options.map(opt => `
              <div class="q-card-opt ${opt === q.answer ? 'is-correct' : ''}">
                ${opt} ${opt === q.answer ? '✓' : ''}
              </div>
            `).join('')}
          </div>
          <div class="q-card-footer">
            <span class="tag-badge subject">${q.subject}</span>
            <span style="color: var(--info);">${q.paperSource || ''}</span>
          </div>
        </div>
      `;
    });
    list.innerHTML = html;
  },

  // ==========================================
  // BOOKMARKS & MISTAKES PERSISTENCE
  // ==========================================
  toggleCurrentBookmark() {
    const { questions, currentIndex } = this.state.exam;
    const q = questions[currentIndex];
    this.toggleBookmark(q);
    this.renderCurrentExamQuestion();
  },

  toggleBookmarkById(qId) {
    const q = EXPANDED_PPSC_QUESTIONS.find(item => item.id === qId);
    if (q) this.toggleBookmark(q);
    this.renderQuestionBank();
  },

  toggleBookmark(q) {
    const existsIdx = this.state.bookmarks.findIndex(b => b.id === q.id || b.question === q.question);
    if (existsIdx > -1) {
      this.state.bookmarks.splice(existsIdx, 1);
      this.showToast('Bookmark removed', 'info');
    } else {
      this.state.bookmarks.push(q);
      this.showToast('Question bookmarked successfully!', 'success');
    }
    localStorage.setItem('ppsc_bookmarks', JSON.stringify(this.state.bookmarks));
    this.updateHeaderStats();
  },

  recordMistake(q) {
    if (!this.state.mistakes.some(m => m.id === q.id || m.question === q.question)) {
      this.state.mistakes.unshift({
        ...q,
        timestamp: Date.now()
      });
      localStorage.setItem('ppsc_mistakes', JSON.stringify(this.state.mistakes));
    }
  },

  renderMistakes() {
    const list = document.getElementById('mistakesList');
    if (!list) return;

    if (this.state.mistakes.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color); color: var(--text-muted);">
          <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--primary);"></i>
          <h3>Your Mistake Book is Clean!</h3>
          <p style="font-size: 0.88rem; margin-top: 0.35rem;">Any questions you answer incorrectly during mock exams will appear here for targeted review.</p>
        </div>
      `;
      return;
    }

    let html = '';
    this.state.mistakes.forEach((q, idx) => {
      html += `
        <div class="q-card-item" style="border-left: 4px solid var(--danger);">
          <div class="q-card-top">
            <div class="q-card-title">
              <span style="color: var(--danger); font-weight: 700; margin-right: 6px;">#${idx + 1}</span>
              ${q.question}
            </div>
            <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 0.75rem;" onclick="App.removeMistake('${q.id}')">
              <i class="fa-solid fa-check"></i> Mastered
            </button>
          </div>
          <div class="q-card-options-grid">
            ${q.options.map(opt => `
              <div class="q-card-opt ${opt === q.answer ? 'is-correct' : ''}">
                ${opt} ${opt === q.answer ? '✓ (Correct)' : ''}
              </div>
            `).join('')}
          </div>
          <div style="font-size: 0.85rem; color: #CBD5E1; background: rgba(255,255,255,0.02); padding: 0.75rem; border-radius: 6px; margin-bottom: 0.85rem;">
            <strong style="color: var(--primary);"><i class="fa-solid fa-lightbulb"></i> Explanation:</strong> ${q.explanation || q.answer}
          </div>
          <div class="q-card-footer">
            <span class="tag-badge subject">${q.subject}</span>
            <span style="color: var(--danger);">Weak Point Identified</span>
          </div>
        </div>
      `;
    });

    list.innerHTML = html;
  },

  removeMistake(qId) {
    this.state.mistakes = this.state.mistakes.filter(m => m.id !== qId);
    localStorage.setItem('ppsc_mistakes', JSON.stringify(this.state.mistakes));
    this.renderMistakes();
    this.showToast('Marked as Mastered and removed from Mistake Book!', 'success');
  },

  clearMistakes() {
    if (confirm("Clear all questions from your Mistake Book?")) {
      this.state.mistakes = [];
      localStorage.setItem('ppsc_mistakes', '[]');
      this.renderMistakes();
      this.showToast('Mistake Book cleared!', 'info');
    }
  },

  // ==========================================
  // FLASHCARDS STUDIO
  // ==========================================
  initFlashcards() {
    this.state.flashcards.items = [...EXPANDED_PPSC_QUESTIONS].sort(() => 0.5 - Math.random());
    this.state.flashcards.currentIndex = 0;
    this.renderCurrentFlashcard();
  },

  renderCurrentFlashcard() {
    const { items, currentIndex } = this.state.flashcards;
    if (!items || items.length === 0) return;

    const card = items[currentIndex];
    const isUrdu = /[\u0600-\u06FF]/.test(card.question);

    document.getElementById('fcSubject').textContent = card.subject;
    document.getElementById('fcIndex').textContent = `Card ${currentIndex + 1} / ${items.length}`;
    
    const fcQ = document.getElementById('fcQuestion');
    fcQ.textContent = card.question;
    if (isUrdu) fcQ.classList.add('urdu-font');
    else fcQ.classList.remove('urdu-font');

    document.getElementById('fcPaperSource').textContent = card.paperSource || 'PPSC Past Paper';
    document.getElementById('fcAnswer').textContent = card.answer;
    document.getElementById('fcExplanation').textContent = card.explanation || `Subject: ${card.subject}`;

    // Reset flip
    const el = document.getElementById('flashcardElement');
    if (el) el.classList.remove('flipped');
  },

  flipFlashcard() {
    const el = document.getElementById('flashcardElement');
    if (el) el.classList.toggle('flipped');
  },

  nextFlashcard() {
    const isPro = typeof PPSC_AUTH !== 'undefined' && PPSC_AUTH.state.isPro;
    if (!isPro && this.state.flashcards.currentIndex >= 49) {
      if (typeof PPSC_AUTH !== 'undefined') PPSC_AUTH.openPaywallModal('flashcards');
      this.showToast('Free Demo limit (50 Flashcards) reached. Unlock Pro to browse all flashcards!', 'danger');
      return;
    }

    if (this.state.flashcards.currentIndex < this.state.flashcards.items.length - 1) {
      this.state.flashcards.currentIndex++;
    } else {
      this.state.flashcards.currentIndex = 0; // loop back
    }
    this.renderCurrentFlashcard();
  },

  prevFlashcard() {
    if (this.state.flashcards.currentIndex > 0) {
      this.state.flashcards.currentIndex--;
    } else {
      this.state.flashcards.currentIndex = this.state.flashcards.items.length - 1;
    }
    this.renderCurrentFlashcard();
  },

  // ==========================================
  // EXPORT TOOLS
  // ==========================================
  exportBank(format = 'json') {
    const isPro = typeof PPSC_AUTH !== 'undefined' && PPSC_AUTH.state.isPro;
    if (!isPro) {
      if (typeof PPSC_AUTH !== 'undefined') PPSC_AUTH.openPaywallModal('export');
      this.showToast('Exporting the complete 3,600+ question bank is reserved for Pro members.', 'danger');
      return;
    }

    const data = EXPANDED_PPSC_QUESTIONS;
    let fileContent = '';
    let fileName = `PPSC_Question_Bank_${Date.now()}.${format}`;
    let mimeType = 'text/plain';

    if (format === 'json') {
      fileContent = JSON.stringify(data, null, 2);
      mimeType = 'application/json';
    } else if (format === 'csv') {
      const headers = ['ID', 'Subject', 'Category', 'Question', 'Option A', 'Option B', 'Option C', 'Option D', 'Correct Answer', 'Explanation', 'Paper Source'];
      const rows = data.map(q => [
        `"${q.id}"`,
        `"${q.subject}"`,
        `"${q.category || ''}"`,
        `"${q.question.replace(/"/g, '""')}"`,
        `"${(q.options[0] || '').replace(/"/g, '""')}"`,
        `"${(q.options[1] || '').replace(/"/g, '""')}"`,
        `"${(q.options[2] || '').replace(/"/g, '""')}"`,
        `"${(q.options[3] || '').replace(/"/g, '""')}"`,
        `"${q.answer.replace(/"/g, '""')}"`,
        `"${(q.explanation || '').replace(/"/g, '""')}"`,
        `"${(q.paperSource || '').replace(/"/g, '""')}"`
      ]);
      fileContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
      mimeType = 'text/csv';
    }

    const blob = new Blob([fileContent], { type: mimeType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast(`Exported ${data.length} questions as ${format.toUpperCase()}`, 'success');
  },

  // Toast Notification
  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = 'fa-info-circle';
    let color = 'var(--info)';
    if (type === 'success') { icon = 'fa-circle-check'; color = 'var(--primary)'; }
    if (type === 'danger') { icon = 'fa-circle-exclamation'; color = 'var(--danger)'; }

    toast.innerHTML = `
      <i class="fa-solid ${icon}" style="color: ${color}; font-size: 1.1rem;"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  // Handle License Activation from Paywall Modal
  handleLicenseActivation() {
    const email = document.getElementById('licenseEmailInput')?.value || '';
    const key = document.getElementById('licenseKeyInput')?.value || '';

    if (typeof PPSC_AUTH !== 'undefined') {
      const result = PPSC_AUTH.activateLicense(email, key);
      if (result.success) {
        this.showToast(result.message, 'success');
        setTimeout(() => {
          PPSC_AUTH.closePaywallModal();
          this.renderQuestionBank();
          this.renderDashboard();
        }, 1200);
      } else {
        this.showToast(result.message, 'danger');
      }
    }
  }
};

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => App.init());
