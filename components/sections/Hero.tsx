"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";



interface HeroProps {
    name?: string;
    tagline?: string;
    videoUrl?: string;
}

export default function Hero({
    name = "DAFA",
    tagline = "Multimedia Designer · Video Editor · Motion Graphic Artist",
    videoUrl,
}: HeroProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
            });
        }
    }, []);

    return (
        <section
            id="hero"
            className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        >
            {videoUrl ? (
                <video
                    ref={videoRef}
                    src={videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"
                        }`}
                />
            ) : null}

            <div
                className="absolute inset-0 animate-hero-gradient"
                style={{
                    background:
                        "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)",
                    backgroundSize: "400% 400%",
                }}
            />

            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
                }}
            />

            <div className="absolute inset-0 bg-black/40" />

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
                }}
            />

            {/* Content — Centered */}
            <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">
                <AnimatedHeading
                    text={name}
                    as="h1"
                    className="w-full text-6xl font-bold tracking-[0.2em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
                    delay={0.3}
                />

                {/* Accent line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 h-[1px] w-12 origin-center bg-accent"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-5 text-xs font-light uppercase tracking-[0.35em] text-white/50 sm:text-sm md:text-base"
                >
                    {tagline}
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
            >
                <span className="text-[10px] font-light uppercase tracking-[0.3em] text-white/40">
                    Scroll
                </span>
                <div className="flex h-8 w-[1px] flex-col items-center overflow-hidden">
                    <div className="h-3 w-[1px] animate-scroll-indicator bg-white/40" />
                </div>
            </motion.div>
        </section>
    );
}
