import { Container } from "@/components/common/Container";
import { blogPosts } from "@/lib/site-data";

export function BlogPage() {
  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">blog</h1>
        </Container>
      </section>
      <Container>
      <section className="space-y-6 pb-12">
        {blogPosts.map((post) => (
          <article key={post.id} className="border border-black/10 bg-white p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-black/55">
              {post.date} {post.tags}
            </p>
            <h2 className="mt-4 text-3xl font-semibold">{post.title}</h2>
            <p className="mt-4 leading-7 text-black/70">{post.excerpt}</p>
          </article>
        ))}
      </section>
      <div className="pb-8">
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((n) => (
            <button key={n} className="h-8 w-8 border border-black/20 text-xs hover:border-brand">
              {n}
            </button>
          ))}
        </div>
      </div>
      </Container>
    </div>
  );
}
