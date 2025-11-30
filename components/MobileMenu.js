'use client';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function MobileMenu({ sections = [] }) {
  const [open, setOpen] = useState(false);
  const [savedScrollY, setSavedScrollY] = useState(0);

  // Lock body scroll when menu is open; restore on close
  useEffect(() => {
    if (open) {
      const y = window.scrollY || window.pageYOffset || 0;
      setSavedScrollY(y);
      // lock scroll without jumping
      document.body.style.position = 'fixed';
      document.body.style.top = `-${y}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // restore scroll
      const y = savedScrollY;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (y) window.scrollTo(0, y);
    }
    return () => {
      // safety cleanup in case component unmounts while open
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [open, savedScrollY]);

  const goTo = (id) => {
    setOpen(false);

    // wait one frame so body unlock happens before we scroll / navigate
    requestAnimationFrame(() => {
      if (typeof window === 'undefined') return;

      // special case: gigs -> /spelningar
      if (id === 'gigs') {
        window.location.href = '/spelningar';
        return;
      }

      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // if we’re on /spelningar or any subpage, go to root and target the anchor
        window.location.href = `/#${id}`;
      }
    });
  };

  return (
    <div className="relative">
      {/* Hamburger / close */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center p-2 text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Full-screen overlay menu */}
      {open && (
        <div
          className="
            fixed inset-0 z-[100]
            bg-black/95 backdrop-blur-md
            flex flex-col items-center justify-center
            px-6
            font-heading uppercase tracking-widest text-white
            overscroll-contain
          "
          style={{ minHeight: '100dvh' }}
        >
          <nav className="w-full max-w-2xl space-y-3">
            {sections.map((s) =>
              s.id === 'gigs' ? (
                // SPELNINGAR: link to /spelningar with arrow icon
                <Link
                key={s.id}
                href="/spelningar"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 text-center text-2xl md:text-3xl rounded-lg hover:bg-white/10 transition text-white"
              >
                  {s.label}
                  <ArrowUpRight className="h-6 w-6" />
                </Link>
              ) : (
                // all other sections: scrollTo on root page
                <button
                  key={s.id}
                  onClick={() => goTo(s.id)}
                  className="w-full py-4 text-center text-2xl md:text-3xl rounded-lg hover:bg-white/10 transition"
                >
                  {s.label}
                </button>
              )
            )}
          </nav>

          <button
            onClick={() => setOpen(false)}
            className="mt-10 text-sm opacity-70 hover:opacity-100"
            aria-label="Close menu"
          >
            Stäng
          </button>
        </div>
      )}
    </div>
  );
}