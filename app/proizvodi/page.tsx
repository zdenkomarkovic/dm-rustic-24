"use client";
import { Button } from "@/components/ui/button";
import { ProductList, productList, categoryList } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect, Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Euro } from "lucide-react";
import { useSearchParams } from "next/navigation";

const ProductsContent = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    categoryParam ? parseInt(categoryParam) : null
  );

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(parseInt(categoryParam));
    }
  }, [categoryParam]);

  const filteredProducts = selectedCategory
    ? productList.filter((product) => {
        const category = categoryList.find((cat) => cat.id === selectedCategory);
        return category?.productIds.includes(product.id);
      })
    : productList;

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

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => setSelectedCategory(null)}
            className={`${
              selectedCategory === null
                ? "bg-primary text-white"
                : "bg-gray-600 text-white hover:bg-gray-500"
            }`}
          >
            Sve
          </Button>
          {categoryList.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-600 text-white hover:bg-gray-500"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

const Products = () => {
  return (
    <Suspense fallback={<div className="py-28 bg-gray-800 flex items-center justify-center"><p className="text-white">Učitavanje...</p></div>}>
      <ProductsContent />
    </Suspense>
  );
};

export default Products;

const ProductCard = ({ product }: { product: ProductList }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
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
          <p className="text-2xl text-primary flex items-center">
            Cena:{" "}
            <span className="font-bold flex items-center pl-2">
              {product.price}
              <Euro className="md:w-8 md:h-8" />
            </span>{" "}
            m²
          </p>
          <Link href={`/proizvodi/${product.id}`}>
            <Button className="w-full bg-gray-800"> Saznaj vise...</Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};
