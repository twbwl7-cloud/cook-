import "server-only";

const ALLOWED_PREFIXES = [
  "/",
  "/shop",
  "/builder",
  "/cart",
  "/checkout",
  "/product/",
  "/collections/",
  "/account",
  "/about",
  "/contact",
  "/faq",
  "/reviews",
  "/terms",
  "/privacy",
  "/accessibility",
] as const;

/** Open-redirect allowlist — internal paths only. */
export function safeReturnUrl(input: string | null | undefined, fallback = "/"): string {
  if (!input) return fallback;
  if (!input.startsWith("/") || input.startsWith("//")) return fallback;
  if (input.includes("://") || input.includes("\\")) return fallback;
  const ok = ALLOWED_PREFIXES.some(
    (p) => input === p || (p.endsWith("/") ? input.startsWith(p) : input.startsWith(`${p}/`) || input === p),
  );
  return ok ? input : fallback;
}
