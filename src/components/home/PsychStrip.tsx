import Link from "next/link";
import { products } from "@/data/products";
import { siteSettings } from "@/data/site";
import { formatIls } from "@/lib/utils";

/** Psychology from the book — applied, not labeled for customers. */
export function PsychStrip() {
  const lowStock = products
    .flatMap((p) =>
      p.variants
        .filter((v) => v.stock > 0 && v.stock <= 5)
        .map((v) => ({ title: p.title, stock: v.stock, slug: p.slug })),
    )
    .slice(0, 1);

  const fromPrice = Math.min(...products.map((p) => p.variants[0]?.priceIls ?? 999));

  return (
    <section className="border-y-2 border-ink bg-ink text-pink-soft">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display text-2xl text-pink-soft">צילומים מהסטודיו בלבד</p>
          <p className="mt-2 text-sm font-medium leading-relaxed text-pink-soft/75">
            כל עוגה באתר צולמה אחרי אפייה. בלי תמונות סטוק ובלי ביקורות מומצאות.
          </p>
        </div>
        <div>
          <p className="font-display text-2xl text-pink-soft">
            ממחיר <bdi>{formatIls(fromPrice)}</bdi>
          </p>
          <p className="mt-2 text-sm font-medium leading-relaxed text-pink-soft/75">
            המחיר הסופי מאושר בוואטסאפ לפי גודל ועיצוב — בלי הפתעות בקופה.
          </p>
        </div>
        <div>
          {lowStock[0] ? (
            <>
              <p className="font-display text-2xl text-pink-soft">
                נשארו <bdi>{lowStock[0].stock}</bdi> מקומות השבוע
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-pink-soft/75">
                לפי תור האפייה ל־
                <Link href={`/product/${lowStock[0].slug}`} className="font-bold underline">
                  {lowStock[0].title}
                </Link>
                . תאריך אמיתי — לא טיימר מזויף.
              </p>
            </>
          ) : (
            <>
              <p className="font-display text-2xl text-pink-soft">הזמנה לפי תור אפייה</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-pink-soft/75">
                וואטסאפ <bdi className="font-bold text-gold-2">{siteSettings.phone}</bdi>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
