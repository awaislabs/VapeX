"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Container } from "./Container";
import { navItems } from "@/lib/site-data";
import { useCart } from "@/lib/cart-context";

export function Header() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="z-30 border-b border-black/10 bg-white">
      <Container>
        <div className="flex h-[74px] items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold uppercase tracking-[0.12em]">
            LOGO
          </Link>
          <nav className="hidden items-center gap-10 text-[11px] tracking-[0.08em] text-black/80 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="uppercase transition hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="hidden px-2 py-2 text-[11px] tracking-[0.05em] text-black/80 transition hover:text-brand sm:inline-flex"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="hidden bg-brand px-6 py-2 text-[11px] tracking-[0.05em] text-white transition hover:bg-brand-hover sm:inline-flex"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="relative rounded-full border border-black/10 bg-white p-2 text-black/70 transition hover:border-brand hover:text-brand"
              aria-label="Open cart"
            >
              <ShoppingBag size={13} />
              {itemCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[9px] font-semibold text-white">
                  {itemCount}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="rounded border border-black/10 p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
        {mobileOpen ? (
          <nav className="border-t border-black/10 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.08em]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-1 transition hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="py-1 transition hover:text-brand"
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-fit bg-brand px-6 py-2 text-[11px] text-white"
              >
                Contact
              </Link>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
