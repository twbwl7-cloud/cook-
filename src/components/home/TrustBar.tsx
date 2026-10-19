import { siteSettings } from "@/data/site";

const items = [
  { title: "צילומים אמיתיים", body: "כל העוגות מהסטודיו — לא סטוק" },
  { title: "התאמה אישית", body: "תמונה, שם, דמות וצבעים" },
  { title: "וואטסאפ מהיר", body: siteSettings.phone },
  { title: "שלוש קטגוריות", body: "גן · מספרים · מעוצבות" },
];

export function TrustBar() {
  return (
    <section className="border-y border-ink/8 bg-white/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="text-center lg:text-right">
            <p className="text-sm font-bold text-ink">{item.title}</p>
            <p className="mt-1 text-sm text-ink-muted">
              {item.title === "וואטסאפ מהיר" ? (
                <bdi>{item.body}</bdi>
              ) : (
                item.body
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
