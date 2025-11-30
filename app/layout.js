import { Oswald, Roboto_Condensed } from 'next/font/google';
import "./globals.css";

// ⬇️ NEW: import the navbar component
import NavBar from "../components/NavBar";

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  display: 'swap',
  variable: '--font-oswald'
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300','400','700'],
  display: 'swap',
  variable: '--font-roboto-condensed'
});

export const metadata = {
  title: "Mordman – Coverband i Gävle | Festband för firmafest, bröllop & jubileum",
  description:
    "Mordman är ett coverband från Gävle som levererar röj till 30-, 40- och 50-årsfester, bröllop och firmafester. Komplett ljud, ljus och energi för din fest!",
  icons: {
    icon: '/content/mm_favicon_192x192.png',
  },
  openGraph: {
    title: "Mordman – Coverband Gävle",
    description:
      "Coverband från Gävle med fullt röj! Perfekt för firmafest, 40-årsfest, bröllop och krogkvällar.",
    url: "https://mordman.se",
    siteName: "Mordman",
    images: [
      {
        url: "/content/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mordman coverband från Gävle live på scen",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  verification: {
    google: "yAfJ2adsKzaAW_-1VXZLC4s5nIYzOrLvaijcgGoxPvU",
  },
};

export default function RootLayout({ children }) {
  const jsonLdMusicGroup = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Mordman",
    "alternateName": "Mördman",
    "url": "https://mordman.se",
    "logo": "https://mordman.se/content/mm_favicon_192x192.png",
    "image": "https://mordman.se/content/hero.jpg",
    "description":
      "Mordman är ett coverband och festband från Gävle som spelar live på bröllop, firmafester och privata jubileum. Vi levererar röj, glädje och klassiska pop- och rockhits från 80-, 90- och 2000-talet.",
    "disambiguatingDescription":
      "Svenskt rock- och popcoverband från Gävle. Inte relaterat till eller associerat med den svenska folkrockduon Nordman.",
    "genre": ["Coverband", "Festband", "Liveband", "Rockband", "Popband"],
    "keywords": [
      "coverband gävle", "band till bröllop", "festband gävle", "livemusik gävle",
      "band till firmafest", "partyband sverige", "boka coverband", "band till 40-årsfest",
      "underhållning till bröllop", "band för event", "mordman coverband", "mordman band",
      "musik till fest", "bröllopsband", "pop och rock live", "coverband uppsala",
      "band till fest i sandviken", "rockband gävle", "band för jubileum",
      "svenskt liveband", "rockband för firmafest", "liveband bröllop"
    ],
    "areaServed": [
      "Gävle", "Uppsala", "Sandviken", "Dalarna", "Söderhamn", "Bollnäs", "Falun", "Tierp", "Stockholm"
    ],
    "foundingLocation": "Gävle, Sweden",
    "sameAs": [
      "https://www.instagram.com/mordman.band/",
      "https://www.facebook.com/profile.php?id=61579179277781",
      "https://open.spotify.com/playlist/260tGjraPvj0SnfFwag455"
    ],
    "subjectOf": {
      "@type": "WebPage",
      "name": "Om Mordman – Coverband från Gävle",
      "url": "https://mordman.se",
      "description":
        "Information om Mordman, ett svenskt coverband från Gävle som spelar rock och pop på fester och evenemang. Inte att förväxla med folkrockduon Nordman."
    },
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "NotToBeConfusedWith",
        "value": "Nordman (Swedish folkrock duo)"
      }
    ]
  };

  const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vilken typ av evenemang spelar Mordman på?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mordman spelar ofta på bröllop, firmafester, jubileum samt 30-, 40- och 50-årsfester. Vi gör även krog- och eventkvällar och anpassar upplägget efter publik och lokal."
      }
    },
    {
      "@type": "Question",
      "name": "Spelar ni bara i Gävle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nej. Vi utgår från Gävle men spelar på många orter, till exempel Sandviken, Uppsala, Dalarna och Stockholm, samt längre bort när vi har rimlig framförhållning för resa och planering."
      }
    },
    {
      "@type": "Question",
      "name": "Vilken musik och vilka artister spelar ni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vi spelar energisk rock och alternativ pop från 80-talet och framåt – låtar som publiken känner igen och vill sjunga med i. I vår repertoar finns bland annat Foo Fighters, Blink-182, The Killers, Audioslave, The Hellacopters, Queens of the Stone Age, Nothing But Thieves, The Hives, The Smashing Pumpkins, Red Hot Chili Peppers, The White Stripes, Priestess, KISS, Millencolin, Turbonegro, Paramore, Kings of Leon, Rage Against the Machine, Blur, Franz Ferdinand, Black Sabbath, Ozzy Osbourne och Nirvana. Vi tar gärna emot önskelåtar så länge de funkar på dansgolvet."
      }
    },
    {
      "@type": "Question",
      "name": "Vad kostar det att boka Mordman?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Priset för att boka Mordman förhandlas i förväg och beror bland annat på resväg, vad vi behöver ta med i ljud- och ljusutrustning samt speltidens längd. Hör av dig med datum, plats och ungefärligt upplägg så återkommer vi snabbt med prisförslag på boka@mordman.se."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ni spela utomhus? Vad krävs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, vi kan spela utomhus. Det viktigaste är att scenen klarar band och utrustning, att elen håller för belastningen och att det finns väderskydd för utrustningen. Vi behöver stabil strömmatning, helst egen fas, nära scenen, och att omgivningen accepterar ljudnivån."
      }
    }
  ]
};

  return (
    <html lang="sv" className={`${oswald.variable} ${robotoCondensed.variable}`}>
      <body className="font-body bg-black text-white">
        {/* ✅ Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMusicGroup) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />

        {/* ⬇️ NEW: navbar shown on every page */}
        <NavBar />

        {children}
      </body>
    </html>
  );
}