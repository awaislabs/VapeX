import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
};

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="page-band relative overflow-hidden py-14 md:py-16">
      <div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-brand/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-white/5 blur-2xl"
        aria-hidden
      />
      <Container className="relative z-10">
        <Breadcrumbs items={breadcrumbs} variant="light" />
        <div className="mx-auto max-w-[720px] pt-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A8F0]">
            VapeX
          </p>
          <h1 className="mt-3 text-[2rem] font-bold uppercase leading-tight tracking-[0.03em] text-white md:text-[2.75rem]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-[560px] text-[13px] leading-6 text-white/70">
              {subtitle}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
