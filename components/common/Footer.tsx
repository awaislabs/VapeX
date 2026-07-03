import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Container } from "./Container";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://youtube.com", label: "YouTube", icon: Youtube }
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "All Products", href: "/products" },
  { label: "Contact", href: "/contact" }
];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#6A0DAD] pt-16 text-white">
      <Container>
        <div className="grid gap-10 pb-12 md:grid-cols-4">
          <div>
            <p className="mb-4 text-xl font-semibold uppercase tracking-[0.22em]">LOGO HERE</p>
            <p className="max-w-[240px] text-sm leading-6 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Lorem ipsum dolor sit amet, consectetur 123 Newyork</li>
              <li>
                <a href="mailto:info@realrealityone.com" className="transition hover:text-white">
                  Realrealityone.com
                </a>
              </li>
              <li>
                <a href="tel:+9456788997" className="transition hover:text-white">
                  +94 5678 8997
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Social Media</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white hover:bg-white/10"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-5 text-sm">
          <p className="text-white/80">CopyRight©2025 Project</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/80 transition hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms" className="text-white/80 transition hover:text-white">
              Terms & Services
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
