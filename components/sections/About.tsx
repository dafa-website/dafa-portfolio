"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ABOUT_PREVIEW_COPY } from "@/data/home";
import type { About } from "@/types";
import { MapPin, Briefcase, User, Sparkles, Heart, Rocket } from "lucide-react";

interface AboutSectionProps {
    about: About;
}

export default function AboutSection({ about }: AboutSectionProps) {
    const imageUrl = "/images/aboutme.png";

    return (
        <section id="about" className="relative py-4 md:py-8 bg-background">
            <div className="section-divider mx-auto mb-12 max-w-7xl md:mb-16" />

            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid items-start gap-12 md:grid-cols-[1fr_1.5fr] lg:gap-24">
                    {/* Left Column - Photo & Stats */}
                    <div className="flex flex-col gap-6">
                        <ScrollReveal variant="fade-left">
                            <div className="relative aspect-[4/5] w-full overflow-hidden">
                                <Image
                                    src={imageUrl}
                                    alt={about.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    className="object-contain object-bottom"
                                />
                                {/* Bottom fade to blend into background */}
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
                                {/* Side fades for seamless blending */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
                                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
                            </div>
                        </ScrollReveal>

                        {/* Stats Row */}
                        <ScrollReveal delay={0.1}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-start justify-center gap-2 rounded-2xl bg-[#111111] p-5 border border-white/5">
                                    <MapPin size={20} className="text-foreground" />
                                    <div>
                                        <p className="text-[10px] font-medium uppercase tracking-widest text-muted">
                                            Location
                                        </p>
                                        <p className="mt-1 font-semibold text-foreground">
                                            {about.location || "Indonesia"}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-center gap-2 rounded-2xl bg-[#111111] p-5 border border-white/5">
                                    <Briefcase size={20} className="text-foreground" />
                                    <div>
                                        <p className="text-[10px] font-medium uppercase tracking-widest text-muted">
                                            Experience
                                        </p>
                                        <p className="mt-1 font-semibold text-foreground">
                                            {about.experience || "4+"} Years
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column - Text & Philosophy */}
                    <div className="flex flex-col gap-8 md:pt-8">
                        <ScrollReveal delay={0.2}>
                            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                                <User size={14} />
                                <span>
                                    {ABOUT_PREVIEW_COPY.headingLineOne}{" "}
                                    {ABOUT_PREVIEW_COPY.headingLineTwo}
                                </span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <h2
                                className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                {ABOUT_PREVIEW_COPY.intro}
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <p className="max-w-2xl text-base leading-relaxed text-muted">
                                {ABOUT_PREVIEW_COPY.subtitle} {ABOUT_PREVIEW_COPY.body}
                            </p>
                        </ScrollReveal>

                        {/* Core Philosophy Section */}
                        <div className="mt-6 flex flex-col gap-8 border-l border-border/50 pl-6 md:pl-8">
                            <ScrollReveal delay={0.5}>
                                <div className="relative">
                                    <div className="absolute -left-[33px] md:-left-[41px] top-1 flex h-6 w-6 items-center justify-center bg-background">
                                        <div className="h-2 w-2 rounded-full bg-foreground" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground">Core Philosophy</h3>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.55}>
                                <div className="flex gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-foreground border border-white/5">
                                        <Sparkles size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Clean & Dynamic Design</h4>
                                        <p className="mt-2 text-sm leading-relaxed text-muted">
                                            Designing for humans first, aesthetics second. I prioritize creating professional, high-end visual systems that immediately communicate value.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.6}>
                                <div className="flex gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-foreground border border-white/5">
                                        <Heart size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Empathy-Driven Content</h4>
                                        <p className="mt-2 text-sm leading-relaxed text-muted">
                                            Every piece of content is an opportunity to solve a user&apos;s pain point or tell a compelling story. I bridge the gap between business goals and audience delight.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.65}>
                                <div className="flex gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-foreground border border-white/5">
                                        <Rocket size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Continuous Innovation</h4>
                                        <p className="mt-2 text-sm leading-relaxed text-muted">
                                            In the fast-paced creative ecosystem, I stay ahead by mastering modern tools and adapting to the latest digital production trends.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
