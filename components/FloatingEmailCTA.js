'use client';
import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

const PURPLE_MAIN = '#6B2AA5';
const PURPLE_DARK = '#2E0C4A';

export default function FloatingEmailCTA() {
  const [show, setShow] = useState(true);

  useEffect(() => {
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
