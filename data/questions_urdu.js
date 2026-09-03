// PPSC Question Bank - Urdu Literature & Grammar Module (اردو ادب و قواعد)
const URDU_QUESTIONS = [
  {
    id: "URD-001",
    subject: "Urdu",
    category: "Literature / ادبی شخصیات",
    question: "اردو کے قومی شاعر علامہ محمد اقبال کا پہلا شعری مجموعہ کون سا تھا؟",
    options: ["بانگِ درا", "بالِ جبریل", "ضربِ کلیم", "ارمغانِ حجاز"],
    answer: "بانگِ درا",
    explanation: "علامہ اقبال کا پہلا اردو شعری مجموعہ 'بانگِ درا' 1924ء میں شائع ہوا۔ اس سے قبل فارسی میں 'اسرارِ خودی' (1915) شائع ہوا تھا۔",
    paperSource: "PPSC PMS Urdu Compulsory 2023",
    difficulty: "Easy"
  },
  {
    id: "URD-002",
    subject: "Urdu",
    category: "Proverbs / محاورات و ضرب الامثال",
    question: "محاورہ 'آبیل مجھے مار' کا صحیح مفہوم کیا ہے؟",
    options: ["جان بوجھ کر مصیبت مول لینا", "بہادری کا مظاہرہ کرنا", "غصے میں آپے سے باہر ہونا", "خاموشی اختیار کرنا"],
    answer: "جان بوجھ کر مصیبت مول لینا",
    explanation: "'آبیل مجھے مار' اس موقع پر بولا جاتا ہے جب کوئی شخص دانستہ طور پر خود کو خطرے یا مصیبت میں مبتلا کر لے۔",
    paperSource: "PPSC Sub-Inspector 2022",
    difficulty: "Easy"
  },
  {
    id: "URD-003",
    subject: "Urdu",
    category: "Grammar / علم بیان و اصناف",
    question: "مسدس نظم کی ایک بند میں کتنے مصرعے ہوتے ہیں؟",
    options: ["6 مصرعے", "4 مصرعے", "5 مصرعے", "8 مصرعے"],
    answer: "6 مصرعے",
    explanation: "مسدس عربی لفظ 'سدس' (چھ) سے ماخوذ ہے، یعنی ایسی نظم جس کے ہر بند میں 6 مصرعے ہوں۔ مولانا حالی کی 'مسدسِ حالی' اس کی مشہور مثال ہے۔",
    paperSource: "PPSC Junior Clerk 2023",
    difficulty: "Medium"
  },
  {
    id: "URD-004",
    subject: "Urdu",
    category: "Literature / مشہور تصانیف",
    question: "ناول 'پیر کامل' اور 'آبِ حیات' کی مصنفہ کون ہیں؟",
    options: ["عمیرہ احمد", "بانو قدسیہ", "خدیجہ مستور", "قرۃ العین حیدر"],
    answer: "عمیرہ احمد",
    explanation: "'پیر کامل' اور 'آبِ حیات' مشہور ناول نگار عمیرہ احمد کی تصانیف ہیں۔",
    paperSource: "PPSC Assistant 2023",
    difficulty: "Easy"
  },
  {
    id: "URD-005",
    subject: "Urdu",
    category: "Grammar",
    question: "وہ اسم جو کسی جاندار یا بے جان چیز کی طرف اشارہ کرنے کے لیے استعمال ہو، کیا کہلاتا ہے؟",
    options: ["اسم اشارہ", "اسم موصول", "اسم ضمیر", "اسم صفت"],
    answer: "اسم اشارہ",
    explanation: "اسم اشارہ وہ اسم ہے جس سے کسی چیز کی طرف اشارہ کیا جائے، جیسے 'یہ' یا 'وہ'۔",
    paperSource: "PPSC Junior Clerk 2023",
    difficulty: "Easy"
  },
  {
    id: "URD-006",
    subject: "Urdu",
    category: "Literature",
    question: "اردو غزل کا 'امام الغزل' کس عظیم شاعر کو کہا جاتا ہے؟",
    options: ["میر تقی میر", "مرزا اسد اللہ خان غالب", "خواجہ میر درد", "علامہ اقبال"],
    answer: "میر تقی میر",
    explanation: "میر تقی میر کو خدائے سخن اور امام الغزل کے القابات سے یاد کیا جاتا ہے۔",
    paperSource: "PPSC PMS Urdu 2022",
    difficulty: "Medium"
  },
  {
    id: "URD-007",
    subject: "Urdu",
    category: "Literature",
    question: "مشہور افسانہ 'ٹوبہ ٹیک سنگھ' کس ادیب کا لکھا ہوا ہے؟",
    options: ["سعادت حسن منٹو", "منشی پریم چند", "کرشن چندر", "احمد ندیم قاسمی"],
    answer: "سعادت حسن منٹو",
    explanation: "'ٹوبہ ٹیک سنگھ' تقسیمِ ہند کے پس منظر میں سعادت حسن منٹو کا شاہکار اور عالمی شہرت یافتہ افسانہ ہے۔",
    paperSource: "PPSC Lecturer Urdu 2021",
    difficulty: "Easy"
  },
  {
    id: "URD-008",
    subject: "Urdu",
    category: "Literature",
    question: "ناول 'راجہ گدھ' کس معروف مصنفہ کی شاہکار تخلیق ہے؟",
    options: ["بانو قدسیہ", "عصمت چغتائی", "خدیجہ مستور", "فاطمہ ثریا بجیا"],
    answer: "بانو قدسیہ",
    explanation: "'راجہ گدھ' اردو ادب کا ممتاز ناول ہے جسے بانو قدسیہ (اہلیہ اشفاق احمد) نے لکھا۔",
    paperSource: "PPSC Assistant S&GAD 2023",
    difficulty: "Easy"
  }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = URDU_QUESTIONS; }
