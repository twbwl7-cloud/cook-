import type { Metadata } from "next";
import { siteSettings } from "@/data/site";

export const metadata: Metadata = {
  title: "אודות",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl sm:text-5xl">הסיפור מאחורי {siteSettings.brandName}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
        <p>
          מותג שנולד מתשוקה לאסתטיקה בלתי מתפשרת — שיק מודרני, פאנקי ויוקרתי,
          בגימור שמתאים לצרכנית הישראלית: ברור, מהיר, וואטסאפ במרחק הקשה.
        </p>
        <p>
          אנחנו בוטיק צעיר ששם את מארז ה-VIP במרכז: מוצרים שנראים יקרים באמת,
          אריזה שסוגרת מתנה בלי לנחש, ושירות שמעדכן ברגע שהחבילה יוצאת.
        </p>
        <p>
          {siteSettings.address} · <bdi>{siteSettings.phone}</bdi> · {siteSettings.hours}
        </p>
      </div>
      <div className="mt-10 overflow-hidden rounded-[1.5rem] contact-shadow">
        <div
          className="flex aspect-[16/9] items-end bg-gradient-to-br from-pink-deep via-pink-base to-gold-1 p-6"
          role="img"
          aria-label="הדמיה — תמונת צוות תדמיתית"
        >
          <span className="rounded-full bg-ink/80 px-3 py-1 text-xs text-pink-soft">
            הדמיה · תמונת צוות תתווסף מצילום אמיתי
          </span>
        </div>
      </div>
    </div>
  );
}
