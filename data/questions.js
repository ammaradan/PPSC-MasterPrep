// PPSC Master Question Bank - Universal Aggregator & Runtime Helper

// Combine all modules
let EXPANDED_PPSC_QUESTIONS = [];

if (typeof window !== 'undefined') {
  EXPANDED_PPSC_QUESTIONS = [
    ...(typeof MASSIVE_PPSC_DATA !== 'undefined' && Array.isArray(MASSIVE_PPSC_DATA) ? MASSIVE_PPSC_DATA : []),
    ...(typeof PAKISTAN_QUESTIONS !== 'undefined' ? PAKISTAN_QUESTIONS : []),
    ...(typeof ISLAMIC_QUESTIONS !== 'undefined' ? ISLAMIC_QUESTIONS : []),
    ...(typeof GK_QUESTIONS !== 'undefined' ? GK_QUESTIONS : []),
    ...(typeof SCIENCE_QUESTIONS !== 'undefined' ? SCIENCE_QUESTIONS : []),
    ...(typeof COMPUTER_QUESTIONS !== 'undefined' ? COMPUTER_QUESTIONS : []),
    ...(typeof MATH_QUESTIONS !== 'undefined' ? MATH_QUESTIONS : []),
    ...(typeof ENGLISH_QUESTIONS !== 'undefined' ? ENGLISH_QUESTIONS : []),
    ...(typeof URDU_QUESTIONS !== 'undefined' ? URDU_QUESTIONS : []),
    ...(typeof CURRENT_AFFAIRS_QUESTIONS !== 'undefined' ? CURRENT_AFFAIRS_QUESTIONS : [])
  ];
} else if (typeof module !== 'undefined') {
  try {
    const massive = require('./questions_massive.js');
    EXPANDED_PPSC_QUESTIONS = Array.isArray(massive) ? massive : [];
  } catch(e) {}
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    EXPANDED_PPSC_QUESTIONS
  };
}

// Resilient Subject Matching Helper
function getQuestionsBySubject(subject) {
  if (!subject || subject === 'All') return EXPANDED_PPSC_QUESTIONS;
  const s = subject.toLowerCase().trim();
  return EXPANDED_PPSC_QUESTIONS.filter(q => {
    if (!q.subject) return false;
    const qs = q.subject.toLowerCase().trim();
    return qs === s || qs.includes(s) || s.includes(qs);
  });
}

// Generate authentic full 100-question or custom-length mock exam pool
function generateMockExam(count = 100) {
  const pool = [...EXPANDED_PPSC_QUESTIONS];
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  
  if (count <= shuffled.length) {
    return shuffled.slice(0, count).map((q, idx) => ({ ...q, examQuestionId: idx + 1 }));
  }

  const exam = [];
  while (exam.length < count) {
    const item = shuffled[exam.length % shuffled.length];
    exam.push({
      ...item,
      examQuestionId: exam.length + 1
    });
  }
  return exam;
}
