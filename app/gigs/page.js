// app/gigs/page.js
import Link from "next/link";
import { gigs } from "./gigsData";

export const metadata = {
  title: "Gigs | Mordman – Coverband live gigs & shows",
  description:
    "Alla spelningar med Mordman – kommande gig och arkiv med tidigare spelningar, setlists, bilder och videos.",
};

export default function GigsPage() {
  // sort newest first
  const sortedGigs = [...gigs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-4 py-10 pt-24 md:px-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Gigs
        </h1>
        <p className="text-zinc-400 max-w-2xl mb-10">
          Ett levande arkiv över våra spelningar – från svettiga klubbkvällar till
          bröllop, firmafester och allt däremellan. Klicka in på ett gig för
          setlist, bilder och videos.
        </p>

        <div className="space-y-4">
          {sortedGigs.map((gig) => (
            <Link
              key={gig.slug}
              href={`/gigs/${gig.slug}`}
              className="block group rounded-2xl border border-zinc-800/70 bg-zinc-950/40 px-4 py-4 md:px-6 md:py-5 hover:border-zinc-500/80 hover:bg-zinc-900/60 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 mb-1">
                    {new Date(gig.date).toLocaleDateString("sv-SE", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </p>
                  <h2 className="text-lg md:text-xl font-medium group-hover:text-zinc-50">
                    {gig.title || `${gig.venue}, ${gig.city}`}
                  </h2>
                  <p className="text-sm text-zinc-400">
                    {gig.venue} · {gig.city}
                  </p>
                </div>
                <span className="text-xs md:text-sm text-zinc-400 md:text-right">
                  Visa gig&nbsp;→
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}