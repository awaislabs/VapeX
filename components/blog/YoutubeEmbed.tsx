type YoutubeEmbedProps = {
  videoId: string;
  title: string;
};

export function YoutubeEmbed({ videoId, title }: YoutubeEmbedProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden border border-black/10 bg-black">
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
};

export function YoutubeLink({ videoId, title }: YoutubeLinkProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 border border-black/10 bg-white p-3 transition hover:border-brand hover:shadow-card"
    >
      <div className="relative flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden bg-brand-deeper">
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
          ▶
        </span>
      </div>
      <span className="text-[13px] font-medium leading-5 text-black transition group-hover:text-brand">
        {title}
      </span>
    </a>
  );
}
