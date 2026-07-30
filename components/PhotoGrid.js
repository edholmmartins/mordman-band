'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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

function pickRandomUnique(files, count) {
  if (!Array.isArray(files) || files.length === 0) return [];
  const copy = [...files];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}

export default function PhotoGrid() {
  const [allFiles, setAllFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [pool, setPool] = useState([]);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

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
  }, [allFiles, images]);

  return (
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
  );
}
