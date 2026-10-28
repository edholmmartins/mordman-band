import LandingPage, { landingMetadata } from "@/components/landing/LandingPage";

// Copy: MOR-6, document `copy`.
const page = {
  "path": "/band-till-50-arsfest",
  "title": "Band till 50-årsfest – rockband för 30–60 år | Mordman",
  "description": "Band till 50-årsfesten? Mordman spelar rocken från din ungdom live – med ljud och ljus. Coverband från Gävle för 30-, 40-, 50- och 60-årsfest. Boka nu!",
  "h1": "Band till 50-årsfest – och 30, 40 och 60 också",
  "intro": [
    "Du fyller jämnt. Gästerna har kommit, maten är uppäten och talen är hållna. Nu är det dags för det som folk kommer att prata om på måndag. Mordman är ett femmanna-coverband från Gävle som spelar **rocken från din ungdom – live, högt och på riktigt**. Inte en spellista i en högtalare. Inte Avicii-covers och RAJRAJ. Fem pers på golvet som ger allt tills det är dags att tända lamporna."
  ],
  "sections": [
    {
      "h2": "Musiken från när du var 17 – fast live",
      "blocks": [
        "Det bästa med en jämn fest är att alla i rummet bär på samma soundtrack. Vi spelar rock från 90- och 00-talet med rötter längre bak: **Foo Fighters, The Hives, The Killers, Nirvana, Blur, Millencolin, Kings of Leon, Rage Against the Machine** och många fler. Låtar som alla känner igen, men utan att fastna i de mest uttjatade dängorna. Gåshud utlovas.",
        "Setlisten formar vi efter dig och dina gäster. Har jubilaren en låt som bara måste med? Säg till. Vi tar gärna emot önskelåtar, så länge de funkar på dansgolvet."
      ]
    },
    {
      "h2": "30-årsfest: när ni var tonåringar var det här nytt",
      "blocks": [
        "Fyller du 30 växte du upp med Paramore, The Killers och Kings of Leon på repeat. \"Misery Business\", \"Mr. Brightside\" och \"Sex on Fire\" är fortfarande låtar som får ett helt dansgolv att skrika med i refrängen. Vi kör dem som de ska låta: högt."
      ]
    },
    {
      "h2": "40-årsfest: 00-talets rock, rakt in i själen",
      "blocks": [
        "För 40-åringen är det här hemmaplan. The Hives, The White Stripes, Franz Ferdinand, Foo Fighters och Millencolin – svensk och internationell rock från åren då allt hände. Vi har spelat 40-årsfest i Gävle: en trädgårdsfest vid poolen med oändliga extranummer, och **hela kvarteret anslöt innan kvällen var över**. Läs om den under [Spelningar](/spelningar)."
      ]
    },
    {
      "h2": "50-årsfest: grunge, Britpop och skatepunk",
      "blocks": [
        "Fyllde du 17 i början av 90-talet? Då satt \"Smells Like Teen Spirit\", \"Song 2\" och \"Killing in the Name\" i kroppen långt innan du visste vad en bolåneränta var. Som band till 50-årsfest ger vi er 90-talet tillbaka, med full volym och utan ironi. Det är musiken vi själva älskar att lira, och det märks."
      ]
    },
    {
      "h2": "60-årsfest: hårdrockens klassiker",
      "blocks": [
        "För 60-åringen som hade KISS-affischen på väggen och Black Sabbath på vinyl: vi spelar \"Detroit Rock City\" och \"Paranoid\" som om det vore 1980 igen. Blanda in några nyare rocklåtar så har ni en kväll där barnbarnen och kompisarna från gymnasiet dansar på samma golv."
      ]
    },
    {
      "h2": "Allt ingår – du fixar bara festen",
      "blocks": [
        {
          "ul": [
            "**Komplett ljud och ljus**, anpassat efter lokalen och stämningen du vill ha.",
            "**Riktig faktura.** Vi har F-skattesedel, så det blir inga konstiga upplägg.",
            "**Inomhus eller utomhus.** Vi spelar i festlokal, på krogen eller i trädgården. Utomhus behöver vi väderskydd för utrustningen och stabil ström nära scenen.",
            "**Vi utgår från Gävle** och spelar i hela [Gävleborg](/coverband-halsingland), [Uppsala län](/coverband-uppsala) och [Dalarna](/coverband-dalarna)."
          ]
        },
        "Ska du hyra en festlokal? [Boka bandet](/boka-band-till-fest) samtidigt, så att datumet är ert hos båda."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Vilken musik spelar ni på en 50-årsfest?",
      "a": "Rock från 90- och 00-talet med rötter längre bak: Nirvana, Blur, Foo Fighters, The Hives, Rage Against the Machine, KISS och många fler. Vi formar setlisten efter jubilaren och tar gärna emot önskelåtar som funkar på dansgolvet."
    },
    {
      "q": "Spelar ni på 30-, 40- och 60-årsfester också?",
      "a": "Ja. Repertoaren spänner från 80-talets hårdrock till 2000- och 2010-talets rock, så vi hittar soundtracket för varje jämnt år. Vi har bland annat spelat 40-årsfest i Gävle."
    },
    {
      "q": "Ingår ljud och ljus?",
      "a": "Ja. Du får ett komplett paket med ljud- och ljusutrustning, anpassat efter lokalen."
    },
    {
      "q": "Kan ni spela i trädgården?",
      "a": "Ja. Vi behöver väderskydd för utrustningen och stabil strömmatning nära scenen, helst egen fas."
    },
    {
      "q": "Vad kostar det att boka er till en 50-årsfest?",
      "a": "Priset beror på resväg, ljud och ljus samt hur länge vi spelar. Mejla datum, ort och upplägg till boka@mordman.se så får du ett prisförslag."
    }
  ]
};

export const metadata = landingMetadata(page);

export default function Page() {
  return <LandingPage {...page} />;
}
