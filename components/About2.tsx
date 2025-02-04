import React from "react";

const About2 = () => {
  return (
    <div className="bg-gray-800">
      {" "}
      <div className="container px-2 lg:px-40 mx-auto text-gray-100 py-12 md:py-28 space-y-5 md:space-y-10  text-lg  md:text-2xl">
        <h1 className="text-2xl md:text-6xl">
          <span className="font-bold text-primary">
            Dekorativne ciglice, listele, prirodni kamen
          </span>{" "}
          - prirodni materijali za jedinstven izgled vašeg prostora
        </h1>
        <p className=" first-letter:pl-10">
          {" "}
          <span className="font-bold text-primary">DM Rustic 24</span> vam nudi
          dekorativne ciglice sečene od biber crepa i cigle, kao i prirodni
          lomljeni i sečeni kamen – 100% prirodne materijale otporne na sve
          spoljne uticaje. Dugotrajni, ekološki prihvatljivi i jednostavni za
          ugradnju, kako napolju tako i unutra. Naši proizvodi su idealni za:
        </p>
        <ul className="font-bold text-primary">
          <li> - Fasade i zidne obloge</li>
          <li> - Podove, tremove, staze i prilaze</li>
          <li> - Letnjikovce, parkinge i dekorativne detalje</li>
        </ul>

        <h2 className=" text-2xl md:text-5xl pt-5 md:pt-20 font-bold">
          Karakteristike
        </h2>
        <ul className="font-bold">
          <li> - Proizvodi poseduju odredjeni procenat izolacije</li>
          <li>
            {" "}
            - Lake su za ugradnju, ne opterećuju zidove, lako se održavaju,
            ekološki su prihvatljive
          </li>
          <li>
            {" "}
            - Pečene su na veoma visokim temperaturama što ih čini izdržljivim
          </li>
          <li> - Uklapaju se i u rustičan i u moderan stil</li>
        </ul>
        <h2 className=" text-2xl md:text-5xl pt-5 md:pt-20 font-bold">
          Prilagođavanje i dodatne usluge
        </h2>
        <ul className="font-bold">
          <li> - Mogućnost korekcije mera po želji kupca</li>
          <li> - Završna obrada: šmirglanje (2 €/m²) i brušenje (3 €/m²)</li>
          <li> - Popusti i beneficije na porudžbine preko 200+ m²</li>
        </ul>
      </div>
    </div>
  );
};

export default About2;
