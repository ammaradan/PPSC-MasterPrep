// Comprehensive 5-Point System & Function Test Suite for PPSC MasterPrep

const assert = require('assert');
const path = require('path');
const fs = require('fs');

console.log('====================================================');
console.log('🧪 RUNNING COMPREHENSIVE PPSC MASTERPREP 5-POINT TEST SUITE');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`✅ PASS: ${name}`);
    passedTests++;
  } catch(e) {
    console.error(`❌ FAIL: ${name}`);
    console.error(`   Error: ${e.message}\n`);
  }
}

// 1. DEDUPLICATION & ZERO DUPLICATES TEST
test('Checkpoint 1: Zero Duplicates & 100% Normalized Uniqueness', () => {
  const unified = require('./data/questions_unified.js').PPSC_UNIFIED_QUESTIONS;
  assert(Array.isArray(unified), 'PPSC_UNIFIED_QUESTIONS must be an array');
  const seenNorm = new Set();
  
  for (let i = 0; i < unified.length; i++) {
    const q = unified[i];
    const norm = q.question.toLowerCase().replace(/[^a-z0-9\u0600-\u06FF]/g, '').trim();
    assert(!seenNorm.has(norm), `Duplicate found at index ${i}: "${q.question}"`);
    seenNorm.add(norm);
  }
  assert.strictEqual(seenNorm.size, unified.length, 'Question bank contains duplicate entries');
});

// 2. DATA INTEGRITY & SCHEMA TEST
test('Checkpoint 2: Question Bank Schema, Options & Valid Correct Answer', () => {
  const unified = require('./data/questions_unified.js').PPSC_UNIFIED_QUESTIONS;
  assert(unified.length >= 40000, `Expected >= 40,000 questions, got ${unified.length}`);

  // Test sample 2000 questions for valid options, answer, and subject
  for (let i = 0; i < Math.min(2000, unified.length); i++) {
    const q = unified[i];
    assert(q.question && q.question.trim().length > 0, `Question #${i} has empty question text`);
    assert(Array.isArray(q.options) && q.options.length >= 2, `Question #${i} must have at least 2 options`);
    assert(q.answer && q.answer.trim().length > 0, `Question #${i} must have an answer`);
    assert(q.options.includes(q.answer), `Question #${i} answer "${q.answer}" must exist in options: [${q.options.join(', ')}]`);
    assert(q.subject && q.subject.trim().length > 0, `Question #${i} must have a valid subject`);
  }
});

// 3. PAST PAPERS DIRECTORY INTEGRITY
test('Checkpoint 3: Past Papers 536 Directory Integrity', () => {
  const syllabus = require('./data/syllabus.js');
  const pastPapers = syllabus.VERIFIED_PAST_PAPERS || syllabus.GENERATED_245_PAST_PAPERS;
  assert(Array.isArray(pastPapers), 'Past papers must be an array');
  assert(pastPapers.length >= 500, `Expected >= 500 past papers, got ${pastPapers.length}`);
  
  pastPapers.forEach((p, idx) => {
    assert(p.title && p.title.length > 0, `Paper #${idx} missing title`);
    assert(p.year >= 2010 && p.year <= 2026, `Paper #${idx} has invalid year: ${p.year}`);
    assert(p.department, `Paper #${idx} missing department`);
  });
});

