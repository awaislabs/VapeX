import { VideoItem } from "@/types/site";

export type YoutubeVideo = {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  duration?: string;
};

export const featuredVideos: YoutubeVideo[] = [
  {
    id: "yv1",
    youtubeId: "fb1PfwEIoHY",
    title: "Vaping 101 — Complete Beginner's Guide",
    description: "An independent introduction to vaping for smokers making the switch.",
    duration: "12:07"
  },
  {
    id: "yv2",
    youtubeId: "pGBX8IJ7uhw",
    title: "18650 Battery Safety for Vaping",
    description: "How to charge external batteries safely and avoid common mistakes.",
    duration: "9:42"
  },
  {
    id: "yv3",
    youtubeId: "rN4tnJR4BcQ",
    title: "VG vs PG — What's the Difference?",
    description: "How VG and PG ratios affect flavor, clouds, and throat hit.",
    duration: "4:18"
  },
  {
    id: "yv4",
    youtubeId: "QJ4wrOaKYDY",
    title: "Vape Coils Explained",
    description: "Watts, ohms, and resistance — how your coil heats e-liquid.",
    duration: "6:55"
  }
];

export const videos: VideoItem[] = [
  ...featuredVideos,
  {
    id: "yv5",
    youtubeId: "9zBjM5gswpQ",
    title: "How to Set Up Your First Vape Kit",
    description: "Step-by-step beginner guide for pod and mod devices.",
    duration: "8:00"
  },
  {
    id: "yv6",
    youtubeId: "9GiO5duBeC4",
    title: "Pod Systems — Beginner Walkthrough",
    description: "Filling, priming, and replacing pods on a starter device.",
    duration: "3:49"
  },
  {
    id: "yv7",
    youtubeId: "UgqlzMRxJFo",
    title: "Pod Systems vs Box Mods",
    description: "Compare device types and find the right fit for your style.",
    duration: "7:22"
  },
  {
    id: "yv8",
    youtubeId: "rburezUQDZw",
    title: "Coil Priming & Maintenance Tips",
    description: "Prime coils correctly and know when to replace them.",
    duration: "6:10"
  }
];

export function getYoutubeThumbnail(youtubeId: string, quality: "hq" | "mq" | "max" = "hq") {
  const file = quality === "max" ? "maxresdefault" : quality === "hq" ? "hqdefault" : "mqdefault";
  return `https://img.youtube.com/vi/${youtubeId}/${file}.jpg`;
}

export function getYoutubeWatchUrl(youtubeId: string) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}
