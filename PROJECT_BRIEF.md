# LALIBAKERY — PROJECT BRIEF

## Status
**Script 5 audit complete — VERDICT: NO-GO** (see `docs/FINAL_AUDIT_REPORT.md`).  
Hero Engine shipped; Header/Footer elite engines still open.  
Hardening landed: middleware CSP/headers, health, slots checkout, a11y widget, licenses.

## Hero (locked & live)
- Direction A Noir Atelier · Path C1 3-tier R3F + poster LCP
- H1: בונות את העוגה — רואות את המחיר
- CTA → `/builder` · Sticky: הרכיבו עוגה אישית ב-3D
- GSAP pin zoom · Lenis↔ScrollTrigger sync

## Art direction (locked)
- **Direction A — Noir Atelier:** black structure · pink blush · gold jewelry CTAs
- Fonts: Frank Ruhl Libre + Heebo · tracking `-0.02em`
- Hero H1: עוגה ב־3 קומות — אתן בונות, המחיר מתעדכן בלייב
- Sticky CTA: הרכיבו עוגה אישית ב-3D

## Brand
- **Name:** LALIBAKERY (אפייה מהלב)
- **Legal id (provided):** `0508739090`
- **Phone / WhatsApp:** 050-8739090 (`972508739090`)
- **Tone:** Haute visual · warm Hebrew microcopy
- **Palette (strict):** `#F2C4CE` · `#0D0D0D`/`#121212` · `#D4AF37`/`#C5A059`
- **Logo:** `public/cakes/brand/logo.jpg` (final)
- **Service:** Pickup Netanya · Delivery Sharon/Center
- **Language:** Hebrew RTL

## Tier & stack
- **Tier 3** — R3F · Lenis · gold cursor · live Cake Builder
- **CMS:** Supabase only (products, variants, orders, daily_slots, promotions)
- Next.js App Router · Tailwind · Zustand · GSAP · Zod · server-only

## Commerce (locked)
- Catalog + Cake Builder; cart line `custom_cake` with JSON spec
- Catalog variants: size/servings · flavor · inscription
- Builder pricing: base ₪250 + tier/flavor/decor matrix (see ARCHITECTURE.md)
- Plaque ≤25 chars HE+EN
- Allergies: gluten_free / vegan / sugar_free + free notes
- Capacity via **daily_slots** (default max 5 complex/day), not numeric SKU stock
- Facets MVP: category + price range
- `LALI10` 10% · free shipping ≥ ₪400 · delivery ₪50 · pickup 0
- `compareAt` only with real DB promo
- Slot + time required before pay · min **3 business days** lead
- Pay MVP: Tranzila (stub until keys) + WhatsApp · Guest checkout
- Prices include VAT

## Immersive (locked)
- Hero C1 GLB/procedural + poster LCP
- Builder Path C baked/basic materials
- Shaders / Image Sequence deferred
- USP: live 3D build + live price
- Label: הדמיית תלת־ממד אינטראקטיבית until final GLB
- Catalog photos: real, owned; no kids’ faces

## Legal / ops
- Accessibility button + TY 5568 baseline
- Custom cancel per consumer law after production start (~48h window rules)
- Full prepay to reserve slot
- Invoice provider before full launch
- Data in Supabase; deletion on request

## Integrations MVP
- WhatsApp notify bakery on order
- Success page for customer
- Order statuses in Supabase
- Turnstile/hCaptcha · GA4 · Meta Pixel · Clarity
- KPIs: Hero→Builder · Builder complete · Checkout started · Purchase · WA clicks

## Source of truth docs
- Full schemas, security map, unit-test matrix → `ARCHITECTURE.md`
