import { productList } from "@/constants/index";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return productList.map((p) => ({ id: String(p.id) }));
}

const findProduct = (id: string) =>
  productList.find((p) => p.id === parseInt(id));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) return {};
  const description =
    product.text.length > 155
      ? `${product.text.slice(0, 152).trimEnd()}...`
      : product.text;
  const url = `/proizvodi/${product.id}`;
  const images = product.images.slice(0, 4).map((src) => ({
    url: absoluteUrl(src),
    alt: product.title,
  }));
  return {
    title: { absolute: `${product.title} | ${SITE_NAME}` },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${product.title} | ${SITE_NAME}`,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | ${SITE_NAME}`,
      description,
      images: images.map((i) => i.url),
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.text,
    image: product.images.map((src) => absoluteUrl(src)),
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/proizvodi/${product.id}`,
      priceCurrency: "EUR",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: SITE_NAME },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetail product={product} />
    </>
  );
}
