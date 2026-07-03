import { Suspense } from "react";
import { ShopPage } from "@/components/home/ShopPage";

export default function ProductsPageRoute() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-black/60">Loading products...</div>}>
      <ShopPage />
    </Suspense>
  );
}
