"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ReviewCard, type Review } from "./ReviewCard";

type ReviewsCarouselProps = {
  reviews: Review[];
};

function getCardsPerView(width: number) {
  return width >= 1024 ? 3 : 1;
}

function chunkReviews(reviews: Review[], size: number) {
  const slides: Review[][] = [];
  for (let i = 0; i < reviews.length; i += size) {
    slides.push(reviews.slice(i, i + size));
  }
  return slides;
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => setCardsPerView(getCardsPerView(window.innerWidth));

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const slides = useMemo(() => chunkReviews(reviews, cardsPerView), [reviews, cardsPerView]);

  useEffect(() => {
    setActiveSlide((current) => Math.min(current, slides.length - 1));
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  const goNext = useCallback(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    event.currentTarget.dataset.touchStart = String(touch.clientX);
  }, []);

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      const startX = Number(event.currentTarget.dataset.touchStart);
      const endX = event.changedTouches[0]?.clientX;
      if (Number.isNaN(startX) || endX === undefined) return;

      const delta = endX - startX;
      if (Math.abs(delta) < 40) return;

      if (delta < 0) goNext();
      else goPrev();
    },
    [goNext, goPrev]
  );

  return (
    <div>
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slideReviews, slideIndex) => (
            <div
              key={slideIndex}
              className="grid w-full shrink-0 grid-cols-1 gap-6 lg:grid-cols-3"
            >
              {slideReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to review slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              className={`h-2 w-2 rounded-full transition-colors ${
                activeSlide === index ? "bg-brand" : "bg-black/20 hover:bg-black/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
