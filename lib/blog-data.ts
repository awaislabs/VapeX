import { BlogPost } from "@/types/site";
import { images } from "@/lib/images";

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "two-million-reasons-to-be-considerate",
    date: "28 Nov 2022",
    tags: "VAPE HARDWARE, VAPING",
    tagList: ["Vape Hardware", "Vaping", "Etiquette"],
    title: "Two Million Reasons To Be Considerate",
    excerpt:
      "With millions of vapers worldwide, small acts of courtesy go a long way. Learn how to vape responsibly in public spaces and build a positive community.",
    content:
      "With over two million people switching to vaping globally each year, our community has a responsibility to lead by example. Considerate vaping isn't just about following laws — it's about respecting the people and spaces around you.",
    sections: [
      {
        heading: "Why etiquette matters",
        body: "Public perception of vaping still varies widely. When vapers are mindful of where and how they vape, it helps normalize harm reduction and keeps access open for adults who rely on these products. A quick glance at your surroundings before exhaling can prevent unnecessary conflict."
      },
      {
        heading: "Best practices in shared spaces",
        body: "Avoid vaping in crowded queues, near children, or inside non-smoking venues. Use lower-power devices in discreet settings and always ask permission in private homes. Dispose of pods and bottles responsibly — litter reflects poorly on the entire community."
      },
      {
        heading: "Building a better culture",
        body: "Share knowledge, not clouds. Help newcomers understand device basics and nicotine strengths. Support local vape shops that prioritize education over hard sells. Together, we can create a culture that values quality, safety, and respect."
      }
    ],
    author: "Sarah Mitchell",
    authorRole: "VapeX Editorial",
    readTime: "5 min read",
    coverImage: images.hero,
    featured: true,
    youtubeVideoId: "fb1PfwEIoHY",
    relatedYoutube: [
      { id: "fb1PfwEIoHY", title: "Vaping 101 — Beginner's Guide" },
      { id: "9GiO5duBeC4", title: "Pod Device Beginner's Guide" }
    ]
  },
  {
    id: "b2",
    slug: "choosing-the-right-coil",
    date: "15 Oct 2022",
    tags: "COILS, HARDWARE",
    tagList: ["Coils", "Hardware", "Guides"],
    title: "Choosing The Right Coil For Your Setup",
    excerpt:
      "Understanding coil resistance and material can dramatically improve your vaping experience. Here is what to look for when upgrading your build.",
    content:
      "The coil is the heart of every vape device. Whether you use pre-built coils or rebuild your own, matching resistance and material to your device and e-liquid makes all the difference in flavor and vapor production.",
    sections: [
      {
        heading: "Resistance explained",
        body: "Lower resistance (sub-ohm, below 1.0Ω) produces warmer vapor and bigger clouds — ideal for DL (direct-lung) vaping with high-VG liquids. Higher resistance (above 1.0Ω) suits MTL (mouth-to-lung) styles with higher-PG or nicotine-salt e-liquids and uses less battery."
      },
      {
        heading: "Mesh vs traditional wire",
        body: "Mesh coils heat more evenly across a larger surface area, delivering consistent flavor and longer coil life. Traditional round-wire coils remain popular for rebuildable decks where custom builds allow fine-tuned control over warmth and airflow."
      },
      {
        heading: "When to replace your coil",
        body: "Burnt taste, muted flavor, or gurgling are signs your coil needs changing. Most pre-built coils last one to two weeks depending on usage and e-liquid sweetness. Keep spare Aspire BVC or compatible coils on hand to avoid downtime."
      }
    ],
    author: "James Carter",
    authorRole: "Hardware Specialist",
    readTime: "6 min read",
    coverImage: images.products.deviceCaliburnGk3,
    youtubeVideoId: "QJ4wrOaKYDY",
    relatedYoutube: [
      { id: "QJ4wrOaKYDY", title: "Vape Coils Explained" },
      { id: "rburezUQDZw", title: "How to Prime a New Coil" }
    ]
  },
  {
    id: "b3",
    slug: "eliquid-flavor-guide",
    date: "02 Sep 2022",
    tags: "E-LIQUIDS, FLAVOURS",
    tagList: ["E-Liquids", "Flavours", "Guides"],
    title: "E-Liquid Flavor Guide For Beginners",
    excerpt:
      "Fruit, dessert, menthol, or tobacco — finding your perfect flavor profile starts with understanding nicotine strength and VG/PG ratios.",
    content:
      "Walking into the world of e-liquids can feel overwhelming. Hundreds of flavors, multiple nicotine strengths, and VG/PG ratios on every bottle. This guide breaks it down so you can find your perfect all-day vape.",
    sections: [
      {
        heading: "Understanding VG and PG",
        body: "VG (vegetable glycerin) produces thick vapor and a smooth inhale. PG (propylene glycol) carries flavor more strongly and provides a sharper throat hit. A 70/30 VG/PG blend like Radiola Perfect Day suits sub-ohm devices, while 50/50 blends work well in pod systems."
      },
      {
        heading: "Flavor families to explore",
        body: "Fruit blends like berry ice or strawberry cream are the most popular entry point. Dessert profiles — custard, bakery, cereal — appeal to those who enjoy sweeter vapes. Menthol and ice add a cooling finish to any base flavor. Tobacco-style liquids remain a choice for former smokers transitioning away from cigarettes."
      },
      {
        heading: "Nicotine strength guide",
        body: "Freebase nicotine in 0mg, 3mg, and 6mg suits sub-ohm setups. Nicotine salts (10mg–20mg) deliver satisfaction at lower wattages in pod devices. Start lower than you think you need — you can always step up, but harsh throat hit from too much nicotine ruins the experience."
      }
    ],
    author: "Emily Brooks",
    authorRole: "Flavor Curator",
    readTime: "7 min read",
    coverImage: images.products.eliquidRadiolaPerfectDay,
    youtubeVideoId: "rN4tnJR4BcQ",
    relatedYoutube: [
      { id: "rN4tnJR4BcQ", title: "VG vs PG Ratios Explained" },
      { id: "fb1PfwEIoHY", title: "Best E-Liquid Flavors for Beginners" }
    ]
  },
  {
    id: "b4",
    slug: "battery-safety-tips",
    date: "20 Aug 2022",
    tags: "SAFETY, BATTERIES",
    tagList: ["Safety", "Batteries", "Guides"],
    title: "Essential Battery Safety Tips",
    excerpt:
      "Proper battery care extends device life and keeps your setup safe. Follow these guidelines for charging, storage, and daily use.",
    content:
      "Battery safety is non-negotiable in vaping. Whether you use built-in battery mods or removable 18650/21700 cells, following a few simple rules protects you and everyone around you.",
    sections: [
      {
        heading: "Use the right charger",
        body: "Always charge removable batteries in a dedicated external charger — never unattended overnight. For built-in devices, use only the cable and adapter supplied with your mod or a reputable USB-C charger rated for the device."
      },
      {
        heading: "Storage and handling",
        body: "Carry loose batteries in a plastic case — never in pockets with keys or coins. Replace wraps on damaged cells immediately. Never use batteries with dents, tears, or unusual heat during use."
      },
      {
        heading: "Know your limits",
        body: "Pair coil resistance with battery amp limits. If you are unsure, ask at your local vape shop or consult your mod's manual. When in doubt, use a regulated device with built-in safety protections rather than mechanical mods."
      }
    ],
    author: "Marcus Lane",
    authorRole: "Safety Editor",
    readTime: "4 min read",
    coverImage: images.products.deviceOxvaPod,
    youtubeVideoId: "pGBX8IJ7uhw",
    relatedYoutube: [
      { id: "pGBX8IJ7uhw", title: "18650 Battery Safety for Vaping" },
      { id: "QJ4wrOaKYDY", title: "Safe Charging Practices" }
    ]
  },
  {
    id: "b5",
    slug: "starter-kit-buying-guide",
    date: "10 Jul 2022",
    tags: "STARTER KITS, BEGINNERS",
    tagList: ["Starter Kits", "Beginners", "Hardware"],
    title: "Starter Kit Buying Guide 2022",
    excerpt:
      "Your first vape device sets the tone for your entire journey. Here is how to pick a starter kit that matches your goals, budget, and lifestyle.",
    content:
      "The right starter kit removes guesswork from your first purchase. Pod systems, pen-style devices, and box-mod bundles each serve different needs — here's how to choose wisely.",
    sections: [
      {
        heading: "Pod systems vs box mods",
        body: "Pod systems like compact pod vapes are discreet, easy to refill, and ideal for nicotine salts. Box mod starter kits offer more power and customization for users who want bigger clouds and interchangeable tanks."
      },
      {
        heading: "What to look for in a bundle",
        body: "A complete starter kit should include the device, at least one coil or pod, a charging cable, and clear instructions. Our Starter Kit Bundle includes everything needed for day one — no separate purchases required."
      }
    ],
    author: "Olivia Grant",
    authorRole: "Product Advisor",
    readTime: "5 min read",
    coverImage: images.categories.starter,
    youtubeVideoId: "9GiO5duBeC4",
    relatedYoutube: [
      { id: "9GiO5duBeC4", title: "Best Starter Vape Kits" },
      { id: "UgqlzMRxJFo", title: "Pod vs Mod — Which Is Right for You?" }
    ]
  },
  {
    id: "b6",
    slug: "premium-eliquid-brands-review",
    date: "25 Jun 2022",
    tags: "E-LIQUIDS, REVIEWS",
    tagList: ["E-Liquids", "Reviews", "Brands"],
    title: "Premium E-Liquid Brands Worth Trying",
    excerpt:
      "From Mafia Mist to Radiola Juices — we break down the standout e-liquid lines available at VapeX and what makes each one unique.",
    content:
      "Not all e-liquids are created equal. Premium lines invest in quality ingredients, rigorous testing, and distinctive branding. Here are the brands our customers keep coming back for.",
    sections: [
      {
        heading: "Mafia Mist",
        body: "Bold label design meets punchy flavor profiles. Berry Ice delivers a frosty fruit blast, while Morango Cremoso offers a creamy strawberry experience in a convenient 60ml format. Perfect for sub-ohm devices and flavor chasers."
      },
      {
        heading: "Radiola Juices",
        body: "Music-inspired branding with gramophone artwork and vinyl-record labels. Take Five (70VG/30PG) and Perfect Day (80VG/20PG) cater to cloud lovers, while Strawberry Fields Forever brings a rich berry profile with vintage flair."
      }
    ],
    author: "Daniel Reed",
    authorRole: "Review Editor",
    readTime: "6 min read",
    coverImage: images.products.eliquidMafiaMist,
    youtubeVideoId: "rN4tnJR4BcQ",
    relatedYoutube: [
      { id: "rN4tnJR4BcQ", title: "Top E-Liquid Brands Reviewed" },
      { id: "fb1PfwEIoHY", title: "How to Choose Quality E-Liquid" }
    ]
  }
];
