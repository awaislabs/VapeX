import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { blogPosts } from "@/lib/site-data";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailRoute({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">blog</h1>
        </Container>
      </section>
      <Container>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title }
          ]}
        />
        <article className="max-w-3xl py-12">
          <p className="text-xs uppercase tracking-[0.2em] text-black/55">
            {post.date} {post.tags}
          </p>
          <h2 className="mt-4 text-4xl font-semibold">{post.title}</h2>
          <p className="mt-8 leading-8 text-black/75">{post.content}</p>
          <Link
            href="/blog"
            className="mt-10 inline-block text-sm font-semibold text-brand transition hover:underline"
          >
            ← Back to blog
          </Link>
        </article>
      </Container>
    </div>
  );
}
