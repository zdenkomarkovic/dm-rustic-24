"use client";

import Image from "next/image";
import Logo from "../public/logo.jpg";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, PhoneIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navList } from "@/constants/index";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-primary cursor-pointer" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <motion.li
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className={mobTitleStyles}
                  >
                    {item.title}
                  </motion.li>
                </Link>
              );
            })}
          </ul>
          <motion.button
            whileHover={{
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--primary))",
            }}
            className="flex items-center justify-center w-full rounded-full text-primary border-primary border-2 text-lg py-3 px-6 mt-4 transition-colors"
          >
            <PhoneIcon />
            <Link href="+381644032842">
              <p>+38164 403 2842</p>
            </Link>
          </motion.button>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <ul className="hidden gap-8 lg:flex text-white text-xl">
    {navList.map((item, index) => {
      if (item.list)
        return (
          <HoverCard key={index} openDelay={0} closeDelay={50}>
            <HoverCardTrigger>
              <motion.div
                whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
                className="flex gap-1 "
              >
                {item.title}
                <ChevronDownIcon className="w-[18px]" />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              {item.list.map((link, index2) => (
                <motion.li
                  key={`${index}.${index2}`}
                  whileHover={{
                    backgroundColor: "hsl(var(--primary))",
                  }}
                  className="rounded-md"
                >
                  <Link className="px-2 py-2 block" href={link.link}>
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </HoverCardContent>
          </HoverCard>
        );

      return (
        <Link key={index} href={item.link}>
          <motion.li
            className="transition-colors underline-animation"
            whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
          >
            {item.title}
          </motion.li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }  fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav className="flex items-center justify-between px-8 py-4 max-w-[80rem] w-full">
        <Link href="/" className="">
          <Image
            src={Logo}
            alt="dm rustic 24"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <DesktopNav />
        <motion.button
          whileHover={{
            color: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--primary))",
          }}
          className="hidden items-center justify-center rounded-full text-primary border-primary border-2 text-md py-3 px-6 transition-colors lg:flex"
        >
          <PhoneIcon />
          <Link href="tel:+381644032842">
            <p>+38164 403 2842</p>
          </Link>
        </motion.button>
        <MobileMenu />
      </nav>
    </header>
  );
}
