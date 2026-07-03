import Image from "next/image";
import { images } from "@/lib/images";
import { Product } from "@/types/site";

/** Lifestyle / full-bleed product photos */
export function isPhotoProduct(product: Product) {
  return product.category === "E-Liquids" || product.category === "Tanks & rdas";
}

/** Hardware cutouts — contain on studio background */
export function isDeviceProduct(product: Product) {
  return (
    product.category === "Pods" ||
    product.category === "premium mods" ||
    product.category === "vapes" ||
    product.category === "starter kits"
  );
}

type ProductImageFrameProps = {
  product: Product;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProductImageFrame({
  product,
  className = "",
  imageClassName = "",
  priority,
  sizes = "(max-width: 768px) 100vw, 25vw"
}: ProductImageFrameProps) {
  const photo = isPhotoProduct(product);
  const device = isDeviceProduct(product);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${images.productBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Image
        src={product.image}
        alt={product.subtitle}
        fill
        priority={priority}
        sizes={sizes}
        className={`transition duration-300 group-hover:scale-105 ${
          photo
            ? "object-cover object-center"
            : device
              ? "object-contain p-4 md:p-6"
              : "object-contain p-3 md:p-5"
        } ${imageClassName}`}
      />
    </div>
  );
}
