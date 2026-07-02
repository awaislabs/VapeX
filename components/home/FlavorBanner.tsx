import Link from "next/link";
import { Container } from "@/components/common/Container";
import { images } from "@/lib/images";

export function FlavorBanner() {
  return (
    <section className="bg-white">
      <Container>
        <div className="relative w-full">
          <img
            src={images.flavor}
            alt=""
            decoding="async"
            className="block h-auto w-full"
            aria-hidden
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
            <div className="pointer-events-auto text-center">
              <h2 className="text-[1.35rem] font-bold uppercase tracking-[0.06em] text-white md:text-[1.75rem]">
                FIND YOUR E-LIQUID FLAVOUR
              </h2>
              <Link
                href="/products"
                className="mt-5 inline-flex min-h-[38px] items-center justify-center bg-white px-7 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand transition hover:bg-white/90"
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
