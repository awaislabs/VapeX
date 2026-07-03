import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

type ContentPageProps = {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  children: ReactNode;
};

export function ContentPage({ title, breadcrumbs, children }: ContentPageProps) {
  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">{title}</h1>
        </Container>
      </section>
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <section className="max-w-3xl py-12 leading-7 text-black/75">{children}</section>
      </Container>
    </div>
  );
}

export function OrderConfirmationPage() {
  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">Order Complete</h1>
        </Container>
      </section>
      <Container>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Cart", href: "/cart" },
            { label: "Checkout", href: "/checkout" },
            { label: "Order Complete" }
          ]}
        />
        <section className="flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-black/50">Thank you</p>
          <h2 className="mt-4 text-4xl font-semibold text-brand">Your order is confirmed!</h2>
          <p className="mt-4 max-w-xl text-black/65">
            We have received your order and will send a confirmation email shortly. You can
            continue shopping or return to the homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-hover"
            >
              Continue shopping
            </Link>
            <Link
              href="/"
              className="border border-brand px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand transition hover:bg-brand hover:text-white"
            >
              Back to homepage
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
