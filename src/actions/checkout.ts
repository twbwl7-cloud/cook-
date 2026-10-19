"use server";

import { checkoutSchema, quoteCart } from "@/lib/pricing";
import { siteSettings } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

export type CheckoutResult =
  | {
      ok: true;
      orderNumber: string;
      totalIls: number;
      whatsappUrl: string;
      paymentMethod: string;
    }
  | { ok: false; errors: string[] };

export async function submitCheckout(
  raw: unknown,
): Promise<CheckoutResult> {
  const parsed = checkoutSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.issues.map((i) => i.message),
    };
  }

  const data = parsed.data;
  const quote = quoteCart(data.lines, data.couponCode);
  if (quote.errors.length || quote.lines.some((l) => !l.stockOk)) {
    return { ok: false, errors: quote.errors.length ? quote.errors : ["מלאי לא מספיק"] };
  }

  const orderNumber = `LG-${Date.now().toString(36).toUpperCase()}`;

  // Stub: wire to Tranzila/Meshulam/Stripe + iCount + Sheets + SMS later.
  const summary = [
    `הזמנה חדשה ${orderNumber}`,
    `${data.fullName} · ${data.phone}`,
    ...quote.lines.map(
      (l) => `• ${l.title} (${l.variantLabel}) ×${l.quantity} — ₪${l.lineTotalIls}`,
    ),
    `סה״כ לתשלום: ₪${quote.totalIls}`,
    `אמצעי: ${data.paymentMethod}`,
    data.address,
    data.city,
  ].join("\n");

  const whatsappUrl = whatsappLink(siteSettings.whatsapp, summary);

  return {
    ok: true,
    orderNumber,
    totalIls: quote.totalIls,
    whatsappUrl,
    paymentMethod: data.paymentMethod,
  };
}
