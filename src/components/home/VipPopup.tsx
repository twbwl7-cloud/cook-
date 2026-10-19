"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { siteSettings } from "@/data/site";
import { Button } from "@/components/ui/button";

export function VipPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("lg-vip-popup");
    if (seen) return;
    const t = window.setTimeout(() => setOpen(true), 4200);
    return () => window.clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-ink/45"
        aria-label="סגור"
        onClick={() => {
          sessionStorage.setItem("lg-vip-popup", "1");
          setOpen(false);
        }}
      />
      <div className="relative w-full max-w-md rounded-[1.5rem] bg-surface p-6 contact-shadow">
        <button
          type="button"
          className="absolute top-3 left-3 rounded-full p-2 hover:bg-ink/5"
          onClick={() => {
            sessionStorage.setItem("lg-vip-popup", "1");
            setOpen(false);
          }}
          aria-label="סגור"
        >
          <X size={16} />
        </button>
        <p className="font-display text-2xl">מועדון VIP</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          קוד השקה אמיתי לרכישה ראשונה:{" "}
          <bdi className="font-bold text-ink">{siteSettings.launchCouponCode}</bdi>{" "}
          — הנחה של {siteSettings.launchCouponPercent}%. בלי ספירה לאחור מזויפת.
        </p>
        <Button
          className="mt-5 w-full"
          onClick={() => {
            navigator.clipboard?.writeText(siteSettings.launchCouponCode);
            sessionStorage.setItem("lg-vip-popup", "1");
            setOpen(false);
          }}
        >
          העתקת קוד להשקה
        </Button>
      </div>
    </div>
  );
}
