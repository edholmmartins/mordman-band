'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Youtube, Mail, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from '@/components/MobileMenu';
import SocialLink from '@/components/SocialLink';
import './globals.css';

const GRID_COUNT = 9;               // how many tiles
const REPLACE_EVERY_MS = 1400;      // how often to replace a single tile (1.4s)
const IMAGE_QUALITY = 62;           // next/image quality tweak

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <Image src="/content/logo_text.png" alt="Band logo" width={200} height={28} priority />
                }
              <span className="sr-only">Band Home</span>
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

      {/* Hero */}
      <section className="relative pt-24">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-black to-black" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-6xl sm:text-5xl md:text-6xl font-black leading-tight">
                HÖGT. RÅTT. <span className="text-white/60">KUKA.</span>
              </h1>
              <p className="mt-5 text-white/80 max-w-prose">
                Trött på Avici-covers och RAJRAJ? 
              </p>
              <div className="mt-8 flex gap-4">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
  src="/content/hero.jpg"
  alt="Band live performance"
  fill
  className="object-cover"
  priority
  sizes="(min-width:1024px) 50vw, 100vw"
  quality={IMAGE_QUALITY}
  placeholder="blur"
  blurDataURL={shimmerDataURL(32, 24)}
/>
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section id="who" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-black uppercase">Vilka är vi?</h2>
          <p className="mt-6 text-white/80 max-w-3xl leading-relaxed">
            Vi är ett 5-manna coverband som lirar låtar från 90- och 00-talet. Vi satsar på låtar med hög igenkänning men som kanske inte är de mest uppenbara dängorna. Gåshud utlovas!</p>
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
                        alt={`Band photo ${i + 1}`}
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

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <SocialLink href="https://instagram.com" label="Instagram" Icon={Instagram} />
            <SocialLink href="https://facebook.com" label="Facebook" Icon={Facebook} />
            <SocialLink href="https://twitter.com" label="Twitter" Icon={Twitter} />
            <SocialLink href="https://youtube.com" label="YouTube" Icon={Youtube} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-black uppercase">Kontakt</h2>
          <p className="mt-6 text-white/80">Bokning, press eller kärleksbrev. Kontakta oss:</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs uppercase mb-2">Ditt namn</label>
              <input type="text" placeholder="Kurt Cobain" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <div>
              <label className="block text-xs uppercase mb-2">E-post</label>
              <input type="email" placeholder="meatloaf@example.com" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <div>
              <label className="block text-xs uppercase mb-2">Meddelande</label>
              <textarea rows={5} placeholder="Berätta om ditt evenemang…" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm uppercase hover:opacity-90 transition">
              Skicka <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg font-bold uppercase">Direktkontakt</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 opacity-80"><Mail className="h-5 w-5" /><a className="hover:underline" href="mailto:boka@mordman.se">boka@mordman.se</a></li>
              <li className="flex items-center gap-3 opacity-80"><ArrowUpRight className="h-5 w-5" /><a className="hover:underline" href="#socials" onClick={(e)=>{e.preventDefault(); scrollTo('socials');}}>Hitta oss på sociala medier</a></li>
            </ul>
            <p className="mt-6 text-sm text-white/60">Vi läser allt. Förvänta dig ett svar inom ett par dagar.</p>
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Mordman band. Alla rättigheter förbehållna.</p>

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