"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "@/node_modules/next/image";
import { notFound, useParams } from "@/node_modules/next/navigation";
import { productList } from "@/constants/index";
import { ChevronLeft, ChevronRight, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";

const ProductPage = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? parseInt(params.id) : 0;
  const product = productList.find((c) => c.id === id);
  if (!product) {
    notFound();
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.images;
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gray-800 py-28">
      <motion.div
        className="container mx-auto px-4 py-8 space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {" "}
        <Card className="bg-gray-100">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl text-primary">
              {product.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="relative h-64 sm:h-80 md:h-96 mb-4 ">
                  <Image
                    src={images[currentImageIndex]}
                    alt={product.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                    aria-label="Prethodna slika"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                    aria-label="Sledeća slika"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex justify-center space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImageIndex
                          ? "bg-primary"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Prikaži sliku ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-end">
                <div className="space-y-8">
                  <p className="text-3xl font-bold text-primary flex items-center">
                    Cena: {product.price}
                    <Euro />
                  </p>
                  <div className="">
                    <div className="flex items-center gap-2">
                      {product.text}
                    </div>
                  </div>
                  <div>
                    <p className="border-b-2 my-2">Karakteristike</p>
                    <div className="grid md:grid-cols-2">
                      {product.karakteristike.map((item, i) => {
                        return <p key={i}>{item} </p>;
                      })}
                    </div>
                  </div>
                </div>

                <div className=" mt-auto mb-7">
                  <a href="tel:+381644032842">
                    <Button size="lg" className="w-full">
                      Pozovite odmah: +38164 403 2842
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/proizvodi">
                <Button variant="outline">Nazad na sve proizvode</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProductPage;
