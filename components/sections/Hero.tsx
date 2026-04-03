"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

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
    name = "Dafa Rizqullah",
    bio = "Multimedia designer based in Indonesia, focused on visual storytelling through video editing, motion graphics, and digital content.",
    ctaText = "Let's Work Together",
    ctaLink = "#contact",
    cvUrl = "/cv.pdf",
    tagline = "Multimedia Designer & Visual Creator",
    videoUrl,
    location = "Depok, ID",
    experience = "5+",
}: HeroProps) {
    const nameParts = name.split(" ");
    const firstName = nameParts[0] || "Dafa";
    const lastName = nameParts.slice(1).join(" ") || "Rizqullah";

    return (
        <section
            id="hero"
            className="relative min-h-screen w-full overflow-hidden bg-background"
        >
            {/* Optional video background */}
            {videoUrl && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 grayscale"
                    src={videoUrl}
                />
            )}

            {/* Subtle ambient gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.03) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.015) 0%, transparent 50%)",
                }}
            />

            {/* Main content — split layout */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32 lg:flex-row lg:items-center lg:justify-between lg:px-12">

                {/* Left — text content */}
                <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">

                    {/* Availability badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-10 flex items-center gap-3"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 animate-pulse" />
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">
                            Available for creative projects
                        </span>
                    </motion.div>

                    {/* Display name */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1
                            className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.92] tracking-tight text-foreground"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            {firstName}
                            <br />
                            {lastName}
                            <span className="text-foreground/15">.</span>
                        </h1>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-7 text-lg font-medium tracking-wide text-foreground/35 sm:text-xl md:text-2xl"
                    >
                        {tagline}
                    </motion.p>

                    {/* Bio + stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 max-w-xl"
                    >
                        <p className="text-base leading-7 text-foreground/30">
                            {bio}
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                            <div className="rounded-full border border-foreground/8 bg-foreground/[0.03] px-4 py-2 text-sm text-foreground/40">
                                <span className="font-semibold text-foreground/60">{experience}</span>{" "}
                                years experience
                            </div>
                            <div className="rounded-full border border-foreground/8 bg-foreground/[0.03] px-4 py-2 text-sm text-foreground/40">
                                Based in{" "}
                                <span className="font-semibold text-foreground/60">{location}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
                    >
                        <a
                            href={ctaLink}
                            className="group flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-white/10"
                        >
                            {ctaText}
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href={cvUrl}
                            download
                            className="group flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-medium text-foreground/50 transition-all duration-300 hover:border-foreground/30 hover:text-foreground/70"
                        >
                            Download CV
                            <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                        </a>
                    </motion.div>
                </div>

                {/* Right — profile image (transparent cutout) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-16 lg:mt-0"
                >
                    <div className="relative">
                        {/* Glow behind the photo */}
                        <div className="pointer-events-none absolute inset-0 translate-y-8 rounded-full bg-foreground/[0.04] blur-[80px]" />

                        {/* Subtle gradient circle behind the person */}
                        <div
                            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[85%] w-[85%] rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                            }}
                        />

                        {/* Profile image — dark-bg portrait */}
                        <div className="relative h-[380px] w-[320px] sm:h-[480px] sm:w-[400px] lg:h-[560px] lg:w-[460px]">
                            <Image
                                src="/images/hero-profile.png"
                                alt={name}
                                fill
                                priority
                                className="object-contain object-bottom"
                            />
                            {/* Bottom fade to blend into background */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
                            {/* Side fades for seamless blending */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
            >
                <span className="text-[10px] font-light uppercase tracking-[0.3em] text-foreground/20">
                    Scroll
                </span>
                <div className="flex h-8 w-[1px] flex-col items-center overflow-hidden">
                    <div className="h-3 w-[1px] animate-scroll-indicator bg-foreground/20" />
                </div>
            </motion.div>
        </section>
    );
}