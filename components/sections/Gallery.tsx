"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Project } from "@/types";



interface SelectedWorksProps {
    projects: Project[];
}

export default function SelectedWorks({ projects }: SelectedWorksProps) {
    const featured = projects.filter((p) => p.featured);
    const displayProjects = featured.length >= 6
        ? featured.slice(0, 6)
        : projects.slice(0, 6);

    return (
        <section id="works" className="relative py-28 md:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="mb-14 md:mb-20 text-center">
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                            Portfolio
                        </p>
                        <h2
                            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Selected Works
                        </h2>
                        <p className="mx-auto mt-4 max-w-lg text-sm text-muted">
                            A curated collection of multimedia projects spanning social media, video editing, motion graphics, and brand design.
                        </p>
                    </div>
                </ScrollReveal>

                {/* 3-Column Uniform Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
                    {displayProjects.map((project, i) => (
                        <ScrollReveal key={project._id} delay={0.08 + i * 0.08}>
                            <ProjectCard
                                project={project}
                                size="medium"
                                index={i}
                            />
                        </ScrollReveal>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-14 text-center md:hidden">
                    <a
                        href="#"
                        className="inline-block rounded-full border border-border px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                    >
                        View All Works
                    </a>
                </div>
            </div>
        </section>
    );
}
