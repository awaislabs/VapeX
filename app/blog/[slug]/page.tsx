import { notFound } from "next/navigation";
import { BlogDetailContent } from "@/components/blog/BlogDetailContent";
import { getBlogBySlug } from "@/lib/blog";
import { blogPosts } from "@/lib/site-data";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailRoute({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailContent post={post} />;
}
