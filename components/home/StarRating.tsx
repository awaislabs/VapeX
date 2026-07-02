import { Star } from "lucide-react";

type StarRatingProps = {
  count?: number;
  size?: number;
};

export function StarRating({ count = 5, size = 14 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className="fill-[#F5B301] text-[#F5B301]"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
