import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export function FlavorBanner() {
  return (
    <section className="relative overflow-hidden bg-brand py-8 md:py-10">
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[140px] md:w-[220px]">
        <Image
          src={images.flavor.left}
          alt=""
          fill
          className="object-cover object-left opacity-90"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand/80" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[140px] md:w-[220px]">
        <Image
          src={images.flavor.right}
          alt=""
          fill
          className="object-cover object-right opacity-90"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1240px] px-4 text-center md:px-6">
        <h2 className="text-[1.35rem] font-bold uppercase tracking-[0.06em] text-white md:text-[1.75rem]">
          FIND YOUR E-LIQUID FLAVOUR
        </h2>
        <Link
          href="/products"
          className="mt-5 inline-flex min-h-[38px] items-center bg-white px-7 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand transition hover:bg-white/90"
        >
          sHOP NOW
        </Link>
      </div>
    </section>
  );
}
