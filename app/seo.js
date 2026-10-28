// Shared Open Graph defaults. Next.js replaces (does not merge) a parent's
// openGraph object, so pages that set openGraph.url must spread these in.
export const SITE_URL = "https://www.mordman.se";
export const BAND_ID = `${SITE_URL}/#band`;

export const baseOpenGraph = {
  title: "Mordman – Coverband Gävle",
  description:
    "Coverband från Gävle med fullt röj! Perfekt för firmafest, 40-årsfest, bröllop och krogkvällar.",
  siteName: "Mordman",
  images: [
    {
      url: "/content/og.jpg",
      width: 1200,
      height: 630,
      alt: "Mordman coverband från Gävle live på scen",
    },
  ],
  locale: "sv_SE",
  type: "website",
};
