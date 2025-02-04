"use client";
import React from "react";
import { Hammer, Truck, Cuboid, Speech } from "lucide-react";
import { motion } from "framer-motion";

const ProcesCard = () => {
  const motionDivClass =
    "p-5 text-center space-y-6 mb-5  rounded-2xl shadow-xl shadow-primary";

  return (
    <div className="border-t-[1px] border-primary container  px-6 mx-auto py-20 space-y-5 md:space-y-28">
      {" "}
      <h2 className="text-2xl md:text-5xl text-center text-primary ">
        Na nas mozete racunati na sledece...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7  text-xl md:text-2xl pb-510 text-primary">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${motionDivClass}`}
        >
          <Speech className="mx-auto w-12 h-12" />
          <h3 className=" font-bold text-3xl">Besplatne konsultacije</h3>
          <p>
            Niste sigurni koji materijal da odaberete? Kontaktirajte nas za
            besplatne savete vezane za ugradnju i odabir proizvoda!
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${motionDivClass}`}
        >
          <Cuboid className="mx-auto w-12 h-12" />
          <h3 className=" font-bold text-3xl">Usluga ugradnje</h3>
          <p>
            {" "}
            Ukoliko nemate majstora, mozemo vam preporuciti neke od nasih,
            proverenih majstora za ugradnju
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${motionDivClass}`}
        >
          <Hammer className="mx-auto w-12 h-12 " />
          <h3 className=" font-bold text-3xl">Kvalitetna izrada</h3>
          <p>
            Ekoloski prihvatljive, veoma izdrzljive - Pecene na veoma visokim
            temperaturama
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${motionDivClass}`}
        >
          <Truck className="mx-auto w-12 h-12" />
          <h3 className=" font-bold text-3xl">Prevoz</h3>
          <p>
            Ukoliko niste u mogucnosti da obezbedite prevoz, mi to možemo
            uciniti za vas!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProcesCard;
