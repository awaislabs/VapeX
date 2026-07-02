import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { images } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-right"
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <div className="flex min-h-[400px] items-center py-12 md:min-h-[500px] md:py-16">
          <div className="max-w-[500px]">
            <h1 className="text-[2.25rem] font-bold uppercase leading-[1.05] tracking-[0.03em] drop-shadow-md sm:text-[2.5rem] md:text-[3.25rem]">
              Elevate Your
              <br />
              Vaping Experience
            </h1>
            <p className="mt-5 max-w-[420px] text-[13px] leading-[1.75] text-[#A3A3A3] drop-shadow-sm">
              A mantra guiding your quest into psychedelic realms. Embrace tools that unlock inner
              voyages, expand consciousness, and foster exploration beyond the ordinary.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-10">
              <span className="text-[2rem] font-bold leading-none tracking-tight text-white drop-shadow-md">
                $79.00
              </span>
              <Link
                href="/products"
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-white underline underline-offset-[6px] transition hover:text-white/80"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
