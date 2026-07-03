import { ContentPage } from "@/components/common/ContentPage";

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
    >
      <p>
        This privacy policy explains how VapeX collects, uses, and protects your personal
        information when you browse our store, create an account, or place an order.
      </p>
      <p className="mt-4">
        We collect information you provide at checkout such as name, email, shipping address, and
        payment details. We use this data solely to process orders, provide support, and improve our
        services. We do not sell your personal information to third parties.
      </p>
    </ContentPage>
  );
}
