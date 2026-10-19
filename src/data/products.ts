import type { Collection, Product } from "@/types/commerce";

/**
 * Mock CMS catalog shaped like Sanity documents.
 * imageCredit: "mockup" until real product photography is uploaded.
 */
export const products: Product[] = [
  {
    id: "p-vip",
    slug: "vip-flagship-set",
    title: "מארז הדגל VIP",
    shortDescription: "שלושה מוצרי דגל באריזת זהב — המתנה שסוגרת בלי לנחש.",
    description:
      "מארז הדגל של LUXE & GLAM: טקס יופי מלא באריזה שחורה-זהובה, כרטיס אישי בעברית, ואריזת מתנה מוכנה להעברה. מושלם לימי הולדת, הצעות ואירועי VIP.",
    category: "gift-set",
    tags: ["vip", "bestseller", "gift"],
    image: "/products/vip-set.svg",
    imageCredit: "mockup",
    featured: true,
    variants: [
      {
        id: "p-vip-std",
        label: "סטנדרט",
        sku: "LG-VIP-01",
        priceIls: 589,
        compareAtIls: 690,
        stock: 18,
      },
      {
        id: "p-vip-deluxe",
        label: "דלוקס + נר זהב",
        sku: "LG-VIP-02",
        priceIls: 749,
        stock: 9,
      },
    ],
  },
  {
    id: "p-blush",
    slug: "velvet-blush-kit",
    title: "ערכת Velvet Blush",
    shortDescription: "ורוד קטיפה על העור — שלושה גוונים שנבחרו לגוון ישראלי.",
    description:
      "ערכת סומק וורוד קטיפתי עם שלושה גוונים חמים. מרקם משי, גימור טבעי, ונרתיק נסיעות זהוב.",
    category: "collection",
    tags: ["new", "bestseller"],
    image: "/products/blush-kit.svg",
    imageCredit: "mockup",
    featured: true,
    variants: [
      {
        id: "p-blush-rose",
        label: "Rose Soft",
        sku: "LG-BL-01",
        priceIls: 249,
        stock: 42,
      },
      {
        id: "p-blush-deep",
        label: "Deep Blush",
        sku: "LG-BL-02",
        priceIls: 249,
        stock: 27,
      },
    ],
  },
  {
    id: "p-gold",
    slug: "gold-glow-ritual",
    title: "טקס Gold Glow",
    shortDescription: "שמן זוהר + היילייטר מט — אור זהוב בלי נצנוץ זול.",
    description:
      "שגרת ערב קצרה: שמן זוהר קליל והיילייטר זהב מט. למראה עור מושקע בלי שכבות כבדות.",
    category: "exclusive",
    tags: ["vip", "gift"],
    image: "/products/gold-glow.svg",
    imageCredit: "mockup",
    featured: true,
    variants: [
      {
        id: "p-gold-30",
        label: "30 מ״ל",
        sku: "LG-GG-30",
        priceIls: 319,
        stock: 31,
      },
      {
        id: "p-gold-50",
        label: "50 מ״ל",
        sku: "LG-GG-50",
        priceIls: 419,
        stock: 14,
      },
    ],
  },
  {
    id: "p-night",
    slug: "onyx-night-serum",
    title: "סרום Onyx Night",
    shortDescription: "לילה אחד. עור רגוע יותר בבוקר.",
    description:
      "סרום לילה מרוכז למראה אחיד ורך. בקבוק אוניקס שחור עם פקק זהב — נראה כמו פריט מדף בבוטיק.",
    category: "collection",
    tags: ["bestseller"],
    image: "/products/onyx-serum.svg",
    imageCredit: "mockup",
    featured: false,
    variants: [
      {
        id: "p-night-std",
        label: "בקבוק מלא",
        sku: "LG-ON-01",
        priceIls: 279,
        stock: 55,
      },
    ],
  },
  {
    id: "p-lip",
    slug: "satin-lip-duo",
    title: "דואו שפתיים Satin",
    shortDescription: "שני גוונים. גימור סאטן. נרתיק זהב קטן.",
    description:
      "זוג שפתונים בגימור סאטן — nude חם ואדום-ורוד. נרתיק מתכת זהובה לנשיאה בתיק.",
    category: "collection",
    tags: ["new", "gift"],
    image: "/products/lip-duo.svg",
    imageCredit: "mockup",
    featured: true,
    variants: [
      {
        id: "p-lip-nude",
        label: "Nude / Rouge",
        sku: "LG-LD-01",
        priceIls: 189,
        stock: 60,
      },
    ],
  },
  {
    id: "p-candle",
    slug: "atelier-candle",
    title: "נר Atelier",
    shortDescription: "וניל ורוד + עץ מתוק. 45 שעות בעירה.",
    description:
      "נר ארומטי בכוס ורודה עם תבליט זהב. ריח עדין שלא משתלט על החדר — מתנה שמגיעה מוכנה.",
    category: "gift-set",
    tags: ["gift"],
    image: "/products/candle.svg",
    imageCredit: "mockup",
    featured: false,
    variants: [
      {
        id: "p-candle-1",
        label: "כוס אחת",
        sku: "LG-CD-01",
        priceIls: 159,
        stock: 40,
      },
    ],
  },
  {
    id: "p-brush",
    slug: "precision-brush-set",
    title: "סט מברשות Precision",
    shortDescription: "חמש מברשות. ידית שחורה. פרטים זהובים.",
    description:
      "סט מברשות מקצועי לאיפור יומיומי. סיבים רכים, נרתיק ורוד, וגימור זהב על המתכת.",
    category: "collection",
    tags: ["new"],
    image: "/products/brushes.svg",
    imageCredit: "mockup",
    featured: false,
    variants: [
      {
        id: "p-brush-5",
        label: "5 מברשות",
        sku: "LG-BR-05",
        priceIls: 229,
        stock: 22,
      },
    ],
  },
  {
    id: "p-mirror",
    slug: "compact-gold-mirror",
    title: "מראה Compact זהב",
    shortDescription: "כיס. דו-צדדית. תחושת מתנה מיידית.",
    description:
      "מראה קומפקטית בציפוי זהב מט, צד רגיל וצד הגדלה. חריטה עדינה של לוגו המותג.",
    category: "exclusive",
    tags: ["gift", "vip"],
    image: "/products/mirror.svg",
    imageCredit: "mockup",
    featured: false,
    variants: [
      {
        id: "p-mirror-1",
        label: "רגיל",
        sku: "LG-MR-01",
        priceIls: 129,
        stock: 70,
      },
    ],
  },
  {
    id: "p-svc-glam",
    slug: "vip-glam-session",
    title: "סשן VIP Glam",
    shortDescription: "שעת איפור אישי באטלייה · כולל ייעוץ מוצרים.",
    description:
      "שירות פרימיום באטלייה: איפור מלא לצילום או אירוע, ייעוץ התאמת גוונים, והנחה על רכישה באותו יום.",
    category: "service",
    tags: ["vip"],
    image: "/products/vip-session.svg",
    imageCredit: "mockup",
    featured: true,
    variants: [
      {
        id: "p-svc-60",
        label: "60 דקות",
        sku: "LG-SV-60",
        priceIls: 450,
        stock: 12,
      },
      {
        id: "p-svc-90",
        label: "90 דקות",
        sku: "LG-SV-90",
        priceIls: 620,
        stock: 8,
      },
    ],
  },
  {
    id: "p-bag",
    slug: "luxe-tote",
    title: "תיק Luxe Tote",
    shortDescription: "קנבס ורוד · ידיות שחורות · לוגו זהב.",
    description:
      "תיק נשיאה רחב לקולקציה או ליום יום. בטנה שחורה, כיס פנימי, ותג מתכת זהובה.",
    category: "exclusive",
    tags: ["new"],
    image: "/products/tote.svg",
    imageCredit: "mockup",
    featured: false,
    variants: [
      {
        id: "p-bag-1",
        label: "מידה אחת",
        sku: "LG-TT-01",
        priceIls: 199,
        stock: 35,
      },
    ],
  },
  {
    id: "p-set-mini",
    slug: "mini-discovery",
    title: "מיני Discovery",
    shortDescription: "ארבעה מיניאטורים להכיר את הקולקציה.",
    description:
      "קופסת היכרות עם ארבעה מיני-מוצרים. מתאים למי שרוצה לנסות לפני מארז מלא.",
    category: "gift-set",
    tags: ["new", "gift"],
    image: "/products/discovery.svg",
    imageCredit: "mockup",
    featured: false,
    variants: [
      {
        id: "p-set-mini-1",
        label: "קופסה",
        sku: "LG-MD-01",
        priceIls: 149,
        stock: 48,
      },
    ],
  },
  {
    id: "p-perfume",
    slug: "pink-velvet-parfum",
    title: "Pink Velvet Parfum",
    shortDescription: "וורד · מוסק · וניל. 50 מ״ל.",
    description:
      "ניחוח חתימה של המותג — ורוד קטיפתי עם בסיס חם. בקבוק כבד, פקק זהב, ואריזה מוכנה למתנה.",
    category: "exclusive",
    tags: ["bestseller", "vip"],
    image: "/products/parfum.svg",
    imageCredit: "mockup",
    featured: true,
    variants: [
      {
        id: "p-perfume-50",
        label: "50 מ״ל",
        sku: "LG-PV-50",
        priceIls: 389,
        stock: 20,
      },
    ],
  },
];

export const collections: Collection[] = [
  {
    id: "c-flag",
    slug: "flagship",
    title: "קולקציית הדגל",
    description: "המוצרים שסוגרים מתנה ומרגע ראשון מרגישים פרימיום.",
    productIds: ["p-vip", "p-gold", "p-perfume", "p-svc-glam"],
  },
  {
    id: "c-daily",
    slug: "everyday-glam",
    title: "Everyday Glam",
    description: "שגרה יומית בגימור בוטיק — בלי עומס.",
    productIds: ["p-blush", "p-night", "p-lip", "p-brush"],
  },
  {
    id: "c-gifts",
    slug: "gifting",
    title: "מתנות מוכנות",
    description: "אריזה שחורה-זהובה. כרטיס בעברית. מוכן להעברה.",
    productIds: ["p-vip", "p-candle", "p-set-mini", "p-mirror", "p-bag"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
