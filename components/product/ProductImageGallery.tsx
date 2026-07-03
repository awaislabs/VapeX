"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { images } from "@/lib/images";
import { Product } from "@/types/site";
import { isDeviceProduct, isPhotoProduct } from "@/components/common/ProductImageFrame";

type ProductImageGalleryProps = {
  product: Product;
};

function getImageClass(product: Product) {
  const photo = isPhotoProduct(product);
  const device = isDeviceProduct(product);
  if (photo) return "object-cover object-center";
  if (device) return "object-contain p-6 md:p-10";
  return "object-contain p-4 md:p-8";
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const galleryImages =
    product.images.length > 0 ? product.images : [product.image];
  const imageClass = getImageClass(product);
  const hasMultiple = galleryImages.length > 1;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(0);
  const thumbStripRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      const next =
        ((index % galleryImages.length) + galleryImages.length) %
        galleryImages.length;
      setSelectedIndex(next);
    },
    [galleryImages.length]
  );

  const goPrev = useCallback(() => goTo(selectedIndex - 1), [goTo, selectedIndex]);
  const goNext = useCallback(() => goTo(selectedIndex + 1), [goTo, selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!hasMultiple) return;
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, hasMultiple]);

  useEffect(() => {
    const thumb = thumbStripRef.current?.children[selectedIndex] as HTMLElement | undefined;
    thumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [selectedIndex]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    setIsDragging(true);
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (!hasMultiple) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) goNext();
      else goPrev();
    }
    setIsDragging(false);
  };

  return (
    <div className="w-full" aria-label={`${product.subtitle} image gallery`}>
      <div className="relative">
        <div
          className="relative overflow-hidden border border-black/10"
          style={{
            backgroundImage: `url(${images.productBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
          >
            {galleryImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-square w-full shrink-0"
              >
                <div
                  className="relative h-full w-full overflow-hidden"
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseLeave={() => setIsZoomed(false)}
                >
                  <Image
                    src={src}
                    alt={`${product.subtitle} — image ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    draggable={false}
                    className={`select-none transition-transform duration-500 ease-out ${imageClass} ${
                      isZoomed && selectedIndex === index && !isDragging
                        ? "scale-110 cursor-zoom-in"
                        : "scale-100"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {hasMultiple ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-sm backdrop-blur-sm transition hover:border-brand hover:text-brand"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-sm backdrop-blur-sm transition hover:border-brand hover:text-brand"
            >
              <ChevronRight size={20} />
            </button>
          </>
        ) : null}
      </div>

      {hasMultiple ? (
        <div className="mt-4">
          <div
            ref={thumbStripRef}
            className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin"
          >
            {galleryImages.map((src, index) => (
              <button
                key={`thumb-${src}-${index}`}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`View image ${index + 1}`}
                aria-current={selectedIndex === index}
                className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden border-2 transition sm:h-20 sm:w-20 ${
                  selectedIndex === index
                    ? "border-brand ring-2 ring-brand/25"
                    : "border-black/10 opacity-70 hover:border-brand/50 hover:opacity-100"
                }`}
                style={{
                  backgroundImage: `url(${images.productBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="80px"
                  className={`${imageClass} !p-1`}
                />
              </button>
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] tracking-wide text-black/45">
            {selectedIndex + 1} / {galleryImages.length}
          </p>
        </div>
      ) : null}
    </div>
  );
}
