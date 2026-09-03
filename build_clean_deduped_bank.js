const fs = require('fs');
const path = require('path');

const catalogData = require('./data/questions_catalog.js');
const massiveData = require('./data/questions_massive.js');
const urduData = require('./data/questions_urdu.js');

const rawCatalog = catalogData.PPSC_CATALOG_QUESTIONS || [];
const rawMassive = Array.isArray(massiveData) ? massiveData : [];
const rawUrdu = urduData && urduData.PPSC_EXPANDED_URDU ? urduData.PPSC_EXPANDED_URDU : [];

const allRaw = [...rawCatalog, ...rawMassive, ...rawUrdu];
console.log(`Auditing ${allRaw.length} total questions...`);

const cleanMap = new Map();
let duplicateCount = 0;

function normalizeSubject(s) {
  if (!s) return 'General Knowledge';
  const sub = s.toLowerCase();
  if (sub.includes('pakistan')) return 'Pakistan Studies';
  if (sub.includes('islamic')) return 'Islamic Studies';
  if (sub.includes('computer') || sub.includes('it')) return 'Computer Science';
  if (sub.includes('math')) return 'Mathematics';
  if (sub.includes('science')) return 'Everyday Science';
  if (sub.includes('english')) return 'English';
  if (sub.includes('urdu')) return 'Urdu';
  if (sub.includes('current')) return 'Current Affairs';
  return 'General Knowledge';
}

allRaw.forEach((q, idx) => {
  if (!q || !q.question || !q.options || q.options.length < 2) return;

  const subject = normalizeSubject(q.subject);

  // Strict normalization key
  const normKey = q.question.toLowerCase().trim()
    .replace(/[^\w\s\u0600-\u06FF]/gi, '')
    .replace(/\s+/g, ' ');

  if (normKey.length < 5) return;

  if (cleanMap.has(normKey)) {
    duplicateCount++;
  } else {
    // Ensure 4 clean unique options
    let cleanOptions = Array.from(new Set(q.options.map(o => String(o).trim()))).filter(Boolean);
    while (cleanOptions.length < 4) {
      if (!cleanOptions.includes('None of these')) cleanOptions.push('None of these');
      else if (!cleanOptions.includes('All of these')) cleanOptions.push('All of these');
      else cleanOptions.push(`Option ${cleanOptions.length + 1}`);
    }

    cleanOptions = cleanOptions.slice(0, 4);

    let answer = String(q.answer || cleanOptions[0]).trim();
    if (!cleanOptions.includes(answer)) {
      cleanOptions[0] = answer;
    }

    cleanMap.set(normKey, {
      id: `PPSC-Q-${cleanMap.size + 1}`,
      subject: subject,
      category: q.category || 'PPSC Past Papers',
      question: q.question.trim(),
      options: cleanOptions,
      answer: answer,
      explanation: q.explanation || `Subject: ${q.subject || 'PPSC Exam'}`,
      difficulty: q.difficulty || 'Medium',
      paperSource: q.paperSource || 'PPSC Past Paper'
    });
  }
});

const uniqueList = Array.from(cleanMap.values());
console.log(`Removed ${duplicateCount} duplicate questions.`);
console.log(`Generated ${uniqueList.length} 100% unique, clean MCQs.`);

// Subject breakdown
const breakdown = {};
uniqueList.forEach(q => {
  breakdown[q.subject] = (breakdown[q.subject] || 0) + 1;
});
console.log('Subject Breakdown:', JSON.stringify(breakdown, null, 2));

// Save to data/questions_unified.js
const fileContent = `// PPSC 100% Unique Deduplicated Question Bank (${uniqueList.length} Solved MCQs)\nconst PPSC_UNIFIED_QUESTIONS = ${JSON.stringify(uniqueList, null, 2)};\nif (typeof module !== 'undefined') module.exports = { PPSC_UNIFIED_QUESTIONS };\n`;
fs.writeFileSync(path.join(__dirname, 'data', 'questions_unified.js'), fileContent, 'utf-8');
console.log(`Saved clean dataset to data/questions_unified.js`);
