// PPSC Question Bank - Pakistan Studies & History Module
const PAKISTAN_QUESTIONS = [
  {
    id: "PAK-001",
    subject: "Pakistan Studies",
    category: "Pre-Partition (1857-1947)",
    question: "Who was the founder of the 'Aligarh Movement' which revolutionized modern education for Muslims in the subcontinent?",
    options: ["Sir Syed Ahmad Khan", "Allama Muhammad Iqbal", "Nawab Waqar-ul-Mulk", "Maulana Muhammad Ali Johar"],
    answer: "Sir Syed Ahmad Khan",
    explanation: "Sir Syed Ahmad Khan founded the Aligarh Movement and established the Muhammadan Anglo-Oriental (MAO) College in 1875, which later became Aligarh Muslim University in 1920.",
    paperSource: "PPSC PMS General Knowledge 2022",
    difficulty: "Easy"
  },
  {
    id: "PAK-002",
    subject: "Pakistan Studies",
    category: "Pre-Partition (1857-1947)",
    question: "In which year was the All-India Muslim League officially founded at Dhaka?",
    options: ["1905", "1906", "1909", "1913"],
    answer: "1906",
    explanation: "The All-India Muslim League was established on 30 December 1906 in Dhaka during the annual All India Muhammadan Educational Conference, presided over by Nawab Viqar-ul-Mulk.",
    paperSource: "PPSC Assistant S&GAD 2023",
    difficulty: "Easy"
  },
  {
    id: "PAK-003",
    subject: "Pakistan Studies",
    category: "Pre-Partition (1857-1947)",
    question: "Who presented the historic Lahore Resolution on 23rd March 1940?",
    options: ["Quaid-e-Azam Muhammad Ali Jinnah", "A.K. Fazlul Huq", "Liaquat Ali Khan", "Chaudhry Khaliquzzaman"],
    answer: "A.K. Fazlul Huq",
    explanation: "The historic Lahore Resolution (later known as the Pakistan Resolution) was moved by the Premier of Bengal, A.K. Fazlul Huq (Sher-e-Bangla) on 23 March 1940 at Minto Park, Lahore.",
    paperSource: "PPSC Sub-Inspector Punjab Police 2021",
    difficulty: "Medium"
  },
  {
    id: "PAK-004",
    subject: "Pakistan Studies",
    category: "Post-Partition (1947-Present)",
    question: "Who was the first Governor-General and first Prime Minister of Pakistan respectively?",
    options: [
      "Quaid-e-Azam & Liaquat Ali Khan",
      "Khawaja Nazimuddin & Ghulam Muhammad",
      "Quaid-e-Azam & Khawaja Nazimuddin",
      "Iskander Mirza & Feroz Khan Noon"
    ],
    answer: "Quaid-e-Azam & Liaquat Ali Khan",
    explanation: "Quaid-e-Azam Muhammad Ali Jinnah took oath as the 1st Governor-General on 15 August 1947, and Nawabzada Liaquat Ali Khan was appointed the 1st Prime Minister of Pakistan.",
    paperSource: "PPSC Tehsildar 2020",
    difficulty: "Easy"
  },
  {
    id: "PAK-005",
    subject: "Pakistan Studies",
    category: "Constitutional History",
    question: "When was the first Constitution of Pakistan enacted and enforced?",
    options: ["23 March 1956", "14 August 1956", "8 June 1962", "14 August 1973"],
    answer: "23 March 1956",
    explanation: "The 1956 Constitution was promulgated on 23 March 1956, declaring Pakistan an Islamic Republic. It was abrogated by President Iskander Mirza on 7 October 1958.",
    paperSource: "PPSC Junior Clerk 2023",
    difficulty: "Medium"
  },
  {
    id: "PAK-006",
    subject: "Pakistan Studies",
    category: "Constitutional History",
    question: "The Objective Resolution was passed by the Constituent Assembly of Pakistan on which date?",
    options: ["12 March 1949", "23 March 1949", "14 August 1948", "25 December 1949"],
    answer: "12 March 1949",
    explanation: "The Objective Resolution was moved by Prime Minister Liaquat Ali Khan on 7 March 1949 and adopted by the Constituent Assembly on 12 March 1949.",
    paperSource: "PPSC Lecturer History 2021",
    difficulty: "Medium"
  },
  {
    id: "PAK-007",
    subject: "Pakistan Studies",
    category: "Geography of Pakistan",
    question: "Which is the highest mountain peak located in Pakistan?",
    options: ["K2 (Godwin-Austen)", "Nanga Parbat", "Gasherbrum I", "Broad Peak"],
    answer: "K2 (Godwin-Austen)",
    explanation: "K2 (8,611 meters / 28,251 ft), located in the Karakoram range of Gilgit-Baltistan, is the second highest peak in the world and the highest peak in Pakistan.",
    paperSource: "PPSC PMS GK 2023",
    difficulty: "Easy"
  },
  {
    id: "PAK-008",
    subject: "Pakistan Studies",
    category: "Geography of Pakistan",
    question: "The largest desert of Pakistan by area is:",
    options: ["Thar Desert", "Thal Desert", "Cholistan Desert", "Kharan Desert"],
    answer: "Thar Desert",
    explanation: "The Thar Desert, located in Sindh (and extending into Rajasthan, India), is the 17th largest desert in the world and the largest desert in Pakistan.",
    paperSource: "PPSC Assistant Director Wildlife 2022",
    difficulty: "Easy"
  },
  {
    id: "PAK-009",
    subject: "Pakistan Studies",
    category: "Awards & National Symbols",
    question: "Who was the youngest recipient of Pakistan's highest military award, Nishan-e-Haider?",
    options: ["Pilot Officer Rashid Minhas", "Major Raja Aziz Bhatti", "Captain Karnal Sher Khan", "Major Shabbir Sharif"],
    answer: "Pilot Officer Rashid Minhas",
    explanation: "Pilot Officer Rashid Minhas Shaheed was martyred on 20 August 1971 at the age of 20, making him the youngest recipient and the only PAF officer to receive the Nishan-e-Haider.",
    paperSource: "PPSC Sub-Inspector Police 2022",
    difficulty: "Medium"
  },
  {
    id: "PAK-010",
    subject: "Pakistan Studies",
    category: "Rivers & Dams",
    question: "The Tarbela Dam is constructed on which river in Pakistan?",
    options: ["Indus River", "Jhelum River", "Chenab River", "Kabul River"],
    answer: "Indus River",
    explanation: "Tarbela Dam, the largest earth-filled dam in the world, was constructed across the Indus River in Haripur/Swabi, Khyber Pakhtunkhwa, completed in 1976.",
    paperSource: "PPSC Assistant S&GAD 2024",
    difficulty: "Easy"
  },
  {
    id: "PAK-011",
    subject: "Pakistan Studies",
    category: "Pre-Partition (1857-1947)",
    question: "Who authored the famous pamphlet 'Now or Never; Are We to Live or Perish Forever' in 1933 where the name 'Pakistan' was proposed?",
    options: ["Chaudhry Rehmat Ali", "Sir Muhammad Iqbal", "Syed Ameer Ali", "Allama Mashriqi"],
    answer: "Chaudhry Rehmat Ali",
    explanation: "Chaudhry Rehmat Ali coined the word 'Pakistan' (Punjab, Afghania/KPK, Kashmir, Sindh, and BalochisTAN) in his pamphlet published on 28 January 1933.",
    paperSource: "PPSC PMS GK 2020",
    difficulty: "Easy"
  },
  {
    id: "PAK-012",
    subject: "Pakistan Studies",
    category: "Post-Partition (1947-Present)",
    question: "The Indus Waters Treaty was signed between Pakistan and India in 1960 under the mediation of which institution?",
    options: ["World Bank", "United Nations", "International Court of Justice", "Asian Development Bank"],
    answer: "World Bank",
    explanation: "The Indus Waters Treaty was signed on 19 September 1960 in Karachi by President Ayub Khan and Indian PM Jawaharlal Nehru with World Bank mediation.",
    paperSource: "PPSC Deputy Accountant 2023",
    difficulty: "Medium"
  },
  {
    id: "PAK-013",
    subject: "Pakistan Studies",
    category: "Geography",
    question: "Which mountain pass connects Pakistan with China via the Karakoram Highway?",
    options: ["Khunjerab Pass", "Khyber Pass", "Bolan Pass", "Tochi Pass"],
    answer: "Khunjerab Pass",
    explanation: "The Khunjerab Pass (height 4,693 meters) connects Gilgit-Baltistan with Xinjiang, China.",
    paperSource: "PPSC PMS 2022",
    difficulty: "Easy"
  },
  {
    id: "PAK-014",
    subject: "Pakistan Studies",
    category: "Pre-Partition",
    question: "Who gave the title of 'Ambassador of Hindu-Muslim Unity' to Quaid-e-Azam Muhammad Ali Jinnah?",
    options: ["Sarojini Naidu", "Gopal Krishna Gokhale", "Mahatma Gandhi", "Annie Besant"],
    answer: "Sarojini Naidu",
    explanation: "Sarojini Naidu gave this title to Quaid-e-Azam following his instrumental role in the Lucknow Pact of 1916.",
    paperSource: "PPSC Tehsildar 2021",
    difficulty: "Medium"
  },
  {
    id: "PAK-015",
    subject: "Pakistan Studies",
    category: "Geography",
    question: "The Salt Range in Punjab is located between which two rivers?",
    options: ["Jhelum and Indus", "Indus and Chenab", "Chenab and Ravi", "Ravi and Sutlej"],
    answer: "Jhelum and Indus",
    explanation: "The Salt Range is a hill system in the Punjab province extending from the Jhelum River to the Indus River, containing the world's second largest salt mine at Khewra.",
    paperSource: "PPSC Assistant 2023",
    difficulty: "Hard"
  },
  {
    id: "PAK-016",
    subject: "Pakistan Studies",
    category: "Constitutional History",
    question: "Under the 1973 Constitution, which amendment declared Ahmadis/Qadianis as non-Muslims?",
    options: ["2nd Constitutional Amendment", "1st Amendment", "4th Amendment", "8th Amendment"],
    answer: "2nd Constitutional Amendment",
    explanation: "The 2nd Amendment to the 1973 Constitution of Pakistan was passed on 7 September 1974, defining a non-Muslim and declaring Ahmadis non-Muslim.",
    paperSource: "PPSC Sub Inspector 2022",
    difficulty: "Medium"
  },
  {
    id: "PAK-017",
    subject: "Pakistan Studies",
    category: "National Heritage",
    question: "The ruins of the ancient Indus Valley Civilization city 'Mohenjo-daro' are located in which district of Sindh?",
    options: ["Larkana", "Thatta", "Sukkur", "Hyderabad"],
    answer: "Larkana",
    explanation: "Mohenjo-daro (Mound of the Dead) is situated on the right bank of the Indus River in Larkana District, Sindh, discovered in 1922 by R.D. Banerji.",
    paperSource: "PPSC PMS GK 2023",
    difficulty: "Easy"
  },
  {
    id: "PAK-018",
    subject: "Pakistan Studies",
    category: "Geography",
    question: "The boundary line between Pakistan and Afghanistan is officially known as:",
    options: ["Durand Line", "Radcliffe Line", "McMahon Line", "Line of Control"],
    answer: "Durand Line",
    explanation: "The Durand Line (approx 2,640 km long) was established in 1893 between Sir Mortimer Durand of British India and Afghan Amir Abdur Rahman Khan.",
    paperSource: "PPSC Assistant Director 2024",
    difficulty: "Easy"
  },
  {
    id: "PAK-019",
    subject: "Pakistan Studies",
    category: "National Symbols",
    question: "Who composed the music/tune of the National Anthem of Pakistan?",
    options: ["Ahmad Ghulamali Chagla", "Hafeez Jalandhari", "Master Ghulam Haider", "Mehdi Hassan"],
    answer: "Ahmad Ghulamali Chagla",
    explanation: "Ahmad G. Chagla composed the music in 1949, and Hafeez Jalandhari wrote the lyrics in 1952 (officially adopted in August 1954).",
    paperSource: "PPSC Junior Clerk 2023",
    difficulty: "Medium"
  },
  {
    id: "PAK-020",
    subject: "Pakistan Studies",
    category: "Post-Partition",
    question: "Pakistan conducted its first successful nuclear tests at Chagai (Balochistan) on which date?",
    options: ["28 May 1998", "23 March 1998", "6 September 1998", "14 August 1998"],
    answer: "28 May 1998",
    explanation: "Pakistan tested 5 nuclear devices at Ras Koh Hills, Chagai on 28 May 1998 (commemorated annually as Youm-e-Takbeer).",
    paperSource: "PPSC PMS 2021",
    difficulty: "Easy"
  }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = PAKISTAN_QUESTIONS; }
