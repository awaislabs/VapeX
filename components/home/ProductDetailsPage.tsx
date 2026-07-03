"use client";

import { ProductImageGallery } from "@/components/product/ProductImageGallery";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/common/ProductCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { StarRating } from "./StarRating";
import { Product } from "@/types/site";
import { getProductPrice, getRelatedProducts } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-context";

type ProductDetailsPageProps = {
  product: Product;
};

export function ProductDetailsPage({ product }: ProductDetailsPageProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0]?.id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");

  const price = getProductPrice(product, selectedVariant);
  const related = getRelatedProducts(product);
  const priceLabel =
    product.variants && product.variants.length > 1
      ? `${formatPrice(Math.min(...product.variants.map((v) => v.price)))} - ${formatPrice(Math.max(...product.variants.map((v) => v.price)))}`
      : formatPrice(price);

  const handleAddToCart = () => {
    addToCart({ productId: product.id, quantity, variantId: selectedVariant });
  };

  const handleBuyNow = () => {
    addToCart({ productId: product.id, quantity, variantId: selectedVariant });
    router.push("/checkout");
  };

  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">PRODUCT DETAILS</h1>
        </Container>
      </section>
      <Container>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.subtitle }
          ]}
        />
        <section className="grid gap-10 py-12 lg:grid-cols-2">
          <ProductImageGallery product={product} />
          <div>
            <p className="text-xs text-black/60">{product.title}</p>
            <h2 className="mt-2 text-4xl font-semibold">{product.subtitle}</h2>
            <div className="mt-3 flex items-center gap-3">
              <StarRating count={product.rating} size={14} />
              <span className="text-sm text-black/60">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-2 text-4xl text-brand">{priceLabel}</p>
            <p className="mt-1 text-sm font-medium text-black/70">
              {product.inStock ? "In stock" : "Out of stock"}
            </p>
            <p className="mt-4 text-black/65">{product.description}</p>

            {product.variants && product.variants.length > 0 ? (
              <div className="mt-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.1em]">Variants</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariant(variant.id)}
                      className={`border px-4 py-2 text-xs uppercase tracking-[0.08em] transition ${
                        selectedVariant === variant.id
                          ? "border-brand bg-brand text-white"
                          : "border-black/15 bg-white hover:border-brand"
                      }`}
                    >
                      {variant.label} — {formatPrice(variant.price)}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center border border-black/10 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="px-3 py-2 text-lg hover:text-brand"
                >
                  −
                </button>
                <input
                  value={quantity}
                  onChange={(event) =>
                    setQuantity(Math.max(1, Number(event.target.value) || 1))
                  }
                  className="h-9 w-16 border-x border-black/10 text-center text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="px-3 py-2 text-lg hover:text-brand"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="bg-brand px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
              >
                ADD TO CART
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="border border-brand px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand transition hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                BUY NOW
              </button>
            </div>
          </div>
        </section>

        <section className="mt-4 border-t border-black/10 bg-transparent p-2">
          <div className="mb-6 flex gap-6 border-b border-black/10 pb-4 text-sm">
            <button
              type="button"
              onClick={() => setActiveTab("description")}
              className={`capitalize transition ${
                activeTab === "description" ? "font-semibold text-black" : "text-black/55"
              }`}
            >
              description
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className={`transition ${
                activeTab === "reviews" ? "font-semibold text-black" : "text-black/55"
              }`}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>
          {activeTab === "description" ? (
            <>
              <h3 className="text-2xl font-semibold">{product.subtitle}</h3>
              <p className="mt-4 leading-7 text-black/70">{product.longDescription}</p>
            </>
          ) : (
            <div className="space-y-4">
              <div className="border border-black/10 bg-white p-4">
                <div className="flex items-center gap-2">
                  <StarRating count={product.rating} size={12} />
                  <span className="text-sm font-semibold">Verified buyer</span>
                </div>
                <p className="mt-2 text-sm text-black/70">
                  Excellent product quality and fast delivery. Highly recommended for daily use.
                </p>
              </div>
            </div>
          )}
        </section>

        <section className="py-16">
          <h2 className="mb-6 text-3xl font-semibold uppercase">RELATED PRODUCTS</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {related.length > 0 ? (
              related.map((item) => <ProductCard key={item.id} product={item} />)
            ) : (
              <p className="text-sm text-black/60">No related products in this category.</p>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
}
