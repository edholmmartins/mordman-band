'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import photos from '@/components/photos';

const GRID_COUNT = 9;
const REPLACE_EVERY_MS = 1400;
const IMAGE_QUALITY = 62;

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
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

const BLUR_DATA_URL = shimmerDataURL(16, 10);

export default function PhotoGrid() {
  // The first GRID_COUNT photos are rendered on the server, so they (and their
  // alt text) are in the HTML. Rotation only starts once the grid is on screen,
  // so replacement images never compete with the hero for bandwidth.
  const [images, setImages] = useState(() => photos.slice(0, GRID_COUNT));
  const [visible, setVisible] = useState(false);
  const gridRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || photos.length <= GRID_COUNT) return;

    const interval = setInterval(() => {
      setImages(prev => {
        const shown = new Set(prev.map(p => p.file));
        const pool = photos.filter(p => !shown.has(p.file));
        const next = [...prev];
        next[indexRef.current % GRID_COUNT] = pool[Math.floor(Math.random() * pool.length)];
        indexRef.current += 1;
        return next;
      });
    }, REPLACE_EVERY_MS);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div ref={gridRef} className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((photo, i) => (
        <div key={i} className="relative h-64 w-full overflow-hidden rounded-xl border border-white/5 bg-white/5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={photo.file}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition duration-300 hover:scale-[1.03]"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                quality={IMAGE_QUALITY}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 hover:opacity-100 transition" />
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
