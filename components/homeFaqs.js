import Link from "next/link";

// Homepage FAQ. `a` is what visitors see (components/FaqSection.js), `text` is
// the FAQPage JSON-LD answer (app/page.js). Keep them saying the same thing.
const link = "underline";

export const homeFaqs = [
  {
    q: "Vilken typ av evenemang spelar Mordman på?",
    a: (
      <>
        Vi spelar ofta på{" "}
        <Link className={link} href="/band-till-50-arsfest"><strong>30-, 40-, 50- och 60-årsfester</strong></Link>,
        privatfester, jubileum, bröllop och firmafester. Vi gör även{" "}
        <Link className={link} href="/liveband-krog-festival"><strong>krog- och eventkvällar</strong></Link>{" "}
        och skräddarsyr upplägget efter publik och lokal.
      </>
    ),
    text: "Vi spelar ofta på 30-, 40-, 50- och 60-årsfester, privatfester, jubileum, bröllop och firmafester. Vi gör även krog- och eventkvällar och skräddarsyr upplägget efter publik och lokal.",
  },
  {
    q: "Spelar ni bara i Gävle?",
    a: (
      <>
        Nej! Vi utgår från Gävle men spelar överallt där det finns publik och eluttag –{" "}
        <strong>
          Sandviken, <Link className={link} href="/coverband-halsingland">Hälsingland</Link>,{" "}
          <Link className={link} href="/coverband-uppsala">Uppsala</Link>,{" "}
          <Link className={link} href="/coverband-dalarna">Dalarna</Link>, Stockholm
        </strong>{" "}
        och längre bort också, bara vi får lite framförhållning för resa och planering.
      </>
    ),
    text: "Nej. Vi utgår från Gävle men spelar överallt där det finns publik och eluttag – Sandviken, Hälsingland, Uppsala, Dalarna, Stockholm och längre bort också, bara vi får lite framförhållning för resa och planering.",
  },
  {
    q: "Vilken musik och vilka artister spelar ni?",
    a: (
      <>
        <p className="mb-2">
          Vi spelar energisk rock från 80-talet och framåt – låtar som alla
          känner igen och älskar att sjunga med i. Här är exempel på artister i vår repertoar:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          <ul className="list-disc pl-5 space-y-1">
            <li>Foo Fighters</li>
            <li>Blink-182</li>
            <li>The Killers</li>
            <li>Audioslave</li>
            <li>The Hellacopters</li>
            <li>Queens of the Stone Age</li>
            <li>Nothing But Thieves</li>
            <li>The Hives</li>
            <li>The Smashing Pumpkins</li>
            <li>Red Hot Chili Peppers</li>
            <li>The White Stripes</li>
            <li>Band of Horses</li>
            <li>Wolfmother</li>
          </ul>
          <ul className="list-disc pl-5 space-y-1">
            <li>Priestess</li>
            <li>KISS</li>
            <li>Millencolin</li>
            <li>Turbonegro</li>
            <li>Paramore</li>
            <li>Kings of Leon</li>
            <li>Rage Against the Machine</li>
            <li>Blur</li>
            <li>Franz Ferdinand</li>
            <li>Black Sabbath</li>
            <li>Ozzy Osbourne</li>
            <li>Nirvana</li>
            <li>Royal Blood</li>
          </ul>
        </div>
        <p className="mt-2">
          Och ja – vi tar gärna emot önskelåtar, så länge de passar på dansgolvet 😉
        </p>
      </>
    ),
    text: "Vi spelar energisk rock och alternativ pop från 80-talet och framåt – låtar som publiken känner igen och vill sjunga med i. I vår repertoar finns bland annat Foo Fighters, Blink-182, The Killers, Audioslave, The Hellacopters, Queens of the Stone Age, Nothing But Thieves, The Hives, The Smashing Pumpkins, Red Hot Chili Peppers, The White Stripes, Band of Horses, Wolfmother, Priestess, KISS, Millencolin, Turbonegro, Paramore, Kings of Leon, Rage Against the Machine, Blur, Franz Ferdinand, Black Sabbath, Ozzy Osbourne, Nirvana och Royal Blood. Vi tar gärna emot önskelåtar så länge de funkar på dansgolvet.",
  },
  {
    q: "Vad kostar det att boka Mordman?",
    a: (
      <>
        Pris <strong>förhandlas i förväg</strong> och beror på <strong>resväg</strong>, vad vi behöver ta med i{" "}
        <strong>ljud och ljus</strong> samt <strong>speltidens längd</strong>. Hör av dig med datum, plats
        och ungefärligt upplägg så återkommer vi snabbt:{" "}
        <a className={link} href="mailto:boka@mordman.se">
          boka@mordman.se
        </a>.
      </>
    ),
    text: "Priset för att boka Mordman förhandlas i förväg och beror bland annat på resväg, vad vi behöver ta med i ljud- och ljusutrustning samt speltidens längd. Hör av dig med datum, plats och ungefärligt upplägg så återkommer vi snabbt med prisförslag på boka@mordman.se.",
  },
  {
    q: "Kan ni spela utomhus? Vad krävs?",
    a: (
      <>
        <strong>Såklart!</strong> Bara scenen håller oss, elen håller för oss, och grannarna antingen inte
        bryr sig – eller ännu hellre vill vara med. 😎 Vi behöver väderskydd för utrustningen och stabil
        strömmatning (helst egen fas) nära scenen.
      </>
    ),
    text: "Ja, vi kan spela utomhus. Det viktigaste är att scenen klarar band och utrustning, att elen håller för belastningen och att det finns väderskydd för utrustningen. Vi behöver stabil strömmatning, helst egen fas, nära scenen, och att omgivningen accepterar ljudnivån.",
  },
  {
    q: "Ingår ljud och ljus?",
    a: (
      <>
        Ja. När du bokar oss får du ett <strong>komplett paket med ljud- och ljusutrustning</strong>,
        anpassat efter lokalen och stämningen du vill skapa.
      </>
    ),
    text: "Ja. När du bokar oss får du ett komplett paket med ljud- och ljusutrustning, anpassat efter lokalen och stämningen du vill skapa.",
  },
  {
    q: "Får vi en riktig faktura?",
    a: (
      <>
        Absolut. Mordman Handelsbolag har <strong>F-skattesedel</strong>, så du får en riktig faktura.
        Inga konstiga upplägg med mat, kläder eller tjänster som ersättning.
      </>
    ),
    text: "Absolut. Mordman Handelsbolag har F-skattesedel, så du får en riktig faktura. Inga konstiga upplägg med mat, kläder eller tjänster som ersättning.",
  },
  {
    q: "Kan vi önska låtar?",
    a: (
      <>
        Ja! Vår setlist är formbar efter dina önskemål, med rötterna i rocken från 90- och 00-talet.
        Önskelåtar tar vi gärna emot – så länge de funkar på dansgolvet. 😉
      </>
    ),
    text: "Ja! Vår setlist är formbar efter dina önskemål, med rötterna i rocken från 90- och 00-talet. Önskelåtar tar vi gärna emot – så länge de funkar på dansgolvet.",
  },
  {
    q: "Hur många är ni i bandet?",
    a: <>Vi är fem. Fem musiker på scen, inga backingtracks som låtsas vara ett band.</>,
    text: "Vi är fem. Fem musiker på scen, inga backingtracks som låtsas vara ett band.",
  },
  {
    q: "Hur bokar vi er?",
    a: (
      <>
        Mejla{" "}
        <a className={link} href="mailto:boka@mordman.se">
          <strong>boka@mordman.se</strong>
        </a>{" "}
        med datum, ort, lokal och ungefärligt antal gäster. Vi läser allt och svarar på ett par dagar
        med ett prisförslag.{" "}
        <Link className={link} href="/boka-band-till-fest">Så går det till →</Link>
      </>
    ),
    text: "Mejla boka@mordman.se med datum, ort, lokal och ungefärligt antal gäster. Vi läser allt och svarar på ett par dagar med ett prisförslag.",
  },
  {
    q: "Vad behöver vi ordna själva?",
    a: (
      <>
        Stabil ström nära scenen (helst egen fas) och en yta där band och utrustning får plats.
        Utomhus behöver vi också väderskydd för utrustningen.
      </>
    ),
    text: "Stabil ström nära scenen (helst egen fas) och en yta där band och utrustning får plats. Utomhus behöver vi också väderskydd för utrustningen.",
  },
  {
    q: "Är ni samma band som Nordman?",
    a: (
      <>
        Nej, det är vi inte! Mordman är ett rockcoverband från Gävle. Nordman är en svensk folkrockduo.
        Vi har inget med varandra att göra – utom att vi båda gillar en bra refräng.
      </>
    ),
    text: "Nej, det är vi inte! Mordman är ett rockcoverband från Gävle. Nordman är en svensk folkrockduo. Vi har inget med varandra att göra – utom att vi båda gillar en bra refräng.",
  },
];
