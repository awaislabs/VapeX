"use client";

import { FormEvent, useState } from "react";
import { ContentPage } from "@/components/common/ContentPage";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <ContentPage
      title="Contact"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <p>
        Reach out for product questions, order support, or partnership inquiries. We typically
        respond within one business day.
      </p>
      <div className="mt-6 space-y-2 text-sm">
        <p>Lorem ipsum dolor sit amet, consectetur 123 Newyork</p>
        <p>
          <a href="mailto:info@realrealityone.com" className="text-brand hover:underline">
            info@realrealityone.com
          </a>
        </p>
        <p>
          <a href="tel:+9456788997" className="text-brand hover:underline">
            +94 5678 8997
          </a>
        </p>
      </div>
      {submitted ? (
        <p className="mt-8 font-semibold text-brand">
          Thank you! Your message has been sent successfully.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            required
            placeholder="Name*"
            className="h-12 border border-black/12 bg-white px-4 text-sm outline-none focus:border-brand"
          />
          <input
            required
            type="email"
            placeholder="Email*"
            className="h-12 border border-black/12 bg-white px-4 text-sm outline-none focus:border-brand"
          />
          <input
            placeholder="Subject"
            className="h-12 border border-black/12 bg-white px-4 text-sm outline-none focus:border-brand md:col-span-2"
          />
          <textarea
            required
            placeholder="Message*"
            rows={5}
            className="border border-black/12 bg-white px-4 py-3 text-sm outline-none focus:border-brand md:col-span-2"
          />
          <button
            type="submit"
            className="bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-hover md:col-span-2 md:w-fit"
          >
            Send message
          </button>
        </form>
      )}
    </ContentPage>
  );
}
