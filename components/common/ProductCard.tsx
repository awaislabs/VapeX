import { Product } from "@/types/site";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group border border-black/10 bg-white p-3">
      <div className="relative mb-3 aspect-square overflow-hidden bg-gradient-to-b from-brand-light to-brand">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-contain p-3 transition duration-300 group-hover:scale-105"
        />
      </div>
      <p className="text-[9px] text-black/70">{product.title}</p>
      <h3 className="mb-2 mt-1 text-[17px] leading-6 text-black">{product.subtitle}</h3>
      <div className="flex items-center gap-2 text-[12px]">
        <span className="text-black/55 line-through">{product.oldPrice}</span>
        <span className="font-semibold text-black">{product.price}</span>
      </div>
      <button className="mt-3 bg-brand px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-brand-hover">
        sHOP NOW
      </button>
    </article>
  );
}
