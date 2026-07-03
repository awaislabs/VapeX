"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { videos } from "@/lib/site-data";

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
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold">Videos</h1>
        </Container>
      </section>
      <Container>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Videos" }]} />
        <section>
          <div className="mb-8 mt-10 flex h-12 items-center gap-2 border border-black/15 bg-white px-4">
            <Search size={16} className="text-black/55" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
              className="w-full bg-transparent text-sm text-black outline-none"
            />
          </div>
          {filtered.length === 0 ? (
            <div className="border border-black/10 bg-white p-12 text-center">
              <p className="font-semibold">No videos found</p>
              <p className="mt-2 text-sm text-black/60">Try a different search term.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  className="border border-black/10 bg-white p-4 transition hover:shadow-card"
                >
                  <div className="mb-4 aspect-video bg-gradient-to-br from-[#2f0259] to-[#4f0d92]" />
                  <p className="text-sm text-black/65">{item.title}</p>
                </article>
              ))}
            </div>
          )}
        </section>
        {!showAll && videos.length > 4 ? (
          <div className="py-10">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="border border-black/30 px-6 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-brand hover:text-brand"
            >
              view all
            </button>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
