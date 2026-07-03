import { ContentPage } from "@/components/common/ContentPage";

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms & Services"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Services" }]}
    >
      <p>
        By using the VapeX website and placing orders, you agree to these terms of service. Products
        are intended for adult customers only and must be used in accordance with local regulations.
      </p>
      <p className="mt-4">
        All prices are listed in USD unless otherwise stated. Orders are subject to availability and
        confirmation. Returns are accepted on unopened items within 14 days of delivery, subject to
        our return policy.
      </p>
    </ContentPage>
  );
}
