import LandingPage, { landingMetadata } from "@/components/landing/LandingPage";

// Copy: MOR-6, document `copy`.
const page = {
  "path": "/boka-band-till-fest",
  "title": "Boka band till fest – coverband från Gävle | Mordman",
  "description": "Boka band till festen! Mordman är ett rockigt coverband från Gävle med eget ljud och ljus och F-skatt. Privatfest, firmafest eller jubileum – hör av dig.",
  "h1": "Boka band till fest – så går det till",
  "intro": [
    "En fest med liveband är en annan fest. När trummorna drar igång och första riffet kommer händer något med rummet som ingen högtalare klarar av. Mordman är ett femmanna-coverband från Gävle som spelar rock från 90- och 00-talet på privatfester, jubileum och firmafester. Här är allt du behöver veta för att hyra band till festen – utan krångel."
  ],
  "sections": [
    {
      "h2": "Så bokar du Mordman i fyra steg",
      "blocks": [
        {
          "ol": [
            "**Mejla oss** på boka@mordman.se med datum, ort, lokal och ungefär hur många gäster ni blir.",
            "**Vi återkommer** med ett prisförslag. Vi läser allt och svarar på ett par dagar.",
            "**Vi stämmer av upplägget**: när vi spelar, hur länge och om det finns låtar som bara måste med.",
            "**Vi dyker upp, riggar och röjer.** Du har fest."
          ]
        }
      ]
    },
    {
      "h2": "Det här ingår när du hyr band till festen",
      "blocks": [
        {
          "ul": [
            "**Fem musiker** på scen. Inte en trubadur med backingtrack.",
            "**Komplett ljud- och ljusutrustning**, anpassad efter lokalen och stämningen du vill ha.",
            "**En setlist formad efter er.** Grunden är rocken vi älskar – Foo Fighters, The Killers, The Hives, Millencolin, Kings of Leon – och vi tar gärna emot önskelåtar som funkar på dansgolvet.",
            "**Riktig faktura.** Vi är ett handelsbolag med F-skattesedel. Inga upplägg med mat, kläder eller tjänster som ersättning."
          ]
        }
      ]
    },
    {
      "h2": "Det här behöver vi från dig",
      "blocks": [
        {
          "ul": [
            "**Ström** nära scenen. Stabil strömmatning, helst egen fas.",
            "**En yta att stå på** där band och utrustning får plats.",
            "**Utomhus:** väderskydd för utrustningen, och en omgivning som klarar ljudnivån. Ännu bättre om grannarna vill vara med.",
            "**Framförhållning.** Ju tidigare du hör av dig, desto större chans att datumet är ledigt."
          ]
        }
      ]
    },
    {
      "h2": "Privatfest, firmafest eller jubileum",
      "blocks": [
        "Vi spelar där folk vill röja. **Jämna födelsedagar** är vår hemmaplan – läs mer på [Band till 50-årsfest](/band-till-50-arsfest). **Privatfester** i festlokal, villa eller trädgård funkar lika bra som stora scener. Och på **firmafesten** har vi levererat flera gånger, bland annat Halloweenfest på Musikhuset i Gävle och i Furuvik, med lasershow som bonus."
      ]
    },
    {
      "h2": "Varför ett coverband från Gävle?",
      "blocks": [
        "För att vi inte låter som alla andra partyband. Inga Avicii-covers, ingen RAJRAJ. Vi spelar svettig nostalgi från 90- och 00-talet – låtarna du älskar men kanske glömt att du saknade. Vi utgår från Gävle och spelar i hela [Gävleborg](/coverband-halsingland), i [Uppsala](/coverband-uppsala) och i [Dalarna](/coverband-dalarna)."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Hur bokar man ett band till en fest?",
      "a": "Mejla boka@mordman.se med datum, ort, lokal och ungefärligt antal gäster. Vi svarar med ett prisförslag och stämmer sedan av upplägg och önskelåtar."
    },
    {
      "q": "Vad ingår när man hyr Mordman?",
      "a": "Fem musiker, komplett ljud och ljus anpassat efter lokalen, en setlist formad efter er och en riktig faktura med F-skatt."
    },
    {
      "q": "Vad behöver vi ordna själva?",
      "a": "Ström nära scenen (helst egen fas) och en yta där band och utrustning får plats. Utomhus behövs väderskydd för utrustningen."
    },
    {
      "q": "Spelar ni på firmafester?",
      "a": "Ja. Vi har bland annat spelat Halloween-firmafest på Musikhuset i Gävle och i Furuvik."
    },
    {
      "q": "Hur långt i förväg ska man boka?",
      "a": "Så tidigt som möjligt, särskilt för lördagar på våren, sommaren och inför jul. Hör av dig så kollar vi om datumet är ledigt."
    }
  ]
};

export const metadata = landingMetadata(page);

export default function Page() {
  return <LandingPage {...page} />;
}
