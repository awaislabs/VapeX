export type ProductVariant = {
  id: string;
  label: string;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  description: string;
  longDescription: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  brand: string;
  category: string;
  onSale: boolean;
  variants?: ProductVariant[];
};

export type BlogPost = {
  id: string;
  slug: string;
  date: string;
  tags: string;
  tagList: string[];
  title: string;
  excerpt: string;
  content: string;
  sections: { heading?: string; body: string }[];
  author: string;
  authorRole: string;
  readTime: string;
  coverImage: string;
  featured?: boolean;
  youtubeVideoId: string;
  relatedYoutube: { id: string; title: string }[];
};

export type VideoItem = {
  id: string;
  title: string;
  description: string;
};

export type CartItem = {
  productId: string;
  slug: string;
  variantId?: string;
  variantLabel?: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  quantity: number;
};

export type SortOption = "latest" | "price-asc" | "price-desc" | "name-asc";

export type ShopFilters = {
  search: string;
  categories: string[];
  brands: string[];
  minPrice: number;
  maxPrice: number;
  onSale: boolean;
  inStock: boolean;
  sort: SortOption;
  page: number;
};
