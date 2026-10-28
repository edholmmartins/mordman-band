import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PURPLE_MAIN = "#6B2AA5";
const PURPLE_DARK = "#2E0C4A";

// Shared booking box at the bottom of every landing page (same style as the
// homepage contact card). id="contact" lets FloatingEmailCTA hide when it is visible.
export default function BookingCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24"
      style={{ background: `radial-gradient(circle at 0% 0%, ${PURPLE_DARK}90 0%, transparent 55%), #050505` }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black uppercase">Boka Mordman</h2>
        <p className="mt-2 text-white/75 font-body max-w-2xl">
          Skicka datum, ort och ungefärligt upplägg till <strong>boka@mordman.se</strong> så
          återkommer vi med ett prisförslag. Vi läser allt och svarar på ett par dagar.
        </p>

        <a
          href="mailto:boka@mordman.se?subject=Bokning"
          className="group relative mt-8 block overflow-hidden rounded-2xl border border-white/20 p-10 md:p-14 transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(125,255,77,0.8)] hover:shadow-[0_0_35px_rgba(125,255,77,0.45)]"
          style={{ background: `linear-gradient(135deg, black 0%, ${PURPLE_MAIN}40 40%, ${PURPLE_DARK} 100%)` }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ background: `linear-gradient(120deg, rgba(125,255,77,0.15), ${PURPLE_MAIN}55, transparent)` }}
          />
          <div className="relative z-10">
            <div className="text-xs uppercase opacity-70 font-body">Email</div>
            <div className="mt-1 font-heading text-4xl sm:text-5xl md:text-6xl tracking-wide transition-colors duration-300 group-hover:text-[#7DFF4D]">
              boka@mordman.se
            </div>
          </div>
        </a>

        <Link
          href="/spelningar"
          className="inline-flex items-center gap-2 mt-8 rounded-full px-6 py-3 text-sm uppercase font-heading transition-all duration-300 border border-white/20 hover:border-[rgba(125,255,77,0.8)] hover:shadow-[0_0_25px_rgba(125,255,77,0.45)] hover:text-[#7DFF4D]"
        >
          Se våra spelningar <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
