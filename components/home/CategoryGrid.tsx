import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { images } from "@/lib/images";

const categories = [
  {
    label: "starter kit bundle",
    image: images.categories.starter,
    span: "md:col-span-2",
    height: "h-[260px] md:h-[340px]",
    href: "/products?category=starter%20kits"
  },
  {
    label: "VAPE & MODS",
    image: images.categories.vapeMods,
    span: "md:col-span-1",
    height: "h-[260px] md:h-[340px]",
    href: "/products?category=premium%20mods"
  },
  {
    label: "TANKS & RDA",
    image: images.categories.tanks,
    span: "md:col-span-1",
    height: "h-[220px] md:h-[280px]",
    href: "/products?category=Tanks%20%26%20rdas"
  },
  {
    label: "e- lIQUIDS",
    image: images.categories.eliquids,
    span: "md:col-span-1",
    height: "h-[220px] md:h-[280px]",
    href: "/products?category=E-Liquids"
  },
  {
    label: "accessories",
    image: images.categories.accessories,
    span: "md:col-span-1",
    height: "h-[220px] md:h-[280px]",
    href: "/products?category=Accessories"
  }
] as const;

function CategoryTile({
  label,
  image,
  href,
  className
}: {
  label: string;
  image: string;
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`group relative block overflow-hidden ${className ?? ""}`}>
      <Image
        src={image}
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50 transition duration-300 group-hover:bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <h2 className="text-[14px] font-bold uppercase tracking-[0.12em] text-white md:text-[16px]">
          {label}
        </h2>
      </div>
    </Link>
  );
}

export function CategoryGrid() {
  return (
    <section className="mt-8 bg-white md:mt-10">
      <Container className="px-4 md:px-6">
        <div className="group/grid grid grid-cols-1 gap-[10px] md:grid-cols-3">
          {categories.map((category) => (
            <CategoryTile
              key={category.label}
              label={category.label}
              image={category.image}
              href={category.href}
              className={`transition duration-300 group-hover/grid:brightness-[0.85] hover:!brightness-110 hover:z-10 ${category.span} ${category.height}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
