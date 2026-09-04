/**
 * PPSC General Ability Exam - Comprehensive Syllabus, Topic Breakdown & Past Papers Archive
 * Official Syllabus Breakdown based on Punjab Public Service Commission Standards
 */

const PPSC_DEPARTMENTS = [
  "Punjab Police Department",
  "Higher Education Department (HED)",
  "School Education Department (SED)",
  "Excise, Taxation & Narcotics Control",
  "Finance Department & Treasuries",
  "Board of Revenue & Land Records",
  "Law & Parliamentary Affairs",
  "Primary & Secondary Healthcare",
  "Labour & Human Resource Department",
  "Agriculture Department",
  "Livestock & Dairy Development",
  "Forestry, Wildlife & Fisheries",
  "Food Department",
  "Zakat & Ushr Department",
  "Irrigation Department",
  "Services & General Administration (S&GAD)"
];

const VERIFIED_PAST_PAPERS = [
  {
    "id": "ppsc-archive-660",
    "title": "Deputy Accountant (BS-16) Batch-4 Held on 26.07.2026(2026)Finance, Audit and Accounts",
    "year": 2026,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-659",
    "title": "Deputy Accountant (BS-16) Batch-3 Held on 26.07.2026(2026)Finance, Audit and Accounts",
    "year": 2026,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-658",
    "title": "Deputy Accountant (BS-16) Batch-2 Held on 25.07.2026(2026)Finance, Audit and Accounts",
    "year": 2026,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 97,
    "difficulty": "High-Yield Recent",
    "questionsCount": 97
  },
  {
    "id": "ppsc-archive-657",
    "title": "Deputy Accountant (BS-16) Batch-1 Held on 25.07.2026(2026)Finance, Audit and Accounts",
    "year": 2026,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 97,
    "difficulty": "High-Yield Recent",
    "questionsCount": 97
  },
  {
    "id": "ppsc-archive-656",
    "title": "Assistant (BS-16) Held on 21.06.2026 (Old Case Batch-4)(2026)Punjab Police",
    "year": 2026,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 81,
    "difficulty": "High-Yield Recent",
    "questionsCount": 81
  },
  {
    "id": "ppsc-archive-655",
    "title": "Assistant (BS-16) Held on 21.06.2026 (Old Case Batch-3)(2026)Punjab Police",
    "year": 2026,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 90,
    "difficulty": "High-Yield Recent",
    "questionsCount": 90
  },
  {
    "id": "ppsc-archive-654",
    "title": "Assistant (BS-16) Held on 20.06.2026 (Old Case Batch-2)(2026)Punjab Police",
    "year": 2026,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 72,
    "difficulty": "High-Yield Recent",
    "questionsCount": 72
  },
  {
    "id": "ppsc-archive-653",
    "title": "Assistant (BS-16) Held on 20.06.2026 (Old Case Batch-1)(2026)Punjab Police",
    "year": 2026,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 72,
    "difficulty": "High-Yield Recent",
    "questionsCount": 72
  },
  {
    "id": "ppsc-archive-609",
    "title": "Pakistan Studies Compulsory (BS-17) Held on 26.04.2026(2026)Provincial Management Service(PMS)",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 10,
    "difficulty": "High-Yield Recent",
    "questionsCount": 10
  },
  {
    "id": "ppsc-archive-608",
    "title": "English Grammer Compulsory (BS-17) Held on 26.04.2026(2026)Provincial Management Service(PMS)",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 40,
    "difficulty": "High-Yield Recent",
    "questionsCount": 40
  },
  {
    "id": "ppsc-archive-607",
    "title": "Clubbed Case ID-182 Senior Inspector (BS-16) and Assistant Director (BS-17) Held on 19.04.2026(2026)Punjab Environment Protection",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 15,
    "difficulty": "High-Yield Recent",
    "questionsCount": 15
  },
  {
    "id": "ppsc-archive-606",
    "title": "Assistant Librarian (BS-11) Held on 18.04.2026(2026)Labour and Human Resource",
    "year": 2026,
    "department": "Labour & Human Resource Department",
    "bps": "BS-11",
    "totalMCQs": 25,
    "difficulty": "High-Yield Recent",
    "questionsCount": 25
  },
  {
    "id": "ppsc-archive-605",
    "title": "Superintendent (BS-17) Held on 01.02.2026(2026)Excise and Taxation",
    "year": 2026,
    "department": "Excise, Taxation & Narcotics Control",
    "bps": "BS-17",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-604",
    "title": "ESE General (BS-14) held on 15.02.2026(2026)Punjab Population Welfare",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-14",
    "totalMCQs": 53,
    "difficulty": "High-Yield Recent",
    "questionsCount": 53
  },
  {
    "id": "ppsc-archive-603",
    "title": "Enforcement Officer (BS-17) Held on 07.06.2026(2026)Punjab Enforcement and Regulatory Authority (PERA)",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 50,
    "difficulty": "High-Yield Recent",
    "questionsCount": 50
  },
  {
    "id": "ppsc-archive-599",
    "title": "Audit Officer (BS-17) Held On 06.06.2026(2026)Finance, Audit and Accounts",
    "year": 2026,
    "department": "Finance Department & Treasuries",
    "bps": "BS-17",
    "totalMCQs": 19,
    "difficulty": "High-Yield Recent",
    "questionsCount": 19
  },
  {
    "id": "ppsc-archive-565",
    "title": "Sergeant PERA Solved Paper Held On 19.04.2026(2026)Punjab Enforcement and Regulatory Authority (PERA)",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 52,
    "difficulty": "High-Yield Recent",
    "questionsCount": 52
  },
  {
    "id": "ppsc-archive-543",
    "title": "Assistant BOR Paper Held On 05.04.2026(2026)PUNJAB REVENUE AUTHORITY, FINANCE DEPARTMENT",
    "year": 2026,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-531",
    "title": "PERA EO & IO Solved Paper Held on 15-03-2026(2026)Punjab Enforcement and Regulatory Authority (PERA)",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 91,
    "difficulty": "High-Yield Recent",
    "questionsCount": 91
  },
  {
    "id": "ppsc-archive-511",
    "title": "Computer Operator/System Operator (BPS-15) Held on 14.02.2026(2026)PUNJAB REVENUE AUTHORITY, FINANCE DEPARTMENT",
    "year": 2026,
    "department": "Finance Department & Treasuries",
    "bps": "BS-15",
    "totalMCQs": 96,
    "difficulty": "High-Yield Recent",
    "questionsCount": 96
  },
  {
    "id": "ppsc-archive-503",
    "title": "ESE (PTI) IN LABOUR & HUMAN RESOURCE DEPARTMENT Held On 01.02.2026(2026)Labour and Human Resource",
    "year": 2026,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 50,
    "difficulty": "High-Yield Recent",
    "questionsCount": 50
  },
  {
    "id": "ppsc-archive-502",
    "title": "Provincial Management Service Phase-II Held On 25.01.2026(2026)Provincial Management Service(PMS)",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 84,
    "difficulty": "High-Yield Recent",
    "questionsCount": 84
  },
  {
    "id": "ppsc-archive-501",
    "title": "Provincial Management Service Phase-I Held On 25.01.2026(2026)Provincial Management Service(PMS)",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-500",
    "title": "ESE Urdu Held On 24.01.2026(2026)SOCIAL WELFARE & BAIT UL MAAL DEPARTMENT GOVERNMENT OF PUNJAB",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 81,
    "difficulty": "High-Yield Recent",
    "questionsCount": 81
  },
  {
    "id": "ppsc-archive-499",
    "title": "Assistant Club Paper Held On 24.01.2026(2026)Miscellaneous",
    "year": 2026,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 94,
    "difficulty": "High-Yield Recent",
    "questionsCount": 94
  },
  {
    "id": "ppsc-archive-626",
    "title": "Assistant Director Finance (BS-17) Held on 21.09.2025(2025)Punjab Agriculture",
    "year": 2025,
    "department": "Finance Department & Treasuries",
    "bps": "BS-17",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-625",
    "title": "Assistant Entomologist (BS-17) Held in 2025(2025)Forestry Wildlife and Fisheries",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 18,
    "difficulty": "High-Yield Recent",
    "questionsCount": 18
  },
  {
    "id": "ppsc-archive-624",
    "title": "Building Inspector (BS-14) Held in 2025(2025)Local Government",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-14",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-623",
    "title": "Municipal Officer (BS-17) Held in 2025(2025)Local Government",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 19,
    "difficulty": "High-Yield Recent",
    "questionsCount": 19
  },
  {
    "id": "ppsc-archive-622",
    "title": "Technical Inspector (BS-12) Held in 07.12.2025(2025)Labour and Human Resource",
    "year": 2025,
    "department": "Labour & Human Resource Department",
    "bps": "BS-12",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-621",
    "title": "Clubbed Case ID-169 Junior Clerk (BS-11) Held in 20.12.2025(2025)Miscellaneous",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-11",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-620",
    "title": "Assistant Director (BS-17) District Development Officer (BS-17) Assistant Secretary (Board) (BS-17) Economist Manager (PHS) (BS-17) Held on 26.04.2025(2025)Industries, Commerce, Investment & Skills Development",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 29,
    "difficulty": "High-Yield Recent",
    "questionsCount": 29
  },
  {
    "id": "ppsc-archive-619",
    "title": "Mineral Development Officer (BS-16) Held in 2025(2025)Mines and Minerals",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-618",
    "title": "Assistant Director (BS-17) Held in 12.07.2025(2025)HOUSING URBAN DEVELOPMENT & PUBLIC HEALTH ENGINEERING DEPARTMENT",
    "year": 2025,
    "department": "Primary & Secondary Healthcare",
    "bps": "BS-17",
    "totalMCQs": 18,
    "difficulty": "High-Yield Recent",
    "questionsCount": 18
  },
  {
    "id": "ppsc-archive-617",
    "title": "Clubbed case ID-125 Junior Clerk (BS-11) Held on 01.06.2025(2025)Miscellaneous",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-11",
    "totalMCQs": 30,
    "difficulty": "High-Yield Recent",
    "questionsCount": 30
  },
  {
    "id": "ppsc-archive-616",
    "title": "Evaluation Officer (BS-17) Held in 2025(2025)SOCIAL WELFARE & BAIT UL MAAL DEPARTMENT GOVERNMENT OF PUNJAB",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-613",
    "title": "Industrial Development Officer (BS-16) Held in 2025(2025)Industries, Commerce, Investment & Skills Development",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 38,
    "difficulty": "High-Yield Recent",
    "questionsCount": 38
  },
  {
    "id": "ppsc-archive-612",
    "title": "COMPUTER OPERATOR (BS-15), Commissioner Office, Multan Division, Multan (Board of Revenue, Punjab), the Office of the Deputy Commissioner (Khushab) (BoR), 3J2025, 51J2024 Held on 12-04-2025(2025)Miscellaneous",
    "year": 2025,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-15",
    "totalMCQs": 45,
    "difficulty": "High-Yield Recent",
    "questionsCount": 45
  },
  {
    "id": "ppsc-archive-611",
    "title": "Persian Combined Competitive Examination (2023) Held in 2025(2025)Provincial Management Service(PMS)",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 10,
    "difficulty": "Official Past Paper",
    "questionsCount": 10
  },
  {
    "id": "ppsc-archive-498",
    "title": "Junior Clerk BOR Held on 20.12.2025(2025)Board of Revenue",
    "year": 2025,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 88,
    "difficulty": "High-Yield Recent",
    "questionsCount": 88
  },
  {
    "id": "ppsc-archive-497",
    "title": "SDEO PERA GK Held on 21.12.2025(2025)Punjab Enforcement and Regulatory Authority (PERA)",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 94,
    "difficulty": "High-Yield Recent",
    "questionsCount": 94
  },
  {
    "id": "ppsc-archive-496",
    "title": "Junior Clerk (Evening) Held on 14.12.2025(2025)Punjab Police",
    "year": 2025,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 90,
    "difficulty": "High-Yield Recent",
    "questionsCount": 90
  },
  {
    "id": "ppsc-archive-495",
    "title": "Junior Clerk (Morning) Held on 14.12.2025(2025)Punjab Police",
    "year": 2025,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-494",
    "title": "Assistant Superintendent / Deputy Superintendent Jail (GK)(2025)Punjab Prison/Jail",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 97,
    "difficulty": "High-Yield Recent",
    "questionsCount": 97
  },
  {
    "id": "ppsc-archive-493",
    "title": "Assistant Held on 07.12.2025(2025)Board of Revenue",
    "year": 2025,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 57,
    "difficulty": "High-Yield Recent",
    "questionsCount": 57
  },
  {
    "id": "ppsc-archive-491",
    "title": "Clubbed ID 163 Assistant Held On 16.11.2025(2025)Miscellaneous",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 95,
    "difficulty": "High-Yield Recent",
    "questionsCount": 95
  },
  {
    "id": "ppsc-archive-490",
    "title": "Labour Officer Held On 16.11.2025(2025)Labour and Human Resource",
    "year": 2025,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 90,
    "difficulty": "High-Yield Recent",
    "questionsCount": 90
  },
  {
    "id": "ppsc-archive-489",
    "title": "SDEO Law Paper Batch-1 Morning(2025)Punjab Enforcement and Regulatory Authority (PERA)",
    "year": 2025,
    "department": "Law & Parliamentary Affairs",
    "bps": "BS-16",
    "totalMCQs": 36,
    "difficulty": "High-Yield Recent",
    "questionsCount": 36
  },
  {
    "id": "ppsc-archive-488",
    "title": "SDEO Law Paper Batch-3 Morning(2025)Punjab Enforcement and Regulatory Authority (PERA)",
    "year": 2025,
    "department": "Law & Parliamentary Affairs",
    "bps": "BS-16",
    "totalMCQs": 38,
    "difficulty": "High-Yield Recent",
    "questionsCount": 38
  },
  {
    "id": "ppsc-archive-487",
    "title": "SDEO Law Paper Batch-2 Evening(2025)Punjab Enforcement and Regulatory Authority (PERA)",
    "year": 2025,
    "department": "Law & Parliamentary Affairs",
    "bps": "BS-16",
    "totalMCQs": 63,
    "difficulty": "High-Yield Recent",
    "questionsCount": 63
  },
  {
    "id": "ppsc-archive-486",
    "title": "Assistant PESSI Held on 19-10-2025(2025)Punjab Employees Social Security Institution (PESSI)",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-485",
    "title": "Sub Inspector (BS-14) Held on 19-10-2025(2025)Punjab Police",
    "year": 2025,
    "department": "Punjab Police Department",
    "bps": "BS-14",
    "totalMCQs": 97,
    "difficulty": "High-Yield Recent",
    "questionsCount": 97
  },
  {
    "id": "ppsc-archive-484",
    "title": "ASSISTANT REGISTRAR GK PAPER HELD on 28-9-2025(2025)Punjab Cooperatives",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 96,
    "difficulty": "High-Yield Recent",
    "questionsCount": 96
  },
  {
    "id": "ppsc-archive-483",
    "title": "Junior Clerk Paper BS-11 (28C2025) Held on 27-09-2025(2025)Punjab Public Service Commission (PPSC)",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-11",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-482",
    "title": "20% GK Assistant Director (STAT) BS-17 (Evening) Held on 21-09-2025(2025)Punjab Agriculture Department",
    "year": 2025,
    "department": "Agriculture Department",
    "bps": "BS-17",
    "totalMCQs": 18,
    "difficulty": "High-Yield Recent",
    "questionsCount": 18
  },
  {
    "id": "ppsc-archive-481",
    "title": "AD STAT BS-17 (Morning) Held on 21-9-2025(2025)Punjab Agriculture Department",
    "year": 2025,
    "department": "Agriculture Department",
    "bps": "BS-17",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-480",
    "title": "ASSISTANT EXECUTIVE ENGINEERS / SUB DIVISIONAL OFFICER / ASSISTANT DESIGN ENGINEER / ASSISTANT DESIGN OFFICER / ASSISTANT DIRECTOR FLOOD MONITORING / ASSISTANT DIRECTOR (BS-17)(2025)Irrigation and Power",
    "year": 2025,
    "department": "Irrigation Department",
    "bps": "BS-17",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-479",
    "title": "Assistant Director (HR and ADMIN) BS-17(2025)Punjab Council of the arts, Information and Culture Department",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-478",
    "title": "PLANNING OFFICER (BS-17) , (22-06-2025) ADD# 15, 7D2025(2025)SPECIALIZED HEALTHCARE & MEDICAL EDUCATION DEPARTMENT",
    "year": 2025,
    "department": "School Education Department",
    "bps": "BS-17",
    "totalMCQs": 15,
    "difficulty": "High-Yield Recent",
    "questionsCount": 15
  },
  {
    "id": "ppsc-archive-477",
    "title": "Islamic Studies: Combined competitive Examination 2023 Held in 2025(2025)Provincial Management Service(PMS)",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "Official Past Paper",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-476",
    "title": "English: Combined competitive Examination 2023 Held in 2025(2025)Provincial Management Service(PMS)",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 10,
    "difficulty": "Official Past Paper",
    "questionsCount": 10
  },
  {
    "id": "ppsc-archive-475",
    "title": "Pakistan Studies: Combined competitive Examination 2023 Held in 2025(2025)Provincial Management Service(PMS)",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 10,
    "difficulty": "Official Past Paper",
    "questionsCount": 10
  },
  {
    "id": "ppsc-archive-474",
    "title": "Assistant (13-07-2025)(2025)Punjab Employees Social Security Institution (PESSI)",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-473",
    "title": "Assistant Director TEPA BS-17 (13-07-2025)(2025)Punjab Employees Social Security Institution (PESSI)",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-471",
    "title": "PLANNING OFFICER (BS-17) GK 20% (28-06-2025)(2025)SPECIALIZED HEALTHCARE & MEDICAL EDUCATION DEPARTMENT",
    "year": 2025,
    "department": "School Education Department",
    "bps": "BS-17",
    "totalMCQs": 12,
    "difficulty": "High-Yield Recent",
    "questionsCount": 12
  },
  {
    "id": "ppsc-archive-470",
    "title": "CURATOR (BS-17) DIRECTORATE GENERAL OF ARCHAEOLOGY, History PORTION (22-06-2025)(2025)TOURISM, ARCHAEOLOGY & MUSEUMS DEPARTMENT",
    "year": 2025,
    "department": "School Education Department",
    "bps": "BS-17",
    "totalMCQs": 22,
    "difficulty": "High-Yield Recent",
    "questionsCount": 22
  },
  {
    "id": "ppsc-archive-469",
    "title": "ZILLADAR Evening paper (29-06-2025)(2025)Irrigation and Power",
    "year": 2025,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 96,
    "difficulty": "High-Yield Recent",
    "questionsCount": 96
  },
  {
    "id": "ppsc-archive-468",
    "title": "ZILLADAR Morning (29-06-2025)(2025)Irrigation and Power",
    "year": 2025,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-456",
    "title": "Data Entry Operator (BS-12) (31-05-2025)(2025)Punjab Police Special Branch",
    "year": 2025,
    "department": "Punjab Police Department",
    "bps": "BS-12",
    "totalMCQs": 59,
    "difficulty": "High-Yield Recent",
    "questionsCount": 59
  },
  {
    "id": "ppsc-archive-455",
    "title": "Internal Audit Specialist (BS-16) 31-05-2025(2025)PUNJAB REVENUE AUTHORITY, FINANCE DEPARTMENT",
    "year": 2025,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 11,
    "difficulty": "High-Yield Recent",
    "questionsCount": 11
  },
  {
    "id": "ppsc-archive-454",
    "title": "Assistant Director Fisheries (BS-17) (1-06-2025)(2025)FORESTRY, WILDLIFE, & FISHERIES DEPARTMENT",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 22,
    "difficulty": "High-Yield Recent",
    "questionsCount": 22
  },
  {
    "id": "ppsc-archive-453",
    "title": "Junior Clerk (BS-11) (1-06-2025)(2025)Board of Revenue",
    "year": 2025,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-11",
    "totalMCQs": 93,
    "difficulty": "High-Yield Recent",
    "questionsCount": 93
  },
  {
    "id": "ppsc-archive-450",
    "title": "SOCIAL WELFARE PAPER 20%GK held on 26-04-2025(2025)SOCIAL WELFARE & BAIT UL MAAL DEPARTMENT GOVERNMENT OF PUNJAB",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 21,
    "difficulty": "High-Yield Recent",
    "questionsCount": 21
  },
  {
    "id": "ppsc-archive-449",
    "title": "Assistant BOR, Clubbed (27-04-2025)(2025)Board of Revenue",
    "year": 2025,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 96,
    "difficulty": "High-Yield Recent",
    "questionsCount": 96
  },
  {
    "id": "ppsc-archive-448",
    "title": "Assistant Director LDA (27-04-2025)(2025)Lahore Development Authority LDA",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-447",
    "title": "AD Research GK 40% (12-04-2025)(2025)Board of Revenue",
    "year": 2025,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 37,
    "difficulty": "High-Yield Recent",
    "questionsCount": 37
  },
  {
    "id": "ppsc-archive-446",
    "title": "Municipal Officer Gk (12-04-2025-0(2025)Local government & community development department",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 17,
    "difficulty": "High-Yield Recent",
    "questionsCount": 17
  },
  {
    "id": "ppsc-archive-445",
    "title": "ASI Service quota (13-04-2025)(2025)Punjab Police",
    "year": 2025,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 48,
    "difficulty": "High-Yield Recent",
    "questionsCount": 48
  },
  {
    "id": "ppsc-archive-444",
    "title": "PMS Ministerial (13-04-2025)(2025)Provincial Management Service(PMS)",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 98,
    "difficulty": "High-Yield Recent",
    "questionsCount": 98
  },
  {
    "id": "ppsc-archive-434",
    "title": "Assistant Sub Inspector PHP (09-03-2025)(2025)PUNJAB HIGHWAY DEPARTMENT (PHP)",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 22,
    "difficulty": "High-Yield Recent",
    "questionsCount": 22
  },
  {
    "id": "ppsc-archive-433",
    "title": "ENFORCEMENT OFFICER (16-03-2025)(2025) Punjab Enforcement and Regulatory Authority (PERA)",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 86,
    "difficulty": "High-Yield Recent",
    "questionsCount": 86
  },
  {
    "id": "ppsc-archive-432",
    "title": "Junior Traffic Warden BS-11 (09-03-2025)(2025)Traffic Warden in the Punjab Police",
    "year": 2025,
    "department": "Punjab Police Department",
    "bps": "BS-11",
    "totalMCQs": 62,
    "difficulty": "High-Yield Recent",
    "questionsCount": 62
  },
  {
    "id": "ppsc-archive-430",
    "title": "Statistical Officer BS-17 (24-02-2025)(2025)SOCIAL WELFARE & BAIT UL MAAL DEPARTMENT GOVERNMENT OF PUNJAB",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 14,
    "difficulty": "High-Yield Recent",
    "questionsCount": 14
  },
  {
    "id": "ppsc-archive-429",
    "title": "Accountant / Auditor Held on 24.02.2025(2025)Finance, Audit and Accounts",
    "year": 2025,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 21,
    "difficulty": "High-Yield Recent",
    "questionsCount": 21
  },
  {
    "id": "ppsc-archive-428",
    "title": "Assistant Director Wildlife BS-17 Held on 23.02.2025(2025)Forestry Wildlife and Fisheries",
    "year": 2025,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-633",
    "title": "Combined Competitive Examination-2023 PMS (BS-17) Held in 2024(2024)Provincial Management Service(PMS)",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-632",
    "title": "Deputy Secretary Deputy Controller of Examination (BS-18) Held in 2024(2024)Boards of Intermediate and Secondary Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-18",
    "totalMCQs": 87,
    "difficulty": "High-Yield Recent",
    "questionsCount": 87
  },
  {
    "id": "ppsc-archive-629",
    "title": "Subject Specialist Pakistan Studies (BS-17) Held in 2024(2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-17",
    "totalMCQs": 96,
    "difficulty": "High-Yield Recent",
    "questionsCount": 96
  },
  {
    "id": "ppsc-archive-628",
    "title": "Club-107 Media Monitoring Officer (BS-16) Administrative Officer (BS-17) Information Officer (BS-17) Administrator (BS-16) Estate Officer (BS-16) Held in 2024(2024)Miscellaneous",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 90,
    "difficulty": "High-Yield Recent",
    "questionsCount": 90
  },
  {
    "id": "ppsc-archive-627",
    "title": "Lecturer Islamiat (BS-17) Held in 2024(2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-17",
    "totalMCQs": 88,
    "difficulty": "High-Yield Recent",
    "questionsCount": 88
  },
  {
    "id": "ppsc-archive-467",
    "title": "Assistant Controller-Morning 23-11-2024(2024)Sargodha Board",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 30,
    "difficulty": "High-Yield Recent",
    "questionsCount": 30
  },
  {
    "id": "ppsc-archive-466",
    "title": "Assistant Director -Evening (23-11-2024)(2024)Lahore Development Authority LDA",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-465",
    "title": "Sub Divisional Officer(2024)Irrigation and Power",
    "year": 2024,
    "department": "Irrigation Department",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-464",
    "title": "Account and Audit Officer (Morning ) (13-10-2024)(2024)Labour and Human Resource",
    "year": 2024,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 19,
    "difficulty": "High-Yield Recent",
    "questionsCount": 19
  },
  {
    "id": "ppsc-archive-463",
    "title": "AD Attorney(2024)Law and Parliamentary Affairs",
    "year": 2024,
    "department": "Law & Parliamentary Affairs",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-462",
    "title": "Clubbed ID-96 (27-07-2024)(2024)Punjab Council of the arts, Information and Culture Department",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-461",
    "title": "Accounts Officer BS-17 (25-06-2024)(2024)Transport Department",
    "year": 2024,
    "department": "Finance Department & Treasuries",
    "bps": "BS-17",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-460",
    "title": "Assistant Director legal (24-08-2024)(2024)Transport Department",
    "year": 2024,
    "department": "Law & Parliamentary Affairs",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-459",
    "title": "Junior Computer Operator BS 11 (23-11-2024)(2024)Anti Corruption Establishment",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 21,
    "difficulty": "High-Yield Recent",
    "questionsCount": 21
  },
  {
    "id": "ppsc-archive-458",
    "title": "Nutritionist-Morning (23-11-2024)(2024)Punjab Food Authority",
    "year": 2024,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-457",
    "title": "Junior Computer Operator- Morning (30-11-2024)(2024)Punjab Public Service Commission (PPSC)",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-427",
    "title": "G.k Portion( Sub Engineer Civil Bs-14) Dated 30-11-2024(2024)Miscellaneous",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-14",
    "totalMCQs": 17,
    "difficulty": "High-Yield Recent",
    "questionsCount": 17
  },
  {
    "id": "ppsc-archive-426",
    "title": "G.k Portion(Horticulture Officer) Dated 30-11-2024(2024)Miscellaneous",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 15,
    "difficulty": "High-Yield Recent",
    "questionsCount": 15
  },
  {
    "id": "ppsc-archive-425",
    "title": "G.k Portion(Sub Engineer Mechanical Bs-14)Dated 30-11-2024(2024)HOUSING URBAN DEVELOPMENT & PUBLIC HEALTH ENGINEERING DEPARTMENT",
    "year": 2024,
    "department": "Primary & Secondary Healthcare",
    "bps": "BS-14",
    "totalMCQs": 10,
    "difficulty": "High-Yield Recent",
    "questionsCount": 10
  },
  {
    "id": "ppsc-archive-424",
    "title": "Tehsil Dar officer G.k Screening Held on (15-12-2024)(2024)Board of Revenue",
    "year": 2024,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 96,
    "difficulty": "High-Yield Recent",
    "questionsCount": 96
  },
  {
    "id": "ppsc-archive-423",
    "title": "General Knowledge P.M.S (Held On 15-12-2024)(2024)Provincial Management Service(PMS)",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-422",
    "title": "Assistant S&GAD (Evening) Held On 01-12-2024(2024)Services and General Administration",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-421",
    "title": "Assistant S&GAD (Morning) Held On 01-12-2024(2024)Services and General Administration",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-420",
    "title": "Assistant S&GAD (Evening) Held On 24-11-2024(2024)Services and General Administration",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 98,
    "difficulty": "High-Yield Recent",
    "questionsCount": 98
  },
  {
    "id": "ppsc-archive-419",
    "title": "Assistant S&GAD (Morning) Held On 24-11-2024(2024)Services and General Administration",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-418",
    "title": "Excise Inspector-Morning Held on 08-09-2024 (2024)Excise and Taxation",
    "year": 2024,
    "department": "Excise, Taxation & Narcotics Control",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-417",
    "title": "Junior Computer Operator (Morning) Irrigation Department Held on 29-09-2024(2024)Irrigation and Power",
    "year": 2024,
    "department": "Irrigation Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-416",
    "title": "Assistant Director Labour(Morning) 28-09-2024(2024)Labour and Human Resource",
    "year": 2024,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 50,
    "difficulty": "High-Yield Recent",
    "questionsCount": 50
  },
  {
    "id": "ppsc-archive-415",
    "title": "Assistant Director Local Government (Evening) 28-09-2024(2024)Local Government",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-414",
    "title": "Clubbed Case Code ID-49 JUNIOR COMPUTER OPERATOR BPS-12 in different Departments (Held on 29-09-2024)(2024)Irrigation and Power",
    "year": 2024,
    "department": "Irrigation Department",
    "bps": "BS-12",
    "totalMCQs": 75,
    "difficulty": "High-Yield Recent",
    "questionsCount": 75
  },
  {
    "id": "ppsc-archive-413",
    "title": "Excise Inspector (Excise & Taxation Department) Evening Held on 08-09-2024 20(2024)Excise and Taxation",
    "year": 2024,
    "department": "Excise, Taxation & Narcotics Control",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "High-Yield Recent",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-412",
    "title": "Inspector Cooperative (Cooperative Department) Held on 10-08-2024(2024)Punjab Cooperatives",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-411",
    "title": "Corporal (CTD) Held on 11-08-2024(2024)Punjab Police",
    "year": 2024,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-410",
    "title": "Chief Officer/Municipal Officer (Regulations) Local Government & Community Development (Held on 11-08-2024)(2024)Local Government",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 69,
    "difficulty": "High-Yield Recent",
    "questionsCount": 69
  },
  {
    "id": "ppsc-archive-409",
    "title": "Educator (BS-16) Punjab Special Education Held on 13-07-2024(2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 40,
    "difficulty": "High-Yield Recent",
    "questionsCount": 40
  },
  {
    "id": "ppsc-archive-408",
    "title": "Assistant Director Farms/Procurement (Punjab Seed Corporation, Agriculture) Held on 13-07-2024(2024)Punjab Agriculture",
    "year": 2024,
    "department": "Agriculture Department",
    "bps": "BS-16",
    "totalMCQs": 26,
    "difficulty": "High-Yield Recent",
    "questionsCount": 26
  },
  {
    "id": "ppsc-archive-407",
    "title": "Inspector (BS-16) Tourist Services (DTS), Punjab held on 13-07-2024(2024)Tourist Services (DTS), Punjab",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 52,
    "difficulty": "High-Yield Recent",
    "questionsCount": 52
  },
  {
    "id": "ppsc-archive-406",
    "title": "Program Officer (I.T) Punjab Revenue Authority Held on 26-07-2024(2024)Board of Revenue",
    "year": 2024,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-405",
    "title": "Medical Officer (BS-17) Labour Department Held on 09-06-2024(2024)Labour and Human Resource",
    "year": 2024,
    "department": "Labour & Human Resource Department",
    "bps": "BS-17",
    "totalMCQs": 19,
    "difficulty": "High-Yield Recent",
    "questionsCount": 19
  },
  {
    "id": "ppsc-archive-404",
    "title": "Assistant Director (Accounts) FDA Held on 14-07-2024(2024)Finance, Audit and Accounts",
    "year": 2024,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-403",
    "title": "Lecturer Punjabi (BS-17) (Special Education Department) Held on 13-07-2024(2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-17",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-402",
    "title": "Computer Instructor (BS-17) Punjab Special Education (Held on 14-07-2024)(2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-17",
    "totalMCQs": 30,
    "difficulty": "High-Yield Recent",
    "questionsCount": 30
  },
  {
    "id": "ppsc-archive-401",
    "title": "Physiotherapist (Punjab Special Education Department) Held on: 10-08-2024(2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-400",
    "title": "Assistant Director (C&W) Communication and works department Held on: 08-06-2024(2024)Patrolling Police in the Communication and Works",
    "year": 2024,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-399",
    "title": "Bio Medical Engineer (Labour & Resource) Held on 10-08-2024)(2024)Labour and Human Resource",
    "year": 2024,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 40,
    "difficulty": "High-Yield Recent",
    "questionsCount": 40
  },
  {
    "id": "ppsc-archive-398",
    "title": "Lecturer Urdu (Special Education Department) Held on 10-08-2024(2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-397",
    "title": "Clubbed Case-97 (Evening) Held on 13-07-2024(2024)Punjab Food Authority",
    "year": 2024,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-396",
    "title": "Clubbed Case-75 (Evening) Held on 13-07-2024(2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 19,
    "difficulty": "High-Yield Recent",
    "questionsCount": 19
  },
  {
    "id": "ppsc-archive-395",
    "title": "Clubbed Case-85 (Morning) Held on 08-06-2024(2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-394",
    "title": "Clubbed Case-76 (Evening) Held on 08-06-2024(2024)Planning and Development",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-393",
    "title": "Clubbed Case-91(Morning) Punjab Special Education Department (10-08-2024)(2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-392",
    "title": "Intelligence Officer (Special Branch), Punjab Police Held on: 25/08/2024(2024)Punjab Police",
    "year": 2024,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 94,
    "difficulty": "High-Yield Recent",
    "questionsCount": 94
  },
  {
    "id": "ppsc-archive-391",
    "title": "Clubbed Case-Various Post(Labour Inspector/Officer, Assistant) PPSC 25-08-2024(2024)Miscellaneous",
    "year": 2024,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-390",
    "title": "Clubbes Case 98 – Various Posts -2024(2024)Miscellaneous",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-389",
    "title": "Clubbed Case 74 – Assistant (BS-16) Various Departments – 2024(2024)Miscellaneous",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-388",
    "title": "PLANNING OFFICER/ ASSISTANT DIRECTOR ( PLANNING) (BS-17)(2024)Planning and Development",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 20,
    "difficulty": "High-Yield Recent",
    "questionsCount": 20
  },
  {
    "id": "ppsc-archive-387",
    "title": "INSTRUCTOR/LECTURER (MALE) ENGLISH (BS-17) (2024)Education",
    "year": 2024,
    "department": "School Education Department",
    "bps": "BS-17",
    "totalMCQs": 42,
    "difficulty": "High-Yield Recent",
    "questionsCount": 42
  },
  {
    "id": "ppsc-archive-652",
    "title": "Assistant Mines Labour Welfare Commissioner (BS-17) Held in 2023(2023)Mines and Minerals",
    "year": 2023,
    "department": "Labour & Human Resource Department",
    "bps": "BS-17",
    "totalMCQs": 54,
    "difficulty": "Official Past Paper",
    "questionsCount": 54
  },
  {
    "id": "ppsc-archive-651",
    "title": "Junior Clerk (BS-11) (Deputy Commissioner Rawalpindi) Held in 2023(2023)Board of Revenue",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-11",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-650",
    "title": "Junior Clerk (BS-11) Held in 2023(2023)Board of Revenue",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-11",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-649",
    "title": "Junior Clerk (BS-11) Held in 2023(2023)Punjab Public Service Commission (PPSC)",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-11",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-648",
    "title": "Junior Clerk (BS-11) Held in 2023(2023)Board of Revenue",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-11",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-383",
    "title": "Clubbed Case Canal Patwari Second Phase (Evening)(2023)Irrigation and Power",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-382",
    "title": "Clubbed Case Canal Patwari Second Phase (Morning)(2023)Irrigation and Power",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-381",
    "title": "Clubbed Case Canal Patwari First Phase (Evening)(2023)Irrigation and Power",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-380",
    "title": "Clubbed Case Canal Patwari First Phase (Morning)(2023)Irrigation and Power",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-379",
    "title": "Code-72 Deputy Secretary Controller of Examinations, Assistant Secretary, Assistant Controller of Examinations(2023)Boards of Intermediate and Secondary Education",
    "year": 2023,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-378",
    "title": "Club-69 Assistant(2023)Auqaf",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-377",
    "title": "Junior Clerk(2023)Board of Revenue",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-352",
    "title": "District Zakat Officer(2023)Zakat and Ushr",
    "year": 2023,
    "department": "Zakat & Ushr Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-351",
    "title": "Junior Clerk(2023)Land Record Authority",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-350",
    "title": "Junior Computer Operator(2023)Punjab Public Service Commission (PPSC)",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-349",
    "title": "Junior Clerk(2023)Punjab Public Service Commission (PPSC)",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-348",
    "title": "Combined Competitive Examination(2023)Services and General Administration",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-347",
    "title": "Food Grain Supervisor (Evening)(2023)Punjab Food Authority",
    "year": 2023,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-346",
    "title": "Assistant Director Revenue(2023)Board of Revenue",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-345",
    "title": "Assistant Director Accounts / Budget and Accounts Officer / Accounts Officer / Audit Officer(2023)Finance, Audit and Accounts",
    "year": 2023,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-344",
    "title": "Food Grains Inspector(2023)Punjab Food Authority",
    "year": 2023,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-343",
    "title": "Food Grain Supervisor(2023)Punjab Food Authority",
    "year": 2023,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-342",
    "title": "Assistant Food Controller(2023)Punjab Food Authority",
    "year": 2023,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-341",
    "title": "Assistant Administrative Officer(2023)Information & Culture (Punjab Council of the Arts)",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-340",
    "title": "District Trainer(2023)Literacy & Non Formal Basic Education",
    "year": 2023,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-339",
    "title": "Junior Clerk(2023)Board of Revenue",
    "year": 2023,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-338",
    "title": "CODE-41 Assistant(2023)Industries, Commerce, Investment & Skills Development",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "Official Past Paper",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-337",
    "title": "Assistant Director Intelligence(2023)Punjab Police",
    "year": 2023,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-336",
    "title": "Code- 53 Assistant(2023)Miscellaneous",
    "year": 2023,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-335",
    "title": "Assistant Director Labour Welfare(2023)Labour and Human Resource",
    "year": 2023,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-647",
    "title": "Data Entry Operator (BS-14) Held in 2022(2022)Lahore High Court",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-14",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-646",
    "title": "Club Code-27(2022)Miscellaneous",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-645",
    "title": "Club Code-18 & Assistant (Bs-16) & Junior Clerk (Bs-11) Agriculture, PPSC & PPRA Held in 2022(2022)Miscellaneous",
    "year": 2022,
    "department": "Agriculture Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-644",
    "title": "Assistant Director (BS-17) (Punjab Employees Social Security Institution - PESSI) Held in 2022(2022)Labour and Human Resource",
    "year": 2022,
    "department": "Labour & Human Resource Department",
    "bps": "BS-17",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-643",
    "title": "Assistant Director (Admin) (Bs-17) (Punjab Forensic Science Agency) Held in 2022(2022)Home",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-642",
    "title": "Assistant (BS-16) Held in 2022(2022)Industries, Commerce, Investment & Skills Development",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-641",
    "title": "Assistant (BS-16) Held in 2022(2022)Center for Professional Development of Public Prosecutors",
    "year": 2022,
    "department": "Law & Parliamentary Affairs",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-640",
    "title": "CODE-16 Held in 2022(2022)Miscellaneous",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-639",
    "title": "CODE-15 Held in 2022(2022)Miscellaneous",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-638",
    "title": "Assistant (BS-16) Held in 2022(2022)Special Education",
    "year": 2022,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 94,
    "difficulty": "Official Past Paper",
    "questionsCount": 94
  },
  {
    "id": "ppsc-archive-637",
    "title": "Assistant (BS-16) Held in 2022(2022)Punjab Public Service Commission (PPSC)",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-636",
    "title": "Assistant (BS-16) Held in 2022(2022)Services and General Administration",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-635",
    "title": "Assistant (BS-16) Held in 2022(2022)Labour and Human Resource",
    "year": 2022,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-634",
    "title": "Junior Clerk (BS-11) Held in 2022(2022)Punjab Police",
    "year": 2022,
    "department": "Punjab Police Department",
    "bps": "BS-11",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-306",
    "title": "PAROLE/PROBATION OFFICER(2022)Home",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-305",
    "title": "Assistant Director Processing(2022)Punjab Agriculture",
    "year": 2022,
    "department": "Agriculture Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-269",
    "title": "Assistant(2022)Education",
    "year": 2022,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-254",
    "title": "Provincial Management Service (2022)Provincial Management Service(PMS)",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-253",
    "title": "Lecturer Urdu(2022)Education",
    "year": 2022,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-252",
    "title": "Lecturer Islamiat(2022)Education",
    "year": 2022,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-251",
    "title": "Lecturer Political Science(2022)Education",
    "year": 2022,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-250",
    "title": "Lecturer History(2022)Education",
    "year": 2022,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-249",
    "title": "Lecturer Pakistan Studies(2022)Education",
    "year": 2022,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-248",
    "title": "Assistant (2022)Industries, Commerce, Investment & Skills Development",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-246",
    "title": "Assistant (2022)Center for Professional Development of Public Prosecutors",
    "year": 2022,
    "department": "Law & Parliamentary Affairs",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-245",
    "title": "Assistant(2022)Punjab Public Service Commission (PPSC)",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-244",
    "title": "Assistant(2022)Services and General Administration",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-243",
    "title": "Assistant(2022)Punjab Employees Social Security Institution (PESSI)",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-242",
    "title": "Manager Auqaf(2022)Auqaf",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-241",
    "title": "Assitant/ Head Clerk(2022)Livestock & Dairy Development",
    "year": 2022,
    "department": "Livestock & Dairy Development",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-240",
    "title": "Assistant Director(2022)Civil Defence In the Punjab Home",
    "year": 2022,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-239",
    "title": "Naib Tehsildar (English)(2022)Board of Revenue",
    "year": 2022,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-238",
    "title": "Naib Tehsildar (General Knowledge)(2022)Board of Revenue",
    "year": 2022,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-237",
    "title": "Naib Tehsildar (English)(2022)Board of Revenue",
    "year": 2022,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 90,
    "difficulty": "Official Past Paper",
    "questionsCount": 90
  },
  {
    "id": "ppsc-archive-236",
    "title": "Naib Tehsildar(General Knowledge)(2022)Board of Revenue",
    "year": 2022,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-235",
    "title": "Junior Clerk(2022)Punjab Police",
    "year": 2022,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-667",
    "title": "ASSISTANT (BS-16) Held in 2021 Disaster Management Department(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 90,
    "difficulty": "Official Past Paper",
    "questionsCount": 90
  },
  {
    "id": "ppsc-archive-666",
    "title": "TEHSILDAR/CONSOLIDATION OFFICER/HILL TORRENT OFFICER/READER TO MEMBERS BOARD OF REVENUE (BS-16)-2021, English Evening(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-665",
    "title": "TEHSILDAR/CONSOLIDATION OFFICER/HILL TORRENT OFFICER/READER TO MEMBERS BOARD OF REVENUE (BS-16)-2021 General Knowledge-Evening(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-664",
    "title": "TEHSILDAR/ CONSOLIDATION OFFICER/HILL TORRENT OFFICER/READER TO MEMBERS BOARD OF REVENUE (BS-16)-2021 English Morning(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 59,
    "difficulty": "Official Past Paper",
    "questionsCount": 59
  },
  {
    "id": "ppsc-archive-663",
    "title": "TEHSILDAR/CONSOLIDATION OFFICER/HILL TORRENT OFFICER/READER TO MEMBERS BOARD OF REVENUE (BS-16)-2021 General Knowledge-Morning(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-662",
    "title": "Assistant Sub Inspector (BS-9) Held In 2021(2021)Punjab Police",
    "year": 2021,
    "department": "Punjab Police Department",
    "bps": "BS-9",
    "totalMCQs": 87,
    "difficulty": "Official Past Paper",
    "questionsCount": 87
  },
  {
    "id": "ppsc-archive-661",
    "title": "PROVINCIAL MANAGEMENT SERVICE/COMBINED COMPETITIVE EXAMINATION-2021 (BS-17)(2021)Provincial Management Service(PMS)",
    "year": 2021,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-304",
    "title": "Lecturer Urdu (Female)(2021)Education",
    "year": 2021,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-303",
    "title": "Lecturer Urdu (Male)(2021)Education",
    "year": 2021,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-302",
    "title": "Junior Clerk(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-276",
    "title": "Store Officer(2021)Punjab Agriculture",
    "year": 2021,
    "department": "Agriculture Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-275",
    "title": "Assistant(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-274",
    "title": "Assistant(2021)Planning and Development",
    "year": 2021,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-273",
    "title": "Office Assistant(2021)Planning and Development",
    "year": 2021,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-272",
    "title": "Assistant(2021)Planning and Development",
    "year": 2021,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-271",
    "title": "Head Clerk/Assistant(2021)Planning and Development",
    "year": 2021,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-270",
    "title": "Assistant Director Administration(2021)Planning and Development",
    "year": 2021,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-268",
    "title": "Lecturer Islamiat(2021)Education",
    "year": 2021,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-267",
    "title": "Lecturer Islamiat(2021)Education",
    "year": 2021,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-266",
    "title": "Lecturer History(2021)Education",
    "year": 2021,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-265",
    "title": "Lecturer History(2021)Education",
    "year": 2021,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-264",
    "title": "Assistant(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-263",
    "title": "Assistant(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "Official Past Paper",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-262",
    "title": "Tehsildar/ Consolidation Officer(English) (2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 90,
    "difficulty": "Official Past Paper",
    "questionsCount": 90
  },
  {
    "id": "ppsc-archive-261",
    "title": "Tehsildar/ Consolidation Officer(General Knowledge)(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-260",
    "title": "Tehsildar/ Consolidation Officer (English)(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-259",
    "title": "Tehsildar/ Consolidation Officer(General Knowledge)(2021)Board of Revenue",
    "year": 2021,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-258",
    "title": "Assistant Sub Inspector (Service Quota) (2021)Punjab Police",
    "year": 2021,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-257",
    "title": "Sub Inspector (Service Quota)(2021)Punjab Police",
    "year": 2021,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-255",
    "title": "Assistant(2021)Livestock & Dairy Development",
    "year": 2021,
    "department": "Livestock & Dairy Development",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-247",
    "title": "Probation Officer(2021)Home",
    "year": 2021,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-301",
    "title": "Assistant(2020)Punjab Police",
    "year": 2020,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-300",
    "title": "Assistant Director (Investigation)(2020)Anti Corruption Establishment",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-299",
    "title": "Assistant Sub Inspector(2020)Anti Corruption Establishment",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-298",
    "title": "Assistant Sub Inspector(2020)Anti Corruption Establishment",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-297",
    "title": "Assistant(2020)Anti Corruption Establishment",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-296",
    "title": "Junior Clerk(2020)Anti Corruption Establishment",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-295",
    "title": "Ziladar(2020)Irrigation and Power",
    "year": 2020,
    "department": "Irrigation Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-294",
    "title": "Ziladar(2020)Irrigation and Power",
    "year": 2020,
    "department": "Irrigation Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-293",
    "title": "Assistant Director(2020)Local Government",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-292",
    "title": "Assistant(2020)Local Government",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-291",
    "title": "Assistant(2020)Punjab Agriculture",
    "year": 2020,
    "department": "Agriculture Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-290",
    "title": "Assistant(2020)Livestock & Dairy Development",
    "year": 2020,
    "department": "Livestock & Dairy Development",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-289",
    "title": "Assistant(2020)Zakat and Ushr",
    "year": 2020,
    "department": "Zakat & Ushr Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-288",
    "title": "Manager Auqaf(2020)Auqaf",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-287",
    "title": "Labour Officer(2020)Labour and Human Resource",
    "year": 2020,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-286",
    "title": "Labour Inspector(2020)Labour and Human Resource",
    "year": 2020,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-285",
    "title": "Service Centre Officials (2020)Land Record Authority",
    "year": 2020,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 40,
    "difficulty": "Official Past Paper",
    "questionsCount": 40
  },
  {
    "id": "ppsc-archive-284",
    "title": "Assistant(2020)Land Record Authority",
    "year": 2020,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 97,
    "difficulty": "Official Past Paper",
    "questionsCount": 97
  },
  {
    "id": "ppsc-archive-283",
    "title": "Service Centre Officials (2020)Land Record Authority",
    "year": 2020,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-282",
    "title": "Assistant(2020)Land Record Authority",
    "year": 2020,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-281",
    "title": "Assistant(2020)Finance, Audit and Accounts",
    "year": 2020,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-280",
    "title": "Accountant(2020)Local Government",
    "year": 2020,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-279",
    "title": "Personal Staff Officer(2020)Services and General Administration",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-278",
    "title": "Data Entry Operator(2020)Punjab Police",
    "year": 2020,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-277",
    "title": "Assistant Director(2020)Punjab Public Service Commission (PPSC)",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-256",
    "title": "Provincial Management Service(2020)Provincial Management Service(PMS)",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-230",
    "title": "Assistant(2020)Miscellaneous",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-224",
    "title": "Lecturer Islamiat(2020)Education",
    "year": 2020,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-168",
    "title": "Personal Assistant(2020)Services and General Administration",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-167",
    "title": "Librarian(2020)Services and General Administration",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-122",
    "title": "Deputy Director(2020)Punjab Population Welfare",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-120",
    "title": "Assistant Director(2020)Punjab Population Welfare",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-116",
    "title": "Assistant (2020)Punjab Employees Social Security Institution (PESSI)",
    "year": 2020,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-105",
    "title": "Assistant(2020)Labour and Human Resource",
    "year": 2020,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-675",
    "title": "Assistant Director (BS-17) Held in 2019(2019)Punjab Employees Social Security Institution (PESSI)",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-17",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-674",
    "title": "District Zakat Officer (BS-17) Held in 2019(2019)Zakat and Ushr",
    "year": 2019,
    "department": "Zakat & Ushr Department",
    "bps": "BS-17",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-225",
    "title": "Assistant(2019)Miscellaneous",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 95,
    "difficulty": "Official Past Paper",
    "questionsCount": 95
  },
  {
    "id": "ppsc-archive-222",
    "title": "Junior Clerk(2019)Miscellaneous",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-218",
    "title": "Divisional Coach(2019)Miscellaneous",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 93,
    "difficulty": "Official Past Paper",
    "questionsCount": 93
  },
  {
    "id": "ppsc-archive-217",
    "title": "Inspector Youth Affairs(2019)Miscellaneous",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-216",
    "title": "Transport Sub Inspector(2019)Miscellaneous",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 91,
    "difficulty": "Official Past Paper",
    "questionsCount": 91
  },
  {
    "id": "ppsc-archive-211",
    "title": "ESE General(2019)Education",
    "year": 2019,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-210",
    "title": "ESE General(2019)Education",
    "year": 2019,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-209",
    "title": "ESE Urdu(2019)Education",
    "year": 2019,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-208",
    "title": "Elementary School Educator General(2019)Education",
    "year": 2019,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-206",
    "title": "Assistant Professor Urdu(2019)Education",
    "year": 2019,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-181",
    "title": "Junior Clerk(2019)Punjab Public Service Commission (PPSC)",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-177",
    "title": "Assistant(2019)Punjab Public Service Commission (PPSC)",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "Official Past Paper",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-176",
    "title": "Assistant (2019)Punjab Public Service Commission (PPSC)",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "Official Past Paper",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-175",
    "title": "Caretaker(2019)Punjab Public Service Commission (PPSC)",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 86,
    "difficulty": "Official Past Paper",
    "questionsCount": 86
  },
  {
    "id": "ppsc-archive-171",
    "title": "Junior Clerk(2019)Services and General Administration",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-169",
    "title": "Assistant Protocol Officer (2019)Services and General Administration",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 82,
    "difficulty": "Official Past Paper",
    "questionsCount": 82
  },
  {
    "id": "ppsc-archive-165",
    "title": "Assistant (2019)Planning and Development",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-163",
    "title": "Assistant Director Planning(2019)Planning and Development",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-155",
    "title": "Deputy Accountant(2019)Finance, Audit and Accounts",
    "year": 2019,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-154",
    "title": "Deputy Accountant(2019)Finance, Audit and Accounts",
    "year": 2019,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-125",
    "title": "Assistant (2019)Punjab Population Welfare",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-115",
    "title": "Junior Clerk(2019)Labour and Human Resource",
    "year": 2019,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-108",
    "title": "Labour Inspector(2019)Labour and Human Resource",
    "year": 2019,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 90,
    "difficulty": "Official Past Paper",
    "questionsCount": 90
  },
  {
    "id": "ppsc-archive-107",
    "title": "Assistant (2019)Labour and Human Resource",
    "year": 2019,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-106",
    "title": "Assistant (2019)Labour and Human Resource",
    "year": 2019,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-99",
    "title": "Caretaker(2019)Labour and Human Resource",
    "year": 2019,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-95",
    "title": "Assistant Director(2019)Labour and Human Resource",
    "year": 2019,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-86",
    "title": "Inspector Cooperative Societies(2019)Punjab Cooperatives",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-30",
    "title": "Assistant Sub-Inspector(2019)Punjab Police",
    "year": 2019,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-22",
    "title": "Sub Inspector (Service Quota)(2019)Punjab Police",
    "year": 2019,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-21",
    "title": "Sub Inspector (Open Merit)(2019)Punjab Police",
    "year": 2019,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-8",
    "title": "Provincial Management Service (Ministerial Quota)(2019)Provincial Management Service(PMS)",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-7",
    "title": "Provincial Management Service(2019)Provincial Management Service(PMS)",
    "year": 2019,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-231",
    "title": "Assistant (Ext) AH(2018)Miscellaneous",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-226",
    "title": "Junior Clerk(2018)Miscellaneous",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-221",
    "title": "Assistant Director Admin/General Transport(2018)Miscellaneous",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-220",
    "title": "Assistant(2018)Miscellaneous",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-219",
    "title": "Gender Monitoring Specialist(2018)Miscellaneous",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-212",
    "title": "Educator(2018)Education",
    "year": 2018,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-192",
    "title": "Lecturer Pakistan Studies(2018)Education",
    "year": 2018,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-182",
    "title": "Junior Clerk(2018)Punjab Public Service Commission (PPSC)",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 78,
    "difficulty": "Official Past Paper",
    "questionsCount": 78
  },
  {
    "id": "ppsc-archive-178",
    "title": "Assistant (2018)Punjab Public Service Commission (PPSC)",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-172",
    "title": "Junior Clerk(2018)Services and General Administration",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-170",
    "title": "Assistant(2018)Services and General Administration",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-152",
    "title": "Service Center Officials(2018)Land Record Authority",
    "year": 2018,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-149",
    "title": "Assistant Director(2018)Land Record Authority",
    "year": 2018,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-147",
    "title": "Assistant Director(2018)Local Government",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-146",
    "title": "Assistant (2018)Punjab Agriculture",
    "year": 2018,
    "department": "Agriculture Department",
    "bps": "BS-16",
    "totalMCQs": 98,
    "difficulty": "Official Past Paper",
    "questionsCount": 98
  },
  {
    "id": "ppsc-archive-145",
    "title": "Field Assistant(2018)Punjab Agriculture",
    "year": 2018,
    "department": "Agriculture Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-144",
    "title": "Field Assistant(2018)Punjab Agriculture",
    "year": 2018,
    "department": "Agriculture Department",
    "bps": "BS-16",
    "totalMCQs": 93,
    "difficulty": "Official Past Paper",
    "questionsCount": 93
  },
  {
    "id": "ppsc-archive-117",
    "title": "Social Security Officer(2018)Punjab Employees Social Security Institution (PESSI)",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-100",
    "title": "Labour Officer(2018)Labour and Human Resource",
    "year": 2018,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-89",
    "title": "Sub Inspector Cooperative Societies(2018)Punjab Cooperatives",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-54",
    "title": "Excise & Taxation Inspector (2018)Excise and Taxation",
    "year": 2018,
    "department": "Excise, Taxation & Narcotics Control",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-53",
    "title": "Excise & Taxation Inspector (2018)Excise and Taxation",
    "year": 2018,
    "department": "Excise, Taxation & Narcotics Control",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-52",
    "title": "Excise & Taxation Inspector (2018)Excise and Taxation",
    "year": 2018,
    "department": "Excise, Taxation & Narcotics Control",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-51",
    "title": "Excise & Taxation Inspector (2018)Excise and Taxation",
    "year": 2018,
    "department": "Excise, Taxation & Narcotics Control",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-44",
    "title": "Junior Clerk(2018)Punjab Police",
    "year": 2018,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-9",
    "title": "Provincial Management Service(2018)Provincial Management Service(PMS)",
    "year": 2018,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-227",
    "title": "Junior Clerk(2017)Miscellaneous",
    "year": 2017,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-223",
    "title": "Junior Clerk(2017)Miscellaneous",
    "year": 2017,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 81,
    "difficulty": "Official Past Paper",
    "questionsCount": 81
  },
  {
    "id": "ppsc-archive-207",
    "title": "Lecturer Urdu(2017)Education",
    "year": 2017,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-202",
    "title": "Lecturer Islamyat(2017)Education",
    "year": 2017,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-196",
    "title": "Lecturer History(2017)Education",
    "year": 2017,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-195",
    "title": "Assistant Professor History(2017)Education",
    "year": 2017,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-191",
    "title": "Assistant Professor Pakistan Studies(2017)Education",
    "year": 2017,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-187",
    "title": "Data Entry Operator(2017)Computer and Information Technology",
    "year": 2017,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-185",
    "title": "Lecturer Computer Science(2017)Computer and Information Technology",
    "year": 2017,
    "department": "Higher Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-174",
    "title": "Branch Officer(2017)Punjab Public Service Commission (PPSC)",
    "year": 2017,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-173",
    "title": "Junior Clerk(2017)Services and General Administration",
    "year": 2017,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 98,
    "difficulty": "Official Past Paper",
    "questionsCount": 98
  },
  {
    "id": "ppsc-archive-121",
    "title": "Assistant Director(2017)Punjab Population Welfare",
    "year": 2017,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-109",
    "title": "Labour Inspector(2017)Labour and Human Resource",
    "year": 2017,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-96",
    "title": "Assistant Director(2017)Labour and Human Resource",
    "year": 2017,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-91",
    "title": "Manager Auqaf(2017)Auqaf",
    "year": 2017,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-90",
    "title": "Sub Inspector Cooperative Societies(2017)Punjab Cooperatives",
    "year": 2017,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-87",
    "title": "Inspector Cooperative Societies(2017)Punjab Cooperatives",
    "year": 2017,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-70",
    "title": "Junior Patrol Officer(2017)Patrolling Police in the Communication and Works",
    "year": 2017,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-45",
    "title": "Junior Clerk(2017)Punjab Police",
    "year": 2017,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-41",
    "title": "Assistant (2017)Punjab Police",
    "year": 2017,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-31",
    "title": "Assistant Sub-Inspector (Service Quota))(2017)Punjab Police",
    "year": 2017,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-23",
    "title": "Sub Inspector (2017)Punjab Police",
    "year": 2017,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-373",
    "title": "Subject Specialist Urdu(2016)Education",
    "year": 2016,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-368",
    "title": "Urdu Model Paper 16(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-367",
    "title": "Urdu Model Paper 15(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-366",
    "title": "Urdu Model Paper 14(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-365",
    "title": "Urdu Model Paper 13(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-364",
    "title": "Urdu Model Paper 12(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-363",
    "title": "Urdu Model Paper 11(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-362",
    "title": "Urdu Model Paper 10(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-359",
    "title": "Urdu Model Paper 7(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-358",
    "title": "Urdu Model Paper 6(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-357",
    "title": "Urdu Model Paper 5(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-356",
    "title": "Urdu Model Paper 4(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-355",
    "title": "Urdu Model Paper 3(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-354",
    "title": "Urdu Model Paper 2(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-353",
    "title": "Urdu Model Paper 1(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-334",
    "title": "Math Model Paper 8(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 26,
    "difficulty": "Official Past Paper",
    "questionsCount": 26
  },
  {
    "id": "ppsc-archive-332",
    "title": "Math Model Paper 6(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 1,
    "difficulty": "Official Past Paper",
    "questionsCount": 1
  },
  {
    "id": "ppsc-archive-330",
    "title": "Math Model Paper 4(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-328",
    "title": "Math Model Paper 2(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-327",
    "title": "Math Model Paper 1(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-326",
    "title": "English Model Paper 6(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "Official Past Paper",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-325",
    "title": "English Model Paper 5(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-324",
    "title": "English Model Paper 4(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-322",
    "title": "English Model Paper 3(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-321",
    "title": "English Model Paper 2(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-320",
    "title": "English Model Paper 1(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-319",
    "title": "Model Paper 13(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 54,
    "difficulty": "Official Past Paper",
    "questionsCount": 54
  },
  {
    "id": "ppsc-archive-318",
    "title": "Model Paper 12(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-317",
    "title": "Model Paper 11(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-316",
    "title": "Model Paper 10(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-315",
    "title": "Model Paper 9(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-314",
    "title": "Model Paper 8(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-313",
    "title": "Model Paper 7(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-312",
    "title": "Model Paper 6(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-311",
    "title": "Model Paper 5(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-310",
    "title": "Model Paper 4(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-309",
    "title": "Model Paper 3(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-308",
    "title": "Model Paper 2(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-307",
    "title": "Model Paper 1(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-233",
    "title": "Assistant (2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-232",
    "title": "Assistant (Ext) AH(2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "Official Past Paper",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-229",
    "title": "Instructor (2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-228",
    "title": "Assistant (2016)Miscellaneous",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-201",
    "title": "Subject Specialist History/Pakistan Studies(2016)Education",
    "year": 2016,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-189",
    "title": "Data Entry Operator(2016)Computer and Information Technology",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-188",
    "title": "Data Entry Operator(2016)Computer and Information Technology",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-183",
    "title": "Junior Clerk(2016)Punjab Public Service Commission (PPSC)",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-179",
    "title": "Assistant (2016)Punjab Public Service Commission (PPSC)",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-166",
    "title": "Assistant (2016)Planning and Development",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-153",
    "title": "Chief of Section /Executive District Officer(2016)Finance, Audit and Accounts",
    "year": 2016,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-151",
    "title": "Land Record Officer(2016)Land Record Authority",
    "year": 2016,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-126",
    "title": "Food Safety Officer(2016)Punjab Food Authority",
    "year": 2016,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-110",
    "title": "Labour Inspector(2016)Labour and Human Resource",
    "year": 2016,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-101",
    "title": "Labour Officer(2016)Labour and Human Resource",
    "year": 2016,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-82",
    "title": "Assistant Registrar (2016)Punjab Cooperatives",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "Official Past Paper",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-62",
    "title": "Assistant Superintendent Jail(2016)Punjab Prison/Jail",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-59",
    "title": "Deputy Superintendent Jail(2016)Punjab Prison/Jail",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-55",
    "title": "Excise & Taxation Inspector (2016)Excise and Taxation",
    "year": 2016,
    "department": "Excise, Taxation & Narcotics Control",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-48",
    "title": "Inspector(2016)Anti Corruption Establishment",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-47",
    "title": "Inspector in (S& GAD)(2016)Anti Corruption Establishment",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-32",
    "title": "Assistant Sub-Inspector(2016)Punjab Police",
    "year": 2016,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 101,
    "difficulty": "Official Past Paper",
    "questionsCount": 101
  },
  {
    "id": "ppsc-archive-24",
    "title": "Sub Inspector (Open Merit)(2016)Punjab Police",
    "year": 2016,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-10",
    "title": "Provincial Management Service(2016)Provincial Management Service(PMS)",
    "year": 2016,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-372",
    "title": "Assistant professor urdu(2015)Education",
    "year": 2015,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 2,
    "difficulty": "Official Past Paper",
    "questionsCount": 2
  },
  {
    "id": "ppsc-archive-215",
    "title": "Religious Teacher(2015)Education",
    "year": 2015,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-213",
    "title": "Educator(2015)Education",
    "year": 2015,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-204",
    "title": "Lecturer Islamyat(2015)Education",
    "year": 2015,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-203",
    "title": "Lecturer Islamyat(2015)Education",
    "year": 2015,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-200",
    "title": "Senior Subject Specialist History/Pakistan Studies(2015)Education",
    "year": 2015,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-199",
    "title": "Lecturer Political Science(2015)Education",
    "year": 2015,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-197",
    "title": "Lecturer History(2015)Education",
    "year": 2015,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-193",
    "title": "Lecturer Pakistan Studies(2015)Education",
    "year": 2015,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-190",
    "title": "Data Entry Operator(2015)Computer and Information Technology",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-186",
    "title": "Computer Programmer/Data Control Officer(2015)Computer and Information Technology",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-184",
    "title": "Junior Clerk(2015)Punjab Public Service Commission (PPSC)",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-180",
    "title": "Assistant (2015)Punjab Public Service Commission (PPSC)",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-148",
    "title": "Assistant Director(2015)Local Government",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-118",
    "title": "Social Security Officer(2015)Punjab Employees Social Security Institution (PESSI)",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-114",
    "title": "Accountant(2015)Labour and Human Resource",
    "year": 2015,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-111",
    "title": "Labour Inspector(2015)Labour and Human Resource",
    "year": 2015,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-102",
    "title": "Labour Officer(2015)Labour and Human Resource",
    "year": 2015,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-76",
    "title": "Chief Staff Officer(2015)Civil Defence In the Punjab Home",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-75",
    "title": "Chief Staff Officer(2015)Civil Defence In the Punjab Home",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-74",
    "title": "Chief Staff Officer(2015)Civil Defence In the Punjab Home",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-73",
    "title": "District Officer Civil Defence(2015)Civil Defence In the Punjab Home",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-72",
    "title": "Junior Patrol Officer(2015)Patrolling Police in the Communication and Works",
    "year": 2015,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-71",
    "title": "Junior Patrol Officer(2015)Patrolling Police in the Communication and Works",
    "year": 2015,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-64",
    "title": "Assistant Superintendent Jail (Female)(2015)Punjab Prison/Jail",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-63",
    "title": "Assistant Superintendent Jail(2015)Punjab Prison/Jail",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-60",
    "title": "Deputy Superintendent Jail(2015)Punjab Prison/Jail",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-49",
    "title": "Assistant Sub-Inspector(2015)Anti Corruption Establishment",
    "year": 2015,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-46",
    "title": "Assistant Director (Investigation)(2015)Anti Corruption Establishment",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-42",
    "title": "Assistant (2015)Punjab Police",
    "year": 2015,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-33",
    "title": "Assistant Sub-Inspector(2015)Punjab Police",
    "year": 2015,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-27",
    "title": "Sub Inspector(2015)Punjab Police",
    "year": 2015,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-26",
    "title": "Sub Inspector (Service Quota)(2015)Punjab Police",
    "year": 2015,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-25",
    "title": "Sub Inspector (Open Merit)(2015)Punjab Police",
    "year": 2015,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-18",
    "title": "Inspector Legal (Special Cadre) II(2015)Punjab Police",
    "year": 2015,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-17",
    "title": "Inspector Legal (Special Cadre) I(2015)Punjab Police",
    "year": 2015,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-11",
    "title": "Provincial Management Service(2015)Provincial Management Service(PMS)",
    "year": 2015,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-214",
    "title": "Health Educator(2014)Education",
    "year": 2014,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-164",
    "title": "Planning Officer(2014)Planning and Development",
    "year": 2014,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-127",
    "title": "Assistant Food Controller(2014)Punjab Food Authority",
    "year": 2014,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-124",
    "title": "Accounts Officer(2014)Punjab Population Welfare",
    "year": 2014,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-123",
    "title": "Population Officer(2014)Punjab Population Welfare",
    "year": 2014,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-94",
    "title": "Public Relation Officer(2014)Auqaf",
    "year": 2014,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-92",
    "title": "Manager Auqaf(2014)Auqaf",
    "year": 2014,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-77",
    "title": "District Zakat Officer(2014)Zakat and Ushr",
    "year": 2014,
    "department": "Zakat & Ushr Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-56",
    "title": "Excise & Taxation Inspector (2014)Excise and Taxation",
    "year": 2014,
    "department": "Excise, Taxation & Narcotics Control",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-29",
    "title": "Sub Inspector (2014)Punjab Police",
    "year": 2014,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-28",
    "title": "Sub Inspector(2014)Punjab Police",
    "year": 2014,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-12",
    "title": "Provincial Management Service(2014)Provincial Management Service(PMS)",
    "year": 2014,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-370",
    "title": "Subject Specialist Urdu(2013)Education",
    "year": 2013,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-198",
    "title": "Lecturer History(2013)Education",
    "year": 2013,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-132",
    "title": "Food Grains Inspector(2013)Punjab Food Authority",
    "year": 2013,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-97",
    "title": "Assistant Director(2013)Labour and Human Resource",
    "year": 2013,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-85",
    "title": "Assistant Registrar (2013)Punjab Cooperatives",
    "year": 2013,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-84",
    "title": "Assistant Registrar (2013)Punjab Cooperatives",
    "year": 2013,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-83",
    "title": "Assistant Registrar (2013)Punjab Cooperatives",
    "year": 2013,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-68",
    "title": "Traffic Warden(2013)Traffic Warden in the Punjab Police",
    "year": 2013,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-67",
    "title": "Chief Warder(2013)Punjab Prison/Jail",
    "year": 2013,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-65",
    "title": "Assistant Superintendent Jail(2013)Punjab Prison/Jail",
    "year": 2013,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 93,
    "difficulty": "Official Past Paper",
    "questionsCount": 93
  },
  {
    "id": "ppsc-archive-61",
    "title": "Deputy Superintendent Jail(2013)Punjab Prison/Jail",
    "year": 2013,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-20",
    "title": "Inspector Legal II(2013)Punjab Police",
    "year": 2013,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-19",
    "title": "Inspector Legal I(2013)Punjab Police",
    "year": 2013,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-160",
    "title": "Deputy Accountant(2012)Finance, Audit and Accounts",
    "year": 2012,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-156",
    "title": "Deputy Account Officer(2012)Finance, Audit and Accounts",
    "year": 2012,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-150",
    "title": "Assistant Director(2012)Land Record Authority",
    "year": 2012,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-140",
    "title": "Tehsildars(2012)Irrigation and Power",
    "year": 2012,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-98",
    "title": "Assistant Director(2012)Labour and Human Resource",
    "year": 2012,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-93",
    "title": "Manager Auqaf(2012)Auqaf",
    "year": 2012,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-88",
    "title": "Inspector Cooperative Societies(2012)Punjab Cooperatives",
    "year": 2012,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-34",
    "title": "Assistant Sub-Inspector(2012)Punjab Police",
    "year": 2012,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-13",
    "title": "Combined Competitive Examination(PMS)(2012)Provincial Management Service(PMS)",
    "year": 2012,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-369",
    "title": "Lecturer Urdu(2011)Education",
    "year": 2011,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-205",
    "title": "Lecturer Islamyat(2011)Education",
    "year": 2011,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-194",
    "title": "Lecturer Pakistan Studies(2011)Education",
    "year": 2011,
    "department": "School Education Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-162",
    "title": "Assistant(2011)Finance, Audit and Accounts",
    "year": 2011,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-161",
    "title": "Accounts Officer(2011)Finance, Audit and Accounts",
    "year": 2011,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-157",
    "title": "Senior Auditor(2011)Finance, Audit and Accounts",
    "year": 2011,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-139",
    "title": "Zilladar(2011)Irrigation and Power",
    "year": 2011,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-137",
    "title": "Zilladars(2011)Irrigation and Power",
    "year": 2011,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-136",
    "title": "Food Grains Supervisors(2011)Punjab Food Authority",
    "year": 2011,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-135",
    "title": "Food Inspector(2011)Punjab Food Authority",
    "year": 2011,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 88,
    "difficulty": "Official Past Paper",
    "questionsCount": 88
  },
  {
    "id": "ppsc-archive-134",
    "title": "Food Inspector(2011)Punjab Food Authority",
    "year": 2011,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-133",
    "title": "Food Grains Inspector(2011)Punjab Food Authority",
    "year": 2011,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-119",
    "title": "Social Security Officer(2011)Punjab Employees Social Security Institution (PESSI)",
    "year": 2011,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-112",
    "title": "Labour Inspector(2011)Labour and Human Resource",
    "year": 2011,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-104",
    "title": "Labour Officer(2011)Labour and Human Resource",
    "year": 2011,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-103",
    "title": "Labour Officer(2011)Labour and Human Resource",
    "year": 2011,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 98,
    "difficulty": "Official Past Paper",
    "questionsCount": 98
  },
  {
    "id": "ppsc-archive-69",
    "title": "Traffic Warden(2011)Traffic Warden in the Punjab Police",
    "year": 2011,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-50",
    "title": "Assistant Sub-Inspector in (S& GAD) (2011)Anti Corruption Establishment",
    "year": 2011,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 77,
    "difficulty": "Official Past Paper",
    "questionsCount": 77
  },
  {
    "id": "ppsc-archive-35",
    "title": "Assistant Sub-Inspector(2011)Punjab Police",
    "year": 2011,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-159",
    "title": "Senior Auditor(2010)Finance, Audit and Accounts",
    "year": 2010,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-158",
    "title": "Auditor(2010)Finance, Audit and Accounts",
    "year": 2010,
    "department": "Finance Department & Treasuries",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-128",
    "title": "Assistant Food Controller(2010)Punjab Food Authority",
    "year": 2010,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 99,
    "difficulty": "Official Past Paper",
    "questionsCount": 99
  },
  {
    "id": "ppsc-archive-78",
    "title": "District Zakat Officer(2010)Zakat and Ushr",
    "year": 2010,
    "department": "Zakat & Ushr Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-66",
    "title": "Assistant Superintendent Jail(2010)Punjab Prison/Jail",
    "year": 2010,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-57",
    "title": "Excise & Taxation Inspector (2010)Punjab Police",
    "year": 2010,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-43",
    "title": "Assistant (2010)Punjab Police",
    "year": 2010,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "Official Past Paper",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-142",
    "title": "Naib Tehsildar(2009)Irrigation and Power",
    "year": 2024,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-79",
    "title": "District Zakat Officer(2009)Zakat and Ushr",
    "year": 2024,
    "department": "Zakat & Ushr Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-37",
    "title": "Assistant Sub-Inspector(2009)Punjab Police",
    "year": 2024,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-36",
    "title": "Assistant Sub-Inspector(2009)Punjab Police",
    "year": 2024,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 98,
    "difficulty": "High-Yield Recent",
    "questionsCount": 98
  },
  {
    "id": "ppsc-archive-14",
    "title": "Combined Competitive Examination(2009)Provincial Management Service(PMS)",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-143",
    "title": "Naib Tehsildar(2008)Irrigation and Power",
    "year": 2024,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-131",
    "title": "Assistant Food Controller(2008)Punjab Food Authority",
    "year": 2024,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-130",
    "title": "Assistant Food Controller(2008)Punjab Food Authority",
    "year": 2024,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-129",
    "title": "Assistant Food Controller(2008)Punjab Food Authority",
    "year": 2024,
    "department": "Food Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-81",
    "title": "District Zakat Officer(2008)Zakat and Ushr",
    "year": 2024,
    "department": "Zakat & Ushr Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-80",
    "title": "District Zakat Officer(2008)Zakat and Ushr",
    "year": 2024,
    "department": "Zakat & Ushr Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-58",
    "title": "Excise & Taxation Inspector (2008)Excise and Taxation",
    "year": 2024,
    "department": "Excise, Taxation & Narcotics Control",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-38",
    "title": "Assistant Sub-Inspector(2008)Punjab Police",
    "year": 2024,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-39",
    "title": "Assistant Sub-Inspector(2006)Punjab Police",
    "year": 2024,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-15",
    "title": "PMS General Knowledge Paper(2006)Provincial Management Service(PMS)",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-16",
    "title": "Combined Competitive Examination(PMS)(2005)Provincial Management Service(PMS)",
    "year": 2024,
    "department": "General PPSC / Services & General Admin",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-138",
    "title": "Zilladar(2004)Irrigation and Power",
    "year": 2024,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 91,
    "difficulty": "High-Yield Recent",
    "questionsCount": 91
  },
  {
    "id": "ppsc-archive-113",
    "title": "Labour Inspector(2004)Labour and Human Resource",
    "year": 2024,
    "department": "Labour & Human Resource Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-141",
    "title": "Tehsildars/Assistant Registrar(2003)Irrigation and Power",
    "year": 2024,
    "department": "Board of Revenue & Land Records",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  },
  {
    "id": "ppsc-archive-40",
    "title": "Assistant Sub-Inspector(2002)Punjab Police",
    "year": 2024,
    "department": "Punjab Police Department",
    "bps": "BS-16",
    "totalMCQs": 100,
    "difficulty": "High-Yield Recent",
    "questionsCount": 100
  }
];

