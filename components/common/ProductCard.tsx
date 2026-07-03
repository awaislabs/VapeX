"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/site";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-context";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(product.id);
  const isEliquid = product.category === "E-Liquids";

  return (
    <article className="group relative border border-black/10 bg-white p-3 transition hover:shadow-card">
      <button
        type="button"
        onClick={() => toggleWishlist(product.id)}
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className={`absolute right-5 top-5 z-10 rounded-full border border-black/10 bg-white p-1.5 transition ${
          wishlisted ? "text-brand" : "text-black/40 hover:text-brand"
        }`}
      >
        <Heart size={14} fill={wishlisted ? "currentColor" : "none"} />
      </button>

      <Link href={`/product/${product.slug}`} className="block">
        <div
          className={`relative mb-3 aspect-square overflow-hidden ${
            isEliquid ? "bg-[#f5f5f5]" : "bg-gradient-to-b from-brand-light to-brand"
          }`}
        >
          <Image
            src={product.image}
            alt={product.subtitle}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className={`transition duration-300 group-hover:scale-105 ${
              isEliquid ? "object-cover object-center" : "object-contain p-3"
            }`}
          />
        </div>
        <p className="text-[9px] text-black/70">{product.title}</p>
        <h3 className="mb-2 mt-1 text-[17px] leading-6 text-black">{product.subtitle}</h3>
        <div className="flex items-center gap-2 text-[12px]">
          {product.oldPrice ? (
            <span className="text-black/55 line-through">{formatPrice(product.oldPrice)}</span>
          ) : null}
          <span className="font-semibold text-black">{formatPrice(product.price)}</span>
        </div>
      </Link>

      <Link
        href={`/product/${product.slug}`}
        className="mt-3 inline-flex bg-brand px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-brand-hover"
      >
        SHOP NOW
      </Link>
    </article>
  );
}
