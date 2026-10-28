import FloatingEmailCTA from "@/components/FloatingEmailCTA";
import BookingCta from "./BookingCta";
import LandingFaq from "./LandingFaq";
import LandingLinks from "./LandingLinks";
import { renderInline, plainText } from "./RichText";
import { baseOpenGraph, SITE_URL } from "@/app/seo";

export function landingMetadata({ path, title, description }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, title, description, url: path },
  };
}

function Block({ block }) {
  if (typeof block === "string") {
    return <p className="font-body mt-4 text-white/80 leading-relaxed">{renderInline(block)}</p>;
  }
  const ordered = Boolean(block.ol);
  const List = ordered ? "ol" : "ul";
  return (
    <List className={`mt-4 space-y-2 pl-5 ${ordered ? "list-decimal" : "list-disc"} marker:text-white/50`}>
      {(block.ol || block.ul).map((item) => (
        <li key={item}>{renderInline(item)}</li>
      ))}
    </List>
  );
}

export default function LandingPage({ path, h1, intro, sections, faqs }) {
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${SITE_URL}${path}`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
    })),
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 pt-28 pb-16 md:pt-32 md:pb-20">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight">{h1}</h1>
        {intro.map((p) => (
          <p key={p} className="font-body mt-6 text-lg text-white/85 leading-relaxed">
            {renderInline(p)}
          </p>
        ))}

        {sections.map((s) => (
          <section key={s.h2} className="mt-12">
            <h2 className="text-2xl md:text-3xl font-black uppercase">{s.h2}</h2>
            {s.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </section>
        ))}
      </article>

      <LandingFaq faqs={faqs} />
      <BookingCta />
      <LandingLinks current={path} />
      <FloatingEmailCTA />
    </main>
  );
}