const PPSC_SYLLABUS = {
  generalAbility: {
    title: "General Ability (GK) Standard 100-Marks Paper",
    durationMinutes: 90,
    negativeMarkingPenalty: 0.25,
    passMarks: 40,
    sections: [
      {
        id: "gk",
        name: "General Knowledge",
        weight: "20-25%",
        icon: "fa-earth-americas",
        color: "#3b82f6",
        topics: [
          "Physical Geography, Continents, Oceans & Mountain Ranges",
          "International Organizations (UN, OIC, SAARC, SCO, IMF, World Bank)",
          "World Capitals, Currencies, Parliaments & Airlines",
          "Famous Straits, Canals, Deserts, Lakes & Rivers",
          "Important Historical Treaties, Battles & World Milestones"
        ]
      },
      {
        id: "pak",
        name: "Pakistan Studies",
        weight: "15-20%",
        icon: "fa-landmark",
        color: "#10b981",
        topics: [
          "Pre-1947 Freedom Movement, Sir Syed, Allama Iqbal & Quaid-e-Azam",
          "Post-1947 Constitutional History (1956, 1962, 1973 & Major Amendments)",
          "Pakistan Geography, Rivers, Dams, Barrages & Mineral Resources",
          "Administrative Setup, Judiciary, Armed Forces & National Honors",
          "Foreign Policy, CPEC, Strategic Alliances & Bilateral Treaties"
        ]
      },
      {
        id: "isl",
        name: "Islamic Studies",
        weight: "10-15%",
        icon: "fa-mosque",
        color: "#059669",
        topics: [
          "Life of the Holy Prophet (PBUH), Makkan & Madinan Eras",
          "Battles of Islam (Badr, Uhud, Khandaq, Hunain, Tabuk, Treaty of Hudaibiya)",
          "Pillars of Islam (Tauheed, Salat, Zakat, Sawm, Hajj - Jurisprudence)",
          "Quranic Revelations, Surahs, Prophets & Islamic Jurisprudence",
          "Era of Khulafa-e-Rashideen & Islamic Heritage"
        ]
      },
      {
        id: "sci",
        name: "Everyday Science",
        weight: "10-15%",
        icon: "fa-flask-vial",
        color: "#f59e0b",
        topics: [
          "Human Physiology, Vital Organs, Blood Groups, Vitamins & Diseases",
          "Physics: Optics, Thermodynamics, Electricity, SI Units & Laws of Motion",
          "Chemistry: Acids, Bases, Periodic Table, Polymers & Environmental Chemistry",
          "Atmosphere, Layers, Ozone Depletion & Climate Science",
          "Astronomy: Solar System, Kepler's Laws, Stars & Space Missions"
        ]
      },
      {
        id: "comp",
        name: "Computer Science & IT",
        weight: "10-15%",
        icon: "fa-laptop-code",
        color: "#06b6d4",
        topics: [
          "MS Word, Excel & PowerPoint (Formulas, Ribbon, Shortcuts & Macros)",
          "Computer Hardware, CPU, Memory Architecture (RAM, ROM, Cache, SSD)",
          "Networking Protocols (TCP/IP, HTTP/S, DNS, IPv4/IPv6, Subnets)",
          "Cybersecurity, Encryption, Malware, Firewalls & Digital Forensics",
          "Database Management Basics (SQL, Keys, Normalization) & Operating Systems"
        ]
      },
      {
        id: "math",
        name: "Basic Mathematics",
        weight: "10-15%",
        icon: "fa-calculator",
        color: "#8b5cf6",
        topics: [
          "Arithmetic: Ratios, Proportions, Percentages & Unitary Method",
          "Algebra: Linear & Quadratic Equations, Polynomials & Factoring",
          "Geometry: Areas, Perimeters, Angles, Circles & Triangles",
          "Financial Math: Profit & Loss, Simple & Compound Interest, Discount",
          "Data Interpretation: Averages, Means, Medians, Probability & Series"
        ]
      },
      {
        id: "ca",
        name: "Current Affairs",
        weight: "10-15%",
        icon: "fa-newspaper",
        color: "#ec4899",
        topics: [
          "National Political, Judicial & Economic Developments (2024-2026)",
          "Global Conflicts, Middle East, Ukraine, SCO & G20 Summits",
          "Key Appointments: Heads of State, Armed Forces Chiefs, Chief Justices",
          "International Awards, Nobel Prizes & Olympic/ICC Tournaments",
          "Economic Surveys, State Bank Rates, Budget & Global Indices"
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
  pastPapersArchive: VERIFIED_PAST_PAPERS
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PPSC_SYLLABUS,
    PPSC_DEPARTMENTS,
    GENERATED_245_PAST_PAPERS: VERIFIED_PAST_PAPERS,
    VERIFIED_PAST_PAPERS
  };
}
