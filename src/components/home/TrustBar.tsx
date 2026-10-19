import { siteSettings } from "@/data/site";
import { formatIls } from "@/lib/utils";

const items = [
  { title: "משלוח אקספרס", body: `חינם מעל ${formatIls(siteSettings.freeShippingFromIls)}` },
  { title: "אריזת מתנה", body: "זהב ושחור בכל הזמנה" },
  { title: "תשלום מקומי", body: "אשראי · ביט · פייבוקס · וואטסאפ" },
  { title: "החזרה לפי חוק", body: "הגנת הצרכן · שקיפות מלאה" },
];

export function TrustBar() {
  return (
    <section className="border-y border-ink/8 bg-white/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="text-center lg:text-right">
            <p className="text-sm font-bold text-ink">{item.title}</p>
            <p className="mt-1 text-sm text-ink-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
