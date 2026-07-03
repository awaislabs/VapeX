import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { BlogPost } from "@/types/site";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden border border-black/10 bg-white transition hover:shadow-card lg:col-span-2">
        <Link href={`/blog/${post.slug}`} className="grid lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden bg-brand-deeper lg:aspect-auto lg:min-h-[320px]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Featured
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="flex flex-wrap gap-2">
              {post.tagList.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="bg-brand/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-4 text-[1.5rem] font-bold leading-tight text-black transition group-hover:text-brand md:text-[1.75rem]">
              {post.title}
            </h2>
            <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-black/60">{post.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-[11px] text-black/50">
              <span className="flex items-center gap-1">
                <User size={12} />
                {post.author}
              </span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
              Read Article
              <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-black/10 bg-white transition hover:border-brand/30 hover:shadow-card">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-deeper">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap gap-2">
            {post.tagList.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-surface-light px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-black/55"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="mt-3 text-[17px] font-bold leading-snug text-black transition group-hover:text-brand">
            {post.title}
          </h2>
          <p className="mt-2 line-clamp-2 flex-1 text-[12px] leading-5 text-black/60">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-black/8 pt-4 text-[10px] text-black/45">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
