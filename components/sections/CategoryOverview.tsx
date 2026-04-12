"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CategoryOverviewProps {
    title?: string;
    description?: string;
    videoUrl?: string;
}

export default function CategoryOverview({
    title,
    description,
    videoUrl,
}: CategoryOverviewProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const syncMuted = (video: HTMLVideoElement) => {
        video.muted = true;
        video.defaultMuted = true;
        video.volume = 0;
    };

    useEffect(() => {
        if (!videoUrl || !videoRef.current) return;

        const attemptPlay = async () => {
            if (!videoRef.current) return;

            syncMuted(videoRef.current);

            try {
                await videoRef.current.play();
            } catch {
                // Autoplay can be blocked by the browser; ignore silently.
            }
        };

        attemptPlay();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        void attemptPlay();
                    }
                });
            },
            { threshold: 0.25 },
        );

        observer.observe(videoRef.current);

        return () => {
            observer.disconnect();
        };
    }, [videoUrl]);

    const heading = title || "Overview";

    return (
        <section id="expertise" className="relative py-20 pb-0 bg-black">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                
                {/* Header Section */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
                        <h2
                            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
                            style={{ fontFamily: "var(--font-montserrat)" }} 
                        >
                            {heading}
                        </h2>
                        {description && (
                            <p className="max-w-2xl text-base md:text-lg text-muted font-medium">
                                {description}
                            </p>
                        )}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <div className="mx-auto w-full max-w-6xl rounded-[28px] border border-white/12 bg-[#0c0c0c] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.6)]">
                        <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-black/70">
                            {videoUrl ? (
                                <video
                                    src={videoUrl}
                                    ref={videoRef}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    onLoadedMetadata={() => {
                                        if (!videoRef.current) return;
                                        syncMuted(videoRef.current);
                                        void videoRef.current.play();
                                    }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-black/60" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                        </div>
                    </div>
                </ScrollReveal>
                
            </div>
        </section>
    );
}
