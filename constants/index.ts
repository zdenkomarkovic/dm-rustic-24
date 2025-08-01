export const navList = [
  {
    title: "Početna",
    link: "/",
  },

  {
    title: "Proizvodi",
    link: "/proizvodi",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface ProductList {
  id: number;
  title: string;
  text: string;
  price: number;
  images: string[];
}

export const productList = [
  {
    id: 1,
    title: "Listele biber crepa 30x15cm",
    text: "Sečene od autentičnog starog biber crepa, ove pločice dimenzija 30x15 cm idealne su za podne i zidne obloge. Izrađene od prirodnih materijala, odlikuju se visokim stepenom otpornosti na spoljne uticaje i mogu podneti teret veći od 12 tona. Savršen izbor za rustične i moderne prostore koji zahtevaju dugotrajnost i estetsku vrednost.",
    price: 7,
    ground: " - podna i zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - Podnosi opterecenje 12 tona",

    images: [
      "/Listele biber crepa 30x15 (4).jpg",
      "/Listele biber crepa 30x15 (1).jpg",
      "/Listele biber crepa 30x15 (2).jpg",
      "/Listele biber crepa 30x15 (3).jpg",
      "/Listele biber crepa 30x15.jpg",
      "/Listele biber crepa 30x15 2.jpg",
      "/Listele biber crepa 30x15 3.jpg",
      "/Listele biber crepa 30x15 4.jpg",
      "/Listele biber crepa 30x15 5.jpg",
      "/Listele biber crepa 30x15 6.jpg",
      "/Listele biber crepa 30x15 7.jpg",
    ],
  },
  {
    id: 2,
    title: "Listele od biber crepa 15x5 cm",
    text: "Sečene od autentičnog starog biber crepa, ove pločice dimenzija 15x5 cm idealne su za zidne obloge. Izrađene od prirodnih materijala, odlikuju se visokim stepenom otpornosti na spoljne uticaje. Savršen izbor za rustične i moderne prostore koji zahtevaju dugotrajnost i estetsku vrednost.",
    price: 14,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - samo za staze bez vecih opterecenja",
    images: [
      "/Listele od biber crepa 15x5 cm 2.jpg",
      "/Listele od biber crepa 15x5 cm.jpg",
    ],
  },
  {
    id: 3,
    title: "Dekorativne ciglice od biber crepa 7.5x30 cm",
    text: "Sečene od autentičnog starog biber crepa, ove pločice dimenzija 8x30 cm idealne su za podne i zidne obloge. Izrađene od prirodnih materijala, odlikuju se visokim stepenom otpornosti na spoljne uticaje i mogu podneti velika opterecenja. Savršen izbor za rustične i moderne prostore koji zahtevaju dugotrajnost i estetsku vrednost.",
    price: 9,
    ground: " - podna i zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - Podnosi velika opterecenja",
    images: [
      "/7.5x30 (2).jpg",
      "/7.5x30 (3).jpg",
      "/7.5x30 (4).jpg",
      "/7.5x30 (1).jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 6.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 2.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 3.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 4.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 5.jpg",
      "/20250209_230254.jpg",
    ],
  },
  {
    id: 4,
    title: "Dekorativne ciglice 15x30 cm, crveno-žuta kombinacija",
    text: "Ove dekorativne ciglice dimenzija 15x30 cm, u kombinaciji crvenih i žutih tonova, idealne su za podne i zidne obloge. Sečene od prirodnih materijala, odlikuju se visokom otpornošću na spoljne uticaje i mogu podneti velika opterećenja. Pored izdržljivosti, pružaju i odličnu toplotnu izolaciju, čineći svaki prostor estetski privlačnim i energetski efikasnim.",
    price: 9,
    ground: " - podna i zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - Podnosi velika opterecenja",
    images: [
      "/Listele i dekorativne ciglice 15 x 30 cm.jpg",
      "/Listele i dekorativne ciglice 15 x 30 cm 2.jpg",
      "/Listele i dekorativne ciglice 15 x 30 cm 3.jpg",
    ],
  },
  {
    id: 5,
    title: "Dekorativne ciglice 26x6 cm",
    text: "Ove dekorativne ciglice dimenzija 26x6 cm simulacija fasadne cigle, u kombinaciji crvenih i žutih tonova, idealne su za podne i zidne obloge. Sečene od prirodnih materijala, odlikuju se visokom otpornošću na spoljne uticaje i mogu podneti velika opterećenja. Pored izdržljivosti, pružaju i odličnu toplotnu izolaciju, čineći svaki prostor estetski privlačnim i energetski efikasnim.",
    price: 11,
    ground: " - podna i zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - Podnosi velika opterecenja",
    images: [
      "/Dekorativne ciglice 26x6.jpg",
      "/Dekorativne ciglice 26x6 (1).jpg",
      "/Dekorativne ciglice 26x5,5 cm2.jpg",
      "/Dekorativne ciglice 26x5,5 cm1.jpg",
      "/Dekorativne ciglice 26x5,5 cm3.jpg",
      "/Dekorativne ciglice 26x5,5 cm.jpg",
      "/Dekorativne ciglice 26x5,5 cm4.jpg",
      "/Dekorativne ciglice 26x5,5 cm5.jpg",
    ],
  },
  {
    id: 7,
    title: "Listele od biber crepa zute",
    text: "Sečene od autentičnog starog biber crepa, ove pločice dimenzija cm idealne su za podne i zidne obloge. Izrađene od prirodnih materijala, odlikuju se visokim stepenom otpornosti na spoljne uticaje i mogu podneti teret veći od 12 tona. Savršen izbor za rustične i moderne prostore koji zahtevaju dugotrajnost i estetsku vrednost.",
    price: 10,
    ground: " - podna i zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - Podnosi opterecenje 12 tona",
    images: [
      "/Listele od biber crepa 30x15 zute (8).jpg",
      "/Listele od biber crepa 30x15 zute (5).jpg",
      "/Listele od biber crepa 30x15 zute (6).jpg",
      "/Listele od biber crepa 30x15 zute (7).jpg",
      "/Listele od biber crepa 30x15 zute.jpg",
      "/Listele od biber crepa 30x15 zute2.jpg",
    ],
  },
  {
    id: 8,
    title: "Prirodni lomljeni kamen",
    text: "Izrađen od 100% prirodnog materijala, ovaj kamen je idealan za zidne i podne obloge. Odlikuje se visokom otpornošću na spoljne uticaje i velika opterećenja, pružajući dugotrajnost i autentičnu estetiku. Savršen izbor za eksterijere i enterijere koji zahtevaju prirodnu eleganciju i izdržljivost.",
    price: 7,
    ground: " - podna i zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - Podnosi velika opterecenja",
    images: [
      "/Prirodni lomljeni kamen.jpg",
      "/Prirodni lomljeni kamen 2.jpg",
      "/Prirodni lomljeni kamen 3.jpg",
      "/Prirodni lomljeni kamen 4.jpg",
      "/Prirodni lomljeni kamen 5.jpg",
    ],
  },
  {
    id: 9,
    title: "Suvi zid, od prirodnog kamena",
    text: "Izrađen od prirodnog kamena, ovaj suvi zid namenjen je isključivo za zidne površine. Odlikuje se visokim stepenom otpornosti na sve spoljne uticaje, pružajući dugotrajnost, stabilnost i autentičan rustični izgled. Idealan za eksterijere i enterijere koji zahtevaju prirodnu eleganciju i čvrstoću.",
    price: 12,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - nije za velika opterecenja",
    images: [
      "/Suvi zid, od prirodnog kamena.jpg",
      "/Suvi zid, od prirodnog kamena 2.jpg",
    ],
  },
  {
    id: 10,
    title: "Seceni prirodni kamen stanglica 3cm",
    text: "Ove tigraste štanglice širine 3 do 8 cm izrađene su od prirodnog kamena i namenjene isključivo za zidne obloge. Odlikuju se čvrstoćom i otpornošću, što ih čini idealnim za unutrašnje i spoljašnje dekoracije. Prirodna tekstura i jedinstveni tonovi unose toplinu i eleganciju u svaki prostor.",
    price: 27,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - nije za velika opterecenja",
    images: ["/Seceni prirodni kamen stanglica.jpg"],
  },
  {
    id: 11,
    title: "Seceni prirodni kamen stanglica 5cm",
    text: "Ove tigraste štanglice širine 3 do 8 cm izrađene su od prirodnog kamena i namenjene isključivo za zidne obloge. Odlikuju se čvrstoćom i otpornošću, što ih čini idealnim za unutrašnje i spoljašnje dekoracije. Prirodna tekstura i jedinstveni tonovi unose toplinu i eleganciju u svaki prostor.",
    price: 26,
    ground: " - podna i zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - nije za velika opterecenja",
    images: ["/Seceni prirodni kamen stanglica.jpg"],
  },
  {
    id: 12,
    title: "Seceni prirodni kamen stanglica 8cm",
    text: "Ove tigraste štanglice širine 3 do 8 cm izrađene su od prirodnog kamena i namenjene isključivo za zidne obloge. Odlikuju se čvrstoćom i otpornošću, što ih čini idealnim za unutrašnje i spoljašnje dekoracije. Prirodna tekstura i jedinstveni tonovi unose toplinu i eleganciju u svaki prostor.",
    price: 25,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - nije za velika opterecenja",
    images: ["/Seceni prirodni kamen stanglica.jpg"],
  },
  {
    id: 13,
    title: "Seceni prirodni kamen, stanglice plave 3cm",
    text: "Ove plave štanglice širine 3 do 8 cm izrađene su od prirodnog kamena i namenjene isključivo za zidne obloge. Odlikuju se čvrstoćom i otpornošću, što ih čini idealnim za unutrašnje i spoljašnje dekoracije. Prirodna tekstura i jedinstveni tonovi unose toplinu i eleganciju u svaki prostor.",
    price: 26,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " -nije za velika opterecenja",
    images: ["/Seceni prirodni kamen, stanglice plave.jpg"],
  },
  {
    id: 14,
    title: "Seceni prirodni kamen, stanglice plave 5cm",
    text: "Ove plave štanglice širine 3 do 8 cm izrađene su od prirodnog kamena i namenjene isključivo za zidne obloge. Odlikuju se čvrstoćom i otpornošću, što ih čini idealnim za unutrašnje i spoljašnje dekoracije. Prirodna tekstura i jedinstveni tonovi unose toplinu i eleganciju u svaki prostor.",
    price: 25,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - nije za velika opterecenja",
    images: ["/Seceni prirodni kamen, stanglice plave.jpg"],
  },
  {
    id: 15,
    title: "Seceni prirodni kamen, stanglice plave 8cm",
    text: "Ove plave štanglice širine 3 do 8 cm izrađene su od prirodnog kamena i namenjene isključivo za zidne obloge. Odlikuju se čvrstoćom i otpornošću, što ih čini idealnim za unutrašnje i spoljašnje dekoracije. Prirodna tekstura i jedinstveni tonovi unose toplinu i eleganciju u svaki prostor.",
    price: 24,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - nije za velika opterecenja",
    images: ["/Seceni prirodni kamen, stanglice plave.jpg"],
  },
  {
    id: 16,
    title: "Seceni prirodni kamen, stanglice bronza 3cm",
    text: "Ove bronzane štanglice širine 3 do 8 cm izrađene su od prirodnog kamena i namenjene isključivo za zidne obloge. Odlikuju se čvrstoćom i otpornošću, što ih čini idealnim za unutrašnje i spoljašnje dekoracije. Prirodna tekstura i jedinstveni tonovi unose toplinu i eleganciju u svaki prostor.",
    price: 26,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - nije za velika opterecenja",
    images: ["/Seceni prirodni kamen, stanglice bronza.jpg"],
  },
  {
    id: 17,
    title: "Seceni prirodni kamen, stanglice bronza 5cm",
    text: "Ove bronzane štanglice širine 3 do 8 cm izrađene su od prirodnog kamena i namenjene isključivo za zidne obloge. Odlikuju se čvrstoćom i otpornošću, što ih čini idealnim za unutrašnje i spoljašnje dekoracije. Prirodna tekstura i jedinstveni tonovi unose toplinu i eleganciju u svaki prostor.",
    price: 25,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - nije za velika opterecenja",
    images: ["/Seceni prirodni kamen, stanglice bronza.jpg"],
  },
  {
    id: 18,
    title: "Seceni prirodni kamen, stanglice bronza 8cm",
    text: "Ove bronzane štanglice širine 3 do 8 cm izrađene su od prirodnog kamena i namenjene isključivo za zidne obloge. Odlikuju se čvrstoćom i otpornošću, što ih čini idealnim za unutrašnje i spoljašnje dekoracije. Prirodna tekstura i jedinstveni tonovi unose toplinu i eleganciju u svaki prostor.",
    price: 24,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - nije za velika opterecenja",
    images: ["/Seceni prirodni kamen, stanglice bronza.jpg"],
  },
  {
    id: 19,
    title: "Svabska opeka, 29-31cm",
    text: "Svabska opeka secena u listele, dimenzije variraju od 29cm do 31cm. Moze da se krate na iste dimenzije onda je cena 15e",
    price: 14,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: " - nije za velika opterecenja",
    images: ["/svabska cigla.jpg"],
  },
  {
    id: 20,
    title: "Crep 45 stepeni",
    text: "Crep 45 stepeni za zid i pod",
    price: 14,
    ground: " - podna i zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: "",
    images: ["/crep45.jpg"],
  },
  {
    id: 21,
    title: "Farbanje cigala",
    text: "Mogu se farbati kod nas ili na mestu ugradnje, zavisno od zelje musterije farbanje kod nas je 2e, farbanje na povrsini ugradnje 3e",
    price: 2,
    ground: " - podna i zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: "",
    images: ["/farbana.jpg", "/farbana2.jpg", "/farbana3.jpg"],
  },
  {
    id: 22,
    title: "Domaca sumadijska listela 01",
    text: "Domaca sumadijska cigla, listela se koristi za zidnu ugradnju.",
    price: 15,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: "",
    images: [
      "/sumadijska (5).jpg",
      "/sumadijska.jpg",
      "/sumadijska (1).jpg",
      "/sumadijska (2).jpg",
      "/sumadijska (3).jpg",
      "/sumadijska (4).jpg",
    ],
  },
  {
    id: 23,
    title: "Domaca sumadijska listela 02",
    text: "Domaca sumadijska cigla, listela se koristi za zidnu ugradnju, sece se od unutrasnjeg dela cigle. Preporucuje se zastita nakon ugradnje",
    price: 10,
    ground: " - zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: "",
    images: [
      "/sumadijska2 (5).jpg",
      "/sumadijska2 (1).jpg",
      "/sumadijska2 (2).jpg",
      "/sumadijska2 (3).jpg",
      "/sumadijska2 (4).jpg",
    ],
  },
  {
    id: 24,
    title: "Crep Kolubara",
    text: "Crep Kolubara se koristi za zidnu i podnu ugradnju.Trpi velike tezine, otporan na sve",
    price: 8,
    ground: " -podna i zidna obloga",
    eco: " - prirodni materijali",
    outside: " - za spoljasnju i unutrasnju ugradnju",
    weight: "Podnosi velike tezine",
    images: [
      "/Crep Kolubara (3).jpg",
      "/Crep Kolubara (4).jpg",
      "/Crep Kolubara (1).jpg",
      "/Crep Kolubara (2).jpg",
    ],
  },
];
