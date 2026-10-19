import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ProductCard } from "@/components/shop/ProductCard";
import { Reveal } from "@/components/motion/Reveal";
import { getFeaturedProducts } from "@/data/products";
import { reviews, siteSettings } from "@/data/site";
import { formatIls } from "@/lib/utils";

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <>
      <Hero />
      <TrustBar />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">
                מארז הדגל והקולקציה החמה
              </h2>
              <p className="mt-2 max-w-xl text-ink-muted">
                <bdi>{featured.length}</bdi> מוצרי דגל נבחרים — מחירים מלאים,
                מלאי אמיתי, בלי ספירה לאחור מזויפת.
              </p>
            </div>
            <Link href="/shop" className="text-sm font-semibold underline">
              לכל החנות
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-pink-soft">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold text-gold-2">למה לא סרטון רגיל</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              אובייקט זהב שמרגישים בידיים — גם על המסך
            </h2>
            <p className="mt-4 text-pink-soft/75 leading-relaxed">
              הסצנה התלת־ממדית ב-Hero נותנת שליטה: סיבוב, תאורה, ותחושת חומר.
              זה לא באנר — זה מוצר שמושכים אליו. תקציב קל (placeholder ל-GLB עד{" "}
              <bdi>2MB</bdi>) כדי לשמור <bdi>60FPS</bdi> במובייל.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[1.5rem] border border-gold-1/40 bg-white/5 p-6 backdrop-blur">
              <ul className="space-y-4 text-sm">
                <li>פוסטר סטטי קודם · Canvas ב-Lazy</li>
                <li>רק transform/opacity באנימציות ממשק</li>
                <li>Lenis לסנכרון גלילה בלי jitter</li>
                <li>
                  משלוח מ־
                  <bdi>{formatIls(siteSettings.shippingFlatIls)}</bdi> · חינם מעל{" "}
                  <bdi>{formatIls(siteSettings.freeShippingFromIls)}</bdi>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">מה כותבות בוואטסאפ</h2>
          <p className="mt-2 text-ink-muted">
            המלצות מלקוחות אמיתיות — לא ביקורות מומצאות.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {reviews.slice(0, 4).map((r, i) => (
            <Reveal key={r.id} delay={i * 0.05}>
              <blockquote className="rounded-[1.25rem] bg-white/60 p-5 contact-shadow">
                <p className="text-sm leading-relaxed">“{r.body}”</p>
                <footer className="mt-4 text-xs text-ink-muted">
                  {r.author} · {r.city} · {r.source === "whatsapp" ? "וואטסאפ" : "אתר"} ·{" "}
                  {"★".repeat(r.rating)}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/reviews" className="text-sm font-semibold underline">
            עוד המלצות
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] gold-gradient p-[1px] contact-shadow">
            <div className="rounded-[1.7rem] bg-surface px-6 py-10 text-center sm:px-10">
              <h2 className="font-display text-3xl sm:text-4xl">
                מוכנים לסגור מתנה היום?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-ink-muted">
                קוד השקה <bdi className="font-bold text-ink">{siteSettings.launchCouponCode}</bdi>{" "}
                — {siteSettings.launchCouponPercent}% לרכישה ראשונה.
              </p>
              <Link
                href="/product/vip-flagship-set"
                className="btn-gold contact-shadow mt-6 inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-bold"
              >
                למארז VIP
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
