import LandingPage, { landingMetadata } from "@/components/landing/LandingPage";

// Copy: MOR-6, document `copy`.
const page = {
  "path": "/coverband-halsingland",
  "title": "Coverband i Hälsingland – rockband från Gävleborg | Mordman",
  "description": "Coverband i Hudiksvall, Söderhamn, Bollnäs eller Ljusdal? Mordman är rockbandet från Gävle med eget ljud och ljus. Hela Gävleborg och Hälsingland. Boka!",
  "h1": "Coverband i Hälsingland",
  "intro": [
    "Hälsingland har gårdarna, skogen och festerna som håller på till soluppgången. Det som ibland fattas är ett band som spelar rock på riktigt. Mordman är ett femmanna-coverband från Gävle, och vi kör gärna norrut på E4:an eller väg 83. **Hudiksvall, Söderhamn, Bollnäs, Ljusdal** – samma län, samma röj."
  ],
  "sections": [
    {
      "h2": "Från Gävle till hela Gävleborg",
      "blocks": [
        "Vi har [hemmaplan i Gävle](/) och har spelat både i Gävle och Sandviken. Hälsingland är grannskapet. Till Söderhamn är det ungefär en timmes bilresa, till Bollnäs och Hudiksvall runt en och en halv. Det är ingen långresa för ett band, och det betyder att du kan boka ett coverband från ditt eget län i stället för att flyga in någon från Stockholm."
      ]
    },
    {
      "h2": "Rockband till fest i Hälsingland",
      "blocks": [
        "Ska du [fylla 40](/band-till-50-arsfest) i Glada Hudik eller ha sommarfest på en gård utanför Bollnäs? Vi spelar på privatfester, jubileum, firmafester och krogkvällar, inomhus eller utomhus. Musiken är rock från 90- och 00-talet: **The Hives, Foo Fighters, Millencolin, The Killers, Kings of Leon, Turbonegro** och många fler. Setlisten formar vi efter dig och dina gäster."
      ]
    },
    {
      "h2": "Utomhusfest på gården? Det här behöver vi",
      "blocks": [
        "Hälsingesommaren är gjord för fester under bar himmel. Vi tar med **komplett ljud och ljus**. Från dig behöver vi stabil ström nära scenen (helst egen fas), väderskydd för utrustningen och en plats där band och grejer får stå. Om grannarna vill vara med är det bara en bonus."
      ]
    },
    {
      "h2": "Krogar och festivaler i Hälsingland",
      "blocks": [
        "Driver du en pub i Söderhamn eller bokar artister till en stadsfest? Vi har eget ljud och ljus och fakturerar med F-skatt. Läs mer på [Liveband till krog & festival](/liveband-krog-festival)."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Spelar ni i Hudiksvall, Söderhamn och Bollnäs?",
      "a": "Ja. Vi utgår från Gävle och spelar i hela Gävleborgs län, även i Hälsingland. Mejla datum och ort till boka@mordman.se."
    },
    {
      "q": "Tillkommer det reskostnad?",
      "a": "Resväg är en av sakerna som påverkar priset, tillsammans med ljud och ljus och speltidens längd. Du får ett samlat prisförslag innan du bokar."
    },
    {
      "q": "Kan ni spela utomhus på en gård?",
      "a": "Ja. Vi behöver väderskydd för utrustningen och stabil strömmatning nära scenen, helst egen fas."
    },
    {
      "q": "Vilken musik spelar ni?",
      "a": "Rock från 90- och 00-talet med rötter längre bak – Foo Fighters, The Hives, Millencolin, The Killers, Nirvana med flera. Vi tar gärna emot önskelåtar."
    }
  ]
};

export const metadata = landingMetadata(page);

export default function Page() {
  return <LandingPage {...page} />;
}
