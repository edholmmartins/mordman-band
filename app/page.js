'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Mail, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialLink from '@/components/SocialLink';
import FaqSection from "@/components/FaqSection";
import './globals.css';
import Nav from "@/components/NavBar";

const GRID_COUNT = 9;               // how many tiles
const REPLACE_EVERY_MS = 1400;      // how often to replace a single tile (1.4s)
const IMAGE_QUALITY = 62;           // next/image quality tweak

// Accent colors from Halloween poster
const NEON_GREEN = '#7DFF4D';
const PURPLE_MAIN = '#6B2AA5';
const PURPLE_DARK = '#2E0C4A';

// Floating CTA (mobile-only): hides when #contact is visible
function FloatingEmailCTA() {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const target = document.getElementById('contact');
    if (!target) return;

    const io = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { root: null, threshold: 0.1 }
    );

    io.observe(target);
    return () => io.disconnect();
  }, []);

  if (!show) return null;

  return (
  <a
  href="mailto:boka@mordman.se?subject=Boka"
  className="
    md:hidden
    fixed inset-x-4 bottom-6 z-40
    px-6 py-4 rounded-2xl
    text-white font-heading uppercase tracking-wide
    shadow-xl shadow-black/60
    flex items-center justify-center
    border border-white/30
    transition-all duration-200
    hover:shadow-[0_0_30px_rgba(125,255,77,0.6)]
    hover:border-[rgba(125,255,77,0.8)]
  "
  style={{
    background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE_MAIN} 40%, black 100%)`,
  }}
>
  Maila oss!
  <Mail className="ml-1 h-5 w-5 opacity-90 self-center translate-y-[0.5px] transition-transform duration-200 group-hover:translate-y-[0.5px] hover:-translate-y-[1px]" />
</a>
  );
}

export default function Page() {
  const [allFiles, setAllFiles] = useState([]);    // all /content/img files
  const [images, setImages] = useState([]);        // currently visible 9
  const [pool, setPool] = useState([]);            // remaining files to draw from
  const indexRef = useRef(0);                      // which tile to replace next
  const intervalRef = useRef(null);

  // Fetch image list once
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/images', { cache: 'no-store' });
        const data = await res.json();
        const files = Array.isArray(data.files) ? data.files : [];
        const initial = pickRandomUnique(files, GRID_COUNT);
        const remaining = files.filter(f => !new Set(initial).has(f));

        setAllFiles(files);
        setImages(initial);
        setPool(remaining.length ? remaining : files.filter(f => !new Set(initial).has(f)));
      } catch (e) {
        console.error('Failed to load images:', e);
      }
    };
    load();
  }, []);

  // Replace ONE tile at a time, round-robin, with crossfade
  useEffect(() => {
    if (!allFiles.length || !images.length) return;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setImages(prev => {
        const nextIndex = indexRef.current % GRID_COUNT;
        indexRef.current += 1;

        let currentSet = new Set(prev);
        let nextPool = pool.filter(p => !currentSet.has(p));
        if (nextPool.length === 0) {
          nextPool = allFiles.filter(f => !currentSet.has(f));
        }

        if (nextPool.length === 0) return prev;

        const pickIdx = Math.floor(Math.random() * nextPool.length);
        const replacement = nextPool[pickIdx];
        const updatedPool = [...nextPool.slice(0, pickIdx), ...nextPool.slice(pickIdx + 1)];

        const next = [...prev];
        next[nextIndex] = replacement;

        setPool(updatedPool);
        return next;
      });
    }, REPLACE_EVERY_MS);

    return () => clearInterval(intervalRef.current);
  }, [allFiles, images]); // pool is updated inside setImages

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Nav />

      {/* HERO — full-bleed background with motion & overlayed text */}
      <section id="hero" className="relative min-h-[calc(100vh-4rem)] pt-24 overflow-hidden">
        {/* Background image (Ken Burns subtle scale) */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/content/hero.jpg"
            alt="Mordman coverband från Gävle live på scen"
            fill
            sizes="100vw"
            priority
            quality={62}
            placeholder="blur"
            blurDataURL={shimmerDataURL(32, 24)}
            className="object-cover object-center"
          />
          {/* Overlay with purple/black gradient for legibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 0% 0%, ${PURPLE_MAIN}40 0%, transparent 55%), linear-gradient(to bottom, #000000c0 10%, #000000d0 60%, #000000f0 100%)`,
            }}
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        </motion.div>

        {/* Hero glow blobs */}
        <div
          className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full blur-3xl opacity-60"
          style={{ background: `${PURPLE_MAIN}80` }}
        />
        <div
          className="pointer-events-none absolute left-1/3 bottom-0 h-64 w-64 rounded-full blur-3xl opacity-70"
          style={{ background: `${NEON_GREEN}40` }}
        />

        {/* Text block (left-aligned) */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6"
        >
          <div className="max-w-3xl">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.95] uppercase drop-shadow-[0_0_25px_rgba(0,0,0,0.9)]">
              HÖGT. RÅTT. <br />
              <span
                className="font-heading bg-clip-text"
              >
                RÖJ.
              </span>
            </h1>
            <span className="mt-3 block text-3xl sm:text-4xl text-white/85 max-w-prose font-body">
              Trött på Avicii-covers och RAJRAJ?
            </span>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#photos"
                onClick={(e) => { e.preventDefault(); scrollTo('photos'); }}
                className="inline-flex items-center gap-1 rounded-full border px-5 py-2.5 text-sm uppercase transition shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_25px_rgba(125,255,77,0.5)]"
                style={{
                  borderColor: `${NEON_GREEN}`,
                  color: NEON_GREEN,
                }}
              >
                Bilder <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm uppercase transition"
                style={{
                  background: NEON_GREEN,
                  color: '#000',
                  boxShadow: '0 0 35px rgba(125,255,77,0.55)',
                }}
              >
                Boka oss
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Who we are */}
      <section id="about" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-black uppercase">
            <span
              className="bg-clip-text"
            >
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
            Kort sagt – vi fixar <strong>röj, svett och rock’n’roll</strong> så det känns som en hel arena, oavsett lokalens storlek.
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

      {/* Photos — per-tile crossfade */}
      <section id="photos" className="scroll-mt-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase">Bilder</h2>
            <a
              href="#top"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs uppercase opacity-70 hover:opacity-100"
            >
              Tillbaks till toppen
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: GRID_COUNT }).map((_, i) => (
              <div key={i} className="relative h-64 w-full overflow-hidden rounded-xl border border-white/5 bg-white/5">
                <AnimatePresence mode="wait">
                  {images[i] ? (
                    <motion.div
                      key={images[i]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[i]}
                        alt={`Mordman på scen ${i + 1}`}
                        fill
                        className="object-cover transition duration-300 hover:scale-[1.03]"
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        quality={IMAGE_QUALITY}
                        placeholder="blur"
                        blurDataURL={shimmerDataURL(16, 10)}
                        priority={i < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 hover:opacity-100 transition" />
                    </motion.div>
                  ) : (
                    <div className="absolute inset-0 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
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

      {/* Contact — unified full-bleed block */}
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

            {/* BIG EMAIL CARD */}
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
  {/* Hover overlay (purple + green blend) */}
  <div
    className="
      absolute inset-0 
      opacity-0 group-hover:opacity-100
      transition-all duration-300
    "
    style={{
      background: `linear-gradient(
        120deg,
        rgba(125,255,77,0.15),
        ${PURPLE_MAIN}55,
        transparent
      )`,
    }}
  />

  {/* Sweep highlight */}
  <div
    className="
      absolute inset-0 
      pointer-events-none 
      opacity-0 group-hover:opacity-30
      transition-all duration-700
      blur-3xl
    "
    style={{
      background: `radial-gradient(circle at 20% 20%, rgba(125,255,77,0.4), transparent 60%)`,
      transform: "scale(1.5)",
    }}
  />

  {/* CONTENT */}
  <div className="relative z-10">
    <div className="text-xs uppercase opacity-70 font-body">Email</div>

    <div
      className="
        mt-1 font-heading text-4xl sm:text-5xl md:text-6xl tracking-wide
        transition-colors duration-300
        group-hover:text-[#7DFF4D]
      "
    >
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

      <FaqSection />
      <FloatingEmailCTA />

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Mordman Handelsbolag - Org. Nummer: 9698038123. Alla rättigheter förbehållna.</p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Helpers ---------- */

function pickRandomUnique(files, count) {
  if (!Array.isArray(files) || files.length === 0) return [];
  const copy = [...files];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}

// Tiny shimmer SVG as low-quality placeholder
function shimmerDataURL(w = 16, h = 10) {
  const svg = `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#111" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#111" offset="80%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#111"/>
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}