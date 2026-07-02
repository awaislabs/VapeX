import { Container } from "@/components/common/Container";
import { videos } from "@/lib/site-data";
import { Search } from "lucide-react";

export function VideosPage() {
  return (
    <div>
      <section className="page-band py-10">
        <Container>
          <h1 className="text-center text-5xl font-semibold">Videos</h1>
        </Container>
      </section>
      <Container>
      <section>
        <div className="mb-8 mt-10 flex h-12 items-center gap-2 border border-black/15 bg-white px-4">
          <Search size={16} className="text-black/55" />
          <input placeholder="Search" className="w-full bg-transparent text-sm text-black outline-none" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {videos.map((item) => (
            <article key={item.id} className="border border-black/10 bg-white p-4">
              <div className="mb-4 aspect-video bg-gradient-to-br from-[#2f0259] to-[#4f0d92]" />
              <p className="text-sm text-black/65">{item.title}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="py-10">
        <button className="border border-black/30 px-6 py-2 text-xs uppercase tracking-[0.2em]">
          view all
        </button>
      </div>
      </Container>
    </div>
  );
}
