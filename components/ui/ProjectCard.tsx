"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { isSanityConfigured, urlFor } from "@/lib/sanity";


interface ProjectCardProps {
    project: Project;
    size?: "large" | "medium" | "small";
    index?: number;
}

export default function ProjectCard({
    project,
    size = "medium",
    index = 0,
}: ProjectCardProps) {
    const imageUrl = project.coverImageUrl
        ? project.coverImageUrl
        : project.coverImage && isSanityConfigured
            ? urlFor(project.coverImage).width(900).height(1200).fit("crop").url()
            : "";
    const tags = project.tags ?? [];

    const aspectMap = {
        large: "aspect-[3/4]",
        medium: "aspect-[3/4]",
        small: "aspect-[3/4]",
    };

    return (
        <Link
            href={`/projects/${project.slug.current}`}
            className="group relative block overflow-hidden rounded-lg"
            id={`project-card-${project.slug.current}`}
        >
            {/* Image */}
            <div className={`relative ${aspectMap[size]} w-full overflow-hidden rounded-lg bg-card`}>
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        priority={index < 3}
                    />
                ) : (
                    <div className="absolute inset-0 bg-[#0b0b0b]" />
                )}

                {/* Always-visible subtle gradient at bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Hover overlay intensifies */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Category tag */}
                <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
                        {project.category}
                    </span>
                </div>

                {/* Hover content — desktop */}
                <div className="absolute inset-x-0 bottom-0 z-10 translate-y-2 p-5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                    <h3
                        className="mb-1 text-lg font-semibold text-white md:text-xl"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        {project.title}
                    </h3>
                    {project.client && (
                        <p className="text-xs text-white/60">{project.client}</p>
                    )}
                    {project.year && (
                        <p className="mt-0.5 text-[11px] text-white/40">{project.year}</p>
                    )}
                </div>

                {/* View arrow */}
                <div className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>

                {/* Border ring */}
                <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/5 ring-inset transition-all duration-500 group-hover:ring-white/15" />
            </div>

            {/* Title below card — always visible */}
            <div className="mt-3">
                {tags.length > 0 && (
                    <div className="mb-2 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={`${project._id}-${tag}`}
                                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold tracking-wide text-white/70"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <h3 className="text-sm font-medium text-foreground">{project.title}</h3>
                <p className="mt-0.5 text-xs text-muted">{project.category} {project.year && `· ${project.year}`}</p>
            </div>
        </Link>
    );
}
