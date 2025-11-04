'use client';
import React from 'react';
import { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Youtube, Mail, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from '@/components/MobileMenu';
import SocialLink from '@/components/SocialLink';
import './globals.css';

const GRID_COUNT = 9;               // how many tiles
const REPLACE_EVERY_MS = 1400;      // how often to replace a single tile (1.4s)
const IMAGE_QUALITY = 62;           // next/image quality tweak

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
        fixed inset-x-4 bottom-4 z-40
        rounded-full px-6 py-4
        bg-white text-black
        text-sm font-heading uppercase 
        shadow-2xl shadow-black/40
        hover:opacity-90 transition
        pb-[calc(env(safe-area-inset-bottom)+1rem)]
      "
      aria-label="Maila oss"
    >
      Maila oss 
    </a>
  );
}


export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [allFiles, setAllFiles] = useState([]);    // all /content/img files
  const [images, setImages] = useState([]);        // currently visible 9
  const [pool, setPool] = useState([]);            // remaining files to draw from
  const indexRef = useRef(0);                      // which tile to replace next
  const intervalRef = useRef(null);

  // Header blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

        // Ensure we have a pool (avoid duplicates with current grid)
        let currentSet = new Set(prev);
        let nextPool = pool.filter(p => !currentSet.has(p));
        if (nextPool.length === 0) {
          // Refill pool from all files except currently visible
          nextPool = allFiles.filter(f => !currentSet.has(f));
        }

        // If still no options, bail
        if (nextPool.length === 0) return prev;

        // Pick a replacement and update pool
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

  const sections = useMemo(
    () => [
      { id: 'who', label: 'VILKA ÄR VI' },
      { id: 'music', label: 'VAD SPELAR VI' }, // <— add this
      { id: 'photos', label: 'BILDER' },
      { id: 'socials', label: 'SOCIALS' },
      { id: 'contact', label: 'KONTAKT' },
      
    ],
    []
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Header */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/70 border-b border-white/10' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              
                { 
                  <Image src="/content/logo_text.png" alt="Mordman logotyp" width={200} height={28} priority />
                }
              <span className="sr-only">Band hem!</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm uppercase font-heading">
              {sections.map((s) => (
                <button key={s.id} onClick={() => scrollTo(s.id)} className="hover:opacity-80">
                  {s.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu */}
            <div className="md:hidden">
              <MobileMenu sections={sections} />
            </div>
          </div>
        </div>
      </header>

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
      src="/content/hero.jpg"            // must be at: public/content/hero.jpg
      alt="Mordman coverband från Gävle live på scen"
      fill
      sizes="100vw"
      priority
      quality={62}
      placeholder="blur"
      blurDataURL={shimmerDataURL(32, 24)}
      className="object-cover object-center"
    />
    {/* Overlay for legibility (won’t block clicks) */}
    <div className="absolute inset-0 bg-black/55 pointer-events-none" />
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
  </motion.div>

  {/* Text block (left-aligned) */}
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
    className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6"
  >
    <div className="max-w-3xl">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.95] uppercase">
        HÖGT. RÅTT. <br/><span className="text-neutral-400 font-heading">RÖJ.</span>
      </h1>
      <span className="mt-3 text-4xl text-white/80 max-w-prose font-body">
        Trött på Avicii-covers och RAJRAJ?
      </span>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#photos"
          onClick={(e) => { e.preventDefault(); scrollTo('photos'); }}
          className="inline-flex items-center gap-2 rounded-full border border-white px-5 py-2.5 text-sm uppercase hover:bg-white hover:text-black transition"
        >
          Bilder <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm uppercase hover:opacity-90 transition"
        >
          Boka oss
        </a>
      </div>
    </div>
  </motion.div>
</section>

      {/* Who we are */}
      <section id="who" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-black uppercase">Vilka är vi?</h2>
          <p className="font-body mt-6 text-white/80 leading-relaxed space-y-4">
            Vi är ett femmanna-coverband som bjuder på svettig nostalgi från 90- och 00-talet – låtarna du älskar men kanske glömt att du saknade.
            Vi fokuserar på hög igenkänning utan att fastna i de mest uppenbara dängorna – <strong>gåshud utlovas!</strong>
          </p>

          <p className="font-body text-white/80 leading-relaxed space-y-4 mt-6">
            När du bokar oss får du ett <strong>komplett paket med både ljud- och ljusutrustning</strong>,
            anpassat efter lokalen och stämningen du vill skapa.
            Vi är dessutom registrerade med <strong>F-skattesedel</strong>, så du får en <strong>riktig faktura</strong> – inga konstiga upplägg med mat, kläder eller tjänster som ersättning.
          </p>

          <p className="font-body text-white/80 leading-relaxed space-y-4 mt-6">
            Vår <strong>setlist är formbar</strong> efter dina önskemål, men alltid med rötterna i den musik vi älskar att lira
            (kolla in vår Spotify-lista längre ner!).
          </p>

          <p className="font-body text-white/80 leading-relaxed space-y-4 mt-6">
            <strong>Mordman passar perfekt</strong> för 30-, 40- eller 50-årsfesten, firmafesten eller när du vill toppa stämningen på din krog eller restaurang.
            Kort sagt – vi fixar <strong>röj, svett och rock’n’roll</strong> så det känns som en hel arena, oavsett lokalens storlek.
          </p>
        </div>
      </section>

      {/* Music */}
<section id="music" className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white/10 bg-white/[0.03]">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
    <div className="flex items-end justify-between gap-6">
      <h2 className="text-3xl md:text-4xl font-black uppercase">Vad spelar vi?</h2>
    </div>

     <div className="mt-8 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <iframe
        title="Spotify Playlist"
        src={`https://open.spotify.com/embed/playlist/260tGjraPvj0SnfFwag455?utm_source=generator&theme=0`}
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
              <div key={i} className="relative h-64 w-full overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                  {images[i] ? (
                    <motion.div
                      key={images[i]}                  // key by src to trigger exit/enter
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
                        // priority for the first couple of tiles to speed up initial load
                        priority={i < 2}
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition" />
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
          <p className="mt-6 text-white/80">Följ ljudet. Nya låtar, turnédatum och bakom kulisserna.</p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-4">
            <SocialLink href="https://www.instagram.com/mordman.band/" label="Instagram" Icon={Instagram} />
            <SocialLink href="https://www.facebook.com/profile.php?id=61579179277781" label="Facebook" Icon={Facebook} />
          </div>
        </div>
      </section>


{/* Contact — unified full-bleed block (no separator line) */}
<section id="contact" className="scroll-mt-24">
  {/* Full-bleed background wraps BOTH header and email */}
  <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white/[0.03]">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-black uppercase">Kontakt</h2>
      <p className="mt-2 text-white/70 font-body max-w-2xl">
        Bokningar, press eller allmänna förfrågningar — skicka oss ett email:
      </p>

      {/* BIG EMAIL CARD (still full width visually, but no line above it) */}
      <a
        href="mailto:boka@mordman.se?subject=Bokning"
        className="group mt-8 block overflow-hidden rounded-2xl border border-white/10 p-10 md:p-14 hover:bg-white hover:text-black transition"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 blur transition" />
        <div className="relative z-10">
          <div className="text-xs uppercase opacity-70 font-body">Email</div>
          <div className="mt-1 font-heading text-4xl sm:text-5xl md:text-6xl tracking-wide">
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
<FloatingEmailCTA />

<footer className="border-t border-white/10">
  {/* footer content */}
</footer>
      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Mordman Handelsbolag. Alla rättigheter förbehållna.</p>

        </div>
      </footer>
    </div>
  );
}

/* ---------- Helpers ---------- */

function pickRandomUnique(files, count) {
  if (!Array.isArray(files) || files.length === 0) return [];
  const copy = [...files];
  // Fisher-Yates shuffle
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

