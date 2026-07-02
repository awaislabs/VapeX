import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/common/ProductCard";
import { products } from "@/lib/site-data";

export function ShopPage() {
  return (
    <div>
      <section className="page-band py-12">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">ALL PRODUCTS</h1>
        </Container>
      </section>
      <Container>
      <section className="grid gap-10 py-12 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-8 border border-black/10 bg-[#ececec] p-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-black">Price</h3>
            <p className="text-sm text-black/60">Price: Rs. $100 - $500</p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-black">Filter by status</h3>
            <div className="space-y-2 text-sm text-black/60">
              <p>On sale</p>
              <p>On stock</p>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-black">Categories</h3>
            <div className="space-y-2 text-sm text-black/60">
              {[
                "Accessories",
                "Batteries",
                "Charger",
                "Coil / cartrigdes",
                "Cotton",
                "Pods",
                "New arrivals",
                "E-Liquids",
                "starter kits",
                "Tanks & rdas",
                "premium mods",
                "vapes",
                "Flavours"
              ].map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </aside>
        <div>
          <div className="mb-8 flex items-center justify-between text-sm text-black/60">
            <p>Filters -</p>
            <p>Sorted by lastest</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 9 }).map((_, idx) => (
              <ProductCard key={idx} product={products[idx % products.length]} />
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className="h-8 w-8 border border-black/20 text-xs hover:border-brand"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </Container>
    </div>
  );
}
