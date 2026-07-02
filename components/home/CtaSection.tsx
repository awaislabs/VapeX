import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const CTA_WIDTH = 1024;
const CTA_HEIGHT = 404;

export function CtaSection() {
  return (
    <section className="relative w-full text-white">
      <Image
        src={images.cta}
        alt=""
        width={CTA_WIDTH}
        height={CTA_HEIGHT}
        sizes="100vw"
        className="block h-auto w-full"
        aria-hidden
      />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-[640px] text-center">
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
    </section>
  );
}
