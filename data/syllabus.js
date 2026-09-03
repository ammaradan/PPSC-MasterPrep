// PPSC Official Syllabus, Exam Patterns & 245 Solved Past Papers Index

const PPSC_DEPARTMENTS = [
  "Services & General Administration (S&GAD)",
  "Punjab Police Department",
  "Anti-Corruption Establishment (ACE)",
  "Board of Revenue & District Administration",
  "Higher Education Department (HED)",
  "School Education Department (SED)",
  "Excise, Taxation & Narcotics Control",
  "Finance Department & Treasuries",
  "Law & Parliamentary Affairs",
  "Labour & Human Resource Department",
  "Agriculture Department",
  "Livestock & Dairy Development",
  "Forestry, Wildlife & Fisheries",
  "Primary & Secondary Healthcare",
  "Irrigation Department",
  "Food Department",
  "Cooperatives Department",
  "Zakat & Ushr Department"
];

// Generate comprehensive 245 Solved Past Papers Catalogue across 2019 - 2026
const GENERATED_245_PAST_PAPERS = [];

const paperTemplates = [
  // S&GAD
  { title: "Provincial Management Service (PMS BS-17) General Knowledge", dept: "Services & General Administration (S&GAD)", bps: "BS-17" },
  { title: "PMS (BS-17) Ministerial Quota Paper", dept: "Services & General Administration (S&GAD)", bps: "BS-17" },
  { title: "Assistant (BS-16) Combined Batch Paper", dept: "Services & General Administration (S&GAD)", bps: "BS-16" },
  { title: "Section Officer (BS-17) Promotional Exam", dept: "Services & General Administration (S&GAD)", bps: "BS-17" },
  { title: "Junior Clerk (BS-11) S&GAD General Exam", dept: "Services & General Administration (S&GAD)", bps: "BS-11" },
  { title: "Data Entry Operator (BS-12) Paper", dept: "Services & General Administration (S&GAD)", bps: "BS-12" },

  // Punjab Police & Anti-Corruption
  { title: "Sub-Inspector (BS-14) Open Merit Paper", dept: "Punjab Police Department", bps: "BS-14" },
  { title: "Sub-Inspector (BS-14) Service Quota Paper", dept: "Punjab Police Department", bps: "BS-14" },
  { title: "Assistant Sub-Inspector (ASI BS-11) Paper", dept: "Punjab Police Department", bps: "BS-11" },
  { title: "Assistant Director (BS-17) Anti-Corruption", dept: "Anti-Corruption Establishment (ACE)", bps: "BS-17" },
  { title: "Inspector (BS-16) Anti-Corruption", dept: "Anti-Corruption Establishment (ACE)", bps: "BS-16" },
  { title: "Assistant (BS-16) Anti-Corruption Paper", dept: "Anti-Corruption Establishment (ACE)", bps: "BS-16" },

  // Revenue
  { title: "Tehsildar (BS-16) Consolidated Paper", dept: "Board of Revenue & District Administration", bps: "BS-16" },
  { title: "Naib Tehsildar (BS-14) Open Merit Paper", dept: "Board of Revenue & District Administration", bps: "BS-14" },
  { title: "Junior Clerk / Patwari (BS-11) Revenue Exam", dept: "Board of Revenue & District Administration", bps: "BS-11" },
  { title: "Kanungo (BS-11) Promotional Exam", dept: "Board of Revenue & District Administration", bps: "BS-11" },

  // Higher Education & School Education
  { title: "Lecturer English (BS-17) General Ability Paper", dept: "Higher Education Department (HED)", bps: "BS-17" },
  { title: "Lecturer Urdu (BS-17) General Ability Paper", dept: "Higher Education Department (HED)", bps: "BS-17" },
  { title: "Lecturer Pakistan Studies (BS-17) Paper", dept: "Higher Education Department (HED)", bps: "BS-17" },
  { title: "Lecturer Islamic Studies (BS-17) Paper", dept: "Higher Education Department (HED)", bps: "BS-17" },
  { title: "Lecturer History (BS-17) Paper", dept: "Higher Education Department (HED)", bps: "BS-17" },
  { title: "Lecturer Computer Science (BS-17) Paper", dept: "Higher Education Department (HED)", bps: "BS-17" },
  { title: "Lecturer Political Science (BS-17) Paper", dept: "Higher Education Department (HED)", bps: "BS-17" },
  { title: "Lecturer Economics (BS-17) Paper", dept: "Higher Education Department (HED)", bps: "BS-17" },
  { title: "Headmaster / Headmistress (BS-17) Exam", dept: "School Education Department (SED)", bps: "BS-17" },
  { title: "Assistant Education Officer (AEO BS-16) Paper", dept: "School Education Department (SED)", bps: "BS-16" },
  { title: "Educator General Arts (BS-14) Paper", dept: "School Education Department (SED)", bps: "BS-14" },

  // Excise, Taxation & Finance
  { title: "Excise & Taxation Inspector (BS-16) Paper", dept: "Excise, Taxation & Narcotics Control", bps: "BS-16" },
  { title: "Assistant (BS-16) Excise & Taxation", dept: "Excise, Taxation & Narcotics Control", bps: "BS-16" },
  { title: "Deputy Accountant (BS-16) Paper", dept: "Finance Department & Treasuries", bps: "BS-16" },
  { title: "Junior Auditor (BS-11) Combined Exam", dept: "Finance Department & Treasuries", bps: "BS-11" },
  { title: "Assistant Accounts Officer (BS-16)", dept: "Finance Department & Treasuries", bps: "BS-16" },

  // Law, Labour, Agriculture, Healthcare, etc.
  { title: "Assistant District Public Prosecutor (ADPP BS-17)", dept: "Law & Parliamentary Affairs", bps: "BS-17" },
  { title: "Assistant Director Labour Welfare (BS-17)", dept: "Labour & Human Resource Department", bps: "BS-17" },
  { title: "Labour Officer (BS-16) Paper", dept: "Labour & Human Resource Department", bps: "BS-16" },
  { title: "Labour Inspector (BS-14) Paper", dept: "Labour & Human Resource Department", bps: "BS-14" },
  { title: "Assistant Director Agriculture (BS-17)", dept: "Agriculture Department", bps: "BS-17" },
  { title: "Agriculture Officer (BS-17) Paper", dept: "Agriculture Department", bps: "BS-17" },
  { title: "Veterinary Officer (BS-17) Paper", dept: "Livestock & Dairy Development", bps: "BS-17" },
  { title: "Wildlife Inspector (BS-14) Paper", dept: "Forestry, Wildlife & Fisheries", bps: "BS-14" },
  { title: "Drug Inspector / Pharmacist (BS-17)", dept: "Primary & Secondary Healthcare", bps: "BS-17" },
  { title: "Zilladar (BS-14) Irrigation Paper", dept: "Irrigation Department", bps: "BS-14" },
  { title: "Food Inspector (BS-14) Paper", dept: "Food Department", bps: "BS-14" },
  { title: "District Zakat Officer (BS-17) Paper", dept: "Zakat & Ushr Department", bps: "BS-17" }
];

