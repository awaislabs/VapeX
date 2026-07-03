import { Product } from "@/types/site";
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

export const brands = ["VapeX", "Aspire", "Innokin", "Seriously Nice", "Coolfire", "Mafia Mist", "Radiola Juices", "Vaporesso", "Throne Liquids", "FreeMax", "iJoy", "VOOPOO", "Uwell", "OXVA", "IQOS", "Pava", "SMOK", "LG"] as const;

export const COUPON_CODE = "VAPEX10";
export const COUPON_DISCOUNT = 0.1;
export const PRODUCTS_PER_PAGE = 9;

export const products: Product[] = [
  {
    id: "p1",
    slug: "silver-pod-mod-kit",
    title: "VapeX",
    subtitle: "Silver Pod Mod Starter Kit",
    price: 79.9,
    oldPrice: 90.9,
    image: images.products.deviceSilverPodKit,
    images: [
      images.products.deviceSilverPodKit,
      images.products.starterKitMod,
      images.products.deviceCaliburnGk3
    ],
    description:
      "Matte silver pod mod with OLED display, USB-C charging, and included e-liquid bottle — ready to vape out of the box.",
    longDescription:
      "A sleek matte silver pod mod with a clear top-fill pod, digital display, and ergonomic leather grip. Includes a 60ml e-liquid bottle for your first fill. Perfect entry-level hardware for new vapers.",
    rating: 5,
    reviewCount: 25,
    inStock: true,
    brand: "VapeX",
    category: "starter kits",
    onSale: true,
    variants: [
      { id: "v1-30w", label: "30W Kit", price: 79.9 },
      { id: "v1-50w", label: "50W Kit", price: 89.9 }
    ]
  },
  {
    id: "p2",
    slug: "uwell-caliburn-gk3",
    title: "Uwell",
    subtitle: "Caliburn GK3 Pod System",
    price: 69.9,
    oldPrice: 79.9,
    image: images.products.deviceCaliburnGk3,
    images: [images.products.deviceCaliburnGk3],
    description: "Futuristic cyan pod system with circuit-board display, 25W output, and 0.6Ω mesh pod.",
    longDescription:
      "The Uwell Caliburn GK3 features a shimmering turquoise finish, large digital screen showing wattage and puff count, and a transparent pod with visible mesh coil. Compact, stylish, and ideal for nicotine salts or freebase e-liquid.",
    rating: 4,
    reviewCount: 18,
    inStock: true,
    brand: "Uwell",
    category: "Pods",
    onSale: true
  },
  {
    id: "p3",
    slug: "voopoo-pod-mod-30w",
    title: "VOOPOO",
    subtitle: "Pod Mod 30W",
    price: 59.9,
    oldPrice: 69.9,
    image: images.products.deviceVoopooPod,
    images: [images.products.deviceVoopooPod],
    description: "Gradient orange-to-red pod mod with 30W output, 100% battery display, and clear refillable pod.",
    longDescription:
      "VOOPOO's compact pod mod delivers up to 30W in a bold orange-red metallic body. Dual-section display shows wattage and battery level, with USB-C charging and adjustable power for a tailored vape.",
    rating: 5,
    reviewCount: 31,
    inStock: true,
    brand: "VOOPOO",
    category: "premium mods",
    onSale: true
  },
  {
    id: "p4",
    slug: "oxva-pod-mod-60w",
    title: "OXVA",
    subtitle: "Xlim Pro Pod Mod 60W",
    price: 74.9,
    oldPrice: 84.9,
    image: images.products.deviceOxvaPod,
    images: [images.products.deviceOxvaPod],
    description: "Teal-to-green gradient pod mod with 60W output, rainbow LED bar, and full stats display.",
    longDescription:
      "The OXVA pod mod combines a metallic teal-green gradient body with a vertical LCD showing wattage, resistance, voltage, and puff count. Rainbow LED accent bar and clear pod make it a standout daily driver.",
    rating: 4,
    reviewCount: 22,
    inStock: true,
    brand: "OXVA",
    category: "Pods",
    onSale: true
  },
  {
    id: "p5",
    slug: "coolfire-tc100-mod",
    title: "COOLFIRE IV TC100",
    subtitle: "Premium Temperature Control Mod",
    price: 129.9,
    oldPrice: 149.9,
    image: images.products.starterKitRevenger,
    images: [images.products.starterKitRevenger],
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
    image: images.products.tankFreemaxMeshPro,
    images: [images.products.tankFreemaxMeshPro],
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
    title: "VapeX Starter",
    subtitle: "75W Box Mod Starter Kit",
    price: 99.9,
    oldPrice: 119.9,
    image: images.products.starterKitMod,
    images: [
      images.products.starterKitMod,
      images.products.starterKitAurora,
      images.products.starterKitRevenger,
      images.products.starterKitRefill
    ],
    description: "Complete 75W box mod kit with tank, adjustable wattage display, and everything needed to start vaping.",
    longDescription:
      "This sleek brushed-metal box mod features a clear OLED display showing wattage and resistance, a top-fill tank with wide-bore drip tip, and USB charging. Ideal for beginners stepping into sub-ohm vaping with a polished, ready-to-use package.",
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
    images: [
      images.products.eliquidRadiolaTrio,
      images.products.eliquidRadiolaPerfectDay,
      images.products.eliquidMafiaMist
    ],
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
    id: "p18",
    slug: "vaporesso-aurora-play-kit",
    title: "Vaporesso",
    subtitle: "Aurora Play Pod Kit",
    price: 49.9,
    oldPrice: 59.9,
    image: images.products.starterKitAurora,
    images: [images.products.starterKitAurora],
    description: "Compact flip-top pod kit with iridescent oil-slick finish. Ultra-portable starter device.",
    longDescription:
      "The Vaporesso Aurora Play combines a classic flip-top design with modern pod vaping. Its iridescent rainbow finish stands out, while the curved drip tip and one-button operation make it one of the easiest starter kits for on-the-go use.",
    rating: 5,
    reviewCount: 38,
    inStock: true,
    brand: "Vaporesso",
    category: "starter kits",
    onSale: true
  },
  {
    id: "p19",
    slug: "vaporesso-revenger-x-kit",
    title: "Vaporesso",
    subtitle: "Revenger X 220W Kit",
    price: 89.9,
    oldPrice: 109.9,
    image: images.products.starterKitRevenger,
    images: [images.products.starterKitRevenger],
    description: "High-power 220W box mod starter kit with sub-ohm tank and touch-screen display.",
    longDescription:
      "The Revenger X delivers up to 220W in a bold red and black chassis with a full OLED touchscreen. Includes a matching sub-ohm tank with adjustable airflow — a premium starter kit for users who want power and style from day one.",
    rating: 5,
    reviewCount: 44,
    inStock: true,
    brand: "Vaporesso",
    category: "starter kits",
    onSale: true,
    variants: [
      { id: "v19-80w", label: "80W Mode", price: 89.9 },
      { id: "v19-220w", label: "220W Mode", price: 99.9 }
    ]
  },
  {
    id: "p20",
    slug: "throne-refill-starter-kit",
    title: "Throne Liquids",
    subtitle: "Premium Refill Starter Kit",
    price: 74.9,
    image: images.products.starterKitRefill,
    images: [images.products.starterKitRefill],
    description: "Gold box mod refill kit bundled with Throne Liquids Kingslayer 60ml e-liquid.",
    longDescription:
      "Everything you need to start refilling and maintaining your device. This bundle pairs a gold-finish box mod with Throne Liquids The Kingslayer 60ml — perfect for beginners learning coil priming and e-liquid refills.",
    rating: 4,
    reviewCount: 27,
    inStock: true,
    brand: "Throne Liquids",
    category: "starter kits",
    onSale: false
  },
  {
    id: "p9",
    slug: "freemax-mesh-pro-tank",
    title: "FreeMax",
    subtitle: "Mesh Pro Sub-Ohm Tank",
    price: 54.9,
    oldPrice: 64.9,
    image: images.products.tankFreemaxMeshPro,
    images: [
      images.products.tankFreemaxMeshPro,
      images.products.tankVaporessoSkrr,
      images.products.tankVoopooUforce,
      images.products.tankInnokinGomax
    ],
    description: "Premium sub-ohm tank with mesh coil, bubble glass, and slide-to-fill top cap.",
    longDescription:
      "The FreeMax Mesh Pro features a large mesh coil head visible through bubble glass, decorative silver engravings on the top cap and airflow ring, and a wide-bore drip tip. Slide-to-fill design with adjustable bottom airflow for flavor-focused sub-ohm vaping.",
    rating: 5,
    reviewCount: 62,
    inStock: true,
    brand: "FreeMax",
    category: "Tanks & rdas",
    onSale: true
  },
  {
    id: "p21",
    slug: "ijoy-mystique-mesh-tank",
    title: "iJoy",
    subtitle: "Mystique Mesh Tank 3-Pack",
    price: 39.9,
    image: images.products.tankIjoyMystique,
    images: [images.products.tankIjoyMystique],
    description: "Disposable mesh tanks with honeycomb resin pattern. Pack of three smoked-grey units.",
    longDescription:
      "iJoy Mystique Mesh Disposable Tanks feature a distinctive honeycomb resin exterior, wide-bore drip tips, and 510 threading for quick attachment to compatible mods. Ideal for vapers who want convenience without sacrificing mesh coil performance.",
    rating: 4,
    reviewCount: 31,
    inStock: true,
    brand: "iJoy",
    category: "Tanks & rdas",
    onSale: false
  },
  {
    id: "p22",
    slug: "vaporesso-skrr-tank",
    title: "Vaporesso",
    subtitle: "SKRR Sub-Ohm Tank",
    price: 44.9,
    oldPrice: 52.9,
    image: images.products.tankVaporessoSkrr,
    images: [images.products.tankVaporessoSkrr],
    description: "Bulb-glass sub-ohm tank with marble drip tip. Available in red, blue, and silver finishes.",
    longDescription:
      "The Vaporesso SKRR tank delivers bold flavor through its quad-flow distribution system and bubble glass reservoir. Metallic finish options with decorative marble-pattern drip tips make it a standout choice in the Tanks & RDAs category.",
    rating: 5,
    reviewCount: 47,
    inStock: true,
    brand: "Vaporesso",
    category: "Tanks & rdas",
    onSale: true,
    variants: [
      { id: "v22-red", label: "Red", price: 44.9 },
      { id: "v22-blue", label: "Blue", price: 44.9 },
      { id: "v22-silver", label: "Silver", price: 46.9 }
    ]
  },
  {
    id: "p23",
    slug: "voopoo-uforce-t2-tank",
    title: "VOOPOO",
    subtitle: "UFORCE T2 Sub-Ohm Tank",
    price: 49.9,
    image: images.products.tankVoopooUforce,
    images: [images.products.tankVoopooUforce],
    description: "Black UFORCE tank with bubble glass, triangular airflow cutouts, and marbled blue drip tip.",
    longDescription:
      "The VOOPOO UFORCE T2 combines gunmetal black hardware with a bulging bubble glass section and marbled blue-black resin drip tip. Triangular airflow slots on the base ring allow precise draw tuning for dense vapor production.",
    rating: 5,
    reviewCount: 55,
    inStock: true,
    brand: "VOOPOO",
    category: "Tanks & rdas",
    onSale: false
  },
  {
    id: "p24",
    slug: "innokin-gomax-tank",
    title: "Innokin",
    subtitle: "GoMax Multi-Use Tank",
    price: 34.9,
    oldPrice: 42.9,
    image: images.products.tankInnokinGomax,
    images: [images.products.tankInnokinGomax],
    description: "Translucent disposable tanks in neon green, pink, black, and blue. FreeMax GEMM style.",
    longDescription:
      "Innokin GoMax multi-use disposable tanks come in vibrant translucent colors with integrated drip tips and visible internal coil housing. A practical, colorful option for quick tank swaps without rebuilding.",
    rating: 4,
    reviewCount: 28,
    inStock: true,
    brand: "Innokin",
    category: "Tanks & rdas",
    onSale: true,
    variants: [
      { id: "v24-green", label: "Neon Green", price: 34.9 },
      { id: "v24-pink", label: "Pink", price: 34.9 },
      { id: "v24-blue", label: "Blue", price: 34.9 }
    ]
  },
  {
    id: "p10",
    slug: "iqos-pocket-charger-kit",
    title: "IQOS",
    subtitle: "Pocket Charger Starter Kit",
    price: 89.9,
    oldPrice: 99.9,
    image: images.products.deviceIqosKit,
    images: [images.products.deviceIqosKit],
    description: "Slim IQOS holder and pocket charger in midnight blue metallic finish with fabric-textured panel.",
    longDescription:
      "The IQOS starter kit includes a pen-style holder with status display and a rounded pocket charger with embossed branding. A premium heat-not-burn alternative in a sleek midnight blue finish.",
    rating: 4,
    reviewCount: 28,
    inStock: true,
    brand: "IQOS",
    category: "starter kits",
    onSale: true
  },
  {
    id: "p11",
    slug: "dual-battery-charger",
    title: "Dual Battery Charger",
    subtitle: "Fast Charge Dock",
    price: 39.9,
    image: images.products.starterKitMod,
    images: [images.products.starterKitMod],
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
    image: images.products.tankInnokinGomax,
    images: [images.products.tankInnokinGomax],
    description: "Pure organic cotton strips for clean flavor in rebuildable tanks.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    rating: 5,
    reviewCount: 64,
    inStock: true,
    brand: "VapeX",
    category: "Cotton",
    onSale: false
  },
  {
    id: "p25",
    slug: "pava-pod-system",
    title: "Pava",
    subtitle: "Digital Pod System",
    price: 54.9,
    oldPrice: 64.9,
    image: images.products.devicePavaPod,
    images: [images.products.devicePavaPod],
    description: "Square pod mod with bold multi-color digital display and transparent top-fill pod.",
    longDescription:
      "The Pava pod system features a unique square body with a glossy black display showing vibrant gradient numerals. Compact, eye-catching design with a clear pod and integrated mouthpiece for everyday portability.",
    rating: 5,
    reviewCount: 19,
    inStock: true,
    brand: "Pava",
    category: "Pods",
    onSale: true
  },
  {
    id: "p26",
    slug: "vaporesso-gt8-core-coils-5-pack",
    title: "Vaporesso",
    subtitle: "GT8 Core Coils 5-Pack",
    price: 24.9,
    oldPrice: 29.9,
    image: images.products.accVaporessoGt8Coils,
    images: [images.products.accVaporessoGt8Coils],
    description: "GT8 replacement coils for Revenger/NRG series tanks, optimized for dense vapor.",
    longDescription:
      "Vaporesso GT8 coils feature multi-core architecture for rich flavor and strong cloud production. Compatible with supported NRG/Revenger tanks and sold in sealed 5-pack retail box.",
    rating: 5,
    reviewCount: 34,
    inStock: true,
    brand: "Vaporesso",
    category: "Accessories",
    onSale: true
  },
  {
    id: "p27",
    slug: "vaporesso-luxe-q-mesh-pods-2ml",
    title: "Vaporesso",
    subtitle: "LUXE Q Mesh Pods 2ml",
    price: 18.9,
    image: images.products.accLuxeQMeshPods,
    images: [images.products.accLuxeQMeshPods],
    description: "Replacement mesh pods for LUXE Q series in 0.8Ω and 1.2Ω options.",
    longDescription:
      "Original LUXE Q pods with integrated mesh coil design for clean flavor and easy pod swapping. Includes blister-sealed pods with 2ml capacity.",
    rating: 4,
    reviewCount: 26,
    inStock: true,
    brand: "Vaporesso",
    category: "Accessories",
    onSale: false,
    variants: [
      { id: "v27-08", label: "0.8Ω Mesh", price: 18.9 },
      { id: "v27-12", label: "1.2Ω Mesh", price: 18.9 }
    ]
  },
  {
    id: "p28",
    slug: "smok-fetch-rpm-rgc-pods-3-pack",
    title: "SMOK",
    subtitle: "FETCH RPM/RGC Pods 3-Pack",
    price: 16.9,
    image: images.products.accSmokFetchPods,
    images: [images.products.accSmokFetchPods],
    description: "SMOK FETCH replacement pods for RPM and RGC variants, 3 pieces per box.",
    longDescription:
      "Dual-pack style replacement pod boxes for SMOK FETCH platform. Supports both RPM and RGC coil families with leak-resistant base structure.",
    rating: 4,
    reviewCount: 21,
    inStock: true,
    brand: "SMOK",
    category: "Accessories",
    onSale: false
  },
  {
    id: "p29",
    slug: "smok-rpm-nord-pod-4-5ml-3-pack",
    title: "SMOK",
    subtitle: "RPM Nord Pod 4.5ml",
    price: 15.9,
    image: images.products.accSmokRpmNordPod,
    images: [images.products.accSmokRpmNordPod],
    description: "4.5ml RPM Nord replacement pod cartridge (no coil included), 3-pack.",
    longDescription:
      "SMOK RPM Nord pod cartridges with large 4.5ml capacity and press-fit coil slot. Ideal replacement accessory for RPM/Nord compatible devices.",
    rating: 4,
    reviewCount: 19,
    inStock: true,
    brand: "SMOK",
    category: "Accessories",
    onSale: false
  },
  {
    id: "p30",
    slug: "lg-he4-18650-battery-cell",
    title: "LG",
    subtitle: "HE4 18650 Battery Cell",
    price: 12.9,
    image: images.products.accLgHe4Battery,
    images: [images.products.accLgHe4Battery],
    description: "Authentic LG HE4 18650 high-drain battery cell for regulated vape mods.",
    longDescription:
      "Reliable 18650 battery cell with strong current output and stable voltage behavior. Recommended for regulated mod use with external battery safety case.",
    rating: 5,
    reviewCount: 45,
    inStock: true,
    brand: "LG",
    category: "Accessories",
    onSale: false
  },
  {
    id: "p31",
    slug: "smok-fit-single-replacement-pod",
    title: "SMOK",
    subtitle: "FIT Single Replacement Pod",
    price: 9.9,
    image: images.products.accSmokFitPod,
    images: [images.products.accSmokFitPod],
    description: "Single replacement pod cartridge for SMOK FIT with integrated mouthpiece.",
    longDescription:
      "Compact black SMOK FIT replacement pod designed for quick swap and clean draw. A practical low-cost spare for daily carry.",
    rating: 4,
    reviewCount: 17,
    inStock: true,
    brand: "SMOK",
    category: "Accessories",
    onSale: true
  },
  {
    id: "p32",
    slug: "smok-resa-prince-bulb-glass",
    title: "SMOK",
    subtitle: "Resa Prince Bulb Glass",
    price: 8.9,
    image: images.products.accSmokPrinceGlass,
    images: [images.products.accSmokPrinceGlass],
    description: "Bulb replacement pyrex glass tube for SMOK Prince-style tanks.",
    longDescription:
      "Clear replacement bubble glass for increased e-liquid capacity and fast restoration of cracked tank sections. Fits compatible Prince variants.",
    rating: 4,
    reviewCount: 14,
    inStock: true,
    brand: "SMOK",
    category: "Accessories",
    onSale: false
  },
  {
    id: "p33",
    slug: "aspire-nautilus-2-replacement-pyrex",
    title: "Aspire",
    subtitle: "Nautilus 2 Replacement Pyrex",
    price: 7.9,
    image: images.products.accAspireNautilusGlass,
    images: [images.products.accAspireNautilusGlass],
    description: "Original Aspire Nautilus 2 replacement glass tube.",
    longDescription:
      "Factory-style replacement pyrex tube for Aspire Nautilus 2 tank. Keeps your tank restored and leak-free after accidental drops.",
    rating: 4,
    reviewCount: 22,
    inStock: true,
    brand: "Aspire",
    category: "Accessories",
    onSale: true
  }
];

export { blogPosts } from "@/lib/blog-data";
export { videos } from "@/lib/videos";
