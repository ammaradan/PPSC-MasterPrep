// PPSC Question Bank - General Knowledge & World Geography Module
const GK_QUESTIONS = [
  {
    id: "GK-001",
    subject: "General Knowledge",
    category: "International Organizations",
    question: "Where is the permanent headquarters of the United Nations (UN) located?",
    options: ["New York City, USA", "Geneva, Switzerland", "Vienna, Austria", "The Hague, Netherlands"],
    answer: "New York City, USA",
    explanation: "The UN Secretariat Headquarters is situated in Manhattan, New York City. The International Court of Justice (ICJ) is situated at The Hague, Netherlands.",
    paperSource: "PPSC PMS 2023",
    difficulty: "Easy"
  },
  {
    id: "GK-002",
    subject: "General Knowledge",
    category: "World Geography",
    question: "Which is the largest ocean in the world by both surface area and water volume?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
    explanation: "The Pacific Ocean covers more than 30% of the Earth's total surface, making it larger than all the Earth's land area combined.",
    paperSource: "PPSC Assistant S&GAD 2023",
    difficulty: "Easy"
  },
  {
    id: "GK-003",
    subject: "General Knowledge",
    category: "Straits & Waterways",
    question: "The Strait of Malacca connects which two major bodies of water?",
    options: [
      "Andaman Sea (Indian Ocean) and South China Sea (Pacific Ocean)",
      "Red Sea and Gulf of Aden",
      "Persian Gulf and Gulf of Oman",
      "Mediterranean Sea and Atlantic Ocean"
    ],
    answer: "Andaman Sea (Indian Ocean) and South China Sea (Pacific Ocean)",
    explanation: "The Strait of Malacca is one of the most vital shipping lanes in the world, running between the Malay Peninsula and the Indonesian island of Sumatra.",
    paperSource: "PPSC PMS GK 2021",
    difficulty: "Hard"
  },
  {
    id: "GK-004",
    subject: "General Knowledge",
    category: "Capitals & Currencies",
    question: "What is the capital city of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    answer: "Canberra",
    explanation: "Canberra was chosen as the capital in 1908 as a compromise between rival candidate cities Sydney and Melbourne.",
    paperSource: "PPSC Municipal Officer 2022",
    difficulty: "Easy"
  },
  {
    id: "GK-005",
    subject: "General Knowledge",
    category: "World Geography",
    question: "Which is the longest river in the world?",
    options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
    answer: "Nile River",
    explanation: "The River Nile is approximately 6,650 km (4,132 miles) long, flowing northward through northeastern Africa into the Mediterranean Sea.",
    paperSource: "PPSC Tehsildar 2020",
    difficulty: "Easy"
  },
  {
    id: "GK-006",
    subject: "General Knowledge",
    category: "International Treaties & Alliances",
    question: "The North Atlantic Treaty Organization (NATO) was established in which year, and where is its headquarters?",
    options: ["1949, Brussels (Belgium)", "1945, London (UK)", "1955, Paris (France)", "1948, Geneva (Switzerland)"],
    answer: "1949, Brussels (Belgium)",
    explanation: "NATO was formed by the North Atlantic Treaty signed in Washington on 4 April 1949. Its headquarters is located in Brussels, Belgium.",
    paperSource: "PPSC Assistant S&GAD 2024",
    difficulty: "Medium"
  },
  {
    id: "GK-007",
    subject: "General Knowledge",
    category: "Deserts & Peaks",
    question: "Which is the world's highest uninterrupted waterfall?",
    options: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
    answer: "Angel Falls",
    explanation: "Angel Falls (Salto Ángel) in Canaima National Park, Venezuela, has a total height of 979 meters (3,212 ft).",
    paperSource: "PPSC PMS GK 2022",
    difficulty: "Medium"
  },
  {
    id: "GK-008",
    subject: "General Knowledge",
    category: "World Geography",
    question: "Which is the largest landlocked country in the world by geographical area?",
    options: ["Kazakhstan", "Mongolia", "Chad", "Bolivia"],
    answer: "Kazakhstan",
    explanation: "Kazakhstan (approx 2.72 million sq km) in Central Asia is the world's largest landlocked country.",
    paperSource: "PPSC PMS GK 2023",
    difficulty: "Medium"
  },
  {
    id: "GK-009",
    subject: "General Knowledge",
    category: "Straits & Canals",
    question: "The Strait of Hormuz connects the Persian Gulf with:",
    options: ["Gulf of Oman", "Red Sea", "Arabian Sea", "Gulf of Aden"],
    answer: "Gulf of Oman",
    explanation: "The Strait of Hormuz lies between Oman and Iran and connects the Persian Gulf with the Gulf of Oman and the Arabian Sea (transporting roughly 20% of the world's petroleum).",
    paperSource: "PPSC Assistant 2023",
    difficulty: "Medium"
  },
  {
    id: "GK-010",
    subject: "General Knowledge",
    category: "Capitals & Currencies",
    question: "What is the official currency of Japan?",
    options: ["Yen", "Yuan", "Won", "Ringgit"],
    answer: "Yen",
    explanation: "The Japanese Yen (¥) is the official currency of Japan and the third most traded currency in the foreign exchange market.",
    paperSource: "PPSC Junior Clerk 2023",
    difficulty: "Easy"
  },
  {
    id: "GK-011",
    subject: "General Knowledge",
    category: "International Organizations",
    question: "Where is the headquarters of Transparency International located?",
    options: ["Berlin, Germany", "Geneva, Switzerland", "London, UK", "Paris, France"],
    answer: "Berlin, Germany",
    explanation: "Transparency International, which publishes the annual Corruption Perceptions Index (CPI), is headquartered in Berlin, Germany.",
    paperSource: "PPSC PMS GK 2022",
    difficulty: "Hard"
  },
  {
    id: "GK-012",
    subject: "General Knowledge",
    category: "World Geography",
    question: "Which country is famously known as the 'Land of the Midnight Sun'?",
    options: ["Norway", "Japan", "Finland", "Iceland"],
    answer: "Norway",
    explanation: "Norway is called the Land of the Midnight Sun because parts of the country lie north of the Arctic Circle where the sun does not set from late May to late July.",
    paperSource: "PPSC Sub-Inspector 2021",
    difficulty: "Easy"
  },
  {
    id: "GK-013",
    subject: "General Knowledge",
    category: "World History",
    question: "The French Revolution started in which year with the storming of the Bastille?",
    options: ["1789", "1776", "1804", "1815"],
    answer: "1789",
    explanation: "The French Revolution began on 14 July 1789 when revolutionaries stormed the Bastille fortress in Paris.",
    paperSource: "PPSC PMS 2021",
    difficulty: "Medium"
  },
  {
    id: "GK-014",
    subject: "General Knowledge",
    category: "Mountain Ranges",
    question: "The Andes, the longest continental mountain range in the world, is located in:",
    options: ["South America", "North America", "Asia", "Europe"],
    answer: "South America",
    explanation: "The Andes range spans about 7,000 km (4,350 miles) along the western coast of South America through seven countries.",
    paperSource: "PPSC Tehsildar 2023",
    difficulty: "Easy"
  },
  {
    id: "GK-015",
    subject: "General Knowledge",
    category: "International Boundaries",
    question: "The 38th Parallel north serves as the historic dividing line between:",
    options: ["North Korea and South Korea", "USA and Canada", "Egypt and Sudan", "Germany and Poland"],
    answer: "North Korea and South Korea",
    explanation: "The 38th parallel was chosen as the army boundary between the Soviet and American zones in Korea in August 1945.",
    paperSource: "PPSC PMS GK 2023",
    difficulty: "Medium"
  }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = GK_QUESTIONS; }
