import Link from "next/link";
import { Award, Shield, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ProductImageFrame } from "@/components/common/ProductImageFrame";
import { PageHero } from "./PageHero";
import { getProductBySlug } from "@/lib/products";

const values = [
  {
    icon: Shield,
    title: "Quality First",
    text: "Every product is sourced from trusted brands and verified for authenticity before it reaches you."
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    text: "From browsing to checkout, we deliver a smooth, modern shopping journey built around you."
  },
  {
    icon: Users,
    title: "Customer Focused",
    text: "Our team is here to help with product advice, order support, and everything in between."
  },
  {
    icon: Award,
    title: "Trusted Since Day One",
    text: "Thousands of happy customers rely on VapeX for hardware, e-liquids, and accessories."
  }
];

const stats = [
  { value: "12K+", label: "Happy Customers" },
  { value: "500+", label: "Products" },
  { value: "50+", label: "Brands" },
  { value: "24/7", label: "Support" }
];

export function AboutPageContent() {
  const featuredProduct = getProductBySlug("silver-pod-mod-kit");

  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="We are passionate about delivering premium vape products, exceptional service, and a shopping experience you can trust."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {featuredProduct ? (
              <div className="overflow-hidden border border-black/10">
                <ProductImageFrame
                  product={featuredProduct}
                  className="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : null}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Our Story
              </p>
              <h2 className="mt-3 text-[1.75rem] font-bold uppercase leading-tight text-black md:text-[2rem]">
                Elevating the vaping experience since 2020
              </h2>
              <p className="mt-5 text-[13px] leading-7 text-black/65">
                VapeX is a premium vape hardware and e-liquid retailer built around quality
                products, transparent pricing, and a smooth shopping experience from browse to
                checkout.
              </p>
              <p className="mt-4 text-[13px] leading-7 text-black/65">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <Link
                href="/products"
                className="mt-8 inline-flex bg-brand px-8 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-brand-hover"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-light py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              What We Stand For
            </p>
            <h2 className="mt-3 text-section font-bold uppercase text-black">Our Core Values</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group border border-black/10 bg-white p-6 transition duration-300 hover:border-brand/30 hover:shadow-card"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-black">
                  {title}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-black/60">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand py-14 text-white">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[2rem] font-bold leading-none md:text-[2.5rem]">{stat.value}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="text-section font-bold uppercase text-black">Ready to shop?</h2>
            <p className="mt-4 text-[13px] leading-6 text-black/60">
              Browse our full collection of mods, tanks, pods, e-liquids, and accessories.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="bg-brand px-8 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-brand-hover"
              >
                All Products
              </Link>
              <Link
                href="/contact"
                className="border border-brand px-8 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand transition hover:bg-brand hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
