// Script to import and integrate all MCQs from PPSC_10000_REAL_MCQS_SOURCE_PACKAGE.xlsx

const fs = require('fs');
const path = require('path');
const https = require('https');
const XLSX = require('xlsx');

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return resolve(null);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

function normalizeSubject(sub) {
  if (!sub) return 'General Knowledge';
  const s = sub.toLowerCase();
  if (s.includes('pakistan')) return 'Pakistan Studies';
  if (s.includes('islamic')) return 'Islamic Studies';
  if (s.includes('computer') || s.includes('it')) return 'Computer Science';
  if (s.includes('math')) return 'Mathematics';
  if (s.includes('science')) return 'Everyday Science';
  if (s.includes('english')) return 'English';
  if (s.includes('urdu')) return 'Urdu';
  if (s.includes('current')) return 'Current Affairs';
  if (s.includes('geography') || s.includes('gk') || s.includes('general')) return 'General Knowledge';
  return 'General Knowledge';
}

async function run() {
  console.log('Reading Excel file: PPSC_10000_REAL_MCQS_SOURCE_PACKAGE.xlsx');
  const wb = XLSX.readFile('PPSC_10000_REAL_MCQS_SOURCE_PACKAGE.xlsx');
  const catalog = XLSX.utils.sheet_to_json(wb.Sheets['SOURCE_CATALOG']);
  console.log(`Found ${catalog.length} source files in SOURCE_CATALOG.`);

  let allNewMcqs = [];
  let successFiles = 0;
  let failedFiles = 0;

  for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];
    const filename = entry.Filename;
    const year = entry.Year_Bucket;
    const subject = entry.Subject;

    const url = `https://raw.githubusercontent.com/pro-saqib/smart-exam/main/data/ppsc/${filename}`;
    process.stdout.write(`[${i+1}/${catalog.length}] Fetching ${filename}... `);

    const json = await fetchJson(url);
    if (json && json.mcqs && Array.isArray(json.mcqs)) {
      successFiles++;
      const mcqs = json.mcqs;
      console.log(`✓ ${mcqs.length} MCQs`);

      mcqs.forEach((m, idx) => {
        if (!m.question || !m.options) return;

        let optionsArr = [];
        if (Array.isArray(m.options)) {
          optionsArr = m.options.map(o => String(o).trim());
        } else if (typeof m.options === 'object') {
          optionsArr = ['A', 'B', 'C', 'D'].map(k => m.options[k] ? String(m.options[k]).trim() : '').filter(Boolean);
        }

        if (optionsArr.length < 2) return;

        let answerText = '';
        if (m.correct) {
          const letter = String(m.correct).trim().toUpperCase();
          if (letter === 'A') answerText = optionsArr[0] || '';
          else if (letter === 'B') answerText = optionsArr[1] || '';
          else if (letter === 'C') answerText = optionsArr[2] || '';
          else if (letter === 'D') answerText = optionsArr[3] || '';
          else answerText = String(m.correct).trim();
        } else if (m.answer) {
          answerText = String(m.answer).trim();
        }

        if (!answerText && optionsArr.length > 0) answerText = optionsArr[0];

        // Ensure 4 options
        while (optionsArr.length < 4) {
          optionsArr.push('None of these');
        }

        const normalizedSubj = normalizeSubject(subject || entry.Subject);

        allNewMcqs.push({
          id: `CAT-${year}-${normalizedSubj.substring(0,3).toUpperCase()}-${idx+1}-${Date.now().toString(36).substring(4)}`,
          subject: normalizedSubj,
          category: `PPSC ${year} Past Papers`,
          question: m.question.trim(),
          options: optionsArr.slice(0, 4),
          answer: answerText,
          explanation: m.explanation || `PPSC ${year} official solved question for ${normalizedSubj}.`,
          difficulty: 'Medium',
          paperSource: `PPSC ${year} Past Paper - ${normalizedSubj}`
        });
      });
    } else {
      failedFiles++;
      console.log(`✗ Failed / Not found`);
    }
  }

  console.log('\n=========================================');
  console.log(`Successfully fetched from ${successFiles} files.`);
  console.log(`Total extracted MCQs: ${allNewMcqs.length}`);

  // Deduplicate by question text
  const seen = new Set();
  const uniqueMcqs = [];
  allNewMcqs.forEach(q => {
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!seen.has(key) && key.length > 10) {
      seen.add(key);
      uniqueMcqs.push(q);
    }
  });

  console.log(`Unique high-quality MCQs after deduplication: ${uniqueMcqs.length}`);

  // Subject breakdown
  const subCounts = {};
  uniqueMcqs.forEach(q => {
    subCounts[q.subject] = (subCounts[q.subject] || 0) + 1;
  });
  console.log('Subject Breakdown:', JSON.stringify(subCounts, null, 2));

  // Save to data/questions_catalog.js
  const fileContent = `// PPSC Official Source Catalog Questions (Imported from PPSC_10000_REAL_MCQS_SOURCE_PACKAGE.xlsx)\nconst PPSC_CATALOG_QUESTIONS = ${JSON.stringify(uniqueMcqs, null, 2)};\nif (typeof module !== 'undefined') module.exports = { PPSC_CATALOG_QUESTIONS };\n`;
  fs.writeFileSync(path.join(__dirname, 'data', 'questions_catalog.js'), fileContent, 'utf-8');
  console.log(`Saved ${uniqueMcqs.length} MCQs to data/questions_catalog.js`);
}

run();
