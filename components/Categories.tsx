"use client";
import { categoryList } from "@/constants/index";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="border-t-[1px] border-primary container px-6 mx-auto py-20 space-y-5 md:space-y-16">
      <h2 className="text-2xl md:text-5xl text-center text-primary font-bold">
        Naše kategorije proizvoda
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xl md:text-2xl">
        {categoryList.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="overflow-hidden rounded-2xl shadow-xl shadow-primary bg-white flex flex-col"
          >
            <div className="w-full h-64 relative">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-bold text-2xl md:text-3xl text-primary text-center mb-4">
                {category.name}
              </h3>
              <p className="text-base md:text-lg text-gray-700 text-center mb-6 flex-grow">
                {category.description}
              </p>
              <Link href={`/proizvodi?category=${category.id}`}>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Pogledaj proizvode
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
