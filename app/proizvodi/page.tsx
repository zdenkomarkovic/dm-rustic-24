"use client";
import { Button } from "@/components/ui/button";
import { ProductList, productList } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { motion } from "framer-motion";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const Products = () => {
  return (
    <div className="py-28 bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto space-y-16 "
      >
        <h1 className="text-4xl font-bold text-center  text-primary">
          Naša ponuda
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Products;

const ProductCard = ({ product }: { product: ProductList }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="bg-gray-200 h-full ">
        <CardHeader>
          <CardTitle className="text-primary text-[22px]">
            {product.title}
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col gap-6">
          <div className="w-full h-72 relative ">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <CardDescription>
            <p>{product.text.substring(0, 80) + "..."}</p>
          </CardDescription>
          <p className="text-2xl text-primary">
            Cena: <span className="font-bold">{product.price}e</span> m²
          </p>
          <Link href={`/proizvodi/${product.id}`}>
            <Button className="w-full bg-gray-800"> Saznaj vise...</Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};
