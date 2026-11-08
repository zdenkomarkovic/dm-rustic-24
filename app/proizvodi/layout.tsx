import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proizvodi – dekorativne ciglice, listele i kamen",
  description:
    "Ponuda dekorativnih ciglica od biber crepa i švapske opeke, listela i prirodnog lomljenog kamena. Pogledajte slike, dimenzije i cene.",
  alternates: { canonical: "/proizvodi" },
  openGraph: {
    url: "/proizvodi",
    title: "Proizvodi – dekorativne ciglice, listele i kamen | DM RUSTIC 24",
    description:
      "Ponuda dekorativnih ciglica od biber crepa i švapske opeke, listela i prirodnog lomljenog kamena.",
  },
};

export default function ProizvodiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
