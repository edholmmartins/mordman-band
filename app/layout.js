import { Oswald, Roboto_Condensed } from 'next/font/google';
import "./globals.css";

// ✅ Fonts
export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

// ✅ Metadata (used automatically by Next.js)
export const metadata = {
  title: "Mordman – Coverband i Gävle | Festband för firmafest, bröllop & jubileum",
  description:
    "Mordman är ett coverband från Gävle som levererar röj till 30-, 40- och 50-årsfester, bröllop och firmafester. Komplett ljud, ljus och energi för din fest!",
  icons: {
    icon: '/content/mm_favicon_192x192.png',          // default favicon
    shortcut: '/content/mm_favicon_192x192.png',      // for older browsers
    apple: '/content/mm_favicon_192x192.png',         // for iOS
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

// ✅ Root layout
export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Mordman",
    "url": "https://mordman.se",
    "logo": "https://mordman.se/content/mm_favicon_192x192.png", // 👈 reuse same file as logo
    "image": "https://mordman.se/content/hero.jpg",
    "genre": "Coverband",
    "foundingLocation": "Gävle, Sweden",
    "description":
      "Mordman är ett coverband från Gävle som spelar på firmafester, bröllop och 30-, 40- och 50-årsfester.",
    "sameAs": [
      "https://www.instagram.com/mordmanband",
      "https://open.spotify.com/playlist/XXXX",
      "https://www.facebook.com/mordmanband",
    ],
  };

  return (
    <html lang="sv" className={`${oswald.variable} ${robotoCondensed.variable}`}>
      <body className="font-body bg-black text-white">
        {/* ✅ Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}