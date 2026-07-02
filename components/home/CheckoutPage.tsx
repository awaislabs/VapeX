import { Container } from "@/components/common/Container";

export function CheckoutPage() {
  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">Checkout</h1>
        </Container>
      </section>
      <Container>
      <section className="grid gap-8 py-10 pb-8 lg:grid-cols-[1fr_380px]">
        <div className="p-0">
          <h2 className="mb-6 text-xl font-semibold uppercase">billing details</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "First Name*",
              "Last Name*",
              "Company Name (optional)",
              "Country/region*",
              "Street Address*",
              "Town / City*",
              "State / Country*",
              "Postcode /ZIP*",
              "Phone*",
              "Date of Birth*",
              "Email address"
            ].map((field) => (
              <input
                key={field}
                placeholder={field}
                className="h-12 border border-black/12 bg-white px-4 text-sm"
              />
            ))}
          </div>
        </div>
        <aside className="border border-black/10 bg-[#ececec] p-6">
          <h2 className="text-xl font-semibold uppercase">Your order</h2>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between"><span>MAGICAL PSYCHEDELIC VAPE</span><span>$79.90</span></div>
            <div className="flex justify-between font-semibold"><span>TOTAL</span><span>$79.90</span></div>
          </div>
          <div className="mt-6 border border-black/10 bg-white p-4 text-sm text-black/70">
            <p className="mb-2 font-semibold text-black">CARD PAYMENT</p>
            <p>Cards accepted: Visa, Mastercard, Maestro, Amex and more.</p>
          </div>
          <button className="mt-6 w-full bg-brand py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Place order
          </button>
        </aside>
      </section>
    </Container>
    </div>
  );
}
