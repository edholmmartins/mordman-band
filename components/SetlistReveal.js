'use client';
import { useState, useEffect } from 'react';

export default function SetlistReveal({ date, children }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const gigDate = new Date(date + 'T23:59:59');
    setRevealed(new Date() > gigDate);
  }, [date]);

  if (revealed) return children;

  return (
    <div className="relative select-none">
      <div className="blur-md pointer-events-none opacity-40" aria-hidden="true">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-sm text-zinc-400 uppercase tracking-widest">
          Setlisten avslöjas efter spelningen
        </p>
      </div>
    </div>
  );
}
