// Shared Open Graph defaults. Next.js replaces (does not merge) a parent's
// openGraph object, so pages that set openGraph.url must spread these in.
export const SITE_URL = "https://www.mordman.se";
export const BAND_ID = `${SITE_URL}/#band`;

export const HOME_TITLE =
  "Coverband Gävle – band till 50-årsfest, privatfest & krog | Mordman";
export const HOME_DESCRIPTION =
  "Mordman är ett rockigt coverband från Gävle. Vi spelar på 30-, 40- och 50-årsfester, privatfester, krogar och festivaler i Gävleborg, Uppsala och Dalarna.";

export const baseOpenGraph = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
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
