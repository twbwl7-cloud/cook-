# LUXE & GLAM — PROJECT BRIEF

> זיכרון פרויקט. מתעדכן בסוף כל מודול. הסקריפט לא שואל שאלות שכבר נענו.

## סטטוס מודולים

| מודול | סטטוס |
|-------|--------|
| א' קבוצה 1 — מותג ותשתית | ✅ נענה מהשאלון הממולא |
| א' קבוצה 2–5 — תחקיר המשך | ✅ מסוכם מהשאלון + הנחות מתועדות |
| א'-2 ארט דיירקשן | ✅ מאושר בכיוון שנבחר |
| א'-3 מערכת תנועה | ✅ מאושר |
| 3D / Immersive | ✅ Path C (R3F + torusKnot placeholder → GLB עתידי) |
| א' קוד ליבה | ✅ נבנה — חנות מלאה + checkout stub + immersive |
| ב' אזור אישי | ⏸️ מחוץ להיקף הסקריפט הנוכחי (מודול א' בלבד) |
| ג' IAM | ⏸️ מחוץ להיקף הסקריפט הנוכחי |

---

## קבוצה 1 — מותג ותשתית (תשובות סופיות)

| שאלה | תשובה |
|------|--------|
| Tier | **Tier 3** — Ultra-premium WebGL (R3F Float + OrbitControls), Lenis, magnetic cursor desktop, GSAP section reveals. Image Sequence לא נדרש (אין זכוכית/נוזלים פוטו-ריאליסטיים במוצר). |
| שם העסק | **LUXE & GLAM** |
| שם משפטי | בוטיק הפרימיום / ע.מ 987654321 (דוגמה) |
| צבעי מותג | Background Baby Pink `#FFD1DC` / `#FEE1E8` · Text Jet Black `#0D0D0D` · Accents Rich Gold `#D4AF37` → `#FFD700` → `#AA771C` |
| סגנון | יוקרתי, נועז, מודרני, סופר-שיק |
| שפה | עברית RTL (הכנה לאנגלית בהמשך) |
| מוצרים | 15–30 מוצרי פרימיום + שירותי VIP |
| מוצר דגל | מארז VIP — במה ראשית ב-Hero |
| CTA ראשי | קנייה מהירה באתר |
| טלפון / וואטסאפ | 050-0000000 |
| מייל | vip@luxeglam.co.il |
| שעות | א'-ה' 09:00–19:00 · ו' 09:00–13:00 · אתר 24/7 |
| משלוח | ₪35 · חינם מעל ₪400 · אקספרס לכל הארץ |
| קופון השקה | `LAUNCH10` — 10% לרכישה ראשונה (אמיתי, לא fake countdown) |

---

## קבוצה 2 — לוגיקת E-commerce

