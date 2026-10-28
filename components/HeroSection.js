'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const NEON_GREEN = '#7DFF4D';
const PURPLE_MAIN = '#6B2AA5';

export default function HeroSection() {
  // Video only on desktop without reduced motion; mobile gets the poster (LCP).
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    setShowVideo(mq.matches);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] pt-24 overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0 overflow-hidden bg-black"
      >
        <Image
          src="/content/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover scale-[1.35] md:scale-100 origin-center"
        />
        {showVideo && (
          <video
            className="absolute inset-0 h-full w-full object-cover origin-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/content/hero.mp4" type="video/mp4" />
          </video>
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 0% 0%, ${PURPLE_MAIN}20 0%, transparent 55%), linear-gradient(to bottom, #00000040 10%, #00000060 30%, #00000080 50%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      </motion.div>

      <div
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full blur-3xl opacity-60"
        style={{ background: `${PURPLE_MAIN}80` }}
      />
      <div
        className="pointer-events-none absolute left-1/3 bottom-0 h-64 w-64 rounded-full blur-3xl opacity-70"
        style={{ background: `${NEON_GREEN}40` }}
      />

      <motion.div
        initial={{ y: 26 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6"
      >
        <div className="max-w-3xl">
          {/* H1 names the brand (search engines read "mordman" as a typo of "Nordman") plus what we are and who we play for; the slogan stays as the big visual line. */}
          <h1 className="mb-4 text-sm sm:text-base uppercase tracking-[0.18em] text-white/80 font-heading drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]">
            Mordman – coverband från Gävle för 50-årsfesten, privatfesten och krogen
          </h1>
          <p className="font-heading tracking-tight text-6xl sm:text-7xl md:text-8xl font-black leading-[0.95] uppercase drop-shadow-[0_0_25px_rgba(0,0,0,0.9)]">
            HÖGT. RÅTT. <br />
            <span className="font-heading bg-clip-text">RÖJ.</span>
          </p>
          <p className="mt-3 block text-3xl sm:text-4xl text-white/85 max-w-prose font-body">
            Trött på Avicii-covers och RAJRAJ?
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#photos"
              onClick={(e) => { e.preventDefault(); scrollTo('photos'); }}
              className="inline-flex items-center gap-1 rounded-full border px-5 py-2.5 text-sm uppercase transition shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_25px_rgba(125,255,77,0.5)]"
              style={{ borderColor: NEON_GREEN, color: NEON_GREEN }}
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
  );
}
