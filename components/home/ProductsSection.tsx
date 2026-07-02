import { Container } from "@/components/common/Container";
import { products } from "@/lib/site-data";
import { HomeProductCard } from "./HomeProductCard";

export function ProductsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[2rem] font-bold uppercase tracking-[0.02em] text-black md:text-[2.25rem]">
            OUR PRODUCTS
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[13px] leading-6 text-black/55">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          </p>
        </div>

        <div className="group/products mt-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <HomeProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
