"use client";

import { useRef, useEffect, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";



interface VideoItem {
    url?: string;
    title: string;
    platform?: string;
    views?: string;
}

interface VideoReelProps {
    videos?: VideoItem[];
    title?: string;
    subtitle?: string;
}

const defaultVideos: VideoItem[] = [
    { title: "Katalis Brand Launch", platform: "TikTok", views: "2M+" },
    { title: "Taulany TV — YKJ Promo", platform: "Instagram", views: "5M+" },
    { title: "Prediksi Latihan Voli", platform: "YouTube", views: "#2 Trending" },
    { title: "Sidak Rumah Rigen", platform: "YouTube", views: "Trending ID" },
    { title: "EGC Campaign Katalis", platform: "Instagram", views: "2K+ Reach" },
    { title: "NRB TV Opening Bumper", platform: "Broadcast", views: "Daily Airing" },
];

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.play().catch(() => {});
                } else if (videoRef.current) {
                    videoRef.current.pause();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <ScrollReveal delay={0.1 + index * 0.1}>
            <div
                ref={cardRef}
                className="group relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[280px] overflow-hidden rounded-xl"
            >
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-card">
                    {video.url ? (
                        <video
                            ref={videoRef}
                            src={video.url}
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="relative flex h-full w-full items-center justify-center">
                            <div
                                className="absolute inset-0 animate-hero-gradient opacity-50"
                                style={{
                                    background: `linear-gradient(${135 + index * 30}deg, #141414 0%, #1a1a2e 30%, #16213e 50%, #1a1a2e 70%, #141414 100%)`,
                                    backgroundSize: "400% 400%",
                                }}
                            />
                            <div className="relative z-10 flex flex-col items-center gap-3">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-accent group-hover:scale-110">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />

                    {video.platform && (
                        <div className="absolute top-3 left-3 z-10">
                            <span className="inline-block rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
                                {video.platform}
                            </span>
                        </div>
                    )}

                    <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                        <h4 className="text-sm font-semibold text-white leading-tight">
                            {video.title}
                        </h4>
                        {video.views && (
                            <p className="mt-1 text-xs text-white/50">{video.views}</p>
                        )}
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
                </div>
            </div>
        </ScrollReveal>
    );
}

export default function VideoReel({
    videos,
    title = "Video Works",
    subtitle = "Short-form content, broadcast assets, and creative edits",
}: VideoReelProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const displayVideos = videos && videos.length > 0 ? videos : defaultVideos;

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener("scroll", checkScroll, { passive: true });
        checkScroll();
        return () => el.removeEventListener("scroll", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const amount = 300;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <section
            id="reel"
            className="relative overflow-hidden py-28 md:py-36"
        >
            <div className="section-divider mx-auto mb-28 max-w-7xl md:mb-36" />

            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <ScrollReveal className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                            Showreel
                        </p>
                        <h2
                            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            {title}
                        </h2>
                        <p className="mt-3 max-w-md text-sm text-muted">
                            {subtitle}
                        </p>
                    </div>

                    <div className="mt-6 hidden gap-2 md:mt-0 md:flex">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted"
                            aria-label="Scroll left"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted"
                            aria-label="Scroll right"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </ScrollReveal>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto px-6 pb-4 lg:px-12 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                <div className="hidden flex-shrink-0 lg:block" style={{ width: "calc((100vw - 80rem) / 2)" }} />

                {displayVideos.map((video, i) => (
                    <div key={i} className="snap-start">
                        <VideoCard video={video} index={i} />
                    </div>
                ))}

                <div className="flex-shrink-0 w-6 lg:w-12" />
            </div>
        </section>
    );
}
