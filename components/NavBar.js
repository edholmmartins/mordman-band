"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const sections = [
  { id: "about", label: "VILKA ÄR VI" },
  { id: "music", label: "VAD SPELAR VI" },
  { id: "photos", label: "BILDER" },
  { id: "socials", label: "SOCIALS" },
  { id: "contact", label: "KONTAKT" },
  { id: "gigs", label: "SPELNINGAR" },
];

function scrollToSection(id) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.href = `/#${id}`;
  }
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-black/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/content/logo_text.png"
                alt="Mordman logotyp"
                width={200}
                height={28}
                priority
              />
            </Link>
            <span className="sr-only">Band hem!</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm uppercase font-heading">
            {/* All internal page sections (scroll-to) */}
            {sections
              .filter((s) => s.id !== "gigs")
              .map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="hover:opacity-80"
                >
                  {s.label}
                </button>
              ))}

            {/* Divider before external/subpage link */}
            <span className="h-5 w-px bg-white/30 mx-1"></span>

            {/* Normal text link to /gigs */}
            <Link href="/spelningar" className="inline-flex items-center py-2.5 text-sm uppercase">
              SPELNINGAR <ArrowUpRight className="h-4 w-4 ml-1" />
            </Link>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <MobileMenu sections={sections} />
          </div>
        </div>
      </div>
    </header>
  );
}