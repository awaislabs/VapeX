"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-context";

const fields = [
  { name: "firstName", placeholder: "First Name*", required: true },
  { name: "lastName", placeholder: "Last Name*", required: true },
  { name: "company", placeholder: "Company Name (optional)", required: false },
  { name: "country", placeholder: "Country/region*", required: true },
  { name: "address", placeholder: "Street Address*", required: true, fullWidth: true },
  { name: "city", placeholder: "Town / City*", required: true },
  { name: "state", placeholder: "State / Country*", required: true },
  { name: "postcode", placeholder: "Postcode /ZIP*", required: true },
  { name: "phone", placeholder: "Phone*", required: true },
  { name: "dob", placeholder: "Date of Birth*", required: true },
  { name: "email", placeholder: "Email address", required: true, type: "email" }
] as const;

export function CheckoutPage() {
  const router = useRouter();
  const { items, isHydrated, subtotal, discount, shipping, vat, total, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isHydrated && items.length === 0) {
      router.replace("/cart");
    }
  }, [isHydrated, items.length, router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    clearCart();
    router.push("/order-confirmation");
  };

  if (!isHydrated) {
    return (
      <div>
        <section className="page-band py-10">
          <Container>
            <h1 className="text-center text-5xl font-semibold uppercase">Checkout</h1>
          </Container>
        </section>
        <Container>
          <div className="py-20 text-center text-black/60">Loading checkout...</div>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">Checkout</h1>
        </Container>
      </section>
      <Container>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Cart", href: "/cart" },
            { label: "Checkout" }
          ]}
        />
        <form onSubmit={handleSubmit}>
          <section className="grid gap-8 py-10 pb-8 lg:grid-cols-[1fr_380px]">
            <div className="p-0">
              <h2 className="mb-6 text-xl font-semibold uppercase">billing details</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {fields.map((field) => (
                  <input
                    key={field.name}
                    name={field.name}
                    type={"type" in field ? field.type : "text"}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={`h-12 border border-black/12 bg-white px-4 text-sm outline-none focus:border-brand ${
                      "fullWidth" in field && field.fullWidth ? "md:col-span-2" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <aside className="h-fit border border-black/10 bg-[#ececec] p-6">
              <h2 className="text-xl font-semibold uppercase">Your order</h2>
              <div className="mt-6 space-y-3 text-sm">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.variantId ?? "default"}`}
                    className="flex justify-between gap-4"
                  >
                    <span>
                      {item.subtitle} × {item.quantity}
                    </span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="flex justify-between border-t border-black/10 pt-3">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 ? (
                  <div className="flex justify-between text-brand">
                    <span>Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                ) : null}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT</span>
                  <span>{formatPrice(vat)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>TOTAL</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <div className="mt-6 border border-black/10 bg-white p-4 text-sm text-black/70">
                <p className="mb-2 font-semibold text-black">CARD PAYMENT</p>
                <p>Cards accepted: Visa, Mastercard, Maestro, Amex and more.</p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || items.length === 0}
                className="mt-6 w-full bg-brand py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-hover disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Place order"}
              </button>
              <Link
                href="/cart"
                className="mt-3 block text-center text-xs uppercase tracking-[0.1em] text-black/60 transition hover:text-brand"
              >
                ← Back to cart
              </Link>
            </aside>
          </section>
        </form>
      </Container>
    </div>
  );
}
