import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte DM RUSTIC 24 za ponudu dekorativnih ciglica, listela i lomljenog kamena. Telefon +381 64 403 2842, email dmrustic2023@gmail.com.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    url: "/kontakt",
    title: "Kontakt | DM RUSTIC 24",
    description:
      "Kontaktirajte nas za ponudu dekorativnih ciglica, listela i lomljenog kamena.",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
