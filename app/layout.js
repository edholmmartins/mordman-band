import { Oswald, Roboto_Condensed } from 'next/font/google';
import "./globals.css";
import { baseOpenGraph, BAND_ID, SITE_URL } from "./seo";

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
  metadataBase: new URL('https://www.mordman.se'),
  title: "Mordman – Coverband i Gävle | Festband för firmafest, bröllop & jubileum",
  description:
    "Mordman är ett coverband från Gävle som levererar röj till 30-, 40- och 50-årsfester, bröllop och firmafester. Komplett ljud, ljus och energi för din fest!",
  icons: {
    icon: '/content/mm_favicon_192x192.png',
  },
  openGraph: baseOpenGraph,
  twitter: {
    card: "summary_large_image",
    title: "Mordman – Coverband Gävle",
    description:
      "Coverband från Gävle med fullt röj! Perfekt för firmafest, 40-årsfest, bröllop och krogkvällar.",
    images: [
      {
        url: "/content/og.jpg",
        width: 1200,
        height: 630,
        alt: "Mordman coverband från Gävle live på scen",
      },
    ],
  },
  verification: {
    google: "yAfJ2adsKzaAW_-1VXZLC4s5nIYzOrLvaijcgGoxPvU",
  },
};

export default function RootLayout({ children }) {
  const jsonLdMusicGroup = {
    "@context": "https://schema.org",
    "@type": ["MusicGroup", "EntertainmentBusiness"],
    "@id": BAND_ID,
    "name": "Mordman",
    "alternateName": "Mördman",
    "legalName": "Mordman Handelsbolag",
    "url": SITE_URL,
    "logo": `${SITE_URL}/content/mm_favicon_192x192.png`,
    "image": `${SITE_URL}/content/og.jpg`,
    "email": "boka@mordman.se",
    "description":
      "Mordman är ett coverband och festband från Gävle som spelar live på bröllop, firmafester och privata jubileum. Vi levererar röj, glädje och klassiska pop- och rockhits från 80-, 90- och 2000-talet.",
    "disambiguatingDescription":
      "Svenskt rock- och popcoverband från Gävle. Inte relaterat till eller associerat med den svenska folkrockduon Nordman.",
    "genre": ["Coverband", "Festband", "Liveband", "Rockband", "Popband"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gävle",
      "addressRegion": "Gävleborgs län",
      "addressCountry": "SE",
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Gävleborgs län" },
      { "@type": "AdministrativeArea", "name": "Uppsala län" },
      { "@type": "AdministrativeArea", "name": "Dalarnas län" },
      "Gävle", "Sandviken", "Hudiksvall", "Söderhamn", "Bollnäs", "Ljusdal",
      "Uppsala", "Tierp", "Falun", "Borlänge",
    ],
    "priceRange": "$$",
    "foundingLocation": { "@type": "Place", "name": "Gävle, Sverige" },
    "sameAs": [
      "https://www.instagram.com/mordman.band/",
      "https://www.facebook.com/profile.php?id=61579179277781",
      "https://open.spotify.com/playlist/260tGjraPvj0SnfFwag455",
    ],
  };

  return (
    <html lang="sv" className={`${oswald.variable} ${robotoCondensed.variable}`}>
      <body className="font-body bg-black text-white">
        {/* ✅ Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMusicGroup) }}
        />

        {/* ⬇️ NEW: navbar shown on every page */}
        <NavBar />

        {children}
      </body>
    </html>
  );
}