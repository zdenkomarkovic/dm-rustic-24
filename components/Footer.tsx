"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-gray-50">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Početna
                </Link>
              </li>

              <li>
                <Link
                  href="/proizvodi"
                  className="text-muted-foreground hover:text-primary"
                >
                  Proizvodi
                </Link>
              </li>

              <li>
                <Link
                  href="/kontakt"
                  className="text-muted-foreground hover:text-primary"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+381644032842">
                <p className="text-muted-foreground  hover:text-primary">
                  Telefon: +38164 403 2842
                </p>
              </a>
            </div>
            <div>
              <a href="mailto:dmrustic2023@gmail.com">
                <p className="text-muted-foreground  hover:text-primary">
                  Email: dmrustic2023@gmail.com
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=61554328877469"
                target="_blank"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/dm_rustic/"
                target="_blank"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center text-primary">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">DM RUSTIC 24</h3>

            <p className=" font-bold ">Ulepsajmo zajedno vas dom</p>
          </div>
        </div>
        <div className="mt-5 pt-5 md:mt-8 md:pt-8 border-t border-primary text-center text-muted-foreground">
          <p className="mb-2">
            &copy; 2025 <span className="font-bold text-primary">DM Rustic</span>. Sva prava zadržana.
          </p>
          <p className="text-sm">
            Izrada sajta:{" "}
            <a
              href="https://www.manikamwebsolutions.com/"
              target="_blank"
              className="text-primary hover:underline font-semibold"
            >
              ManikamWebSolutions
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
