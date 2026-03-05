"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { About } from "@/types";
import { Instagram, Twitter, Linkedin } from "lucide-react";



const socialIcons: Record<string, React.ReactNode> = {
    Instagram: <Instagram size={18} />,
    Twitter: <Twitter size={18} />,
    LinkedIn: <Linkedin size={18} />,
    Behance: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
    ),
};

interface AboutSectionProps {
    about: About;
}

export default function AboutSection({ about }: AboutSectionProps) {
    const imageUrl =
        about.profileImageUrl ||
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80";

    return (
        <section id="about" className="relative py-28 md:py-36">
            <div className="section-divider mx-auto mb-28 max-w-7xl md:mb-36" />

            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16 lg:gap-24">
                    <ScrollReveal variant="fade-left">
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                            <Image
                                src={imageUrl}
                                alt={about.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 45vw"
                                className="object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10 ring-inset" />
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-col gap-6">
                        <ScrollReveal delay={0.1}>
                            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                                About Me
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <h2
                                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                {about.name}
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="text-sm font-light uppercase tracking-[0.2em] text-muted">
                                {about.tagline}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <p className="max-w-lg text-base leading-7 text-muted">
                                {about.bio}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.5}>
                            <div className="mt-6 flex flex-wrap gap-8 sm:gap-12">
                                {about.experience && (
                                    <div>
                                        <p className="text-3xl font-semibold text-foreground">
                                            {about.experience}
                                        </p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                                            Years Experience
                                        </p>
                                    </div>
                                )}
                                {about.location && (
                                    <div>
                                        <p className="text-3xl font-semibold text-foreground">
                                            {about.location}
                                        </p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                                            Based In
                                        </p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-3xl font-semibold text-foreground">
                                        50+
                                    </p>
                                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                                        Clients Served
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.55}>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {["Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Figma", "CapCut", "Canva"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.6}>
                            <div className="mt-4 flex gap-4">
                                {about.socialLinks?.map((link) => (
                                    <a
                                        key={link.platform}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-accent hover:text-accent"
                                        aria-label={link.platform}
                                    >
                                        {socialIcons[link.platform] || (
                                            <span className="text-xs">{link.platform[0]}</span>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
