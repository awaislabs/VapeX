import { BlogPost, Product, VideoItem } from "@/types/site";
import { images } from "@/lib/images";

export const navItems = ["Home", "aBOUT US", "SERVICES", "PAGES", "CONTACT"];

export const products: Product[] = [
  {
    id: "p1",
    title: "THE FINGER OF GOD VAPE",
    subtitle: "MAGICAL PSYCHEDELIC VAPE",
    price: "$79.90",
    oldPrice: "$90.90",
    image: images.products.p1
  },
  {
    id: "p2",
    title: "The Finger of God Extender",
    subtitle: "Monoamine Oxidase Inhibitor",
    price: "$79.90",
    oldPrice: "$90.90",
    image: images.products.p2
  },
  {
    id: "p3",
    title: "Mushroom Chocolate Gems",
    subtitle: "Nano infused mushroom extract",
    price: "$79.90",
    oldPrice: "$90.90",
    image: images.products.p3
  },
  {
    id: "p4",
    title: "Cannabis Liquid Diamond Disposable",
    subtitle: "Pure THC, Unmatched Potency",
    price: "$79.90",
    oldPrice: "$90.90",
    image: images.products.p4
  }
];

export const blogPosts: BlogPost[] = Array.from({ length: 4 }).map((_, idx) => ({
  id: `b${idx + 1}`,
  date: "28/11/2022",
  tags: "VAPE HARDWARE, VAPING",
  title: "Two Million Reasons To Be Considerate",
  excerpt:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos...Read More"
}));

export const videos: VideoItem[] = Array.from({ length: 8 }).map((_, idx) => ({
  id: `v${idx + 1}`,
  title: "DMT Always Shows Shane Mauss the Same... Watch Later   Share"
}));
