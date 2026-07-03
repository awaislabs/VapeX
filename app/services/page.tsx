import { ContentPage } from "@/components/common/ContentPage";

export default function ServicesPage() {
  return (
    <ContentPage
      title="Services"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
    >
      <p>
        We offer curated product selection, fast shipping, secure checkout, and dedicated customer
        support for all vape hardware, coils, pods, and e-liquid orders.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5">
        <li>Product consultation and setup guidance</li>
        <li>Order tracking and fulfillment updates</li>
        <li>Returns and warranty assistance</li>
        <li>Bulk and wholesale inquiries</li>
      </ul>
    </ContentPage>
  );
}
