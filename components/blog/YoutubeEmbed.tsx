import Image from "next/image";
import { Play } from "lucide-react";
import { getYoutubeThumbnail, getYoutubeWatchUrl } from "@/lib/videos";

type YoutubeEmbedProps = {
  videoId: string;
  title: string;
};

export function YoutubeEmbed({ videoId, title }: YoutubeEmbedProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden border border-black/10 bg-black shadow-card">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

type YoutubeLinkProps = {
  videoId: string;
  title: string;
  duration?: string;
};

export function YoutubeLink({ videoId, title, duration }: YoutubeLinkProps) {
  return (
    <a
      href={getYoutubeWatchUrl(videoId)}
      target="_blank"
      rel="noreferrer"
      className="group flex gap-3 overflow-hidden rounded border border-black/10 bg-white transition hover:border-brand hover:shadow-card"
    >
      <div className="relative h-[72px] w-[108px] shrink-0 overflow-hidden bg-brand-deeper sm:h-20 sm:w-[120px]">
        <Image
          src={getYoutubeThumbnail(videoId, "hq")}
          alt={title}
          fill
          sizes="120px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/40" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white shadow-lg transition group-hover:scale-110">
            <Play size={14} fill="currentColor" className="ml-0.5" />
          </span>
        </span>
        {duration ? (
          <span className="absolute bottom-1 right-1 rounded bg-black/75 px-1.5 py-0.5 text-[9px] font-medium text-white">
            {duration}
          </span>
        ) : null}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center py-2 pr-3">
        <span className="line-clamp-2 text-[12px] font-semibold leading-4 text-black transition group-hover:text-brand sm:text-[13px] sm:leading-5">
          {title}
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-black/40">
          Watch on YouTube
        </span>
      </div>
    </a>
  );
}

type VideoCardProps = {
  videoId: string;
  title: string;
  description: string;
  duration?: string;
};

export function VideoCard({ videoId, title, description, duration }: VideoCardProps) {
  return (
    <a
      href={getYoutubeWatchUrl(videoId)}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col overflow-hidden border border-black/10 bg-white transition hover:border-brand hover:shadow-card"
    >
      <div className="relative aspect-video overflow-hidden bg-brand-deeper">
        <Image
          src={getYoutubeThumbnail(videoId, "hq")}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg">
            <Play size={20} fill="currentColor" className="ml-0.5" />
          </span>
        </div>
        <span className="absolute bottom-3 left-3 right-3">
          <span className="inline-flex rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white">
            {duration ?? "Watch"}
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[14px] font-bold leading-5 text-black transition group-hover:text-brand">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-[12px] leading-5 text-black/60">
          {description}
        </p>
        <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
          Watch Video →
        </span>
      </div>
    </a>
  );
}
