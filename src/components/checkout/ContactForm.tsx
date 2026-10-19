"use client";

import { FormEvent, useState, useTransition } from "react";
import { z } from "zod";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteSettings } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().min(9).max(20),
  email: z.string().email(),
  message: z.string().min(5).max(1000),
});

export function ContactForm() {
  const [pending, start] = useTransition();
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError("בדקו שהפרטים מלאים ותקינים");
      return;
    }
    start(() => {
      // Stub: Sheets + email webhook in production
      const url = whatsappLink(
        siteSettings.whatsapp,
        `פנייה מהאתר\n${data.name}\n${data.phone}\n${data.email}\n${data.message}`,
      );
      setOk(true);
      setError(null);
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  if (ok) {
    return (
      <div className="rounded-[1.5rem] bg-white/70 p-8 contact-shadow">
        <p className="font-display text-2xl">הפנייה נשלחה</p>
        <p className="mt-2 text-sm text-ink-muted">
          נפתח וואטסאפ עם הסיכום. במייל ובגיליון — חיבור בפרודקשן.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 rounded-[1.5rem] bg-white/70 p-6 contact-shadow"
    >
      <div>
        <label className="mb-1 block text-xs" htmlFor="name">
          שם
        </label>
        <Input id="name" name="name" required />
      </div>
      <div>
        <label className="mb-1 block text-xs" htmlFor="phone">
          טלפון
        </label>
        <Input id="phone" name="phone" required dir="ltr" inputMode="tel" />
      </div>
      <div>
        <label className="mb-1 block text-xs" htmlFor="email">
          אימייל
        </label>
        <Input id="email" name="email" type="email" required dir="ltr" />
      </div>
      <div>
        <label className="mb-1 block text-xs" htmlFor="message">
          הודעה
        </label>
        <Textarea id="message" name="message" required />
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <Button type="submit" className="w-full" disabled={pending}>
        שליחה
      </Button>
    </form>
  );
}
