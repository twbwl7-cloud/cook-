import type { Metadata } from "next";
import Link from "next/link";
import { collections, getProductById } from "@/data/products";
import { formatIls } from "@/lib/utils";

export const metadata: Metadata = {
  title: "קולקציות",
};

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl sm:text-5xl">קולקציות</h1>
      <p className="mt-3 max-w-2xl text-ink-muted">
        שלוש דרכים לקנות — דגל, יומיום, ומתנות מוכנות.
      </p>
      <div className="mt-10 space-y-10">
        {collections.map((c) => (
          <section
            key={c.id}
            className="rounded-[1.5rem] bg-white/60 p-6 contact-shadow sm:p-8"
          >
            <h2 className="font-display text-3xl">{c.title}</h2>
            <p className="mt-2 text-ink-muted">{c.description}</p>
            <ul className="mt-6 divide-y divide-ink/8">
              {c.productIds.map((id) => {
                const p = getProductById(id);
                if (!p) return null;
                return (
                  <li key={id}>
                    <Link
                      href={`/product/${p.slug}`}
                      className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-gold-3"
                    >
                      <span className="font-medium">{p.title}</span>
                      <bdi className="text-sm font-semibold">
                        {formatIls(p.variants[0]?.priceIls ?? 0)}
                      </bdi>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
