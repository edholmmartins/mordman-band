// app/gigs/gigsData.js

export const gigs = [
  {
    slug: "2025-02-14-the-vault-uppsala",
    date: "2025-02-14",
    city: "Uppsala",
    venue: "The Vault",
    title: "Valentine’s Mayhem at The Vault",
    description:
      "A packed night at The Vault in Uppsala with sweaty dancefloors, sing-along choruses and way too many requests for Wonderwall.",
    setlist: [
      "Song 1 – Artist",
      "Song 2 – Artist",
      "Song 3 – Artist",
      // ...
    ],
    media: {
      heroImage: "/gigs/the-vault-2025.jpg", // drop files in /public/gigs
      youtubeUrl: "https://www.youtube.com/embed/XXXXXXXXXXX", // optional
    },
  },
  {
    slug: "2025-01-10-firmanfest-stockholm",
    date: "2025-01-10",
    city: "Stockholm",
    venue: "Företagsfest – Private Event",
    title: "Corporate Chaos in Stockholm",
    description:
      "Private company party in Stockholm. Crowd went from polite nodding to full-on dance floor chaos in 30 minutes.",
    setlist: [
      "Song A – Artist",
      "Song B – Artist",
      // ...
    ],
    media: {
      heroImage: "/gigs/firmanfest-2025.jpg",
    },
  },
  // add more gigs here over time
];