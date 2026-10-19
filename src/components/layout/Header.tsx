"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { siteSettings } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/shop", label: "חנות" },
  { href: "/collections", label: "קולקציות" },
  { href: "/about", label: "אודות" },
  { href: "/reviews", label: "המלצות" },
  { href: "/faq", label: "שאלות" },
  { href: "/contact", label: "צור קשר" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const totalUnits = useCartStore((s) => s.totalUnits());
  const openCart = useCartStore((s) => s.openCart);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-ink/8 bg-pink-soft/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            aria-label="תפריט"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link
            href="/"
            className="font-display text-xl tracking-tight text-ink sm:text-2xl"
            data-magnetic
            data-cursor-label="HOME"
          >
            {siteSettings.brandName}
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Link
              href="/cart"
              className="hidden h-10 items-center rounded-full px-3 text-sm font-medium text-ink-muted hover:text-ink sm:inline-flex"
            >
              לעגלה
            </Link>
            <button
              type="button"
              onClick={openCart}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full gold-border bg-white/50"
              aria-label="עגלה"
              data-magnetic
              data-cursor-label="BAG"
            >
              <ShoppingBag size={18} />
              {totalUnits > 0 && (
                <span className="absolute -top-1 -left-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-ink px-1 text-[10px] font-bold text-pink-soft">
                  <bdi>{totalUnits}</bdi>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-ink/8 bg-pink-soft md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-white/50"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
