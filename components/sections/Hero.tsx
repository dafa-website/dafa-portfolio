"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
    name?: string;
    bio?: string;
    ctaText?: string;
    ctaLink?: string;
    cvUrl?: string;
    tagline?: string;
    videoUrl?: string;
    location?: string;
    experience?: string;
}

export default function Hero({
    videoUrl,
}: HeroProps) {
    return (
        <section
            id="hero"
            className="relative min-h-screen w-full overflow-hidden bg-black"
        >
            {/* Background Image */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <Image
                    src="/images/Hero.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center lg:object-right"
                    quality={100}
                />
                {/* Gradient overlays for text readability */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Optional video background */}
            {videoUrl && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-10 grayscale"
                    src={videoUrl}
                />
            )}

            {/* Subtle ambient gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.03) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.015) 0%, transparent 50%)",
                }}
            />

            {/* Main content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 py-32 lg:px-12">

                {/* Left — text content */}
                <div className="flex max-w-2xl flex-col items-start text-left">

                    {/* Display name */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1
                            className="text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[1.1] tracking-tight text-white"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Your brand <br />
                            has a <span className="italic font-light text-white/90" style={{ fontFamily: "var(--font-fraunces)" }}>story</span>
                        </h1>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-7 text-lg font-medium tracking-wide text-white/90 sm:text-xl md:text-2xl"
                    >
                        Let&apos;s make sure people actually remember it.
                    </motion.p>

                    {/* Bio + stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 max-w-xl"
                    >
                        <p className="text-base leading-8 text-white/80 sm:text-lg">
                            Every business has something worth saying. <strong className="font-bold text-white">The problem is most of it gets lost in content that blends in. I help brands</strong> cut through that with visuals and creative direction that are built to be remembered, not just scrolled past.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 z-10"
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