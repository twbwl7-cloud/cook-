# LUXE & GLAM — Architecture Summary (Module A)

## Stack

- Next.js 15 App Router + TypeScript + Tailwind CSS v4
- Zustand (cart IDs/qty only) + Zod validation
- React Three Fiber / Drei (Tier 3 Path C)
- Lenis + Framer Motion + GSAP-ready motion tokens
- Sanity schema shapes + local mock catalog (no secrets required locally)

## Sanity document model

See `src/sanity/schemas/index.ts` and `src/types/commerce.ts`.

- `product` — variants with `priceIls`, `stock`, `sku`
- `order` — server-written totals only
- `siteSettings` — shipping thresholds, coupon

## Cart architecture

1. Client stores `{ productId, variantId, quantity }[]` in Zustand (+ persist).
2. Display estimate via `estimateCart` (client).
3. Checkout Server Action `submitCheckout` → `quoteCart` (`server-only`) recomputes prices/stock from catalog.
4. Rejects if stock insufficient or coupon invalid.

## Security map

| Control | Implementation |
|---------|----------------|
| Server-side truth | `src/lib/pricing.ts` + `import "server-only"` |
| No PII in Zustand | cart store partialize |
| Zod on input | checkout + contact |
| GROQ params only | documented for future Sanity client |
| Secrets | none committed; `.env.example` |
| Guest checkout | default path |

## Business logic matrix (future unit tests)

1. `quoteCart` sums `variant.priceIls * qty` from server catalog only.
2. Coupon `LAUNCH10` applies exactly 10% to subtotal, not shipping.
3. Free shipping when `subtotal - discount >= 400`.
4. Flat shipping `35` otherwise when subtotal > 0.
5. Reject qty > stock.
6. Reject unknown product/variant IDs.
7. Reject invalid coupon with error string (no silent ignore when code provided).
8. Cart persist restores lines without prices.
9. WhatsApp deep link encodes order summary.
10. Image `mockup` products show "הדמיה" badge.

## Immersive

- Path C: R3F Float torusKnot placeholder for future GLB ≤2MB.
- Hero static poster first; Canvas after idle.
- Lenis on desktop/mobile; reduced-motion disables.
- Magnetic cursor only for `(pointer: fine)`.

## Deploy (Vercel)

See README. Env: payment keys, Sanity, Sheets webhook, SMS — optional locally (`env.example`).
