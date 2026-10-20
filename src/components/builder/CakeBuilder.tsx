"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { BuilderCakePreview } from "@/components/builder/BuilderCakePreview";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { formatIls, whatsappLink } from "@/lib/utils";
import { siteSettings } from "@/data/site";
import {
  PLAQUE_MAX,
  useCakeBuilderStore,
  type AllergyFlag,
  type CakeDecor,
  type CakeFlavor,
} from "@/store/cakeBuilder";
import { useCartStore } from "@/store/cart";

const tierOptions: { value: 1 | 2 | 3; label: string; hint: string }[] = [
  { value: 1, label: "קומה אחת", hint: "כלול בבסיס" },
  { value: 2, label: "שתי קומות", hint: "+₪180" },
  { value: 3, label: "שלוש קומות", hint: "+₪350" },
];

const flavorOptions: { value: CakeFlavor; label: string; hint: string }[] = [
  { value: "velvet_rose", label: "Velvet Rose", hint: "כלול" },
  { value: "belgian_chocolate", label: "שוקולד בלגי", hint: "+₪30" },
  { value: "vanilla_gold", label: "וניל פולי זהב", hint: "+₪40" },
];

const decorOptions: { value: CakeDecor; label: string; hint: string }[] = [
  { value: "sugar_flowers", label: "פרחי סוכר", hint: "+₪50" },
  { value: "gold_leaf", label: "עלי זהב", hint: "+₪80" },
  { value: "macaron_crown", label: "כתר מקרונים", hint: "+₪70" },
  { value: "name_topper", label: "טופר שם זהב", hint: "+₪45" },
];

const allergyOptions: { value: AllergyFlag; label: string }[] = [
  { value: "gluten_free", label: "ללא גלוטן" },
  { value: "vegan", label: "טבעוני" },
  { value: "sugar_free", label: "ללא סוכר" },
];

