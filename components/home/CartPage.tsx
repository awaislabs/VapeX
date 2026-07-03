"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/common/ProductCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { products } from "@/lib/site-data";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import { COUPON_CODE } from "@/lib/site-data";

export function CartPage() {
  const {
    items,
    isHydrated,
    subtotal,
    discount,
    shipping,
    vat,
    total,
    couponCode,
    couponApplied,
    updateQuantity,
    removeFromCart,
    applyCoupon,
    removeCoupon
  } = useCart();
  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");

  const handleApplyCoupon = () => {
    const success = applyCoupon(couponInput);
    if (success) {
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code");
    }
  };

  if (!isHydrated) {
    return (
      <div>
        <section className="page-band py-10">
          <Container>
            <h1 className="text-center text-5xl font-semibold uppercase">CART</h1>
          </Container>
        </section>
        <Container>
          <div className="py-20 text-center text-black/60">Loading cart...</div>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">CART</h1>
        </Container>
      </section>
      <Container>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
        <section className="py-10">
          <div className="mb-4 flex flex-wrap gap-8 text-sm uppercase text-black/70">
            <p className="font-semibold text-black">Shopping cart</p>
            <Link href="/checkout" className="transition hover:text-brand">
              Checkout details
            </Link>
            <p>Order complete</p>
          </div>
          <p className="mb-6 border-b-2 border-brand pb-2 text-sm text-black/60">
            {subtotal >= 100
              ? "Your order qualifies for free shipping"
              : "Add more items to qualify for free shipping ($100+)"}
          </p>

          {items.length === 0 ? (
            <div className="border border-black/10 bg-white p-12 text-center">
              <p className="text-xl font-semibold">Your cart is empty</p>
              <p className="mt-2 text-sm text-black/60">
                Browse our products and add items to your cart.
              </p>
              <Link
                href="/products"
                className="mt-6 inline-flex bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-hover"
              >
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
              <div className="border border-black/10 bg-white p-6">
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 border-b border-black/10 pb-4 text-xs uppercase tracking-[0.2em] text-black/60">
                  <p>Product</p>
                  <p>Price</p>
                  <p>quantity</p>
                  <p>total</p>
                  <span className="sr-only">Remove</span>
                </div>
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.variantId ?? "default"}`}
                    className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-4 border-b border-black/10 py-5 text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-16 w-16 shrink-0 border border-black/10 bg-white">
                        <Image
                          src={item.image}
                          alt={item.subtitle}
                          fill
                          sizes="64px"
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/product/${item.slug}`}
                          className="font-medium uppercase transition hover:text-brand"
                        >
                          {item.subtitle}
                        </Link>
                        {item.variantLabel ? (
                          <p className="text-xs text-black/55">{item.variantLabel}</p>
                        ) : null}
                      </div>
                    </div>
                    <p>{formatPrice(item.price)}</p>
                    <div className="flex items-center border border-black/10">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1, item.variantId)
                        }
                        className="px-2 py-1 hover:text-brand"
                      >
                        −
                      </button>
                      <span className="min-w-[2rem] text-center">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1, item.variantId)
                        }
                        className="px-2 py-1 hover:text-brand"
                      >
                        +
                      </button>
                    </div>
                    <p>{formatPrice(item.price * item.quantity)}</p>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.productId, item.variantId)}
                      className="text-xs uppercase tracking-[0.1em] text-black/50 transition hover:text-brand"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <Link
                  href="/products"
                  className="mt-6 inline-flex bg-brand px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-brand-hover"
                >
                  ← continue shopping
                </Link>
              </div>

              <aside className="h-fit border border-black/10 bg-[#ececec] p-6">
                <h3 className="mb-6 text-2xl font-semibold">Order summary</h3>
                <div className="mb-4 space-y-2">
                  <div className="flex gap-2">
                    <input
                      value={couponInput}
                      onChange={(event) => setCouponInput(event.target.value)}
                      placeholder={`Coupon code (${COUPON_CODE})`}
                      className="h-10 flex-1 border border-black/10 bg-white px-3 text-sm outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="bg-brand px-4 text-xs font-semibold uppercase text-white transition hover:bg-brand-hover"
                    >
                      Apply
                    </button>
                  </div>
                  {couponError ? (
                    <p className="text-xs text-red-600">{couponError}</p>
                  ) : couponApplied ? (
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-xs text-brand underline"
                    >
                      Remove coupon ({couponCode})
                    </button>
                  ) : null}
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  {discount > 0 ? (
                    <div className="flex justify-between text-brand">
                      <span>Discount:</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  ) : null}
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VAT:</span>
                    <span>{formatPrice(vat)}</span>
                  </div>
                  <div className="flex justify-between pt-2 font-semibold">
                    <span>tOTAL</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="mt-6 flex w-full items-center justify-center bg-brand py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-hover"
                >
                  CHECK OUT
                </Link>
              </aside>
            </div>
          )}
        </section>

        <section className="pb-16">
          <h2 className="mb-6 text-3xl font-semibold uppercase">Frequently Bought</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
