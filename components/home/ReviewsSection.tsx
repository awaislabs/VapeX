import Image from "next/image";
import { Container } from "@/components/common/Container";
import { images } from "@/lib/images";
import { StarRating } from "./StarRating";

const reviews = [
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
  }
];

export function ReviewsSection() {
  return (
    <section className="bg-surface-light py-16 md:py-20">
      <Container>
        <h2 className="text-center text-section font-bold uppercase text-black">
          Reviews From Customers
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="relative flex min-h-[280px] flex-col bg-white p-7 shadow-review md:p-8"
            >
              <span className="text-[2.5rem] font-sans leading-none text-brand" aria-hidden>
                &ldquo;
              </span>
              <StarRating size={14} />
              <p className="mt-4 flex-1 text-[13px] leading-[1.75] text-black/65">{review.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#E8E8E8]">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">{review.name}</p>
                  <p className="text-xs text-black/50">{review.role}</p>
                </div>
              </div>
              <span
                className="pointer-events-none absolute bottom-4 right-6 text-[5rem] font-sans leading-none text-black/[0.04]"
                aria-hidden
              >
                &rdquo;
              </span>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={`h-2 w-2 rounded-full ${dot === 0 ? "bg-brand" : "bg-black/20"}`}
              aria-hidden
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
