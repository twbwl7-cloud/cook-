"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { KineticTitle } from "@/components/motion/Reveal";
import { siteSettings } from "@/data/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 75% 35%, #ffd1dc 0%, transparent 55%), radial-gradient(ellipse 50% 45% at 10% 85%, #fff0c8 0%, transparent 50%), linear-gradient(165deg, #fee1e8 0%, #fff7fa 55%, #ffe8ef 100%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-28 pt-6 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-20 lg:pt-4">
        {/* Round cake — hero visual */}
        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <motion.div
            className="relative aspect-square"
            initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Soft glow behind cake */}
            <div
              aria-hidden
              className="absolute inset-[8%] rounded-full bg-gradient-to-br from-gold-2/35 via-pink-deep/25 to-transparent blur-2xl"
            />
            <div className="absolute inset-0 overflow-hidden rounded-full border border-gold-1/40 contact-shadow">
              <Image
                src="/cakes/hero/round-gold-crown.jpg"
                alt="עוגה מעוצבת עגולה עם כתר זהב — LALIBAKERY"
                fill
                priority
                sizes="(max-width:1024px) 90vw, 48vw"
                className="object-cover scale-[1.02]"
              />
            </div>
            <motion.div
              aria-hidden
              className="absolute -bottom-2 left-1/2 h-6 w-[70%] -translate-x-1/2 rounded-[100%] bg-ink/15 blur-md"
              animate={reduce ? undefined : { scaleX: [1, 1.06, 1], opacity: [0.35, 0.5, 0.35] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <p className="mt-4 text-center text-[11px] tracking-wide text-ink-muted/80">
            עוגה מעוצבת אמיתית מהסטודיו · לא הדמיה
          </p>
        </div>

        <div className="order-2 text-center lg:order-1 lg:text-right">
          <div className="mb-4 inline-flex items-center gap-3">
            <Image
              src="/cakes/brand/logo.jpg"
              alt={siteSettings.brandName}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full border border-ink/10 object-cover contact-shadow"
            />
            <div className="text-right">
              <p className="font-display text-2xl leading-none text-ink sm:text-3xl">
                {siteSettings.brandName}
              </p>
              <p className="mt-1 text-xs font-medium text-ink-muted">
                {siteSettings.tagline}
              </p>
            </div>
          </div>

          <KineticTitle
            text="העוגה שסוגרת את המסיבה"
            className="mt-2 text-4xl leading-[1.12] text-ink sm:text-5xl lg:text-6xl"
          />
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg lg:mx-0">
            עוגות גן · מספרים · מעוצבות — לפי תמונה, דמות או רעיון.
            הזמנה בוואטסאפ ב־
            <bdi className="font-semibold text-ink"> {siteSettings.phone}</bdi>
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/product/gold-crown-king"
              className="btn-gold contact-shadow inline-flex h-12 min-w-[200px] items-center justify-center rounded-full px-7 text-sm font-bold"
              data-magnetic
              data-cursor-label="BUY"
            >
              להזמנת עוגה מעוצבת
            </Link>
            <Link
              href="/shop"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full gold-border bg-white/50 px-6 text-sm font-semibold backdrop-blur"
            >
              לכל הקטגוריות
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
