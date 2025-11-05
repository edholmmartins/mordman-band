"use client"; // required for animation
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqs = [
    {
      q: "Vilken typ av evenemang spelar Mordman på?",
      a: (
        <>
          Vi spelar ofta på <strong>bröllop</strong>, <strong>firmafester</strong>,{" "}
          <strong>jubileum</strong> samt <strong>30/40/50-årsfester</strong>. Vi gör även{" "}
          <strong>krog- och eventkvällar</strong> och skräddarsyr upplägg efter publik och lokal.
        </>
      ),
    },
    {
      q: "Spelar ni bara i Gävle?",
      a: (
        <>
          Nej! Vi utgår från Gävle men spelar överallt där det finns publik och eluttag –{" "}
          <strong>Sandviken, Uppsala, Dalarna, Stockholm</strong> och längre bort också, bara vi får
          lite framförhållning för resa och planering.
        </>
      ),
    },
    {
      q: "Vilken musik och vilka artister spelar ni?",
      a: (
        <>
          <p className="mb-2">
            Vi spelar energisk rock från 80-talet och framåt – låtar som alla
            känner igen och älskar att sjunga med i. Här är exempel på artister i vår repertoar:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <ul className="list-disc pl-5 space-y-1">
              <li>Foo Fighters</li>
              <li>Blink-182</li>
              <li>The Killers</li>
              <li>Audioslave</li>
              <li>The Hellacopters</li>
              <li>Queens of the Stone Age</li>
              <li>Nothing But Thieves</li>
              <li>The Hives</li>
              <li>The Smashing Pumpkins</li>
              <li>Red Hot Chili Peppers</li>
              <li>The White Stripes</li>
            </ul>
            <ul className="list-disc pl-5 space-y-1">
              <li>Priestess</li>
              <li>KISS</li>
              <li>Millencolin</li>
              <li>Turbonegro</li>
              <li>Paramore</li>
              <li>Kings of Leon</li>
              <li>Rage Against the Machine</li>
              <li>Blur</li>
              <li>Franz Ferdinand</li>
              <li>Black Sabbath</li>
              <li>Ozzy Osbourne</li>
              <li>Nirvana</li>
            </ul>
          </div>
          <p className="mt-2">
            Och ja – vi tar gärna emot önskelåtar, så länge de passar på dansgolvet 😉
          </p>
        </>
      ),
    },
    {
      q: "Vad kostar det att boka Mordman?",
      a: (
        <>
          Pris <strong>förhandlas i förväg</strong> och beror på <strong>resväg</strong>, vad vi behöver ta med i{" "}
          <strong>ljud och ljus</strong> samt <strong>speltidens längd</strong>. Hör av dig med datum, plats
          och ungefärligt upplägg så återkommer vi snabbt:{" "}
          <a className="underline" href="mailto:boka@mordman.se">
            boka@mordman.se
          </a>.
        </>
      ),
    },
    {
      q: "Kan ni spela utomhus? Vad krävs?",
      a: (
        <>
          <strong>Såklart!</strong> Bara scenen håller oss, elen håller för oss, och grannarna antingen inte
          bryr sig – eller ännu hellre vill vara med. 😎 Vi behöver väderskydd för utrustningen och stabil
          strömmatning (helst egen fas) nära scenen.
        </>
      ),
    },
  ];

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