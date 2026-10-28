// Shared Open Graph defaults. Next.js replaces (does not merge) a parent's
// openGraph object, so pages that set openGraph.url must spread these in.
export const SITE_URL = "https://www.mordman.se";
export const BAND_ID = `${SITE_URL}/#band`;

// Official profiles for the band (MusicGroup sameAs). Add new ones here as they
// go live, e.g. Google Business Profile, MusicBrainz, Wikidata, Spotify artist.
export const BAND_SAME_AS = [
  "https://www.instagram.com/mordman.band/",
  "https://www.facebook.com/profile.php?id=61579179277781",
  "https://open.spotify.com/playlist/260tGjraPvj0SnfFwag455",
  // "https://maps.app.goo.gl/…",                  // Google Business Profile
  // "https://musicbrainz.org/artist/<mbid>",      // MusicBrainz
  // "https://www.wikidata.org/wiki/Q…",           // Wikidata
];

export const HOME_TITLE =
  "Coverband i Gävle – band till 40- & 50-årsfest | Mordman";
export const HOME_DESCRIPTION =
  "Coverband från Gävle som spelar rock från 90- och 00-talet på 30-, 40- och 50-årsfester, privatfester och firmafester. Ljud och ljus ingår. Boka Mordman!";

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
