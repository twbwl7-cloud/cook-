"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { KineticTitle } from "@/components/motion/Reveal";
import { siteSettings } from "@/data/site";

const HeroCake3D = dynamic(() => import("@/components/immersive/HeroCake3D"), {
  ssr: false,
  loading: () => (
    <div className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center sm:h-[460px]">
      <div className="relative h-[88%] w-[88%] overflow-hidden rounded-full border-2 border-ink contact-shadow">
        <Image
          src="/cakes/hero/round-gold-crown.jpg"
          alt="עוגת כתר זהב"
          fill
          priority
          className="object-cover"
          sizes="480px"
        />
      </div>
    </div>
  ),
});

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 85% 30%, #ffd1dc 0%, transparent 55%), radial-gradient(ellipse 40% 35% at 5% 90%, #0D0D0D22 0%, transparent 50%), linear-gradient(165deg, #FEE1E8 0%, #FFF7FA 55%, #F0DCE3 100%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 pb-20 pt-6 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:pb-14">
        {/* 360° cake — book P23 / A23 */}
        <div className="order-1 lg:order-2">
          <HeroCake3D />
        </div>

        <div className="order-2 text-center lg:order-1 lg:text-right">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border-2 border-ink bg-ink px-3 py-2">
            <Image
              src="/cakes/brand/logo.jpg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-right leading-tight">
              <p className="font-display text-lg text-pink-soft">{siteSettings.brandName}</p>
              <p className="text-[11px] font-bold text-gold-2">{siteSettings.tagline}</p>
            </div>
          </div>

          {/* P01 concrete H1 — charcoal, not AI fluff */}
          <KineticTitle
            text="העוגה שסוגרת את המסיבה"
            className="text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]"
          />

          {/* P17 specific claim with number */}
          <p className="mx-auto mt-5 max-w-md text-base font-bold leading-relaxed text-ink sm:text-lg lg:mx-0">
            3 קטגוריות · הזמנה לפי תמונה או דמות · וואטסאפ{" "}
            <bdi className="font-extrabold">{siteSettings.phone}</bdi>
          </p>

          {/* P03 isolation — one gold CTA dominates */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/product/gold-crown-king"
              className="btn-gold contact-shadow inline-flex h-13 min-h-12 min-w-[220px] items-center justify-center rounded-full px-8 text-sm font-extrabold text-ink"
              data-magnetic
              data-cursor-label="ORDER"
            >
              להזמנת העוגה הזו
            </Link>
            <Link
              href="/collections/gan"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border-2 border-ink bg-ink px-6 text-sm font-bold text-pink-soft"
            >
              עוגות גן
            </Link>
          </div>

          {/* P14 social proof */}
          <p className="mt-6 text-xs font-extrabold tracking-wide text-ink">
            ★★★★★ · לקוחות חוזרות בוואטסאפ · צילומים מהסטודיו בלבד
          </p>
        </div>
      </div>
    </section>
  );
}
