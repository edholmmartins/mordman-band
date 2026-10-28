// app/gigs/[slug]/page.js
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gigs } from "../gigsData";
import SetlistReveal from "@/components/SetlistReveal";
import { baseOpenGraph, BAND_ID, SITE_URL } from "../../seo";

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

  const title = `${gig.venue}, ${gig.city} – ${dateLabel} | Mordman`;
  const description =
    gig.description ||
    `Mordman live på ${gig.venue} i ${gig.city} – setlist, bilder och videos från spelningen.`;

  return {
    title,
    description,
    alternates: { canonical: `/spelningar/${gig.slug}` },
    openGraph: {
      ...baseOpenGraph,
      title,
      description,
      url: `/spelningar/${gig.slug}`,
      ...(gig.poster && { images: [gig.poster] }),
    },
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

  // Event markup only for public gigs; private/corporate gigs aren't events
  // the public can attend. Optional fields (startTime, endTime, address,
  // venueUrl, price, ticketUrl, cancelled) live in gigsData.js.
  const isPublic = gig.audience === "Öppen spelning";
  const gigUrl = `${SITE_URL}/spelningar/${gig.slug}`;
  const jsonLdEvent = isPublic && {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    "name": `Mordman live – ${gig.venue}, ${gig.city}`,
    "startDate": gig.startTime || gig.date,
    ...(gig.endTime && { "endDate": gig.endTime }),
    "location": {
      "@type": "Place",
      "name": gig.venue,
      "address": {
        "@type": "PostalAddress",
        ...(gig.address && { "streetAddress": gig.address }),
        "addressLocality": gig.city,
        "addressCountry": "SE",
      },
    },
    "performer": { "@type": "MusicGroup", "@id": BAND_ID, "name": "Mordman" },
    "organizer": {
      "@type": "Organization",
      "name": gig.venue,
      ...(gig.venueUrl && { "url": gig.venueUrl }),
    },
    ...(gig.price !== undefined && {
      "offers": {
        "@type": "Offer",
        "price": gig.price,
        "priceCurrency": "SEK",
        "availability": "https://schema.org/InStock",
        "url": gig.ticketUrl || gigUrl,
        "validFrom": gig.date,
      },
    }),
    "description": gig.description || `Mordman live på ${gig.venue} i ${gig.city}.`,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": gig.cancelled
      ? "https://schema.org/EventCancelled"
      : "https://schema.org/EventScheduled",
    ...((gig.poster || gig.media?.heroImage) && {
      "image": `${SITE_URL}${gig.poster || gig.media.heroImage}`,
    }),
    "url": gigUrl,
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-4 py-10 md:px-10 pt-24">
      {jsonLdEvent && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
        />
      )}
      <section className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/spelningar"
          className="inline-flex text-xs uppercase tracking-[0.18em] text-zinc-500 hover:text-zinc-300 mb-2"
        >
          ← Tillbaka till spelningar
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
              alt={`Mordman live på ${gig.venue} i ${gig.city}`}
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
            <SetlistReveal date={gig.date}>
              <ol className="list-decimal list-inside space-y-1 text-sm text-zinc-200">
                {gig.setlist.map((song, idx) => (
                  <li key={idx}>{song}</li>
                ))}
              </ol>
            </SetlistReveal>
          </section>
        )}
    {/* 
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
          */}
      </section>
    </main>
  );
}