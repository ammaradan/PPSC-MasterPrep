// PPSC Question Bank - Basic Mathematics & Quantitative Ability Module
const MATH_QUESTIONS = [
  {
    id: "MATH-001",
    subject: "Mathematics",
    category: "Percentages",
    question: "If an item costing Rs. 800 is sold with a 15% discount, what is the selling price of the item?",
    options: ["Rs. 680", "Rs. 720", "Rs. 700", "Rs. 650"],
    answer: "Rs. 680",
    explanation: "Discount = 15% of 800 = (15/100) * 800 = Rs. 120. Selling Price = Rs. 800 - Rs. 120 = Rs. 680.",
    paperSource: "PPSC Deputy Accountant 2023",
    difficulty: "Easy"
  },
  {
    id: "MATH-002",
    subject: "Mathematics",
    category: "Averages & Series",
    question: "The average of 5 consecutive numbers is 27. What is the largest of these 5 numbers?",
    options: ["29", "28", "30", "31"],
    answer: "29",
    explanation: "For 5 consecutive numbers, the average is the middle number (3rd number = 27). The series is 25, 26, 27, 28, 29. Thus, the largest number is 29.",
    paperSource: "PPSC PMS General Ability 2022",
    difficulty: "Medium"
  },
  {
    id: "MATH-003",
    subject: "Mathematics",
    category: "Ratios & Proportions",
    question: "If A:B = 2:3 and B:C = 4:5, what is the combined ratio A:B:C?",
    options: ["8:12:15", "6:12:15", "8:10:15", "2:4:5"],
    answer: "8:12:15",
    explanation: "Make B common: Multiply first ratio by 4 (A:B = 8:12) and second ratio by 3 (B:C = 12:15). Therefore, A:B:C = 8:12:15.",
    paperSource: "PPSC Tehsildar 2021",
    difficulty: "Medium"
  },
  {
    id: "MATH-004",
    subject: "Mathematics",
    category: "Time, Speed & Distance",
    question: "A train traveling at a constant speed of 72 km/h crosses a 200m long platform in 20 seconds. What is the length of the train?",
    options: ["200 meters", "180 meters", "220 meters", "250 meters"],
    answer: "200 meters",
    explanation: "Speed in m/s = 72 * (5/18) = 20 m/s. Total distance covered in 20s = 20 * 20 = 400 meters. Length of train = Total distance - Platform length = 400 - 200 = 200 meters.",
    paperSource: "PPSC Sub-Inspector Police 2023",
    difficulty: "Hard"
  },
  {
    id: "MATH-005",
    subject: "Mathematics",
    category: "Age Problems",
    question: "A father is currently 3 times as old as his son. In 12 years, he will be twice as old as his son. What is the father's present age?",
    options: ["36 years", "30 years", "42 years", "45 years"],
    answer: "36 years",
    explanation: "Let son = x, father = 3x. (3x + 12) = 2(x + 12) => 3x + 12 = 2x + 24 => x = 12. Father's age = 3 * 12 = 36 years.",
    paperSource: "PPSC PMS 2020",
    difficulty: "Medium"
  },
  {
    id: "MATH-006",
    subject: "Mathematics",
    category: "Profit & Loss",
    question: "A merchant buys a book for Rs. 450 and sells it for Rs. 540. What is his percentage profit?",
    options: ["20%", "15%", "25%", "18%"],
    answer: "20%",
    explanation: "Profit = 540 - 450 = Rs. 90. Profit % = (90 / 450) * 100 = 20%.",
    paperSource: "PPSC PMS 2021",
    difficulty: "Easy"
  },
  {
    id: "MATH-007",
    subject: "Mathematics",
    category: "Work & Time",
    question: "If 6 workers can construct a wall in 10 days, how many days will 15 workers take to build the same wall at the same rate?",
    options: ["4 days", "5 days", "3 days", "6 days"],
    answer: "4 days",
    explanation: "Total Work = 6 * 10 = 60 person-days. Time = 60 / 15 = 4 days.",
    paperSource: "PPSC Tehsildar 2022",
    difficulty: "Medium"
  },
  {
    id: "MATH-008",
    subject: "Mathematics",
    category: "Number Series",
    question: "Find the next number in the sequence: 2, 6, 12, 20, 30, ___?",
    options: ["42", "40", "44", "38"],
    answer: "42",
    explanation: "Differences are +4, +6, +8, +10, +12. 30 + 12 = 42 (or n*(n+1): 1*2, 2*3, 3*4, 4*5, 5*6, 6*7=42).",
    paperSource: "PPSC PMS General Ability 2023",
    difficulty: "Medium"
  },
  {
    id: "MATH-009",
    subject: "Mathematics",
    category: "Geometry",
    question: "What is the area of a circle with a radius of 7 cm (take π = 22/7)?",
    options: ["154 cm²", "144 cm²", "168 cm²", "132 cm²"],
    answer: "154 cm²",
    explanation: "Area = π * r² = (22/7) * 7 * 7 = 22 * 7 = 154 cm².",
    paperSource: "PPSC Junior Clerk 2023",
    difficulty: "Easy"
  },
  {
    id: "MATH-010",
    subject: "Mathematics",
    category: "Simple Interest",
    question: "What is the simple interest on a principal amount of Rs. 5,000 at an annual rate of 6% for 3 years?",
    options: ["Rs. 900", "Rs. 850", "Rs. 1,000", "Rs. 750"],
    answer: "Rs. 900",
    explanation: "Simple Interest = (P * R * T) / 100 = (5000 * 6 * 3) / 100 = Rs. 900.",
    paperSource: "PPSC Deputy Accountant 2024",
    difficulty: "Easy"
  }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = MATH_QUESTIONS; }
