// app/gigs/gigsData.js

export const gigs = [
  {
    slug: "2025-11-08-pk-furuvik",
    date: "2025-11-08",
    city: "Gävle",
    venue: "Furuvik",
    audience: "Företag", 
    title: "Firmafest för Partykungen",
    poster: "/content/gigs/pk-furuvik.png",  
    description:
      "Fullt ös på Partykungens årliga Halloweenfest! Ackompanjerade av lasershow.",
    setlist: [
      "When you were young - The Killers",
      "Countdown to shutdown - The Hives",
      "Tick Tick Boom - The Hives",
      "Sex on Fire - Kings of Leon",
      "Detroit Rock City - KISS",
      "Smells like teen spirit - Nirvana",
      "Song 2 - Blur",
      "Take me out - Franz Ferdinand",
      "The funeral - Band of Horses",
      "Misery business - Paramore",
      "Woman - Wolfmother",
      "Seven nation army - The White Stripes",
      "Mr. Brightside - The Killers",
    ],
    media: {
      heroImage: "/content/gigs/pk-furuvik.png", // drop files in /public/gigs
      youtubeUrl: "https://www.youtube.com/embed/XXXXXXXXXXX", // optional
    },
  },
  {
    slug: "2025-09-06-church",
    date: "2025-09-06",
    city: "Sandviken",
    venue: "The Church",
    audience: "Öppen spelning", 
    title: "Hädelse i kyrkan",
    poster: "/content/gigs/church.jpg",  
    description:
      "Förnärmade gud(arna) i kyrkan!",
    setlist: [
      "Tick Tick Boom - The Hives",
      "No Cigar - Millencolin",
      "When you were young - The Killers",
      "Detroit Rock City - KISS",
      "Pride - The Hellacopters",
      "Penguins and Polarbears - Millencolin",
      "Take me out - Franz Ferdinand",
      "Everlong - Foo Fighters",
      "Killing in the name - Rage against the machine",
      "Song 2 - Blur",
      "Countdown to shutdown - The Hives",
      "Sex on Fire - Kings of Leon",
      "Age of Pamparius - Turbonegro",
      "The funeral - Band of Horses",
      "Seven nation armoy - The White Stripes",
      "Paranoid - Black Sabbath",
      "Mr. Brightside - The Killers",
    ],
    media: {
      heroImage: "/content/gigs/church.jpg",
    },
  },
  {
    slug: "2024-11-08-pk-musikhuset",
    date: "2024-11-08",
    city: "Gävle",
    venue: "Musikhuset - Sjömanskyrkan",
    audience: "Företag", 
    title: "Firmafest för Partykungen",
    poster: "/content/gigs/pk-musikhuset.png",  
    description:
      "Fullt ös på Partykungens årliga Halloweenfest!",
    setlist: [
      "Tick Tick Boom - The Hives",
      "Long Road to Ruin – Foo fighters",
      "Amsterdam - Nothing but thieves",
      "Little monster - Royal blood",
      "Everlong – Foo fighters",
      "Pride - The Hellacopters",
      "The funeral - Band of Horses",
      "Seven nation army - The White Stripes",
      "Lay down - Priestess",
      "When you were young - The Killers",
    ],
    media: {
      heroImage: "/content/gigs/pk-musikhuset.png",
    },
  },
  {
    slug: "2025-07-30-garden-party",
    date: "2025-07-30",
    city: "Gävle",
    venue: "Trådgärd",
    audience: "Privat", 
    title: "40-årsfest",
    poster: "/content/gigs/garden.jpg",  
    description:
      "Semi-intim trädgårdsfestspelning i lummigt poolområde med oändliga encores. Hela kvarteret anslöt innan kvällen var över!",
    setlist: [
      "Age of Pamparius – Turbonegro",
      "Long Road to Ruin – Foo fighters",
      "No Cigar – Millencolin",
      "Everlong – Foo fighters",
      "Amsterdam – Nothing but thieves",
      "Killing in the name – Rage against the machine",
      "Tick Tick Boom – The Hives",
      "Song 2 – Blur",
      "Mr. Brightside – The Killers",
      "Pride – Hellacopters",
      "Sex on Fire – Kings of Leon",
      "Penguins and Polarbears – Millencolin",
      "Detroit Rock City – KISS",
      // ...
    ],
    media: {
      heroImage: "/content/gigs/garden.jpg",
    },
  },
  // add more gigs here over time
];