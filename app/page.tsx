import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import Nesto from "../components/nesto";

export default function Home() {
  return (
    <div>
      <Hero />
      <Nesto />
      <Footer />
    </div>
  );
}
