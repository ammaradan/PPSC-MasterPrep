// PPSC Question Bank - Computer Science & Information Technology Module
const COMPUTER_QUESTIONS = [
  {
    id: "CS-001",
    subject: "Computer Science",
    category: "MS Office Shortcuts",
    question: "In Microsoft Word and Excel, what is the shortcut key to open the 'Find and Replace' dialog box?",
    options: ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + G"],
    answer: "Ctrl + H",
    explanation: "Ctrl + H opens Find and Replace. Ctrl + F opens Find, and Ctrl + G opens the Go To dialog.",
    paperSource: "PPSC Computer Operator 2023",
    difficulty: "Easy"
  },
  {
    id: "CS-002",
    subject: "Computer Science",
    category: "Memory & Storage",
    question: "Which type of computer memory is volatile and loses its contents when power is turned off?",
    options: ["RAM (Random Access Memory)", "ROM (Read Only Memory)", "Hard Disk Drive", "Flash EEPROM"],
    answer: "RAM (Random Access Memory)",
    explanation: "RAM is primary volatile memory that requires continuous power to hold data.",
    paperSource: "PPSC Junior Clerk 2024",
    difficulty: "Easy"
  },
  {
    id: "CS-003",
    subject: "Computer Science",
    category: "Networking & Internet",
    question: "What does the abbreviation 'URL' stand for in Internet terminology?",
    options: [
      "Uniform Resource Locator",
      "Unified Resource Link",
      "Universal Reference Language",
      "Uniform Relay Link"
    ],
    answer: "Uniform Resource Locator",
    explanation: "A URL (Uniform Resource Locator) specifies the address of a given unique resource on the web.",
    paperSource: "PPSC PMS GK 2022",
    difficulty: "Easy"
  },
  {
    id: "CS-004",
    subject: "Computer Science",
    category: "MS Excel",
    question: "In MS Excel, all formulas and functions MUST begin with which mathematical sign?",
    options: ["Equal sign (=)", "Plus sign (+)", "At symbol (@)", "Hashtag (#)"],
    answer: "Equal sign (=)",
    explanation: "Excel treats any input beginning with '=' as a calculating formula.",
    paperSource: "PPSC Data Entry Operator 2021",
    difficulty: "Easy"
  },
  {
    id: "CS-005",
    subject: "Computer Science",
    category: "Cybersecurity & Web",
    question: "Which port number is standardly used for secure HTTPS web traffic communication?",
    options: ["443", "80", "21", "25"],
    answer: "443",
    explanation: "Port 443 is for SSL/TLS encrypted HTTPS web traffic. Port 80 is HTTP, Port 21 is FTP, and Port 25 is SMTP.",
    paperSource: "PPSC Assistant S&GAD 2023",
    difficulty: "Medium"
  },
  {
    id: "CS-006",
    subject: "Computer Science",
    category: "Hardware & Architecture",
    question: "Which component of the Central Processing Unit (CPU) performs all arithmetic and logical calculations?",
    options: ["ALU (Arithmetic Logic Unit)", "CU (Control Unit)", "Registers", "Cache Memory"],
    answer: "ALU (Arithmetic Logic Unit)",
    explanation: "The Arithmetic Logic Unit (ALU) carries out all arithmetic operations (addition, subtraction) and logical comparisons.",
    paperSource: "PPSC Computer Operator 2024",
    difficulty: "Easy"
  },
  {
    id: "CS-007",
    subject: "Computer Science",
    category: "Shortcuts",
    question: "What is the keyboard shortcut to permanently delete a file in Windows without sending it to the Recycle Bin?",
    options: ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Ctrl + Shift + D"],
    answer: "Shift + Delete",
    explanation: "Shift + Delete directly deletes files without sending them to the Windows Recycle Bin.",
    paperSource: "PPSC Computer Operator 2024",
    difficulty: "Easy"
  },
  {
    id: "CS-008",
    subject: "Computer Science",
    category: "Networking",
    question: "An IP address in IPv4 standard consists of how many total bits?",
    options: ["32 bits", "64 bits", "128 bits", "16 bits"],
    answer: "32 bits",
    explanation: "An IPv4 address is 32 bits (4 bytes). An IPv6 address is 128 bits.",
    paperSource: "PPSC Assistant 2023",
    difficulty: "Medium"
  },
  {
    id: "CS-009",
    subject: "Computer Science",
    category: "MS PowerPoint",
    question: "Which shortcut key starts a PowerPoint slide show from the very first slide?",
    options: ["F5", "Shift + F5", "Ctrl + F5", "F7"],
    answer: "F5",
    explanation: "F5 begins the slideshow from slide 1. Shift + F5 begins the slideshow from the current active slide.",
    paperSource: "PPSC Junior Clerk 2023",
    difficulty: "Easy"
  },
  {
    id: "CS-010",
    subject: "Computer Science",
    category: "Data Units",
    question: "1 Gigabyte (1 GB) is exactly equal to how many Megabytes (MB) in binary standard?",
    options: ["1024 MB", "1000 MB", "1048 MB", "512 MB"],
    answer: "1024 MB",
    explanation: "1 GB = 1024 MB, 1 MB = 1024 KB, and 1 KB = 1024 Bytes (2^10).",
    paperSource: "PPSC Assistant Director 2022",
    difficulty: "Easy"
  }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = COMPUTER_QUESTIONS; }
