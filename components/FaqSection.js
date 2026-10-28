"use client"; // required for animation
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { homeFaqs as faqs } from "./homeFaqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-black text-white px-6 py-12 md:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">
          Vanliga frågor om Mordman
        </h2>
        <div className="divide-y divide-white/10">
          {faqs.map((item, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{item.q}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-[999px] opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-white/90">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}