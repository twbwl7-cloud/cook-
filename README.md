# LUXE & GLAM

בוטיק פרימיום ישראלי (עברית · RTL) — חנות אונליין Tier 3 עם Hero תלת־ממדי, עגלת Zustand, קופה כאורח, וואטסאפ, וקופון השקה אמיתי `LAUNCH10`.

## הרצה מקומית

```bash
npm install
npm run dev
```

האתר עולה ב־[http://127.0.0.1:43127](http://127.0.0.1:43127).

```bash
npm run build && npm start
```

## מה כלול (מודול א׳)

- עמוד הבית אימרסיבי (R3F + Lenis + קינטיק טייפוגרפי)
- חנות עם סינון (קטגוריה / תגית / מחיר / חיפוש)
- עמודי מוצר, קולקציות, אודות, המלצות, FAQ, צור קשר
- עגלה + Checkout אורח עם אימות מחיר/מלאי בשרת (Zod)
- תשלומים: stub אשראי / ביט / פייבוקס + קישור וואטסאפ
- תקנון, פרטיות, הצהרת נגישות ת״י 5568
- סכמות Sanity מוכנות + קטלוג mock מקומי
- `PROJECT_BRIEF.md` + `ARCHITECTURE.md`

## משתני סביבה

העתיקו `.env.example` ל־`.env.local` כשמחברים Sanity / סליקה / Sheets.

בלי מפתחות — האתר רץ מלא על mock + וואטסאפ.

## פריסה ל־Vercel

1. חברו את הריפו ל־Vercel.
2. הגדירו Env לפי `.env.example`.
3. Build command: `npm run build` · Output: Next ברירת מחדל.
4. דומיין מומלץ: `luxeglam.co.il`.
5. CSP עתידי: `worker-src 'self' blob:` · סקריפטים מקומיים בלבד.
6. CORS: רק אם תחשפו API ציבורי נפרד — כרגע Server Actions מאותו origin.

## KPIs

Conversion עגלה→קופה · WhatsApp CTR · Add-to-cart על מארז VIP · מימוש `LAUNCH10` · Bounce אחרי Hero.

## מודולים הבאים

- **ב׳** אזור אישי (Google/Apple/SMS, הזמנות, נקודות VIP, Reorder)
- **ג׳** IAM (Middleware כפול, webhooks, rate limit OTP)
