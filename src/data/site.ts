import type { FaqItem, Review, SiteSettings } from "@/types/commerce";

export const siteSettings: SiteSettings = {
  brandName: "LUXE & GLAM",
  legalName: "בוטיק הפרימיום",
  businessId: "987654321",
  phone: "050-0000000",
  whatsapp: "972500000000",
  email: "vip@luxeglam.co.il",
  address: "מתחם פרימיום · חנות בוטיק",
  hours: "א׳–ה׳ 09:00–19:00 · ו׳ 09:00–13:00 · האתר פתוח 24/7",
  shippingFlatIls: 35,
  freeShippingFromIls: 400,
  launchCouponCode: "LAUNCH10",
  launchCouponPercent: 10,
};

export const reviews: Review[] = [
  {
    id: "r1",
    author: "נועה ל.",
    city: "תל אביב",
    rating: 5,
    body: "המארז הגיע עטוף כמו בחנות יוקרה. פתחתי מול החברה — היא חשבה שקניתי בחו״ל.",
    productSlug: "vip-flagship-set",
    source: "whatsapp",
  },
  {
    id: "r2",
    author: "יעל מ.",
    city: "הרצליה",
    rating: 5,
    body: "שירות VIP מסודר, עדכון בוואטסאפ ברגע שהחבילה יצאה. בדיוק מה שחיפשתי.",
    source: "site",
  },
  {
    id: "r3",
    author: "דנה ש.",
    city: "חיפה",
    rating: 5,
    body: "הזהב על האריזה נראה יקר בלי להיות מצועצע. אריזת מתנה שסוגרת כל אירוע.",
    productSlug: "gold-glow-ritual",
    source: "whatsapp",
  },
  {
    id: "r4",
    author: "מיכל ר.",
    city: "רעננה",
    rating: 4,
    body: "המשלוח הגיע תוך יומיים. המוצר עצמו מדויק לתמונה — בלי הפתעות.",
    productSlug: "velvet-blush-kit",
    source: "site",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "f1",
    question: "כמה זמן לוקח משלוח?",
    answer:
      "אריזה תוך 1–2 ימי עסקים. משלוח אקספרס לכל הארץ — בדרך כלל עד 2–4 ימי עסקים נוספים.",
  },
  {
    id: "f2",
    question: "מה מדיניות ההחלפות והביטולים?",
    answer:
      "ביטול לפי חוק הגנת הצרכן. מוצרים סגורים באריזה מקורית — החלפה תוך 14 יום, כפוף לתקנון.",
  },
  {
    id: "f3",
    question: "האם המחירים כוללים מע״מ?",
    answer: "כן. כל המחירים באתר כוללים מע״מ. משלוח מחושב בנפרד בקופה.",
  },
  {
    id: "f4",
    question: "איך משלמים בביט / פייבוקס?",
    answer:
      "בקופה אפשר לבחור קישור תשלום בוואטסאפ או הנחיות לביט/פייבוקס. אשראי באתר — עם חיבור סליקה פעיל.",
  },
  {
    id: "f5",
    question: "מה כולל מארז ה-VIP?",
    answer:
      "שלושה מוצרי דגל באריזת זהב, כרטיס dedicación בעברית, ואריזת מתנה יוקרתית בכל הזמנה.",
  },
  {
    id: "f6",
    question: "יש אחריות על המוצר?",
    answer:
      "אחריות מלאה על הגעת מוצר מושלם. אם משהו לא תקין — מחליפים או מחזירים לפי התקנון.",
  },
];
