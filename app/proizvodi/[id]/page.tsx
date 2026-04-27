import { productList } from "@/constants/index";
import { notFound } from "next/navigation";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return productList.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = productList.find((p) => p.id === parseInt(id));
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
