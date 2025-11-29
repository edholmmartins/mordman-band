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
      // … your FAQ objects …
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