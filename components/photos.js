// Gallery manifest. The first 9 are rendered in the server HTML (what Google
// sees); the rest rotate in on the client. To add a photo: put it in
// /public/content/img (max 2000px long side) and add an entry here.
// Alt text: describe what is visible, in Swedish.
const photos = [
  // Server-rendered first grid
  { file: 'mordman-coverband-live-hela-bandet.jpg', alt: 'Mordman spelar live på scen under bandets banderoll, i grönt scenljus' },
  { file: 'mordman-band-40-arsfest-gavle-tradgard.jpg', alt: 'Mordman spelar på en 40-årsfest i en trädgård i Gävle' },
  { file: 'mordman-coverband-publik-dansar.jpg', alt: 'Publiken dansar och sjunger med framför scenen när Mordman spelar live' },
  { file: 'mordman-halloweenfest-gitarrist.jpg', alt: 'Mordmans gitarrist i skelettsmink spelar grön elgitarr på en halloweenfest' },
  { file: 'mordman-sangare-tradgardsfest.jpg', alt: 'Mordmans sångare sjunger på en trädgårdsfest med gitarristerna bakom sig' },
  { file: 'mordman-rockband-scen-banderoll.jpg', alt: 'Mordman på scen framför den stora banderollen, med sångare, gitarrister och trummis' },
  { file: 'mordman-trummis-tradgardsfest.jpg', alt: 'Mordmans trummis spelar på ett grönt trumset på verandan under en trädgårdsfest' },
  { file: 'mordman-gitarrist-live-scen.jpg', alt: 'Mordmans gitarrist sjunger och spelar grön elgitarr på scen' },
  { file: 'mordman-halloweenfest-scen.jpg', alt: 'Två gitarrister i Mordman i skelettsmink på scen i rött ljus under en halloweenfest' },

  // Rotating pool
  { file: 'mordman-setlist-coverlatar.jpg', alt: 'Mordmans setlist med covers som Mr. Brightside, Song 2, Sex on Fire och Detroit Rock City' },
  { file: 'mordman-publik-filmar-konsert.jpg', alt: 'Gäster vid baren filmar med mobilen när Mordman spelar live' },
  { file: '042057549f4404559eb4c874918da2ae.jpg', alt: 'Mordmans basist spelar på en mörk scen' },
  { file: '2089094cde005ca1562b87dc13a2ebfd.jpg', alt: 'Medlem i Mordman poserar på kyrktrappan inför en spelning' },
  { file: '35a15923e0b1fcae39c18478b6f39e3e.jpg', alt: 'Två medlemmar i Mordman-tröjor poserar vid bilen en kväll' },
  { file: '3d7630bcf74988748403268442d8efd9.jpg', alt: 'Mordmans basist spelar vit elbas på scen' },
  { file: '4c39f35e1ee57700238fe8eaea687c56.jpg', alt: 'Mordmans gitarrist spelar svart elgitarr under den målade banderollen' },
  { file: '577fbed5330f02433be9735b3716670c.jpg', alt: 'Mordman spelar live i grönt scenljus och laserstrålar' },
  { file: '8dd356b4fe6acd7ff3978c3b85faa4c9.jpg', alt: 'Hela Mordman på scen under banderollen i rött och blått ljus' },
  { file: '8dd43a8b6e31a165f3592ef5a09fb19c.jpg', alt: 'Mordmans sångare i solglasögon på scen framför väggmålningar' },
  { file: '8eb118211e8d5106aca7333755a1fcbf.jpg', alt: 'Mordmans gitarrist spelar röd elgitarr framför trumsetet' },
  { file: 'IMG_0127.jpg', alt: 'Grön elgitarr i stativ i en blommande trädgård inför spelningen' },
  { file: 'IMG_0130.jpg', alt: 'Mordmans trumset uppställt under en pergola inför en 40-årsfest i trädgården' },
  { file: 'IMG_0193.jpg', alt: 'Mordman spelar i trädgården i kvällsljus med rök från rökmaskinen' },
  { file: 'IMG_0194.jpg', alt: 'Mordmans sångare och gitarrist rockar loss på trädgårdsfesten' },
  { file: 'IMG_0200.jpg', alt: 'Mordman spelar för festgästerna i trädgården' },
  { file: 'IMG_0203.jpg', alt: 'En festgäst tittar på när Mordmans sångare sjunger i trädgården' },
  { file: 'IMG_0207.jpg', alt: 'Mordmans sångare sjunger mot kvällshimlen på trädgårdsfesten' },
  { file: 'IMG_0208.jpg', alt: 'Mordmans basist i solglasögon spelar vit elbas bland lavendel och grönska' },
  { file: 'IMG_0210.jpg', alt: 'Mordmans gitarrist och sångare på trädgårdsfesten' },
  { file: 'IMG_0211.jpg', alt: 'Mordmans basist spelar i trädgården bland buskar och blommor' },
  { file: 'IMG_0215.jpg', alt: 'Mordmans gitarrist i blommig skjorta, med trummisen i bakgrunden' },
  { file: 'IMG_0217.jpg', alt: 'Mordmans sångare sjunger med gitarristen bredvid sig på trädgårdsfesten' },
  { file: 'IMG_0246.jpg', alt: 'Hela Mordman spelar i trädgården med rökmaskin' },
  { file: 'IMG_2641.jpg', alt: 'Bandmedlemmar utanför kyrkan inför spelningen, skärmdump från Instagram' },
  { file: 'IMG_2704.jpg', alt: 'Mordmans sångare och gitarrist i grönt och lila scenljus under banderollen' },
  { file: 'IMG_2706.jpg', alt: 'Glad gäst i Mordman-tröja gör rocktecknet vid baren' },
  { file: 'IMG_2737.jpg', alt: 'Mordman live, visat på en storbildsskärm i lokalen' },
  { file: 'IMG_7646.jpg', alt: 'Mordmans trummis i skelettsmink bakom trumsetet under den röda banderollen' },
  { file: 'IMG_7647.jpg', alt: 'Mordmans gitarrist i skelettsmink och kåpa spelar på en halloweenfest' },
  { file: 'IMG_7649.jpg', alt: 'Mordmans sångare i skelettsmink sjunger på en halloweenfest' },
  { file: 'IMG_7651.jpg', alt: 'Mordmans basist i skelettsmink spelar vit elbas på en halloweenfest' },
  { file: 'IMG_7653.jpg', alt: 'Mordman på scen i rött ljus under en halloweenfest' },
  { file: 'IMG_7656.jpg', alt: 'Mordmans gitarrist och trummis i skelettsmink på en halloweenfest' },
  { file: 'a83957f84bcb4da075a7de14d92e6d86.jpg', alt: 'Mordmans trummis spelar på ett grönt Tama-trumset' },
  { file: 'b0f7324c163c91564efc10d44c35b5df.jpg', alt: 'Mordman spelar live medan en gäst dansar vid scenkanten' },
  { file: 'c2fd6874e67dfbf492eb449ddc5f7b17.jpg', alt: 'Mordman spelar live under banderollen i grönt scenljus' },
  { file: 'e28351deaeda134b67e4fcaf74412d45.jpg', alt: 'Mordmans gitarrist spelar svart elgitarr under banderollen' },
].map((p) => ({ ...p, src: `/content/img/${p.file}` }));

export default photos;