export function CakeBuilder() {
  const tiers = useCakeBuilderStore((s) => s.tiers);
  const flavor = useCakeBuilderStore((s) => s.flavor);
  const decors = useCakeBuilderStore((s) => s.decors);
  const plaqueText = useCakeBuilderStore((s) => s.plaqueText);
  const allergies = useCakeBuilderStore((s) => s.allergies);
  const notes = useCakeBuilderStore((s) => s.notes);
  const setTiers = useCakeBuilderStore((s) => s.setTiers);
  const setFlavor = useCakeBuilderStore((s) => s.setFlavor);
  const toggleDecor = useCakeBuilderStore((s) => s.toggleDecor);
  const setPlaqueText = useCakeBuilderStore((s) => s.setPlaqueText);
  const toggleAllergy = useCakeBuilderStore((s) => s.toggleAllergy);
  const setNotes = useCakeBuilderStore((s) => s.setNotes);
  const priceIls = useCakeBuilderStore((s) => s.priceIls);
  const toCustomSpec = useCakeBuilderStore((s) => s.toCustomSpec);
  const addCustomCake = useCartStore((s) => s.addCustomCake);

  const total = priceIls();

  const waHref = useMemo(() => {
    const spec = toCustomSpec();
    const msg = [
      `היי ${siteSettings.brandName}! רוצה לשריין עוגה מה-Builder:`,
      `קומות: ${spec.tiers}`,
      `טעם: ${spec.flavor}`,
      `קישוטים: ${spec.decors.join(", ") || "ללא"}`,
      `פלאק: ${spec.plaqueText || "—"}`,
      `אלרגיות: ${spec.allergies.join(", ") || "אין"}`,
      `הערות: ${spec.notes || "—"}`,
      `סה״כ משוער: ₪${total}`,
    ].join("\n");
    return whatsappLink(siteSettings.whatsapp, msg);
  }, [toCustomSpec, total]);

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      <BuilderCakePreview />

      <div className="space-y-6 rounded-[1.25rem] border border-gold-luxury/25 bg-black-matte/80 p-5 sm:p-6">
        <section>
          <h2 className="font-display text-xl text-pink-baby">1 · קומות</h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {tierOptions.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => setTiers(o.value)}
                className={`rounded-2xl border px-3 py-3 text-sm font-bold transition-[transform,border-color,background-color] duration-200 ${
                  tiers === o.value
                    ? "border-gold-luxury bg-gold-luxury/15 text-pink-baby"
                    : "border-pink-baby/20 text-pink-baby/80 hover:border-gold-luxury/40"
                }`}
              >
                {o.label}
                <span className="mt-1 block text-[11px] font-semibold text-gold-luxury">
                  {o.hint}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl text-pink-baby">2 · טעם בסיס</h2>
          <div className="mt-3 grid gap-2">
            {flavorOptions.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => setFlavor(o.value)}
                className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-bold ${
                  flavor === o.value
                    ? "border-gold-luxury bg-gold-luxury/15"
                    : "border-pink-baby/20"
                }`}
              >
                <span>{o.label}</span>
                <bdi className="text-gold-luxury">{o.hint}</bdi>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl text-pink-baby">3 · קישוט יוקרה</h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {decorOptions.map((o) => {
              const on = decors.includes(o.value);
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => toggleDecor(o.value)}
                  className={`rounded-2xl border px-3 py-3 text-start text-sm font-bold ${
                    on
                      ? "border-gold-luxury bg-gold-luxury/15"
                      : "border-pink-baby/20"
                  }`}
                >
                  {o.label}
                  <span className="mt-1 block text-[11px] text-gold-luxury">
                    <bdi>{o.hint}</bdi>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-pink-baby/55">
            אפשר בלי קישוט נוסף — הבסיס כבר נקי ויוקרתי.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-pink-baby">4 · פלאק זהב</h2>
          <label className="mt-3 block text-xs font-semibold text-pink-baby/70" htmlFor="plaque">
            עד <bdi>{PLAQUE_MAX}</bdi> תווים · עברית או אנגלית
          </label>
          <Input
            id="plaque"
            value={plaqueText}
            onChange={(e) => setPlaqueText(e.target.value)}
            maxLength={PLAQUE_MAX}
            placeholder="מזל טוב / Happy Birthday"
            className="mt-2 border-gold-luxury/30 bg-black-deep text-pink-baby"
            dir="auto"
          />
          <p className="mt-1 text-[11px] text-pink-baby/50">
            <bdi>
              {plaqueText.length}/{PLAQUE_MAX}
            </bdi>
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-pink-baby">אלרגיות</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {allergyOptions.map((o) => {
              const on = allergies.includes(o.value);
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => toggleAllergy(o.value)}
                  className={`rounded-full border px-3 py-2 text-xs font-bold ${
                    on
                      ? "border-gold-luxury bg-gold-luxury/20"
                      : "border-pink-baby/25"
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
          <Textarea
            className="mt-3 border-gold-luxury/30 bg-black-deep text-pink-baby"
            placeholder="הערות חופשיות למטבח"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </section>

        <div className="sticky bottom-20 z-10 rounded-2xl border border-gold-luxury/40 bg-black-deep/95 p-4 backdrop-blur-md md:bottom-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-pink-baby/60">סה״כ לעוגה</p>
              <motion.p
                key={total}
                initial={{ opacity: 0.4, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-3xl text-gold-luxury"
              >
                <bdi>{formatIls(total)}</bdi>
              </motion.p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                type="button"
                onClick={() => {
                  addCustomCake(toCustomSpec());
                }}
              >
                לעגלה
              </Button>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-bold text-ink"
                data-magnetic
                data-cursor-label="WA"
              >
                לשריון בוואטסאפ
              </a>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-pink-baby/55">
            המחיר הסופי מאושר בשרת מול הסלוט · Guest checkout בלי חשבון
          </p>
        </div>
      </div>
    </div>
  );
}
