import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Container } from "./Container";
import { navItems } from "@/lib/site-data";

export function Header() {
  return (
    <header className="z-30 border-b border-black/10 bg-white">
      <Container>
        <div className="flex h-[74px] items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold uppercase tracking-[0.12em]">
            LOGO
          </Link>
          <nav className="hidden items-center gap-10 text-[11px] tracking-[0.08em] text-black/80 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="uppercase transition hover:text-brand">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="px-2 py-2 text-[11px] tracking-[0.05em] text-black/80"
            >
              Shop Now
            </Link>
            <Link
              href="/cart"
              className="inline-flex bg-brand px-6 py-2 text-[11px] tracking-[0.05em] text-white"
            >
              Contact
            </Link>
            <button className="rounded-full border border-black/10 bg-white p-2 text-black/70" aria-label="Open cart">
              <ShoppingBag size={13} />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
