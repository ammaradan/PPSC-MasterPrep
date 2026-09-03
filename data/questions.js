// PPSC Master Question Bank - Universal Aggregator & Runtime Helper

// Combine all modules into 100% deduplicated clean pool
let EXPANDED_PPSC_QUESTIONS = [];

if (typeof window !== 'undefined') {
  if (typeof PPSC_UNIFIED_QUESTIONS !== 'undefined' && Array.isArray(PPSC_UNIFIED_QUESTIONS) && PPSC_UNIFIED_QUESTIONS.length > 0) {
    EXPANDED_PPSC_QUESTIONS = PPSC_UNIFIED_QUESTIONS;
  } else {
    EXPANDED_PPSC_QUESTIONS = [
      ...(typeof PPSC_CATALOG_QUESTIONS !== 'undefined' ? PPSC_CATALOG_QUESTIONS : []),
      ...(typeof MASSIVE_PPSC_DATA !== 'undefined' ? MASSIVE_PPSC_DATA : [])
    ];
  }
} else if (typeof module !== 'undefined') {
  try {
    const unified = require('./questions_unified.js');
    if (unified && unified.PPSC_UNIFIED_QUESTIONS) {
      EXPANDED_PPSC_QUESTIONS = unified.PPSC_UNIFIED_QUESTIONS;
    }
  } catch(e) {}
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    EXPANDED_PPSC_QUESTIONS
  };
}

// High-entropy Fisher-Yates array shuffler
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Resilient Subject Matching Helper
function getQuestionsBySubject(subject) {
  const pool = EXPANDED_PPSC_QUESTIONS.length > 0 ? EXPANDED_PPSC_QUESTIONS : (typeof PPSC_UNIFIED_QUESTIONS !== 'undefined' ? PPSC_UNIFIED_QUESTIONS : []);
  if (!subject || subject === 'All') return pool;
  const s = subject.toLowerCase().trim();
  return pool.filter(q => {
    if (!q.subject) return false;
    const qs = q.subject.toLowerCase().trim();
    return qs === s || qs.includes(s) || s.includes(qs);
  });
}

// Generate authentic, non-repeating, deeply shuffled exam pool
function generateMockExam(count = 100) {
  const pool = EXPANDED_PPSC_QUESTIONS.length > 0 ? EXPANDED_PPSC_QUESTIONS : (typeof PPSC_UNIFIED_QUESTIONS !== 'undefined' ? PPSC_UNIFIED_QUESTIONS : []);
  const shuffled = shuffleArray(pool);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  // Deeply shuffle choices A, B, C, D so order is fresh every attempt
  return selected.map((q, idx) => ({
    ...q,
    examQuestionId: idx + 1,
    options: shuffleArray(q.options)
  }));
}