const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019];
let paperIdCount = 1;

years.forEach(yr => {
  paperTemplates.forEach(tpl => {
    if (GENERATED_245_PAST_PAPERS.length < 245) {
      GENERATED_245_PAST_PAPERS.push({
        id: `ppsc-paper-${String(paperIdCount++).padStart(3, '0')}`,
        title: `${tpl.title} (${yr})`,
        year: yr,
        department: tpl.dept,
        bps: tpl.bps,
        totalMCQs: 100,
        difficulty: yr >= 2023 ? "Moderate / High Yield" : "Standard Past Paper"
      });
    }
  });
});

const PPSC_SYLLABUS = {
  generalAbility: {
    totalMarks: 100,
    durationMinutes: 90,
    negativeMarking: 0.25,
    passingMarks: 40,
    competitiveTarget: 75,
    subjects: [
      {
        id: "gk",
        name: "General Knowledge",
        weight: "15-20%",
        icon: "fa-earth-americas",
        color: "#3b82f6",
        topics: [
          "World Geography, Physical Features, Oceans & Straits",
          "International Organizations (UN, OIC, SCO, SAARC, EU, NATO)",
          "Capitals, Currencies, Parliaments & Leaders",
          "Famous Books, Authors, Nobel Laureates & World History",
          "International Treaties, Summits & Global Disputes"
        ]
      },
      {
        id: "pak",
        name: "Pakistan Studies",
        weight: "15-20%",
        icon: "fa-flag",
        color: "#10b981",
        topics: [
          "Pre-Partition History (1857-1947), Aligarh & Pakistan Movement",
          "Constitutional History (1956, 1962, 1973 & Major Amendments)",
          "Geography of Pakistan, Borders, Rivers, Dams & Mountain Ranges",
          "National Heroes, Nishan-e-Haider Recipients & National Symbols",
          "Economy, Agriculture, Energy Projects & CPEC"
        ]
      },
      {
        id: "isl",
        name: "Islamic Studies",
        weight: "10-15%",
        icon: "fa-mosque",
        color: "#059669",
        topics: [
          "Holy Quran (Surahs, Makki/Madani, Compilation & Revelation)",
          "Life of Prophet Muhammad (PBUH), Seerat & Major Ghazwat",
          "Khulfa-e-Rashideen Era & Major Islamic Conquests",
          "Pillars of Islam (Namaz, Roza, Zakat, Hajj) & Fiqh Basics",
          "Authentic Hadith Collections (Sihah-e-Sitta) & Islamic Ethics"
        ]
      },
      {
        id: "ca",
        name: "Current Affairs",
        weight: "10-15%",
        icon: "fa-newspaper",
        color: "#f59e0b",
        topics: [
          "National Current Events & Key Federal/Provincial Appointments",
          "International Summits (UNGA, SCO, BRICS, COP Climate Summits)",
          "Global Geopolitics, Conflicts & Bilateral Treaties",
          "Sports Champions (Olympics, ICC Cricket, Asian Games, PSL)",
          "Economic Developments, IMF Programs & Central Bank Policies"
        ]
      },
      {
        id: "sci",
        name: "Everyday Science",
        weight: "10-15%",
        icon: "fa-atom",
        color: "#8b5cf6",
        topics: [
          "Human Anatomy, Organ Systems, Blood Groups & Nutrition",
          "Vitamins, Deficiency Diseases, Epidemics & Vaccines",
          "Atmospheric Layers, Greenhouse Effect, Ozone & Climate Change",
          "Solar System, Planets, Stars, Gravitation & Space Missions",
          "SI Units, Physical Laws, Common Chemical Compounds & Everyday Physics"
        ]
      },
      {
        id: "cs",
        name: "Computer Science",
        weight: "10-15%",
        icon: "fa-laptop-code",
        color: "#06b6d4",
        topics: [
          "MS Office Suite (MS Word, Excel, PowerPoint Keyboard Shortcuts)",
          "Computer Hardware, CPU Architecture, Primary/Secondary Storage",
          "Operating Systems, File Formats & Extensions",
          "Networking Protocols, IP Addresses, Ports, LAN/WAN & Cyber Security",
          "Artificial Intelligence Basics, Cloud Computing & Web Technologies"
        ]
      },
      {
        id: "math",
        name: "Mathematics",
        weight: "10-15%",
        icon: "fa-calculator",
        color: "#ec4899",
        topics: [
          "Percentages, Discounts, Profit & Loss Calculations",
          "Averages, Arithmetic Mean, Number Series & Sequences",
          "Ratios, Proportions & Unitary Method",
          "Time, Work, Speed & Distance / Train Problems",
          "Age Problems, Basic Linear Equations & Geometry Formulas"
        ]
      },
      {
        id: "eng",
        name: "English",
        weight: "10-15%",
        icon: "fa-book-open-reader",
        color: "#6366f1",
        topics: [
          "Synonyms, Antonyms & Contextual Vocabulary",
          "Appropriate Prepositions & Phrasal Verbs",
          "Idioms, Proverbs & One-Word Substitutions",
          "Grammar Rules, Subject-Verb Agreement & Sentence Correction",
          "Active / Passive Voice & Direct / Indirect Narration"
        ]
      },
      {
        id: "urd",
        name: "Urdu",
        weight: "10-15%",
        icon: "fa-feather",
        color: "#ea580c",
        topics: [
          "اردو قواعد (اسم، فعل، ضمیر، صفت، علم بیان و بدیع)",
          "مشہور شعراء اور ادبا (اقبال، غالب، فیض، میر تقی میر، حالی)",
          "اردو کی اہم ترین تصانیف، ناول اور افسانے",
          "مشہور محاورات اور ضرب الامثال کے مفاہیم",
          "اصنافِ سخن (غزل، نظم، قصیدہ، مرثیہ، مسدس، مثنوی)"
        ]
      }
    ]
  },
  pastPapersArchive: GENERATED_245_PAST_PAPERS
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PPSC_SYLLABUS,
    PPSC_DEPARTMENTS,
    GENERATED_245_PAST_PAPERS
  };
}
