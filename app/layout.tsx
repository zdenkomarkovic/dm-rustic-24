import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DM RUSTIC 24 dekorativne ciglice",
  description:
    "Dm Rustic se bavi proizvodnjom dekorativnih ciglica, listela, dekorativnog kamena, lomljenog kamena, secenog kamena, stanglice",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  keywords: [
    "dekorativne ciglice",
    "ciglice",
    "listele",
    "dekorativna cigla",
    "lomljeni kamen",
    "dekorativni kamen",
    "stanglice",
    "seceni kamen",
  ],
  alternates: {
    canonical: "https://www.dekorativneciglice.rs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18057151725"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18057151725');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800 text-gray-100`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
