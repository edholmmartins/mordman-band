// app/gigs/page.js
import Link from "next/link";
import Image from "next/image";
import { gigs } from "./gigsData";

export const metadata = {
  title: "Spelningar | Mordman – Coverband live gigs & shows",
  description:
    "Alla spelningar med Mordman – kommande gig och arkiv med tidigare spelningar, setlists, bilder och videos.",
};

export default function GigsPage() {
  // Sort newest first
  const sortedGigs = [...gigs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-4 py-10 pt-24 md:px-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight mb-4">
        Spelningar        
        </h1>

        <p className="text-zinc-400 max-w-2xl mb-10">
          Ett levande arkiv över våra spelningar – från svettiga klubbkvällar
          till bröllop, firmafester och allt däremellan.
        </p>

        {/* GRID VIEW — 3 COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedGigs.map((gig) => (
            <Link
              key={gig.slug}
              href={`/spelningar/${gig.slug}`}
              className="group rounded-2xl border border-zinc-800/70 bg-zinc-950/40 hover:border-zinc-500/80 hover:bg-zinc-900/60 transition-colors overflow-hidden flex flex-col"
            >
              {/* Poster */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={gig.poster || "/content/gigs/example-poster.jpg"}
                  alt={`${gig.title} poster`}
                  fill
                  className="object-cover group-hover:brightness-110 transition-all"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">

                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-1">
                  {new Date(gig.date).toLocaleDateString("sv-SE", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </p>

                <h2 className="text-lg font-heading font-medium mb-1 group-hover:text-zinc-50">
                  {gig.title || `${gig.venue}, ${gig.city}`}
                </h2>

                <p className="text-sm text-zinc-400 mb-4">
                  {gig.venue} · {gig.city}
                </p>

                {/* CTA — bottom right */}
                <span className="mt-auto text-sm font-semibold text-zinc-300 group-hover:text-white self-end">
                  Visa spelning →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}