"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { KineticTitle } from "@/components/motion/Reveal";
import { siteSettings } from "@/data/site";

const Floating3DModel = dynamic(
  () => import("@/components/immersive/Floating3DModel"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[340px] items-center justify-center sm:h-[420px] lg:h-[520px]">
        <div className="h-40 w-40 rounded-full gold-gradient opacity-70 blur-[1px] sm:h-52 sm:w-52" />
      </div>
    ),
  },
);

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, #ffd1dc 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 15% 80%, #fff0c8 0%, transparent 50%), linear-gradient(180deg, #fee1e8 0%, #fff7fa 100%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 pb-28 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:pb-16 lg:pt-6">
        <div className="order-2 text-center lg:order-1 lg:text-right">
          <p className="font-display text-3xl text-ink sm:text-4xl lg:text-5xl">
            {siteSettings.brandName}
          </p>
          <KineticTitle
            text="המארז שסוגר מתנה בלי לנחש"
            className="mt-4 text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          />
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg lg:mx-0">
            משלוח אקספרס עד הבית · חינם מעל{" "}
            <bdi>₪{siteSettings.freeShippingFromIls}</bdi> · אריזת זהב בכל הזמנה
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/product/vip-flagship-set"
              className="btn-gold contact-shadow inline-flex h-12 min-w-[200px] items-center justify-center rounded-full px-7 text-sm font-bold"
              data-magnetic
              data-cursor-label="BUY"
            >
              לקנייה מהירה
            </Link>
            <Link
              href="/shop"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full gold-border bg-white/40 px-6 text-sm font-semibold backdrop-blur"
            >
              לכל הקולקציה
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Floating3DModel />
        </div>
      </div>
    </section>
  );
}
