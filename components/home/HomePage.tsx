import { CategoryGrid } from "./CategoryGrid";
import { CtaSection } from "./CtaSection";
import { FlavorBanner } from "./FlavorBanner";
import { HeroSection } from "./HeroSection";
import { ProductsSection } from "./ProductsSection";
import { ReviewsSection } from "./ReviewsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <ProductsSection />
      <CtaSection />
      <ReviewsSection />
      <FlavorBanner />
    </>
  );
}
