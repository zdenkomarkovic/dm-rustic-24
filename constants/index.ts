export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  // {
  //   title: "Usluge",
  //   list: [
  //     {
  //       title: "1",
  //       link: "",
  //     },
  //     {
  //       title: "2",
  //       link: "",
  //     },
  //     {
  //       title: "3",
  //       link: "",
  //     },
  //     {
  //       title: "P4",
  //       link: "",
  //     },
  //   ],
  // },
  {
    title: "Proizvodi",
    link: "/proizvodi",
  },
  // {
  //   title: "O nama",
  //   link: "",
  // },
  {
    title: "Kontakt",
    link: "",
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
    title: "Listele biber crepa 30x15 cm",
    text: "Listele secene od biber crepa , 30x15 , idealne za podne obloge , kao i za zidne , prirodni materijali seceni od starog biber crepa , otporni na sve spoljne uticaje , trpe teret preko 12 tona... cena 7 eura 1m²",
    price: 7,
    images: [
      "/Listele biber crepa 30x15.jpg",
      "/Listele biber crepa 30x15 2.jpg",
      "/Listele biber crepa 30x15 3.jpg",
      "/Listele biber crepa 30x15 4.jpg",
      "/Listele biber crepa 30x15 5.jpg",
      "/Listele biber crepa 30x15 6.jpg",
    ],
  },
  {
    id: 2,
    title: "Listele od biber crepa 15x5 cm",
    text: "Listele od biber crepa 15 x 5 cm idealno resenje za zidne obloge , opis je u sustini isti prirodni materijali , otporni na spoljasnje uticaje cena 14 eura m²",
    price: 14,
    images: [
      "/Listele od biber crepa 15x5 cm 2.jpg",
      "/Listele od biber crepa 15x5 cm.jpg",
    ],
  },
  {
    id: 3,
    title: "Dekorativne ciglice od biber crepa 8x30 cm",
    text: "Dekorativne ciglice secene od biber crepa 8x30 cm, za zidne i podne obloge , za spoljne kao i unutrasnje dekoracije , i fasade... otporne na sve spoljne uticaje , prirodni materijali opet opis neki kao i za ostale",
    price: 9,
    images: [
      "/Dekorativne ciglice od biber crepa 8x30 cm 2.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 3.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 4.jpg",
      "/Dekorativne ciglice od biber crepa 8x30 cm 5.jpg",
    ],
  },
  {
    id: 4,
    title: "Listele i dekorativne ciglice 15 x 30 cm",
    text: "Listele i dekorativne ciglice 15x 30 kombinacija zutih i crvenih, opis je u sustini opet isti, pogodno za zidne i podne obloge, trpe teret, imaju visok procenat toplotne izolacije",
    price: 9,
    images: [
      "/Listele i dekorativne ciglice 15 x 30 cm.jpg",
      "/Listele i dekorativne ciglice 15 x 30 cm 2.jpg",
    ],
  },
  {
    id: 5,
    title: "Dekorativne ciglice 26x5,5 cm",
    text: "Dekorativne ciglice 26x5,5 cm simulacija fasadne cigle , opis na isti fazon",
    price: 11,
    images: ["/Dekorativne ciglice 26x5,5 cm.jpg"],
  },
  {
    id: 6,
    title: "Prirodni lomljeni kamen",
    text: "Prirodni lomljeni kamen, 100 posto prirodni materijal, pogodan za zidne i podne obloge , otporan na velike terete , kao i sve spoljne uticaje",
    price: 7,
    images: [
      "/Prirodni lomljeni kamen.jpg",
      "/Prirodni lomljeni kamen 2.jpg",
      "/Prirodni lomljeni kamen 3.jpg",
      "/Prirodni lomljeni kamen 4.jpg",
      "/Prirodni lomljeni kamen 5.jpg",
    ],
  },
  {
    id: 7,
    title: "Suvi zid, od prirodnog kamena",
    text: "Suvi zid, od prirodnog kamena iskljucivo za zidne povrsine , otporan na sve spoljne uticaje",
    price: 12,
    images: [
      "/Suvi zid, od prirodnog kamena.jpg",
      "/Suvi zid, od prirodnog kamena 2.jpg",
    ],
  },
  {
    id: 8,
    title: "Seceni prirodni kamen stanglica 3cm",
    text: "Seceni prirodni kamen, stanglice tigraste sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 22 eura m² , 5 cm 21 eura , 8 cm 20 eura",
    price: 10,
    images: ["/prilaz.jpg", "/prilaz.jpg"],
  },
  {
    id: 9,
    title: "Listele",
    text: "Seceni prirodni kamen, stanglice plave sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 22 eura m² , 5 cm 20 eura , 8 cm 19 eura",
    price: 12,
    images: ["/prilaz.jpg", "/prilaz.jpg"],
  },
  {
    id: 10,
    title: "Listele",
    text: "Seceni prirodni kamen, stanglice bronza sirine 3 do 8 cm ,iskljucivo za zidne obloge, cvesti i otporni materijali... pogodni za unutrasnke kao i spoljasnje dekoracije , cena 3 cm 21,5eura m² , 5 cm 20,5 eura , 8 cm 19 eura",
    price: 14,
    images: ["/prilaz.jpg", "/prilaz.jpg"],
  },
  {
    id: 11,
    title: "Listele",
    text: "Dekorativna izalijanska ciglica , idealne za fasade , i kao i detalje, otporne na spoljasnje uticaje , izrada se radi po narudzbini, cena 60 e m²",
    price: 9,
    images: ["/prilaz.jpg", "/prilaz.jpg"],
  },
  {
    id: 12,
    title: "Listele",
    text: "Listele od biber crepa 30x15 zuta , za podne i zidne obloge , isto opis, 10 e m²",
    price: 3,
    images: ["/prilaz.jpg", "/prilaz.jpg"],
  },
];
