"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

interface HeroProps {
    name?: string;
    bio?: string;
    imageUrl?: string;
    ctaText?: string;
    ctaLink?: string;
    cvUrl?: string;
    tagline?: string;
    videoUrl?: string;
    location?: string;
    experience?: string;
}

export default function Hero({
    name = "Dafa",
    bio = "Multimedia designer based in Indonesia, focused on visual storytelling through video editing, motion graphics, and digital content.",
    imageUrl = "/images/hero-image.png",
    ctaText = "Let's Work Together",
    ctaLink = "#contact",
    cvUrl = "/cv.pdf",
    tagline = "Multimedia Designer & Visual Creator",
    videoUrl,
    location = "Depok, ID",
    experience = "5+",
}: HeroProps) {
    return (
        <section
            id="hero"
            className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]"
        >
            {/* Figure-ground layering for better text contrast and focus */}
            {videoUrl && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
                    src={videoUrl}
                />
            )}

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.1) 0%, transparent 52%), radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.06) 0%, transparent 50%), linear-gradient(to bottom, rgba(10,10,10,0.82), rgba(10,10,10,0.94))",
                }}
            />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
                {/* Left Content */}
                <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Availability Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8 flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2"
                    >
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-green-400">Available for creative projects</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Hi, I&apos;m
                        </h1>
                        <h1 className="text-4xl font-bold leading-tight text-emerald-400 sm:text-5xl md:text-6xl lg:text-7xl">
                            {name}.
                        </h1>
                    </motion.div>

                    {/* Grouped intro block for stronger hierarchy and proximity */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                         className="mt-6 max-w-xl"
                    >
                        {tagline && (
                            <h2 className="mb-3 text-xl font-medium tracking-wide text-emerald-300 sm:text-2xl">
                                {tagline}
                            </h2>
                        )}
                        
                        <p className="text-base leading-7 text-white/75 sm:text-lg">
                            {bio}
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
                                <span className="font-semibold text-white">{experience}</span> years experience
                            </div>
                            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
                                Based in <span className="font-semibold text-white">{location}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={ctaLink}
                            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
                        >
                            {ctaText}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href={cvUrl}
                            download
                            className="group flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
                        >
                            Download CV
                            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Content - Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 lg:mt-0"
                >
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-emerald-400/10 blur-3xl" />
                        <div className="relative h-[380px] w-[320px] sm:h-[500px] sm:w-[400px] lg:h-[540px] lg:w-[460px]">
                            <Image
                                src={imageUrl}
                                alt={name}
                                fill
                                priority
                                className="object-contain object-bottom"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
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