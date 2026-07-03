import { BlogPost, Product, VideoItem } from "@/types/site";
import { images } from "@/lib/images";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "aBOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "ALL PRODUCTS", href: "/products" },
  { label: "CONTACT", href: "/contact" }
] as const;

export const categories = [
  "Accessories",
  "Batteries",
  "Charger",
  "Coil / cartrigdes",
  "Cotton",
  "Pods",
  "New arrivals",
  "E-Liquids",
  "starter kits",
  "Tanks & rdas",
  "premium mods",
  "vapes",
  "Flavours"
] as const;

export const brands = ["VapeX", "Aspire", "Innokin", "Seriously Nice", "Coolfire", "Mafia Mist", "Radiola Juices"] as const;

export const COUPON_CODE = "VAPEX10";
export const COUPON_DISCOUNT = 0.1;
export const PRODUCTS_PER_PAGE = 9;

const productImages = [
  images.products.p1,
  images.products.p2,
  images.products.p3,
  images.products.p4
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "magical-psychedelic-vape",
    title: "THE FINGER OF GOD VAPE",
    subtitle: "MAGICAL PSYCHEDELIC VAPE",
    price: 79.9,
    oldPrice: 90.9,
    image: images.products.p1,
    images: [images.products.p1, images.products.p2],
    description:
      "Premium psychedelic vape experience with smooth draws and rich flavor delivery.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    rating: 5,
    reviewCount: 25,
    inStock: true,
    brand: "VapeX",
    category: "vapes",
    onSale: true,
    variants: [
      { id: "v1-30w", label: "30W Kit", price: 79.9 },
      { id: "v1-50w", label: "50W Kit", price: 89.9 }
    ]
  },
  {
    id: "p2",
    slug: "finger-of-god-extender",
    title: "The Finger of God Extender",
    subtitle: "Monoamine Oxidase Inhibitor",
    price: 79.9,
    oldPrice: 90.9,
    image: images.products.p2,
    images: [images.products.p2],
    description: "High-performance extender module engineered for advanced vape setups.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    rating: 4,
    reviewCount: 18,
    inStock: true,
    brand: "VapeX",
    category: "premium mods",
    onSale: true
  },
  {
    id: "p3",
    slug: "mushroom-chocolate-gems",
    title: "Mushroom Chocolate Gems",
    subtitle: "Nano infused mushroom extract",
    price: 79.9,
    oldPrice: 90.9,
    image: images.products.p3,
    images: [images.products.p3],
    description: "Nano-infused extract gems with balanced flavor and consistent potency.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    rating: 5,
    reviewCount: 31,
    inStock: true,
    brand: "Seriously Nice",
    category: "Flavours",
    onSale: true
  },
  {
    id: "p4",
    slug: "cannabis-liquid-diamond",
    title: "Cannabis Liquid Diamond Disposable",
    subtitle: "Pure THC, Unmatched Potency",
    price: 79.9,
    oldPrice: 90.9,
    image: images.products.p4,
    images: [images.products.p4],
    description: "Disposable liquid diamond vape with pure potency and clean finish.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    rating: 4,
    reviewCount: 22,
    inStock: true,
    brand: "VapeX",
    category: "vapes",
    onSale: true
  },
  {
    id: "p5",
    slug: "coolfire-tc100-mod",
    title: "COOLFIRE IV TC100",
    subtitle: "Premium Temperature Control Mod",
    price: 129.9,
    oldPrice: 149.9,
    image: productImages[1],
    images: [productImages[1]],
    description: "Advanced TC mod with ergonomic grip and precision output control.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora nostra.",
    rating: 5,
    reviewCount: 14,
    inStock: true,
    brand: "Coolfire",
    category: "premium mods",
    onSale: true
  },
  {
    id: "p6",
    slug: "aspire-bvc-coil-pack",
    title: "Aspire BVC Coil Pack",
    subtitle: "Bottom Vertical Coil Replacement",
    price: 24.9,
    image: productImages[2],
    images: [productImages[2]],
    description: "Genuine Aspire BVC coils for clean flavor and long coil life.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    rating: 4,
    reviewCount: 42,
    inStock: true,
    brand: "Aspire",
    category: "Coil / cartrigdes",
    onSale: false
  },
  {
    id: "p7",
    slug: "starter-kit-bundle",
    title: "Starter Kit Bundle",
    subtitle: "Complete Beginner Vape Kit",
    price: 99.9,
    oldPrice: 119.9,
    image: productImages[0],
    images: [productImages[0], productImages[3]],
    description: "Everything needed to start vaping in one complete starter bundle.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    rating: 5,
    reviewCount: 56,
    inStock: true,
    brand: "VapeX",
    category: "starter kits",
    onSale: true
  },
  {
    id: "p8",
    slug: "seriously-nice-grape-eliquid",
    title: "Seriously Nice Grape",
    subtitle: "100ml Shortfill E-Liquid",
    price: 34.9,
    image: images.products.eliquidRadiolaTrio,
    images: [images.products.eliquidRadiolaTrio],
    description: "Bold grape flavor e-liquid with icy finish and smooth vapor.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    rating: 5,
    reviewCount: 37,
    inStock: true,
    brand: "Seriously Nice",
    category: "E-Liquids",
    onSale: false,
    variants: [
      { id: "v8-0mg", label: "0mg", price: 34.9 },
      { id: "v8-3mg", label: "3mg", price: 36.9 },
      { id: "v8-6mg", label: "6mg", price: 36.9 }
    ]
  },
  {
    id: "p13",
    slug: "mafia-mist-berry-ice",
    title: "Mafia Mist",
    subtitle: "Berry Ice 60ml",
    price: 29.9,
    oldPrice: 34.9,
    image: images.products.eliquidMafiaMist,
    images: [images.products.eliquidMafiaMist],
    description: "Bold berry flavor with a refreshing menthol ice finish. 60ml chubby gorilla bottle.",
    longDescription:
      "Mafia Mist Berry Ice delivers vibrant berry notes layered with a cool menthol exhale. Premium 60ml shortfill in a child-resistant chubby gorilla bottle — perfect for sub-ohm devices and all-day vaping.",
    rating: 5,
    reviewCount: 48,
    inStock: true,
    brand: "Mafia Mist",
    category: "E-Liquids",
    onSale: true,
    variants: [
      { id: "v13-0mg", label: "0mg", price: 29.9 },
      { id: "v13-3mg", label: "3mg", price: 31.9 }
    ]
  },
  {
    id: "p14",
    slug: "mafia-mist-morango-cremoso",
    title: "Mafia Mist",
    subtitle: "Morango Cremoso 60ml",
    price: 29.9,
    oldPrice: 34.9,
    image: images.products.eliquidMafiaMist,
    images: [images.products.eliquidMafiaMist],
    description: "Creamy strawberry blend with smooth, dessert-like sweetness. 60ml bottle.",
    longDescription:
      "Morango Cremoso — Portuguese for creamy strawberry — is a rich, smooth e-liquid with ripe strawberry and velvety cream notes. 60ml format ideal for pod systems and starter kits.",
    rating: 5,
    reviewCount: 41,
    inStock: true,
    brand: "Mafia Mist",
    category: "E-Liquids",
    onSale: true
  },
  {
    id: "p15",
    slug: "radiola-take-five",
    title: "Radiola Juices",
    subtitle: "Take Five 60ml",
    price: 32.9,
    image: images.products.eliquidRadiolaTrio,
    images: [images.products.eliquidRadiolaTrio],
    description: "Music-inspired blend with 70VG / 30PG for rich vapor and bold flavor.",
    longDescription:
      "Radiola Juices Take Five features a vintage gramophone-inspired label and a balanced 70VG / 30PG ratio. Clear glass dropper bottle with premium flavor crafted for cloud chasers and flavor lovers alike.",
    rating: 5,
    reviewCount: 33,
    inStock: true,
    brand: "Radiola Juices",
    category: "E-Liquids",
    onSale: false,
    variants: [
      { id: "v15-0mg", label: "0mg 70VG/30PG", price: 32.9 },
      { id: "v15-3mg", label: "3mg 70VG/30PG", price: 34.9 }
    ]
  },
  {
    id: "p16",
    slug: "radiola-perfect-day",
    title: "Radiola Juices",
    subtitle: "Perfect Day 80VG/20PG",
    price: 36.9,
    oldPrice: 42.9,
    image: images.products.eliquidRadiolaPerfectDay,
    images: [images.products.eliquidRadiolaPerfectDay],
    description: "High-VG golden blend in glass bottle with protective cardboard canister. #vapeonmusic",
    longDescription:
      "Perfect Day from Radiola Juices is an 80VG / 20PG premium e-liquid for dense vapor production. Comes in a glass dropper bottle with an artistically designed kraft-paper tube packaging. Golden-amber liquid with music-themed vintage branding.",
    rating: 5,
    reviewCount: 52,
    inStock: true,
    brand: "Radiola Juices",
    category: "E-Liquids",
    onSale: true,
    variants: [
      { id: "v16-0mg", label: "0mg 80VG/20PG", price: 36.9 },
      { id: "v16-3mg", label: "3mg 80VG/20PG", price: 38.9 }
    ]
  },
  {
    id: "p17",
    slug: "radiola-strawberry-fields-forever",
    title: "Radiola Juices",
    subtitle: "Strawberry Fields Forever 60ml",
    price: 32.9,
    image: images.products.eliquidRadiolaTrio,
    images: [images.products.eliquidRadiolaTrio],
    description: "Strawberry-forward profile with 70VG / 30PG. Vintage vinyl-inspired label design.",
    longDescription:
      "Strawberry Fields Forever captures ripe strawberry flavor in a 70VG / 30PG blend. Part of the Radiola Juices music collection with gramophone logo and vinyl record artwork on every bottle.",
    rating: 4,
    reviewCount: 29,
    inStock: true,
    brand: "Radiola Juices",
    category: "E-Liquids",
    onSale: false
  },
  {
    id: "p9",
    slug: "pro-rda-tank",
    title: "Pro RDA Tank",
    subtitle: "Rebuildable Dripping Atomizer",
    price: 54.9,
    image: productImages[2],
    images: [productImages[2]],
    description: "High airflow RDA tank for advanced users and custom builds.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    rating: 4,
    reviewCount: 19,
    inStock: true,
    brand: "Innokin",
    category: "Tanks & rdas",
    onSale: false
  },
  {
    id: "p10",
    slug: "compact-pod-system",
    title: "Compact Pod System",
    subtitle: "Portable Pod Vape Device",
    price: 49.9,
    oldPrice: 59.9,
    image: productImages[0],
    images: [productImages[0]],
    description: "Slim pod system with leak-resistant pods and all-day battery.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    rating: 4,
    reviewCount: 28,
    inStock: true,
    brand: "Innokin",
    category: "Pods",
    onSale: true
  },
  {
    id: "p11",
    slug: "dual-battery-charger",
    title: "Dual Battery Charger",
    subtitle: "Fast Charge Dock",
    price: 39.9,
    image: productImages[1],
    images: [productImages[1]],
    description: "Dual-slot charger with overcharge protection and LED indicators.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    rating: 4,
    reviewCount: 11,
    inStock: false,
    brand: "VapeX",
    category: "Charger",
    onSale: false
  },
  {
    id: "p12",
    slug: "organic-cotton-pack",
    title: "Organic Cotton Pack",
    subtitle: "Premium Wicking Cotton",
    price: 12.9,
    image: productImages[3],
    images: [productImages[3]],
    description: "Pure organic cotton strips for clean flavor in rebuildable tanks.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    rating: 5,
    reviewCount: 64,
    inStock: true,
    brand: "VapeX",
    category: "Cotton",
    onSale: false
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "two-million-reasons-to-be-considerate",
    date: "28/11/2022",
    tags: "VAPE HARDWARE, VAPING",
    title: "Two Million Reasons To Be Considerate",
    excerpt:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos...Read More",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
  },
  {
    id: "b2",
    slug: "choosing-the-right-coil",
    date: "15/10/2022",
    tags: "COILS, HARDWARE",
    title: "Choosing The Right Coil For Your Setup",
    excerpt:
      "Understanding coil resistance and material can dramatically improve your vaping experience. Here is what to look for when upgrading...Read More",
    content:
      "Understanding coil resistance and material can dramatically improve your vaping experience. From single-core to mesh coils, each option delivers a different balance of flavor and vapor production."
  },
  {
    id: "b3",
    slug: "eliquid-flavor-guide",
    date: "02/09/2022",
    tags: "E-LIQUIDS, FLAVOURS",
    title: "E-Liquid Flavor Guide For Beginners",
    excerpt:
      "Fruit, dessert, menthol, or tobacco — finding your perfect flavor profile starts with understanding nicotine strength and VG/PG ratios...Read More",
    content:
      "Fruit, dessert, menthol, or tobacco — finding your perfect flavor profile starts with understanding nicotine strength and VG/PG ratios. This guide walks through the most popular categories."
  },
  {
    id: "b4",
    slug: "battery-safety-tips",
    date: "20/08/2022",
    tags: "SAFETY, BATTERIES",
    title: "Essential Battery Safety Tips",
    excerpt:
      "Proper battery care extends device life and keeps your setup safe. Follow these guidelines for charging, storage, and daily use...Read More",
    content:
      "Proper battery care extends device life and keeps your setup safe. Always use the correct charger, avoid over-discharging, and store batteries in protective cases when not in use."
  }
];

export const videos: VideoItem[] = Array.from({ length: 8 }).map((_, idx) => ({
  id: `v${idx + 1}`,
  title: "DMT Always Shows Shane Mauss the Same... Watch Later   Share",
  description: "Product review and setup walkthrough for VapeX hardware and e-liquids."
}));
