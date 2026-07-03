import Link from "next/link";
import {
  Headphones,
  Package,
  RefreshCw,
  ShoppingBag,
  Truck,
  Wrench
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "./PageHero";

const services = [
  {
    icon: ShoppingBag,
    title: "Curated Selection",
    text: "Hand-picked hardware, coils, pods, and e-liquids from the brands vapers trust most."
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    text: "Orders processed quickly with free shipping on purchases over $100."
  },
  {
    icon: Headphones,
    title: "Expert Support",
    text: "Product consultation and setup guidance from our knowledgeable team."
  },
  {
    icon: Package,
    title: "Order Tracking",
    text: "Real-time fulfillment updates so you always know where your order stands."
  },
  {
    icon: RefreshCw,
    title: "Returns & Warranty",
    text: "Hassle-free returns on unopened items and warranty assistance when you need it."
  },
  {
    icon: Wrench,
    title: "Bulk & Wholesale",
    text: "Special pricing and dedicated support for bulk and wholesale inquiries."
  }
];

const steps = [
  { step: "01", title: "Browse", text: "Explore our full catalog with filters for category, brand, and price." },
  { step: "02", title: "Order", text: "Add to cart, apply coupons, and checkout securely in minutes." },
  { step: "03", title: "Receive", text: "Fast delivery with tracking updates straight to your inbox." },
  { step: "04", title: "Enjoy", text: "Premium products backed by our customer-first support team." }
];

export function ServicesPageContent() {
  return (
    <div>
      <PageHero
        title="Services"
        subtitle="Everything you need for a seamless vape shopping experience — from expert advice to fast delivery and after-sales support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              What We Offer
            </p>
            <h2 className="mt-3 text-section font-bold uppercase text-black">Our Services</h2>
            <p className="mt-4 text-[13px] leading-6 text-black/60">
              We go beyond selling products — we provide a complete experience tailored to every
              vaper, from beginners to enthusiasts.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group relative overflow-hidden border border-black/10 bg-white p-7 transition duration-300 hover:border-brand hover:shadow-card"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand/5 transition group-hover:bg-brand/10" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center bg-gradient-to-br from-brand to-brand-light text-white">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[16px] font-bold uppercase tracking-[0.06em] text-black">
                    {title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-black/60">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-light py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              How It Works
            </p>
            <h2 className="mt-3 text-section font-bold uppercase text-black">Simple Process</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ step, title, text }) => (
              <div
                key={step}
                className="border border-black/10 bg-white p-6 text-center transition hover:border-brand/40"
              >
                <span className="text-[2.5rem] font-bold leading-none text-brand/20">{step}</span>
                <h3 className="mt-2 text-[15px] font-bold uppercase tracking-[0.06em] text-black">
                  {title}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-black/60">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-band py-14">
        <Container>
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-xl">
              <h2 className="text-[1.5rem] font-bold uppercase leading-tight text-white md:text-[1.75rem]">
                Need help choosing the right product?
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-white/70">
                Our team is ready to assist with recommendations, setup tips, and order support.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand transition hover:bg-white/90"
            >
              Get In Touch
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
