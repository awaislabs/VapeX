import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { YoutubeEmbed, YoutubeLink } from "@/components/blog/YoutubeEmbed";
import { BlogPost } from "@/types/site";
import { getRelatedPosts } from "@/lib/blog";

type BlogDetailContentProps = {
  post: BlogPost;
};

export function BlogDetailContent({ post }: BlogDetailContentProps) {
  const related = getRelatedPosts(post);

  return (
    <div>
      <section className="relative min-h-[340px] overflow-hidden bg-brand-deeper md:min-h-[420px]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deeper via-brand-deeper/80 to-brand/60" />
        <Container className="relative z-10 flex min-h-[340px] flex-col justify-end pb-12 pt-24 md:min-h-[420px]">
          <Breadcrumbs
            variant="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]}
          />
          <div className="mt-4 max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {post.tagList.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-[1.75rem] font-bold uppercase leading-tight tracking-[0.02em] text-white md:text-[2.5rem]">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-[12px] text-white/75">
              <span className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <User size={14} />
                </span>
                <span>
                  <span className="block font-semibold text-white">{post.author}</span>
                  <span className="text-[11px] text-white/60">{post.authorRole}</span>
                </span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <article className="min-w-0">
              <p className="text-[1.125rem] font-medium leading-8 text-black/80">{post.content}</p>

              <div className="my-10">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                  Watch on YouTube
                </p>
                <YoutubeEmbed videoId={post.youtubeVideoId} title={post.title} />
              </div>

              <div className="space-y-10">
                {post.sections.map((section, index) => (
                  <div key={index}>
                    {section.heading ? (
                      <h2 className="text-[1.25rem] font-bold uppercase tracking-[0.04em] text-black">
                        {section.heading}
                      </h2>
                    ) : null}
                    <p
                      className={`text-[14px] leading-8 text-black/70 ${
                        section.heading ? "mt-4" : ""
                      }`}
                    >
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-l-4 border-brand bg-surface-light p-6">
                <p className="text-[15px] italic leading-7 text-black/75">
                  &ldquo;Knowledge is the best upgrade you can make to your vape setup. Stay
                  informed, vape responsibly, and enjoy the journey.&rdquo;
                </p>
                <p className="mt-3 text-[12px] font-semibold text-brand">— VapeX Editorial Team</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 border-t border-black/10 pt-8">
                {post.tagList.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="border border-black/12 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-black/55 transition hover:border-brand hover:text-brand"
                  >
                    #{tag.replace(/\s+/g, "")}
                  </Link>
                ))}
              </div>

              <Link
                href="/blog"
                className="mt-8 inline-flex text-[11px] font-bold uppercase tracking-[0.14em] text-brand transition hover:underline"
              >
                ← Back to all articles
              </Link>
            </article>

            <aside className="space-y-8">
              <div className="sticky top-6 space-y-8">
                <div className="border border-black/10 bg-surface-light p-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                    Related Videos
                  </h3>
                  <div className="mt-4 space-y-3">
                    {post.relatedYoutube.map((video) => (
                      <YoutubeLink key={video.id} videoId={video.id} title={video.title} />
                    ))}
                  </div>
                </div>

                <div className="border border-black/10 bg-white p-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                    More Articles
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {related.map((item) => (
                      <li key={item.id} className="border-b border-black/8 pb-4 last:border-0 last:pb-0">
                        <Link
                          href={`/blog/${item.slug}`}
                          className="text-[13px] font-semibold leading-5 text-black transition hover:text-brand"
                        >
                          {item.title}
                        </Link>
                        <p className="mt-1 text-[11px] text-black/45">{item.date}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand p-6 text-white">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.1em]">
                    Ready to upgrade?
                  </h3>
                  <p className="mt-2 text-[12px] leading-5 text-white/75">
                    Browse our full range of hardware and e-liquids.
                  </p>
                  <Link
                    href="/products"
                    className="mt-4 inline-flex bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand transition hover:bg-white/90"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-surface-light py-14">
        <Container>
          <h2 className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-black/45">
            You May Also Like
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.id} post={item} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