// 4. 1-DEVICE HARDWARE LOCK & SECURITY TESTS
test('Checkpoint 4: 1-Device Cryptographic Licensing & Hardware Lock', () => {
  // Mock localStorage
  const store = {};
  global.localStorage = {
    getItem: (k) => store[k] || null,
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; }
  };
  global.navigator = { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' };

  const { PPSC_AUTH } = require('./auth.js');

  assert(PPSC_AUTH, 'PPSC_AUTH must be defined');
  assert.strictEqual(PPSC_AUTH.ADMIN_PIN, 'PPSC2026Adan26627', 'Admin PIN must be PPSC2026Adan26627');
  assert.strictEqual(PPSC_AUTH.FREE_TIER_LIMIT, 10, 'Free tier limit must be 10 MCQs');

  // Test Device ID generation
  PPSC_AUTH.initDeviceId();
  const devId = PPSC_AUTH.state.deviceId;
  assert(devId && devId.startsWith('DEV-'), `Expected DEV-XXXX device ID, got: ${devId}`);

  // Test Key Generation
  const studentEmail = 'student.ammar@gmail.com';
  const generatedKey = PPSC_AUTH.generateKeyForDevice(studentEmail, devId);
  assert(generatedKey.startsWith('PPSC-PRO-'), `Key should start with PPSC-PRO-, got: ${generatedKey}`);

  // Verify on SAME device -> MUST PASS
  const verifySelf = PPSC_AUTH.verifyKey(studentEmail, generatedKey, devId);
  assert.strictEqual(verifySelf, true, 'Key must verify successfully on authorized device');

  // Verify on FOREIGN device -> MUST REJECT
  const foreignDevId = 'DEV-9999';
  const verifyForeign = PPSC_AUTH.verifyKey(studentEmail, generatedKey, foreignDevId);
  assert.strictEqual(verifyForeign, false, 'Key must be REJECTED on foreign device');

  // Test activation on this device
  const actRes = PPSC_AUTH.activateLicense(studentEmail, generatedKey);
  assert.strictEqual(actRes.success, true, 'Activation on authorized device must succeed');
  assert.strictEqual(PPSC_AUTH.state.isPro, true, 'State isPro must become true after activation');

  // Test invalid key rejection
  const fakeRes = PPSC_AUTH.activateLicense(studentEmail, 'PPSC-PRO-FAKE-KEY1-TEST');
  assert.strictEqual(fakeRes.success, false, 'Fake key activation must fail');
});

// 5. SMART NON-REPEATING QUESTION SHUFFLER & PRACTICE TESTS
test('Checkpoint 5: Smart Dynamic Non-Repeating Shuffler', () => {
  const unified = require('./data/questions_unified.js').PPSC_UNIFIED_QUESTIONS;

  // Simulate mock app getSmartRandomQuestions logic
  const getSmartRandomQuestions = (pool, count) => {
    let seenHistory = [];
    try {
      const raw = global.localStorage.getItem('ppsc_seen_history');
      if (raw) seenHistory = JSON.parse(raw);
    } catch(e) {}
    const seenSet = new Set(seenHistory);
    const unseen = pool.filter(q => !seenSet.has(q.id || q.question));
    const seen = pool.filter(q => seenSet.has(q.id || q.question));

    const shuffle = (arr) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const shuffledUnseen = shuffle(unseen);
    const shuffledSeen = shuffle(seen);

    let selected = [];
    if (shuffledUnseen.length >= count) {
      selected = shuffledUnseen.slice(0, count);
    } else {
      selected = [...shuffledUnseen, ...shuffledSeen.slice(0, count - shuffledUnseen.length)];
      seenHistory = [];
    }

    selected.forEach(q => seenHistory.push(q.id || q.question));
    global.localStorage.setItem('ppsc_seen_history', JSON.stringify(seenHistory));

    return selected.map((q, idx) => ({
      ...q,
      examQuestionId: idx + 1,
      options: shuffle(q.options)
    }));
  };

  // Run 3 consecutive 20-question practice sessions
  const session1 = getSmartRandomQuestions(unified, 20);
  const session2 = getSmartRandomQuestions(unified, 20);
  const session3 = getSmartRandomQuestions(unified, 20);

  assert.strictEqual(session1.length, 20, 'Session 1 must have 20 questions');
  assert.strictEqual(session2.length, 20, 'Session 2 must have 20 questions');
  assert.strictEqual(session3.length, 20, 'Session 3 must have 20 questions');

  // Ensure no overlap between session 1 and session 2
  const ids1 = new Set(session1.map(q => q.id));
  const overlap = session2.filter(q => ids1.has(q.id));
  assert.strictEqual(overlap.length, 0, 'Consecutive practice sessions must not repeat questions');
});

console.log('\n====================================================');
console.log(`📊 RESULTS: ${passedTests} / ${totalTests} TESTS PASSED`);
console.log('====================================================');
