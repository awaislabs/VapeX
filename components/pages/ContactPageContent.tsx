"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "./PageHero";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Lorem ipsum dolor sit amet,", "consectetur 123 Newyork"]
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@realrealityone.com"],
    href: "mailto:info@realrealityone.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+94 5678 8997"],
    href: "tel:+9456788997"
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 4:00 PM"]
  }
];

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        title="Contact"
        subtitle="Have a question about an order, product, or partnership? We would love to hear from you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map(({ icon: Icon, title, lines, href }) => (
              <article
                key={title}
                className="border border-black/10 bg-surface-light p-6 transition hover:border-brand/30 hover:shadow-card"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center bg-brand text-white">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-[14px] font-bold uppercase tracking-[0.08em] text-black">
                  {title}
                </h3>
                <div className="mt-3 space-y-1 text-[13px] leading-6 text-black/65">
                  {lines.map((line) =>
                    href ? (
                      <a key={line} href={href} className="block transition hover:text-brand">
                        {line}
                      </a>
                    ) : (
                      <p key={line}>{line}</p>
                    )
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-light py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Send a Message
              </p>
              <h2 className="mt-3 text-[1.75rem] font-bold uppercase leading-tight text-black">
                Let&apos;s talk
              </h2>
              <p className="mt-4 text-[13px] leading-7 text-black/65">
                Reach out for product questions, order support, or partnership inquiries. We
                typically respond within one business day.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 border-l-4 border-brand bg-white p-4">
                  <p className="text-[13px] leading-6 text-black/70">
                    <span className="font-semibold text-black">Quick tip:</span> Include your order
                    number if you need help with a recent purchase — it helps us assist you faster.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="inline-flex text-[11px] font-bold uppercase tracking-[0.18em] text-brand transition hover:underline"
                >
                  Browse all products →
                </Link>
              </div>
            </div>

            <div className="border border-black/10 bg-white p-8 shadow-card">
              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Send size={28} />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-black">Message Sent!</h3>
                  <p className="mt-3 max-w-sm text-[13px] leading-6 text-black/65">
                    Thank you for reaching out. Our team will get back to you within one business
                    day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-brand transition hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/55">
                      Name *
                    </label>
                    <input
                      required
                      placeholder="Your full name"
                      className="h-12 w-full border border-black/12 bg-white px-4 text-sm outline-none transition focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/55">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@email.com"
                      className="h-12 w-full border border-black/12 bg-white px-4 text-sm outline-none transition focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/55">
                      Phone
                    </label>
                    <input
                      placeholder="+1 234 567 8900"
                      className="h-12 w-full border border-black/12 bg-white px-4 text-sm outline-none transition focus:border-brand"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/55">
                      Subject
                    </label>
                    <input
                      placeholder="How can we help?"
                      className="h-12 w-full border border-black/12 bg-white px-4 text-sm outline-none transition focus:border-brand"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/55">
                      Message *
                    </label>
                    <textarea
                      required
                      placeholder="Write your message here..."
                      rows={5}
                      className="w-full border border-black/12 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-brand px-8 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-brand-hover md:col-span-2 md:w-fit"
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
