import Link from "next/link";
import { Container } from "@/components/common/Container";

export function ErrorPage() {
  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">Error Page</h1>
        </Container>
      </section>
      <Container>
      <section className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-black/50">E R R O R P A G E</p>
        <h1 className="mt-4 text-8xl font-bold text-brand">404</h1>
        <h2 className="mt-2 text-4xl font-semibold">Oops page not found!</h2>
        <p className="mt-3 max-w-xl text-black/65">
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate interdum, ao mattis.
        </p>
        <Link
          href="/"
          className="mt-8 bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
        >
          back to homepage
        </Link>
      </section>
      </Container>
    </div>
  );
}
