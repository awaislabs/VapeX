"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/pages/PageHero";
import { VideoCard } from "@/components/blog/YoutubeEmbed";
import { videos } from "@/lib/videos";

export function VideosPageClient() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const list = query
      ? videos.filter(
          (video) =>
            video.title.toLowerCase().includes(query) ||
            video.description.toLowerCase().includes(query)
        )
      : videos;
    return showAll ? list : list.slice(0, 4);
  }, [search, showAll]);

  return (
    <div>
      <PageHero
        title="Videos"
        subtitle="Expert vape guides, safety tips, and product walkthroughs — watch and learn on YouTube."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Videos" }]}
      />
      <Container>
        <section className="py-12">
          <div className="mb-8 flex h-12 items-center gap-2 border border-black/12 bg-white px-4 shadow-sm">
            <Search size={16} className="text-black/55" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search videos..."
              className="w-full bg-transparent text-sm text-black outline-none"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="border border-black/10 bg-white p-12 text-center">
              <p className="font-semibold">No videos found</p>
              <p className="mt-2 text-sm text-black/60">Try a different search term.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {filtered.map((video) => (
                <VideoCard
                  key={video.id}
                  videoId={video.youtubeId}
                  title={video.title}
                  description={video.description}
                  duration={video.duration}
                />
              ))}
            </div>
          )}

          {!showAll && videos.length > 4 && !search ? (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="border border-brand bg-brand px-8 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-brand-hover"
              >
                View All Videos
              </button>
            </div>
          ) : null}
        </section>
      </Container>
    </div>
  );
}
