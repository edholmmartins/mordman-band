'use client';

export default function ScrollToTopLink() {
  return (
    <a
      href="#hero"
      onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      className="text-xs uppercase opacity-70 hover:opacity-100"
    >
      Tillbaks till toppen
    </a>
  );
}
