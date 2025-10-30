'use client';
import { useState } from 'react';

export default function MobileMenu({ sections }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o => !o);

  const clickTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="rounded-md border border-white/20 px-3 py-1 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition"
      >
        Menu
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-lg border border-white/10 bg-black/90 backdrop-blur p-2 text-sm z-50">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => clickTo(s.id)}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-white/10"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
