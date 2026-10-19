import Link from "next/link";
import { products } from "@/data/products";
import { siteSettings } from "@/data/site";
import { formatIls } from "@/lib/utils";

/** Book psychology strip: P14 social proof · P25 real scarcity · P17 specificity */
export function PsychStrip() {
  const lowStock = products
    .flatMap((p) =>
      p.variants
        .filter((v) => v.stock > 0 && v.stock <= 5)
        .map((v) => ({ title: p.title, stock: v.stock, slug: p.slug })),
    )
    .slice(0, 2);

  const fromPrice = Math.min(...products.map((p) => p.variants[0]?.priceIls ?? 999));

  return (
    <section className="bg-ink text-pink-soft">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-2">
            הוכחה חברתית · P14
          </p>
          <p className="mt-2 font-display text-2xl text-pink-soft">צילומים אמיתיים בלבד</p>
          <p className="mt-1 text-sm text-pink-soft/70">
            כל עוגה באתר צולמה אחרי אפייה — בלי סטוק ובלי ביקורות מומצאות.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-2">
            טענה מדויקת · P17
          </p>
          <p className="mt-2 font-display text-2xl text-pink-soft">
            ממחיר <bdi>{formatIls(fromPrice)}</bdi>
          </p>
          <p className="mt-1 text-sm text-pink-soft/70">
            המחיר הסופי מאושר בוואטסאפ לפי גודל ועיצוב — בלי הפתעות בקופה.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-2">
            מחסור אמיתי · P25
          </p>
          {lowStock[0] ? (
            <>
              <p className="mt-2 font-display text-2xl text-pink-soft">
                נשארו <bdi>{lowStock[0].stock}</bdi> מקומות השבוע
              </p>
              <p className="mt-1 text-sm text-pink-soft/70">
                לפי מלאי הייצור בפועל ל־
                <Link href={`/product/${lowStock[0].slug}`} className="underline">
                  {lowStock[0].title}
                </Link>
                . לא טיימר מזויף.
              </p>
            </>
          ) : (
            <>
              <p className="mt-2 font-display text-2xl text-pink-soft">הזמנה לפי תור אפייה</p>
              <p className="mt-1 text-sm text-pink-soft/70">
                וואטסאפ <bdi>{siteSettings.phone}</bdi> · תיאום תאריך אמיתי.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
