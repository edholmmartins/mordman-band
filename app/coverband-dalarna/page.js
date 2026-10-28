import LandingPage, { landingMetadata } from "@/components/landing/LandingPage";

// Copy: MOR-6, document `copy`.
const page = {
  "path": "/coverband-dalarna",
  "title": "Coverband i Dalarna – rockband till fest i Falun | Mordman",
  "description": "Coverband i Falun, Borlänge eller resten av Dalarna? Mordman spelar 90- och 00-talsrock med eget ljud och ljus. Rockbandet från Gävle. Hör av dig!",
  "h1": "Coverband i Dalarna – när dansbandet inte räcker",
  "intro": [
    "Dalarna är dansbandsland, och det har vi stor respekt för. Men ibland ska festen låta mer Foo Fighters än foxtrot. Då ringer du oss. Mordman är ett femmanna-coverband från Gävle som spelar rock från 90- och 00-talet, och vi kör gärna västerut till **Falun, Borlänge** och resten av Dalarna."
  ],
  "sections": [
    {
      "h2": "Rockband till fest i Dalarna",
      "blocks": [
        "Många band täcker \"50-tal till idag\" och spelar lite av allt. Vi gör tvärtom: vi kör det vi kan bäst. **The Hives, Millencolin, The Hellacopters, The Killers, Rage Against the Machine, Kings of Leon** – svettig nostalgi från 90- och 00-talet, låtarna du älskar men kanske glömt att du saknade. Gåshud utlovas."
      ]
    },
    {
      "h2": "Från Gävle till Falun och Borlänge",
      "blocks": [
        "Falun ligger ungefär en timme och en kvart från Gävle längs riksväg 80, Borlänge lite längre bort. Det är nära nog för att vi ska kunna rigga i lugn och ro och spela hela kvällen. Resvägen ingår i prisförslaget, så du ser hela kostnaden från början."
      ]
    },
    {
      "h2": "Fester vi spelar på",
      "blocks": [
        {
          "ul": [
            "**50-årsfest, 40-årsfest och andra jämna dagar.** Läs mer på [Band till 50-årsfest](/band-till-50-arsfest).",
            "**Privatfester och sommarfester**, i lokal eller utomhus. Vi behöver väderskydd för utrustningen och stabil ström nära scenen.",
            "**Firmafester och krogkvällar.**"
          ]
        }
      ]
    },
    {
      "h2": "Ett band, inte en jukebox",
      "blocks": [
        "Vi är fem musiker som spelar det vi själva älskar, och det hörs. Vår senaste sommarspelning på Musikhuset i Gävle gick från The Hives och Foo Fighters via Band of Horses till Green Day och Turbonegro – och slutade, som så ofta, med \"Mr. Brightside\". Den sortens kväll tar vi gärna med oss till Dalarna. Kolla in fler setlists på [spelningssidan](/spelningar)."
      ]
    },
    {
      "h2": "Allt ingår",
      "blocks": [
        "Du får fem musiker, **komplett ljud och ljus** anpassat efter lokalen, en setlist formad efter era önskemål och en **riktig faktura med F-skatt**. Det enda du behöver göra är att se till att golvet är ledigt."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Spelar ni i Falun och Borlänge?",
      "a": "Ja. Vi utgår från Gävle och spelar i hela Dalarna. Resvägen räknas in i prisförslaget."
    },
    {
      "q": "Spelar ni dansbandsmusik?",
      "a": "Nej. Vi är ett rockband och spelar rock från 90- och 00-talet: The Hives, Foo Fighters, Millencolin, The Killers med flera. Önskelåtar tar vi gärna emot om de funkar på dansgolvet."
    },
    {
      "q": "Kan ni spela på en utomhusfest i Dalarna?",
      "a": "Ja. Vi behöver väderskydd för utrustningen och stabil strömmatning nära scenen, helst egen fas."
    },
    {
      "q": "Hur bokar jag?",
      "a": "Mejla datum, ort och ungefärligt upplägg till boka@mordman.se så får du ett prisförslag."
    }
  ]
};

export const metadata = landingMetadata(page);

export default function Page() {
  return <LandingPage {...page} />;
}
