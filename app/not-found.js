import Link from "next/link";

export const metadata = {
  title: "Sidan finns inte | Mordman",
};

const linkClass =
  "inline-flex items-center rounded-full px-6 py-3 text-sm uppercase font-heading transition-all duration-300 border border-white/20 hover:border-[rgba(125,255,77,0.8)] hover:shadow-[0_0_25px_rgba(125,255,77,0.45)] hover:text-[#7DFF4D]";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-4 py-10 pt-32 md:px-10">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight">
          Sidan finns inte
        </h1>
        <p className="mt-4 text-zinc-400">
          Länken kan vara gammal eller felstavad. Här är några ställen att fortsätta på:
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className={linkClass}>Till startsidan</Link>
          <Link href="/spelningar" className={linkClass}>Spelningar</Link>
          <Link href="/#contact" className={linkClass}>Boka Mordman</Link>
        </nav>
      </section>
    </main>
  );
}
