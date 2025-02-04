"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "@/node_modules/next/image";
import { notFound, useParams } from "@/node_modules/next/navigation";
import { productList } from "@/constants/index";
import {
  ChevronLeft,
  ChevronRight,
  Euro,
  CircleX,
  Umbrella,
  Anvil,
  Leaf,
  BrickWall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";
import { useSwipeable } from "react-swipeable";

const ProductPage = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? parseInt(params.id) : 0;
  const product = productList.find((c) => c.id === id);
  if (!product) {
    notFound();
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [direction, setDirection] = useState(1);

  const images = product.images;
  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
  });

  return (
    <div className="bg-gray-800 py-28">
      <div
        className={`z-50 bg-black fixed w-full h-screen left-0 right-0 top-0 ${
          showImage ? "block " : "hidden"
        }`}
        {...handlers}
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <AnimatePresence custom={direction} mode="popLayout">
            {/* TRENUTNA SLIKA KOJA IZLAZI */}
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt="Product Image"
              className="absolute w-full h-full object-contain"
              initial={{ x: direction * 600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * -600, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-muted p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-muted p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={() => setShowImage(false)}
          className="absolute right-2 top-10 transform -translate-y-1/2 bg-black/50 text-muted p-2 rounded-full"
        >
          <CircleX className="w-6 h-6" />
        </button>
      </div>
      <motion.div
        className="container mx-auto px-4 py-8 space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {" "}
        <Card className="bg-gray-100">
          <CardHeader>
            <CardTitle className=" text-left text-xl md:text-4xl text-primary flex items-end">
              {product.title}
              <span className="flex pl-3 md:pl-7 items-center ">
                {product.price}
                <Euro className="md:w-8 md:h-8" />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <motion.div className="relative h-64 sm:h-80 md:h-96 mb-4">
                  <Image
                    src={images[currentImageIndex]}
                    alt={product.title}
                    fill
                    onClick={() => {
                      setShowImage(true);
                    }}
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
                </motion.div>
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
              <div className="lg:w-1/2 flex flex-col justify-around space-y-5 md:space-y-0">
                <p className="first-letter:pl-5">{product.text}</p>

                <div>
                  <p className="border-b-2 my-2">Karakteristike</p>
                  <div className="grid md:grid-cols-2 gap-5">
                    <p className="flex gap-2">
                      {" "}
                      <span className="text-primary">
                        <BrickWall />
                      </span>{" "}
                      {product.ground}
                    </p>
                    <p className="flex gap-2">
                      <span className="text-primary">
                        <Leaf />
                      </span>{" "}
                      {product.eco}
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <span className="text-primary">
                        <Umbrella />
                      </span>
                      {product.outside}
                    </p>
                    <p className="flex gap-2">
                      <span className="text-primary">
                        <Anvil />
                      </span>{" "}
                      {product.weight}
                    </p>
                  </div>
                </div>

                <div className="">
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
