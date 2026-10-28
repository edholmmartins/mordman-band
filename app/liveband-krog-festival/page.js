import LandingPage, { landingMetadata } from "@/components/landing/LandingPage";

// Copy: MOR-6, document `copy`.
const page = {
  "path": "/liveband-krog-festival",
  "title": "Liveband till krog & festival – rock från Gävle | Mordman",
  "description": "Letar din krog eller festival efter ett liveband som fyller golvet? Mordman spelar 90- och 00-talsrock med eget ljud och ljus. Utgår från Gävle. Boka!",
  "h1": "Liveband till krog, pub och festival",
  "intro": [
    "Du vet hur det ser ut en vanlig lördag: folk står vid baren och tittar i telefonen. Med Mordman på scen ser det ut så i ungefär en och en halv låt. Sen står de framför scenen. Vi är ett femmanna-coverband från Gävle som spelar rock från 90- och 00-talet – **högt, rått och med fullt röj**."
  ],
  "sections": [
    {
      "h2": "Vad du får",
      "blocks": [
        {
          "ul": [
            "**Ett band som drar folk till scenen.** Låtar med hög igenkänning – The Hives, Foo Fighters, The Killers, Rage Against the Machine, Kings of Leon – men inte de mest uttjatade.",
            "**Eget ljud och ljus.** Vi tar med det som behövs och anpassar efter scenen och lokalen.",
            "**Riktig faktura med F-skatt.** Enkelt för din bokföring.",
            "**Ett band som syns.** Vi lägger ut spelningar på [vår spelningssida](/spelningar), Instagram och Facebook."
          ]
        }
      ]
    },
    {
      "h2": "Här har vi spelat",
      "blocks": [
        "Vi har kört öppna spelningar på **The Church i Sandviken** – \"Hädelse i kyrkan\" – och **Musikhuset i Gävle**, där sommarkvällen bjöd på en setlist från The Hives och Foo Fighters till Green Day och Turbonegro. Alla spelningar, med setlists och bilder, finns på [/spelningar](/spelningar)."
      ]
    },
    {
      "h2": "Festival och stadsfest",
      "blocks": [
        "Utomhusscen? Inga problem. Vi behöver väderskydd för utrustningen och stabil strömmatning nära scenen, helst egen fas. Resten löser vi tillsammans med er tekniker eller på egen hand."
      ]
    },
    {
      "h2": "Vad vi spelar en krogkväll",
      "blocks": [
        "En krogkväll är inte en 50-årsfest. Publiken har inte bestämt sig för att dansa än – det är vårt jobb att få dem dit. Därför bygger vi setet för att växa: igenkänning tidigt, tempo i mitten och de stora allsångsrefrängerna när baren är som fullast. Typiska låtar från våra spelningar är \"Tick Tick Boom\", \"Everlong\", \"Seven Nation Army\", \"Song 2\" och \"Mr. Brightside\". Hela setlists från tidigare kvällar ligger på [spelningssidan](/spelningar), så du vet precis vad du får."
      ]
    },
    {
      "h2": "Hör av dig",
      "blocks": [
        "Mejla boka@mordman.se med datum, scen och ungefärligt upplägg. Vi utgår från Gävle och spelar i hela [Gävleborg](/coverband-halsingland), [Uppsala län](/coverband-uppsala) och [Dalarna](/coverband-dalarna)."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Spelar ni på krogar och pubar?",
      "a": "Ja. Vi gör krog- och eventkvällar och anpassar upplägget efter publik och lokal."
    },
    {
      "q": "Har ni eget ljud och ljus?",
      "a": "Ja, vi tar med komplett ljud- och ljusutrustning anpassad efter lokalen."
    },
    {
      "q": "Kan ni spela på festival eller stadsfest?",
      "a": "Ja. Vi behöver väderskydd för utrustningen och stabil ström nära scenen."
    },
    {
      "q": "Var har ni spelat?",
      "a": "Bland annat The Church i Sandviken och Musikhuset i Gävle. Alla spelningar finns på mordman.se/spelningar."
    }
  ]
};

export const metadata = landingMetadata(page);

export default function Page() {
  return <LandingPage {...page} />;
}
