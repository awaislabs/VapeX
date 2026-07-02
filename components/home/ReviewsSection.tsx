import { Container } from "@/components/common/Container";
import { images } from "@/lib/images";
import { ReviewsCarousel } from "./ReviewsCarousel";
import type { Review } from "./ReviewCard";

const reviews: Review[] = [
  {
    id: 1,
    name: "Tina Wilkinson",
    role: "Rorem ipsum dol",
    avatar: images.avatars.a1,
    text: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora nostra."
  },
  {
    id: 2,
    name: "Tina Wilkinson",
    role: "Rorem ipsum dol",
    avatar: images.avatars.a2,
    text: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora nostra."
  },
  {
    id: 3,
    name: "Tina Wilkinson",
    role: "Rorem ipsum dol",
    avatar: images.avatars.a3,
    text: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora nostra."
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    role: "Verified buyer",
    avatar: images.avatars.a2,
    text: "Amazing quality and fast delivery. The flavors are rich and the device feels premium. I have already recommended VapeX to all my friends who vape."
  },
  {
    id: 5,
    name: "James Carter",
    role: "Loyal customer",
    avatar: images.avatars.a3,
    text: "Best online vape store I have used. Great prices, authentic products, and customer support actually replies. Will definitely order again soon."
  },
  {
    id: 6,
    name: "Emily Brooks",
    role: "Happy shopper",
    avatar: images.avatars.a1,
    text: "The starter kit bundle was perfect for me as a beginner. Everything arrived well packed and the checkout process was smooth and simple."
  },
  {
    id: 7,
    name: "Daniel Reed",
    role: "Regular customer",
    avatar: images.avatars.a3,
    text: "Love the product range and the purple branding looks great. Shipping was quick and everything was sealed and authentic on arrival."
  },
  {
    id: 8,
    name: "Olivia Grant",
    role: "First-time buyer",
    avatar: images.avatars.a1,
    text: "Easy website, clear prices, and helpful descriptions. I found exactly what I needed and the checkout only took a couple of minutes."
  },
  {
    id: 9,
    name: "Marcus Lane",
    role: "Vape enthusiast",
    avatar: images.avatars.a2,
    text: "Top-tier hardware and accessories. The tanks and mods section has great options and the sale prices are genuinely good value."
  }
];

export function ReviewsSection() {
  return (
    <section className="bg-surface-light py-16 md:py-20">
      <Container>
        <h2 className="text-center text-section font-bold uppercase text-black">
          Reviews From Customers
        </h2>
        <div className="mt-12">
          <ReviewsCarousel reviews={reviews} />
        </div>
      </Container>
    </section>
  );
}
