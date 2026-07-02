import Image from "next/image";
import { StarRating } from "./StarRating";

export type Review = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
};

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="relative flex h-full min-h-[280px] flex-col bg-white p-7 shadow-review md:p-8">
      <span className="text-[2.5rem] font-sans leading-none text-brand" aria-hidden>
        &ldquo;
      </span>
      <StarRating size={14} />
      <p className="mt-4 flex-1 text-[13px] leading-[1.75] text-black/65">{review.text}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#E8E8E8]">
          <Image src={review.avatar} alt={review.name} fill className="object-cover" />
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
  );
}
