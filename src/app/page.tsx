import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ProductCard } from "@/components/shop/ProductCard";
import { Reveal } from "@/components/motion/Reveal";
import { collections, getProductsByCategory } from "@/data/products";
import { reviews, siteSettings } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

export default function HomePage() {
  const wa = whatsappLink(
    siteSettings.whatsapp,
    `היי ${siteSettings.brandName}! אשמח להזמין עוגה`,
  );

  return (
    <>
      <Hero />
      <TrustBar />

      {/* Category gate */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">שלוש דרכים לעוגה מושלמת</h2>
          <p className="mt-2 max-w-xl text-ink-muted">
            בחרו קטגוריה — כל התמונות מהסטודיו האמיתי של {siteSettings.brandName}.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06}>
              <Link href={`/collections/${c.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] contact-shadow">
                  <Image
                    src={c.coverImage}
                    alt={c.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-pink-soft">
                    <p className="font-display text-2xl">{c.title}</p>
                    <p className="mt-1 text-sm text-pink-soft/85">{c.description}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {collections.map((c) => {
        const items = getProductsByCategory(c.slug).slice(0, 3);
        return (
          <section key={c.id} className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <Reveal>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-3xl">{c.title}</h2>
                  <p className="mt-1 text-sm text-ink-muted">{c.description}</p>
                </div>
                <Link
                  href={`/collections/${c.slug}`}
                  className="shrink-0 text-sm font-semibold underline"
                >
                  הכל
                </Link>
              </div>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {items.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.05}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <section className="bg-ink text-pink-soft">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold text-gold-2">{siteSettings.tagline}</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              שולחים תמונה — מקבלים עוגה שסוגרת את האירוע
            </h2>
            <p className="mt-4 text-pink-soft/75 leading-relaxed">
              בלי מלאי מזויף ובלי ספירות לאחור. כל עוגה נבנית להזמנה: גן עם דף אכיל,
              מספרים עם פירות ושוקולד, או מעוצבת עם כתר וטופרים.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold contact-shadow flex h-14 items-center justify-center rounded-full text-base font-bold text-ink"
            >
              הזמנה בוואטסאפ · <bdi className="mr-1">{siteSettings.phone}</bdi>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">מה כותבות אחרי האירוע</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {reviews.slice(0, 4).map((r, i) => (
            <Reveal key={r.id} delay={i * 0.05}>
              <blockquote className="rounded-[1.25rem] bg-white/60 p-5 contact-shadow">
                <p className="text-sm leading-relaxed">“{r.body}”</p>
                <footer className="mt-4 text-xs text-ink-muted">
                  {r.author} · {r.city} · {"★".repeat(r.rating)}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
