import { notFound } from "next/navigation";
import { ProductDetailsPage } from "@/components/home/ProductDetailsPage";
import { getProductBySlug, products } from "@/lib/products";

type ProductDetailRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailRoute({ params }: ProductDetailRouteProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailsPage product={product} />;
}
