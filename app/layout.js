import { Oswald, Roboto_Condensed } from 'next/font/google';
import "./globals.css";
import { baseOpenGraph, BAND_ID, BAND_SAME_AS, HOME_DESCRIPTION, HOME_TITLE, SITE_URL } from "./seo";

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
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  icons: {
    icon: '/content/mm_favicon_192x192.png',
  },
  openGraph: baseOpenGraph,
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
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
    "sameAs": BAND_SAME_AS,
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