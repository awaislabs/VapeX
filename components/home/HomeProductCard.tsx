import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/site";
import { StarRating } from "./StarRating";

type HomeProductCardProps = {
  product: Product;
};

export function HomeProductCard({ product }: HomeProductCardProps) {
  return (
    <article className="group flex h-full flex-col border border-[#E5E5E5] bg-white transition duration-300 group-hover/products:brightness-[0.92] hover:!brightness-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div className="relative h-[240px] w-full shrink-0 bg-white md:h-[260px]">
        <Image
          src={product.image}
          alt={product.subtitle}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain object-center p-5"
        />
      </div>

      <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-4 text-center">
        <p className="w-full text-[10px] font-medium uppercase tracking-[0.12em] text-brand">
          {product.title}
        </p>
        <h3 className="mt-2 w-full min-h-[44px] text-[15px] font-bold leading-5 text-black">
          {product.subtitle}
        </h3>
        <div className="mt-2 flex w-full justify-center">
          <StarRating size={13} />
        </div>
        <div className="mt-2 flex w-full items-center justify-center gap-2 text-[14px]">
          <span className="text-black/45 line-through">{product.oldPrice}</span>
          <span className="font-bold text-black">{product.price}</span>
        </div>
        <Link
          href={`/product/${product.id}`}
          className="mt-auto flex w-full items-center justify-center bg-brand px-4 py-3 text-center text-[10px] font-bold uppercase leading-none tracking-[0.14em] text-white transition hover:bg-brand-hover"
        >
          SHOP NOW
        </Link>
      </div>
    </article>
  );
}
