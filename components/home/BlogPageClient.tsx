"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { blogPosts } from "@/lib/site-data";

const POSTS_PER_PAGE = 2;

export function BlogPageClient() {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);

  const posts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return blogPosts.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage]);

  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">blog</h1>
        </Container>
      </section>
      <Container>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        <section className="space-y-6 pb-12 pt-6">
          {posts.map((post) => (
            <article key={post.id} className="border border-black/10 bg-white p-7 transition hover:shadow-card">
              <p className="text-xs uppercase tracking-[0.2em] text-black/55">
                {post.date} {post.tags}
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="transition hover:text-brand">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 leading-7 text-black/70">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-brand transition hover:underline"
              >
                Read More
              </Link>
            </article>
          ))}
        </section>
        {totalPages > 1 ? (
          <div className="pb-8">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setPage(pageNumber)}
                    className={`h-8 w-8 border text-xs transition ${
                      pageNumber === currentPage
                        ? "border-brand bg-brand text-white"
                        : "border-black/20 hover:border-brand"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
