// PPSC Question Bank - Islamic Studies (Islamiyat) Module
const ISLAMIC_QUESTIONS = [
  {
    id: "ISL-001",
    subject: "Islamic Studies",
    category: "Quran & Tafseer",
    question: "Which Surah of the Holy Quran is known as the 'Heart of the Quran' (Qalb al-Quran)?",
    options: ["Surah Yasin", "Surah Al-Rahman", "Surah Al-Mulk", "Surah Al-Baqarah"],
    answer: "Surah Yasin",
    explanation: "Surah Yasin (36th Surah of the Quran) is famously referred to as the Heart of the Quran in authentic Ahadith.",
    paperSource: "PPSC PMS GK 2023",
    difficulty: "Easy"
  },
  {
    id: "ISL-002",
    subject: "Islamic Studies",
    category: "Quran & Tafseer",
    question: "Which Surah of the Holy Quran contains 'Bismillah-ir-Rahman-ir-Rahim' twice?",
    options: ["Surah Al-Naml", "Surah Al-Tawbah", "Surah Al-Fatiha", "Surah Al-Kahf"],
    answer: "Surah Al-Naml",
    explanation: "Surah Al-Naml (Chapter 27) contains Bismillah twice: at the beginning and in verse 30 (letter of Prophet Solomon to Queen Bilqis). Conversely, Surah At-Tawbah does not start with Bismillah.",
    paperSource: "PPSC Tehsildar 2021",
    difficulty: "Easy"
  },
  {
    id: "ISL-003",
    subject: "Islamic Studies",
    category: "Battles / Ghazwat",
    question: "The first decisive battle of Islam, Ghazwa-e-Badr, was fought in which Hijri year?",
    options: ["2 A.H.", "3 A.H.", "5 A.H.", "8 A.H."],
    answer: "2 A.H.",
    explanation: "Ghazwa-e-Badr was fought on 17 Ramadan 2 A.H. (624 CE). The Muslim army comprised 313 Sahaba, defeating a Quraish army of over 1,000 soldiers.",
    paperSource: "PPSC Assistant Police Department 2022",
    difficulty: "Easy"
  },
  {
    id: "ISL-004",
    subject: "Islamic Studies",
    category: "Khulfa-e-Rashideen",
    question: "During whose Caliphate was the official compilation of the Holy Quran in a single book (Mushaf) finalized and sent to Islamic provinces?",
    options: ["Hazrat Usman Ghani (R.A)", "Hazrat Abu Bakr Siddique (R.A)", "Hazrat Umar Farooq (R.A)", "Hazrat Ali ibn Abi Talib (R.A)"],
    answer: "Hazrat Usman Ghani (R.A)",
    explanation: "While Hazrat Abu Bakr (R.A) first collected the Quranic manuscripts after the Battle of Yamama, Hazrat Usman (R.A) standardized the standardized Quranic dialect (Quraishi recitation) and dispatched authentic copies, earning the title 'Jami-ul-Quran'.",
    paperSource: "PPSC Lecturer Islamic Studies 2020",
    difficulty: "Medium"
  },
  {
    id: "ISL-005",
    subject: "Islamic Studies",
    category: "Prophets / Ambiya",
    question: "Which Prophet of Allah was bestowed with the title 'Khaleel-ullah' (Friend of Allah)?",
    options: ["Hazrat Ibrahim (A.S)", "Hazrat Musa (A.S)", "Hazrat Isa (A.S)", "Hazrat Ismail (A.S)"],
    answer: "Hazrat Ibrahim (A.S)",
    explanation: "Hazrat Ibrahim (A.S) was bestowed the title of Khaleel-ullah. Hazrat Musa (A.S) is Kalim-ullah, Hazrat Isa (A.S) is Ruh-ullah, and Hazrat Ismail (A.S) is Zabih-ullah.",
    paperSource: "PPSC Junior Clerk 2023",
    difficulty: "Easy"
  },
  {
    id: "ISL-006",
    subject: "Islamic Studies",
    category: "Pillars of Islam",
    question: "Zakat was made obligatory (Farz) upon Muslims in which year of Hijra?",
    options: ["2 A.H.", "3 A.H.", "5 A.H.", "9 A.H."],
    answer: "2 A.H.",
    explanation: "Zakat and Roza (fasting in Ramadan) were both ordained as obligatory pillars of Islam in the 2nd year of Hijra (2 A.H.).",
    paperSource: "PPSC District Zakat Officer 2019",
    difficulty: "Medium"
  },
  {
    id: "ISL-007",
    subject: "Islamic Studies",
    category: "Islamic History",
    question: "The Treaty of Hudaibiyah was written by which noble Companion of the Holy Prophet (PBUH)?",
    options: ["Hazrat Ali ibn Abi Talib (R.A)", "Hazrat Zaid bin Thabit (R.A)", "Hazrat Usman (R.A)", "Hazrat Khalid bin Waleed (R.A)"],
    answer: "Hazrat Ali ibn Abi Talib (R.A)",
    explanation: "The peace treaty of Sulh al-Hudaibiyyah (6 A.H.) was penned down by Hazrat Ali ibn Abi Talib (R.A) under the dictation of Prophet Muhammad (PBUH).",
    paperSource: "PPSC Sub Inspector Service Quota 2022",
    difficulty: "Medium"
  },
  {
    id: "ISL-008",
    subject: "Islamic Studies",
    category: "Hadith Literature",
    question: "How many authentic books of Hadith are included in 'Sihah-e-Sitta'?",
    options: ["6", "4", "5", "8"],
    answer: "6",
    explanation: "Sihah-e-Sitta (The Authentic Six) are: Sahih Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami al-Tirmidhi, Sunan al-Nasa'i, and Sunan Ibn Majah.",
    paperSource: "PPSC PMS GK 2024",
    difficulty: "Easy"
  },
  {
    id: "ISL-009",
    subject: "Islamic Studies",
    category: "Prophets",
    question: "Which Prophet of Allah is known as 'Abu-al-Bashar' (Father of Humanity)?",
    options: ["Hazrat Adam (A.S)", "Hazrat Nuh (A.S)", "Hazrat Ibrahim (A.S)", "Hazrat Shees (A.S)"],
    answer: "Hazrat Adam (A.S)",
    explanation: "Hazrat Adam (A.S) was the first human created by Allah, hence known as Abu-al-Bashar.",
    paperSource: "PPSC PMS GK 2021",
    difficulty: "Easy"
  },
  {
    id: "ISL-010",
    subject: "Islamic Studies",
    category: "Quran",
    question: "How many Manzils and Surahs are there in the Holy Quran?",
    options: ["7 Manzils & 114 Surahs", "14 Manzils & 112 Surahs", "30 Manzils & 114 Surahs", "7 Manzils & 120 Surahs"],
    answer: "7 Manzils & 114 Surahs",
    explanation: "The Quran contains 7 Manzils, 30 Paras (Juz), 114 Surahs (86 Makki, 28 Madani), and 6,236 Verses.",
    paperSource: "PPSC Junior Clerk 2023",
    difficulty: "Easy"
  },
  {
    id: "ISL-011",
    subject: "Islamic Studies",
    category: "Battles",
    question: "In which battle was Hazrat Khalid bin Waleed (R.A) bestowed the title 'Saifullah' (Sword of Allah)?",
    options: ["Battle of Mu'tah", "Battle of Yarmouk", "Battle of Uhud", "Battle of Hunain"],
    answer: "Battle of Mu'tah",
    explanation: "In the Battle of Mu'tah (8 A.H.), after three commanders were martyred, Hazrat Khalid bin Waleed took the command, broke nine swords, and saved the Muslim army, earning the title Saifullah from the Prophet (PBUH).",
    paperSource: "PPSC PMS 2022",
    difficulty: "Medium"
  },
  {
    id: "ISL-012",
    subject: "Islamic Studies",
    category: "Fiqh & Worship",
    question: "How many Takbeers are recited in Namaz-e-Janaza (Funeral Prayer)?",
    options: ["4 Takbeers", "3 Takbeers", "5 Takbeers", "6 Takbeers"],
    answer: "4 Takbeers",
    explanation: "Namaz-e-Janaza consists of four Takbeers (Sana/Fatiha, Durood-e-Ibrahim, Janaza Dua, and Tasleem/Salam) without any Ruku or Sajdah.",
    paperSource: "PPSC Assistant 2023",
    difficulty: "Easy"
  },
  {
    id: "ISL-013",
    subject: "Islamic Studies",
    category: "Hajj & Umrah",
    question: "What is the primary obligatory act (Rukn-e-Azam) of Hajj performed on the 9th of Dhul-Hijjah?",
    options: ["Waquf-e-Arafat", "Tawaf-e-Ziyarat", "Rami al-Jamarat", "Sa'i between Safa and Marwa"],
    answer: "Waquf-e-Arafat",
    explanation: "Prophet Muhammad (PBUH) said 'Al-Hajj Arafah' (Hajj is staying at the plain of Arafat on the 9th of Dhul-Hijjah).",
    paperSource: "PPSC Tehsildar 2022",
    difficulty: "Easy"
  },
  {
    id: "ISL-014",
    subject: "Islamic Studies",
    category: "Quran",
    question: "The longest Surah and the shortest Surah in the Holy Quran are respectively:",
    options: ["Surah Al-Baqarah & Surah Al-Kawthar", "Surah Al-Imran & Surah Al-Ikhlas", "Surah Al-Nisa & Surah Al-Nas", "Surah Al-Baqarah & Surah Al-Asr"],
    answer: "Surah Al-Baqarah & Surah Al-Kawthar",
    explanation: "Surah Al-Baqarah has 286 verses (longest), while Surah Al-Kawthar contains only 3 verses (shortest).",
    paperSource: "PPSC Sub-Inspector 2021",
    difficulty: "Easy"
  },
  {
    id: "ISL-015",
    subject: "Islamic Studies",
    category: "Seerat-un-Nabi",
    question: "The historic Charter of Medina (Misaq-e-Madina) was formulated in which year?",
    options: ["1 A.H. (622 CE)", "2 A.H. (623 CE)", "3 A.H. (624 CE)", "5 A.H. (626 CE)"],
    answer: "1 A.H. (622 CE)",
    explanation: "Misaq-e-Madina, considered the first written constitution in human history, was drawn up by Prophet Muhammad (PBUH) in 1 A.H.",
    paperSource: "PPSC PMS 2023",
    difficulty: "Medium"
  }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = ISLAMIC_QUESTIONS; }
