import { ContentPage } from "@/components/common/ContentPage";

export default function AboutPage() {
  return (
    <ContentPage
      title="About Us"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    >
      <p>
        VapeX is a premium vape hardware and e-liquid retailer built around quality products,
        transparent pricing, and a smooth shopping experience from browse to checkout.
      </p>
      <p className="mt-4">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </p>
    </ContentPage>
  );
}
