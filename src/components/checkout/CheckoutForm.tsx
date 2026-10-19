"use client";

import { FormEvent, useMemo, useState, useTransition } from "react";
import { useCartStore } from "@/store/cart";
import { estimateCart } from "@/lib/client-pricing";
import { formatIls } from "@/lib/utils";
import { submitCheckout } from "@/actions/checkout";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteSettings } from "@/data/site";

const methods = [
  { id: "card" as const, label: "אשראי באתר", note: "Tranzila / Meshulam / Stripe — stub" },
  { id: "bit" as const, label: "ביט", note: "העברה מהירה" },
  { id: "paybox" as const, label: "פייבוקס", note: "תשלום מוכר בישראל" },
  { id: "whatsapp" as const, label: "קישור בוואטסאפ", note: "שולחים סיכום וממשיכים בצ׳אט" },
];

export function CheckoutForm() {
  const lines = useCartStore((s) => s.lines);
  const couponDraft = useCartStore((s) => s.couponDraft);
  const clearCart = useCartStore((s) => s.clearCart);
  const quote = useMemo(
    () => estimateCart(lines, couponDraft),
    [lines, couponDraft],
  );
  const [pending, startTransition] = useTransition();
  const [paymentMethod, setPaymentMethod] =
    useState<(typeof methods)[number]["id"]>("whatsapp");
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<{
    orderNumber: string;
    whatsappUrl: string;
    totalIls: number;
  } | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: String(fd.get("fullName") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      city: String(fd.get("city") ?? ""),
      address: String(fd.get("address") ?? ""),
      notes: String(fd.get("notes") ?? "") || undefined,
      couponCode: couponDraft || undefined,
      paymentMethod,
      lines,
    };

    startTransition(async () => {
      const result = await submitCheckout(payload);
      if (!result.ok) {
        setErrors(result.errors);
        setSuccess(null);
        return;
      }
      setErrors([]);
      setSuccess({
        orderNumber: result.orderNumber,
        whatsappUrl: result.whatsappUrl,
        totalIls: result.totalIls,
      });
      clearCart();
    });
  }

  if (success) {
    return (
      <div className="rounded-[1.5rem] bg-white/70 p-8 contact-shadow">
        <p className="font-display text-3xl">ההזמנה התקבלה</p>
        <p className="mt-3 text-ink-muted">
          מספר הזמנה <bdi className="font-bold text-ink">{success.orderNumber}</bdi>
          {" · "}
          סה״כ <bdi>{formatIls(success.totalIls)}</bdi>
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
          חשבון אורח קודם — חשבון אישי ייפתח אוטומטית אחרי השלמת תשלום (מודול ב׳).
          חשבונית אוטומטית תחובר ל-iCount / חשבונית ירוקה בפרודקשן.
        </p>
        <a
          href={success.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold contact-shadow mt-6 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-bold"
        >
          המשך בוואטסאפ
        </a>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="rounded-[1.5rem] bg-white/70 p-8 text-center contact-shadow">
        <p className="font-display text-2xl">אין פריטים לתשלום</p>
        <a href="/shop" className="mt-4 inline-block text-sm font-semibold underline">
          חזרה לחנות
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-4 rounded-[1.5rem] bg-white/70 p-6 contact-shadow">
        <h1 className="font-display text-3xl">תשלום כאורח</h1>
        <p className="text-sm text-ink-muted">
          לא צריך להתחבר כדי לשלם. חשבון נפתח אחרי הרכישה.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs" htmlFor="fullName">
              שם מלא
            </label>
            <Input id="fullName" name="fullName" required autoComplete="name" />
          </div>
          <div>
            <label className="mb-1 block text-xs" htmlFor="phone">
              טלפון
            </label>
            <Input
              id="phone"
              name="phone"
              required
              inputMode="tel"
              autoComplete="tel"
              dir="ltr"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs" htmlFor="email">
              אימייל
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              dir="ltr"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs" htmlFor="city">
              עיר
            </label>
            <Input id="city" name="city" required autoComplete="address-level2" />
          </div>
          <div>
            <label className="mb-1 block text-xs" htmlFor="address">
              כתובת למשלוח
            </label>
            <Input id="address" name="address" required autoComplete="street-address" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs" htmlFor="notes">
              הערות (אופציונלי)
            </label>
            <Textarea id="notes" name="notes" />
          </div>
        </div>

        <fieldset className="space-y-2">
          <legend className="text-sm font-semibold">אמצעי תשלום</legend>
          {methods.map((m) => (
            <label
              key={m.id}
              className="flex cursor-pointer items-start gap-3 rounded-2xl border border-ink/10 bg-white/60 p-3"
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === m.id}
                onChange={() => setPaymentMethod(m.id)}
                className="mt-1"
              />
              <span>
                <span className="block text-sm font-medium">{m.label}</span>
                <span className="block text-xs text-ink-muted">{m.note}</span>
              </span>
            </label>
          ))}
        </fieldset>

        {errors.length > 0 && (
          <ul className="rounded-2xl bg-red-50 p-3 text-sm text-red-800">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={pending}>
          {pending ? "מאמת מחיר ומלאי…" : `אישור הזמנה · ${formatIls(quote.totalIls)}`}
        </Button>
      </div>

      <aside className="h-fit space-y-3 rounded-[1.5rem] bg-ink p-6 text-pink-soft contact-shadow">
        <h2 className="font-display text-2xl text-gold-2">סיכום</h2>
        <ul className="space-y-2 text-sm">
          {quote.detailed.map((l) => (
            <li key={`${l.productId}-${l.variantId}`} className="flex justify-between gap-3">
              <span>
                {l.title} ×<bdi>{l.quantity}</bdi>
              </span>
              <bdi>{formatIls(l.lineTotalIls)}</bdi>
            </li>
          ))}
        </ul>
        <div className="space-y-1 border-t border-white/15 pt-3 text-sm">
          <div className="flex justify-between">
            <span>הנחה</span>
            <bdi>−{formatIls(quote.discountIls)}</bdi>
          </div>
          <div className="flex justify-between">
            <span>משלוח</span>
            <bdi>
              {quote.shippingIls === 0 ? "חינם" : formatIls(quote.shippingIls)}
            </bdi>
          </div>
          <div className="flex justify-between text-base font-bold text-gold-2">
            <span>סה״כ</span>
            <bdi>{formatIls(quote.totalIls)}</bdi>
          </div>
        </div>
        <p className="text-[11px] text-pink-soft/65">
          קופון השקה: <bdi>{siteSettings.launchCouponCode}</bdi>. המחיר הסופי
          מחושב בשרת — לא סומכים על סכום מהקליינט.
        </p>
      </aside>
    </form>
  );
}
