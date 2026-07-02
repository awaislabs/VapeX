import Link from "next/link";
import { Container } from "@/components/common/Container";
import { images } from "@/lib/images";

export function CtaSection() {
  return (
    <section className="bg-white">
      <Container>
        <div className="relative w-full">
          <img
            src={images.cta}
            alt=""
            decoding="async"
            fetchPriority="high"
            className="block h-auto w-full"
            aria-hidden
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
            <div className="pointer-events-auto max-w-[640px] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A8F0]">
                Get Started
              </p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white md:text-[2.25rem]">
                Are you ready to vape with us?
              </h2>
              <p className="mx-auto mt-4 max-w-[520px] text-[13px] leading-6 text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <Link
                href="/products"
                className="mt-7 inline-flex min-h-[42px] items-center justify-center bg-brand px-8 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-brand-hover"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