| נושא | החלטה |
|------|--------|
| מודל נתונים | Product → variants (size/shade) · Collection · Service (VIP booking) · Review · Coupon · SiteSettings |
| סינון | קולקציה, טווח מחיר, תגיות (new/bestseller/vip), סוג (מוצר/שירות) |
| מבצעים | קופון אחוזי (`LAUNCH10`) · משלוח חינם מעל סף · אין 1+1 בשלב זה (מידתיות) |
| מלאי | Server-side truth מול CMS/mock · Zustand שומר רק `productId` + `variantId` + `qty` |
| Guest checkout | ברירת מחדל — חשבון נפתח אחרי תשלום (מודול ב') |

---

## קבוצה 3 — אימרסיב

| נושא | החלטה |
|------|--------|
| Path | **C — R3F Baked/Simple** עם Float torusKnot כ-placeholder ל-GLB עתידי (≤2MB) |
| למה לא Path A | אין רינדור זכוכית/נוזלים כבד; Sequence יוסיף 5MB בלי ערך מכירה יחסי |
| למה לא Path B בלבד | נדרש אובייקט 3D אינטראקטיבי ב-Hero (DRAG) — לא רק distortion 2D |
| Hero | פוסטר סטטי ראשון · Canvas lazy · OrbitControls ללא zoom |
| תקציב | GLB ≤2MB · אין dynamic lights כבדים במובייל |

---

## קבוצה 4 — משפטי / רגולציה

| מסמך | סטטוס |
|------|--------|
| הצהרת נגישות ת״י 5568 | תבנית בעמוד `/accessibility` |
| תקנון + ביטול לפי הגנת הצרכן | `/terms` |
| מדיניות פרטיות | `/privacy` |
| פרטי עסק | ע.מ + כתובת בפוטר |
| חשבונית אוטומטית | מתוכנן iCount/חשבונית ירוקה — stub ב-checkout (מודול ב') |

---

## קבוצה 5 — אבטחה / צד שלישי

| שירות | החלטה לשלב א' |
|-------|----------------|
| CMS | Sanity schemas + **local mock store** (ללא secrets בפרוד עד חיבור) |
| Auth | Clerk/NextAuth — מודול ב'+ג' |
| Payments | Tranzila/Meshulam/Stripe — stub checkout + WhatsApp payment link |
| Analytics | GA4 placeholder · KPIs מוגדרים |
| CSP | worker-src blob: · scripts מקומיים |
| הזמנות | מייל + WhatsApp + Google Sheets stub webhook |

---

## ארט דיירקשן שנבחר: «ורוד קטיפה + זהב מט»

### 3 כיוונים שנבחנו

1. **ורוד קטיפה + זהב מט** ✅ נבחר — תחושת בוטיק ישראלי יוקרתי, קונטרסט שחור חד.
2. **Noir Atelier** — שחור מלא + זהב בלבד — נדחה (מתנגש עם דרישת Baby Pink).
3. **Chrome Glam** — כרום/מראה — נדחה (AI-default glow risk, פחות קריא בעברית).

### השראה (Awwwards-level mechanics)

| אתר | מכניקת חתימה מותאמת |
|-----|---------------------|
| Polène / Spring·Summer | Full-bleed product hero, typography-first |
| Viva La Labia | 3D object interaction + cinematic reveal |
| P448 | Horizontal collection energy, mobile-first PDP |

### Signature Moment

כותרת Hero נחשפת מתוך clip-mask · אובייקט 3D זהוב מרחף · כפתור זהב עם shimmer ב-hover · גלילת Lenis חלקה.

### Anti-AI copy (Bullshit Filter)

- ❌ «המסע מתחיל כאן» / «חדשנות»
- ✅ H1: «המארז שסוגר מתנה בלי לנחש»
- ✅ H2 עם מספר: «משלוח אקספרס עד הבית · חינם מעל ₪400»

---

## Motion tokens

```
ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)
ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1)
duration-fast: 180ms
duration-med:  420ms
duration-slow: 900ms
```

רק `transform` + `opacity`. Magnetic cursor ב-desktop בלבד. Lenis לסנכרון גלילה.

---

## KPIs (לולאת מדידה)

1. Conversion rate — הוספה לעגלה → checkout
2. WhatsApp CTR מהכפתור הצף
3. Add-to-cart על מארז VIP
4. Coupon `LAUNCH10` redemption
5. Bounce על Hero (גלילה מעבר ל-Hero)

Heatmaps: Microsoft Clarity / Hotjar — מוכן לחיבור.

---

## פיצ'רים שלא נבנים במודול א' (מידתיות + נימוק)

| פיצ'ר | נימוק |
|-------|--------|
| Auth מלא / OTP SMS | מודול ב'+ג' |
| סליקה חיה | אין חשבון סליקה פעיל — stub + WhatsApp |
| Sanity cloud live | אין projectId — mock + schemas מוכנים |
| Image Sequence 300 frames | Path C נבחר |
| CRM/דיוור מלא | המלצה: Klaviyo / ActiveTrail — חיבור בהמשך |
| בוט WhatsApp 24/7 | קישור wa.me מתקדם עם prefill — בוט בנפרד |

---

## Design tokens (CSS)

```css
--pink-soft: #FEE1E8;
--pink-base: #FFD1DC;
--pink-deep: #F5A9BC;
--ink: #0D0D0D;
--ink-muted: #3A3A3A;
--gold-1: #D4AF37;
--gold-2: #FFD700;
--gold-3: #AA771C;
--surface: #FFF7FA;
--radius-lg: 1.25rem;
```

פונטים: **Heebo** (UI) + **Frank Ruhl Libre** (display עברי יוקרתי).

---

## עדכון אחרון

מודול א' — ליבה נבנית עם Next.js App Router, Tailwind, Zustand, R3F, Lenis, Framer Motion, mock Sanity.
`)