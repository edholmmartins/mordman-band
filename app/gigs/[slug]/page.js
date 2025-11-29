// app/gigs/[slug]/page.js
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gigs } from "../gigsData";

export function generateStaticParams() {
  return gigs.map((gig) => ({ slug: gig.slug }));
}

export function generateMetadata({ params }) {
  const gig = gigs.find((g) => g.slug === params.slug);
  if (!gig) return {};

  const dateLabel = new Date(gig.date).toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return {
    title: `${gig.venue}, ${gig.city} – ${dateLabel} | Mordman`,
    description:
      gig.description ||
      `Mordman live på ${gig.venue} i ${gig.city} – setlist, bilder och videos från spelningen.`,
  };
}

export default function GigPage({ params }) {
  const gig = gigs.find((g) => g.slug === params.slug);

  if (!gig) return notFound();

  const dateLabel = new Date(gig.date).toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-4 py-10 md:px-10">
      <section className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/gigs"
          className="inline-flex text-xs uppercase tracking-[0.18em] text-zinc-500 hover:text-zinc-300 mb-2"
        >
          ← Tillbaka till gigs
        </Link>

        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            {dateLabel}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {gig.title || `${gig.venue}, ${gig.city}`}
          </h1>
          <p className="text-sm text-zinc-400">
            {gig.venue} · {gig.city}
          </p>
        </header>

        {gig.media?.heroImage && (
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-900">
            <Image
              src={gig.media.heroImage}
              alt={`Mordman live at ${gig.venue} in ${gig.city}`}
              fill
              className="object-cover"
            />
          </div>
        )}

        {gig.description && (
          <div className="prose prose-invert max-w-none prose-p:text-zinc-200 prose-a:text-zinc-200/90">
            <p>{gig.description}</p>
          </div>
        )}

        {gig.setlist && gig.setlist.length > 0 && (
          <section>
            <h2 className="text-xl font-medium mb-3">Setlist</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm text-zinc-200">
              {gig.setlist.map((song, idx) => (
                <li key={idx}>{song}</li>
              ))}
            </ol>
          </section>
        )}

        {gig.media?.youtubeUrl && (
          <section className="space-y-3">
            <h2 className="text-xl font-medium">Video</h2>
            <div className="aspect-video rounded-3xl overflow-hidden border border-zinc-800/70 bg-black">
              <iframe
                src={gig.media.youtubeUrl}
                title={`Mordman live – ${gig.venue}, ${gig.city}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}
      </section>
    </main>
  );
}