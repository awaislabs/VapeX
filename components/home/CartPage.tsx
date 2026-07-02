import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/common/ProductCard";
import { products } from "@/lib/site-data";

export function CartPage() {
  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">CART</h1>
        </Container>
      </section>
      <Container>
      <section className="py-10">
        <div className="mb-4 flex gap-8 text-sm uppercase text-black/70">
          <p className="font-semibold text-black">Shopping cart</p>
          <p>Checkout details</p>
          <p>Order complete</p>
        </div>
        <p className="mb-6 border-b-2 border-brand pb-2 text-sm text-black/60">Your order qualifies for free shipping</p>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="border border-black/10 bg-white p-6">
          <div className="grid grid-cols-4 gap-4 border-b border-black/10 pb-4 text-xs uppercase tracking-[0.2em] text-black/60">
            <p>Product</p>
            <p>Price</p>
            <p>quantity</p>
            <p>total</p>
          </div>
          {[1, 2].map((row) => (
            <div key={row} className="grid grid-cols-4 gap-4 border-b border-black/10 py-5 text-sm">
              <p>MAGICAL PSYCHEDELIC VAPE 30w kit aliquet odio mattis</p>
              <p>$79.90</p>
              <p>1</p>
              <p>$79.90</p>
            </div>
          ))}
          <button className="mt-6 bg-brand px-5 py-2 text-xs uppercase tracking-[0.2em] text-white">
            ← continue shopping
          </button>
        </div>
        <aside className="border border-black/10 bg-[#ececec] p-6">
          <h3 className="mb-6 text-2xl font-semibold">Order summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span>Subtotal:</span><span>$79.90</span></div>
            <div className="flex justify-between"><span>Shipping:</span><span>nOT YET CALCULATED</span></div>
            <div className="flex justify-between"><span>VAT:</span><span>$10.90</span></div>
            <div className="flex justify-between pt-2 font-semibold"><span>tOTAL</span><span>$90.60</span></div>
          </div>
          <button className="mt-6 w-full bg-brand py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            CHECK OUT
          </button>
        </aside>
        </div>
      </section>
      <section className="pb-16">
        <h2 className="mb-6 text-3xl font-semibold uppercase">Frequently Bought</h2>
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
