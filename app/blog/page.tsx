import { Suspense } from "react";
import { BlogPage } from "@/components/home/BlogPage";

export default function BlogRoute() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-black/60">Loading blog...</div>}>
      <BlogPage />
    </Suspense>
  );
}
