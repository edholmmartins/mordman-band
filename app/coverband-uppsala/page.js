import LandingPage, { landingMetadata } from "@/components/landing/LandingPage";

// Copy: MOR-6, document `copy`.
const page = {
  "path": "/coverband-uppsala",
  "title": "Coverband i Uppsala – rock från 90 & 00-tal | Mordman",
  "description": "Söker du coverband eller liveband i Uppsala? Mordman spelar 90- och 00-talsrock med eget ljud och ljus. Ca en timme från Gävle. Hör av dig och boka!",
  "h1": "Coverband i Uppsala – rock som fyller dansgolvet",
  "intro": [
    "Uppsala har fler fester per kvadratmeter än de flesta städer – studentfester, jubileum, sittningar och firmafester. Konkurrensen om banden är hård, särskilt på lördagar. Mordman är ett femmanna-coverband från Gävle, ungefär en timme norrut på E4:an, och vi kommer gärna söderut när ni behöver ett liveband i Uppsala."
  ],
  "sections": [
    {
      "h2": "Ett liveband som inte låter som alla andra",
      "blocks": [
        "De flesta partyband spelar samma topplista. Vi gör inte det. Inga Avicii-covers, ingen RAJRAJ. Vi kör rock från 90- och 00-talet – **Foo Fighters, The Hives, Nothing But Thieves, Queens of the Stone Age, Franz Ferdinand, Blur** – låtar med hög igenkänning, men inte de mest uttjatade. Vill ni ha ett rockband i Uppsala som faktiskt rockar, så är det oss ni letar efter."
      ]
    },
    {
      "h2": "Fester vi spelar på i Uppsala län",
      "blocks": [
        {
          "ul": [
            "**Jämna födelsedagar.** 30, 40, 50 eller 60 – vi hittar ert soundtrack. Läs mer på [Band till 50-årsfest](/band-till-50-arsfest).",
            "**Privatfester** i festlokal, villa eller trädgård.",
            "**Firmafester och personalfester.** Vi har levererat firmafest flera gånger.",
            "**Krogkvällar och events.**"
          ]
        },
        "Vi spelar också gärna i **Tierp, Enköping** och resten av Uppsala län."
      ]
    },
    {
      "h2": "Allt ingår, även resan",
      "blocks": [
        "Du får **komplett ljud och ljus**, anpassat efter lokalen, och en **riktig faktura med F-skatt**. Resvägen från Gävle räknas in i prisförslaget, så du ser hela kostnaden innan du bestämmer dig. Inga överraskningar."
      ]
    },
    {
      "h2": "Hör hur vi låter",
      "blocks": [
        "Innan du bokar ett band vill du veta vad du får. På startsidan finns vår Spotify-lista med låtarna vi spelar, och på [spelningssidan](/spelningar) ligger setlists och bilder från tidigare kvällar – från firmafester i Gävle till öppna spelningar i Sandviken."
      ]
    },
    {
      "h2": "Boka i god tid",
      "blocks": [
        "Lördagar i maj, juni och december går fort i Uppsala. Mejla boka@mordman.se med datum, lokal och ungefärligt antal gäster så kollar vi om datumet är ledigt."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Spelar ni i Uppsala fast ni kommer från Gävle?",
      "a": "Ja. Uppsala ligger ungefär en timme från Gävle och ingår i vårt område. Resvägen räknas in i prisförslaget."
    },
    {
      "q": "Vad skiljer er från andra partyband i Uppsala?",
      "a": "Repertoaren. Vi spelar rock från 90- och 00-talet i stället för de vanliga partyhitsen, med fem musiker på scen."
    },
    {
      "q": "Spelar ni i Tierp och Enköping?",
      "a": "Ja, vi spelar i hela Uppsala län. Mejla datum och ort till boka@mordman.se."
    },
    {
      "q": "Ingår ljud och ljus?",
      "a": "Ja, komplett ljud- och ljusutrustning anpassad efter lokalen."
    }
  ]
};

export const metadata = landingMetadata(page);

export default function Page() {
  return <LandingPage {...page} />;
}
