import { ChevronDown } from "lucide-react";
import { renderInline } from "./RichText";

// Same look as the homepage FaqSection, but with native <details> so it
// needs no client JavaScript.
export default function LandingFaq({ faqs }) {
  return (
    <section className="bg-black text-white px-6 py-12 md:px-10 border-t border-white/10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">Vanliga frågor</h2>
        <div className="divide-y divide-white/10">
          {faqs.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="w-full flex justify-between items-center text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-medium text-white">{item.q}</span>
                <ChevronDown className="shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-white/90">{renderInline(item.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
