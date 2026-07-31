import Link from 'next/link';
import { Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import SocialLink from '@/components/SocialLink';
import FaqSection from '@/components/FaqSection';
import HeroSection from '@/components/HeroSection';
import PhotoGrid from '@/components/PhotoGrid';
import FloatingEmailCTA from '@/components/FloatingEmailCTA';
import ScrollToTopLink from '@/components/ScrollToTopLink';

const NEON_GREEN = '#7DFF4D';
const PURPLE_MAIN = '#6B2AA5';
const PURPLE_DARK = '#2E0C4A';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">

      <HeroSection />

      {/* Who we are */}
      <section id="about" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-black uppercase">
            <span className="bg-clip-text">
              Vilka är vi?
            </span>
          </h2>
          <p className="font-body mt-6 text-white/80 leading-relaxed">
            Vi är ett femmanna-coverband som bjuder på svettig nostalgi från 90- och 00-talet – låtarna du älskar men kanske glömt att du saknade.
            Vi fokuserar på hög igenkänning utan att fastna i de mest uppenbara dängorna – <strong>gåshud utlovas!</strong>
          </p>

          <p className="font-body text-white/80 leading-relaxed mt-6">
            När du bokar oss får du ett <strong>komplett paket med både ljud- och ljusutrustning</strong>,
            anpassat efter lokalen och stämningen du vill skapa.
            Vi är dessutom registrerade med <strong>F-skattesedel</strong>, så du får en <strong>riktig faktura</strong> – inga konstiga upplägg med mat, kläder eller tjänster som ersättning.
          </p>

          <p className="font-body text-white/80 leading-relaxed mt-6">
            Vår <strong>setlist är formbar</strong> efter dina önskemål, men alltid med rötterna i den musik vi älskar att lira
            (kolla in vår Spotify-lista längre ner!).
          </p>

          <p className="font-body text-white/80 leading-relaxed mt-6">
            <strong>Mordman passar perfekt</strong> för 30-, 40- eller 50-årsfesten, firmafesten eller när du vill toppa stämningen på din krog eller restaurang.
            Kort sagt – vi fixar <strong>röj, svett och rock&apos;n&apos;roll</strong> så det känns som en hel arena, oavsett lokalens storlek.
          </p>
        </div>
      </section>

      {/* Music */}
      <section
        id="music"
        className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white/10"
        style={{
          background: `radial-gradient(circle at 10% 0%, ${PURPLE_DARK}80 0%, transparent 55%), radial-gradient(circle at 90% 0%, ${PURPLE_MAIN}70 0%, transparent 55%), #050505`,
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase">
              Vad spelar vi?
            </h2>
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 overflow-hidden shadow-[0_0_45px_rgba(0,0,0,0.9)]">
            <iframe
              title="Spotify Playlist"
              src="https://open.spotify.com/embed/playlist/260tGjraPvj0SnfFwag455?utm_source=generator&theme=0"
              className="w-full h-[420px] md:h-[520px] bg-black"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Photos */}
      <section id="photos" className="scroll-mt-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase">Bilder</h2>
            <ScrollToTopLink />
          </div>

          <PhotoGrid />
        </div>
      </section>

      {/* Socials */}
      <section id="socials" className="scroll-mt-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-black uppercase">Socials</h2>
          <p className="mt-6 text-white/80">
            Följ ljudet. Nya låtar, turnédatum och bakom kulisserna.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-4">
            <SocialLink href="https://www.instagram.com/mordman.band/" label="Instagram" Icon={Instagram} />
            <SocialLink href="https://www.facebook.com/profile.php?id=61579179277781" label="Facebook" Icon={Facebook} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <div
          className="relative left-1/2 right-1/2 -mx-[50vw] w-screen"
          style={{
            background: `radial-gradient(circle at 0% 0%, ${PURPLE_DARK}90 0%, transparent 55%), #050505`,
          }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
            <h2 className="text-3xl md:text-4xl font-black uppercase">Kontakt</h2>
            <p className="mt-2 text-white/75 font-body max-w-2xl">
              Bokningar, press eller allmänna förfrågningar — skicka oss ett email:
            </p>

            <a
              href="mailto:boka@mordman.se?subject=Bokning"
              className="
                group relative mt-8 block overflow-hidden
                rounded-2xl border border-white/20
                p-10 md:p-14
                transition-all duration-300
                hover:scale-[1.02]
                hover:border-[rgba(125,255,77,0.8)]
                hover:shadow-[0_0_35px_rgba(125,255,77,0.45)]
              "
              style={{
                background: `linear-gradient(135deg, black 0%, ${PURPLE_MAIN}40 40%, ${PURPLE_DARK} 100%)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: `linear-gradient(120deg, rgba(125,255,77,0.15), ${PURPLE_MAIN}55, transparent)`,
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-all duration-700 blur-3xl"
                style={{
                  background: `radial-gradient(circle at 20% 20%, rgba(125,255,77,0.4), transparent 60%)`,
                  transform: 'scale(1.5)',
                }}
              />

              <div className="relative z-10">
                <div className="text-xs uppercase opacity-70 font-body">Email</div>

                <div className="mt-1 font-heading text-4xl sm:text-5xl md:text-6xl tracking-wide transition-colors duration-300 group-hover:text-[#7DFF4D]">
                  boka@mordman.se
                </div>

                <div className="mt-3 text-sm opacity-80 font-body">
                  Vi läser allt och svarar på ett par dagar.
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Spelningar CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase">Spelningar</h2>
          <p className="mt-4 text-white/75 font-body max-w-xl mx-auto">
            Kolla in våra tidigare och kommande spelningar — setlists, bilder och mer.
          </p>
          <Link
            href="/spelningar"
            className="inline-flex items-center gap-2 mt-6 rounded-full px-6 py-3 text-sm uppercase font-heading transition-all duration-300 border border-white/20 hover:border-[rgba(125,255,77,0.8)] hover:shadow-[0_0_25px_rgba(125,255,77,0.45)] hover:text-[#7DFF4D]"
          >
            Se alla spelningar <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FaqSection />
      <FloatingEmailCTA />

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Mordman Handelsbolag - Org. Nummer: 969803-8123. Alla rättigheter förbehållna.</p>
        </div>
      </footer>
    </div>
  );
}
