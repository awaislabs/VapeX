import { BlogPost } from "@/types/site";
import { blogPosts } from "@/lib/site-data";

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return blogPosts.filter((item) => item.id !== post.id).slice(0, limit);
}

export function getFeaturedPost() {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0];
}

export function getAllTags() {
  const tags = new Set<string>();
  blogPosts.forEach((post) => post.tagList.forEach((tag) => tags.add(tag)));
  return Array.from(tags);
}
