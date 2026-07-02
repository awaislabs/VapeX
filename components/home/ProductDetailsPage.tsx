import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/common/ProductCard";
import { products } from "@/lib/site-data";

export function ProductDetailsPage() {
  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">PRODUCT DETAILS</h1>
        </Container>
      </section>
      <Container>
      <section className="grid gap-10 py-12 lg:grid-cols-2">
        <div className="aspect-square border border-black/10 bg-white" />
        <div>
          <p className="text-xs text-black/60">The Finger of God Vapes</p>
          <h2 className="mt-2 text-4xl font-semibold">Magical Psychedelic Vape</h2>
          <p className="mt-2 text-4xl text-brand">$79.90 - $90.90</p>
          <p className="mt-4 text-black/65">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <input defaultValue={1} className="h-9 w-20 border border-black/10 bg-white px-4" />
            <button className="bg-brand px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
              ADD TO CART
            </button>
          </div>
        </div>
      </section>
      <section className="mt-4 border-t border-black/10 bg-transparent p-2">
        <div className="mb-6 flex gap-6 pb-4 text-sm">
          <p>discription</p>
          <p className="text-black/55">Reviews (25)</p>
        </div>
        <h3 className="text-2xl font-semibold">Magical Psychedelic Vape</h3>
        <p className="mt-4 leading-7 text-black/70">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
          interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </p>
      </section>
      <section className="py-16">
        <h2 className="mb-6 text-3xl font-semibold uppercase">RELATED PRODUCTS</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Container>
    </div>
  );
}
