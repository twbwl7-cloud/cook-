import type { Metadata } from "next";
import Link from "next/link";
import { siteSettings } from "@/data/site";
import { CakeBuilder } from "@/components/builder/CakeBuilder";

export const metadata: Metadata = {
  title: "הרכבת עוגה ב-3D",
  description:
    "Cake Builder תלת־ממד של LALIBAKERY — קומות, טעמים וקישוטים עם מחיר בלייב.",
};

export default function BuilderPage() {
  return (
    <div className="bg-black-deep text-pink-baby">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="text-sm font-bold text-gold-luxury">
          {siteSettings.brandName} · Builder
        </p>
        <h1 className="mt-2 font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em]">
          בונות את העוגה — רואות את המחיר
        </h1>
        <p className="mt-3 max-w-xl text-sm font-medium text-pink-baby/70">
          בסיס <bdi>₪250</bdi> · עד 25 תווים על הפלאק · מינימום 3 ימי עסקים לשריון
          סלוט.
        </p>
        <CakeBuilder />
        <p className="mt-8 text-center text-sm text-pink-baby/60">
          מעדיפות מהקטלוג?{" "}
          <Link href="/shop" className="font-bold text-gold-luxury underline">
            לכל העוגות
          </Link>
        </p>
      </div>
    </div>
  );
}
