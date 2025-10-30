'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MobileMenu from '@/components/MobileMenu';
import SocialLink from '@/components/SocialLink';
import './globals.css';

const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1514846225433-31fbe6b97f59?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop',
];

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sections = [
    { id: 'who', label: 'Who we are' },
    { id: 'photos', label: 'Photos' },
    { id: 'socials', label: 'Socials' },
    { id: 'contact', label: 'Contact' },
  ];

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
            {/* LOGO placeholder (wide aspect) */}
            <div className="flex items-center gap-3">
              <div className="h-7 w-[160px] sm:w-[200px] bg-white/90 text-black font-bold tracking-widest flex items-center justify-center rounded-sm">
                {/* Replace with your actual logo: <Image src="/your-logo.svg" alt="Band logo" width={200} height={28} /> */}
                LOGO
              </div>
              <span className="sr-only">Band Home</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-widest">
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                LOUD. RAW. <span className="text-white/60">ALIVE.</span>
              </h1>
              <p className="mt-5 text-white/80 max-w-prose">
                New noise from the underground. Dive into our world: heavy riffs, big drums, zero compromises.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#photos" onClick={(e) => { e.preventDefault(); scrollTo('photos'); }} className="inline-flex items-center gap-2 rounded-full border border-white px-5 py-2.5 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition">
                  See Photos <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm uppercase tracking-widest hover:opacity-90 transition">
                  Book Us
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=2000&auto=format&fit=crop"
                alt="Live show"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section id="who" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest">Who we are</h2>
          <p className="mt-6 text-white/80 max-w-3xl leading-relaxed">
            We are a two-piece band pushing a wall of sound that's bigger than the sum of its parts. Crafted in small rooms, made for big rooms.
            Our shows are sweaty, our songs are loud, and our ethos is DIY.
          </p>
        </div>
      </section>

      {/* Photos */}
      <section id="photos" className="scroll-mt-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest">Photos</h2>
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xs uppercase tracking-widest opacity-70 hover:opacity-100">Back to top</a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PLACEHOLDER_IMAGES.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }} className="group relative overflow-hidden rounded-xl">
                <Image src={src} alt={`Band photo ${i + 1}`} width={800} height={512} className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Socials */}
      <section id="socials" className="scroll-mt-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest">Socials</h2>
          <p className="mt-6 text-white/80">Follow the noise. New tracks, tour dates, and behind-the-scenes.</p>

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
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest">Contact</h2>
          <p className="mt-6 text-white/80">Booking, press, or love letters. Hit us up:</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Your name</label>
                <input type="text" placeholder="Jane Doe" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Message</label>
                <textarea rows={5} placeholder="Tell us about your event…" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm uppercase tracking-widest hover:opacity-90 transition">
                Send <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-bold uppercase tracking-widest">Direct</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3 opacity-80"><Mail className="h-5 w-5" /><a className="hover:underline" href="mailto:booking@yourband.com">booking@yourband.com</a></li>
                <li className="flex items-center gap-3 opacity-80"><ArrowUpRight className="h-5 w-5" /><a className="hover:underline" href="#socials" onClick={(e)=>{e.preventDefault(); scrollTo('socials');}}>Find us on socials</a></li>
              </ul>
              <p className="mt-6 text-sm text-white/60">We read everything. Expect a reply within a couple of days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Your Band. All rights reserved.</p>
          <p className="opacity-80">Built for Vercel • Single page • Smooth scroll</p>
        </div>
      </footer>
    </div>
  );
}
