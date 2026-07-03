"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/pages/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { YoutubeLink } from "@/components/blog/YoutubeEmbed";
import { blogPosts } from "@/lib/site-data";
import { featuredVideos } from "@/lib/videos";
import { getAllTags, getFeaturedPost } from "@/lib/blog";

const POSTS_PER_PAGE = 4;

export function BlogPageClient() {
  const searchParams = useSearchParams();
  const tagFromUrl = searchParams.get("tag");

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(tagFromUrl);

  useEffect(() => {
    if (tagFromUrl) setActiveTag(tagFromUrl);
  }, [tagFromUrl]);

  const featured = getFeaturedPost();
  const allTags = getAllTags();

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tagList.some((tag) => tag.toLowerCase().includes(query));
      const matchesTag = !activeTag || post.tagList.includes(activeTag);
      return matchesSearch && matchesTag && post.id !== featured?.id;
    });
  }, [search, activeTag, featured?.id]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const posts = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div>
      <PageHero
        title="Blog"
        subtitle="Guides, reviews, and insights from the VapeX team — covering hardware, e-liquids, safety, and everything in between."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            <div>
              {featured ? (
                <div className="mb-10">
                  <BlogCard post={featured} featured />
                </div>
              ) : null}

              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/45">
                  Latest Articles
                </h2>
                <div className="flex h-11 max-w-sm flex-1 items-center gap-2 border border-black/12 bg-surface-light px-4 sm:max-w-xs">
                  <Search size={15} className="shrink-0 text-black/40" />
                  <input
                    value={search}
                    onChange={(event) => {
                      setSearch(event.target.value);
                      setPage(1);
                    }}
                    placeholder="Search articles..."
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTag(null);
                    setPage(1);
                  }}
                  className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] transition ${
                    !activeTag
                      ? "bg-brand text-white"
                      : "border border-black/15 bg-white text-black/60 hover:border-brand"
                  }`}
                >
                  All
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setActiveTag(tag);
                      setPage(1);
                    }}
                    className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] transition ${
                      activeTag === tag
                        ? "bg-brand text-white"
                        : "border border-black/15 bg-white text-black/60 hover:border-brand"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {posts.length === 0 ? (
                <div className="border border-black/10 bg-surface-light p-12 text-center">
                  <p className="font-semibold text-black">No articles found</p>
                  <p className="mt-2 text-sm text-black/55">Try a different search or category.</p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}

              {totalPages > 1 ? (
                <div className="mt-10 flex items-center justify-center gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <button
                        key={pageNumber}
                        type="button"
                        onClick={() => setPage(pageNumber)}
                        className={`h-9 w-9 border text-xs font-semibold transition ${
                          pageNumber === currentPage
                            ? "border-brand bg-brand text-white"
                            : "border-black/15 hover:border-brand"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <aside className="space-y-8">
              <div className="border border-black/10 bg-surface-light p-6">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                  Categories
                </h3>
                <ul className="mt-4 space-y-2">
                  {allTags.map((tag) => (
                    <li key={tag}>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTag(tag);
                          setPage(1);
                        }}
                        className="text-[13px] text-black/65 transition hover:text-brand"
                      >
                        {tag}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-black/10 bg-white p-6">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                  Related Videos
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-black/55">
                  Watch expert guides on YouTube
                </p>
                <div className="mt-4 space-y-3">
                  {featuredVideos.map((video) => (
                    <YoutubeLink
                      key={video.id}
                      videoId={video.youtubeId}
                      title={video.title}
                      duration={video.duration}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-brand p-6 text-white">
                <h3 className="text-[14px] font-bold uppercase tracking-[0.1em]">
                  Shop VapeX
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-white/75">
                  Explore mods, e-liquids, coils, and starter kits.
                </p>
                <Link
                  href="/products"
                  className="mt-5 inline-flex bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand transition hover:bg-white/90"
                >
                  All Products
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
