"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Project } from "@/types";

interface SelectedWorksProps {
    projects: Project[];
}

const TARGET_CATEGORIES = ["Social Media", "Motion Graphics", "Video Editing"];
const BENTO_CATEGORIES = ["Product Design", "Photography"];

export default function SelectedWorks({ projects }: SelectedWorksProps) {
    const showcaseProjects = TARGET_CATEGORIES.map(category => {
        let proj = projects.find(p => 
            p.featured && p.category?.toLowerCase() === category.toLowerCase()
        );
        if (!proj) {
            proj = projects.find(p => 
                p.category?.toLowerCase() === category.toLowerCase()
            );
        }

        return {
            categoryName: category,
            project: proj || null
        };
    });

    return (
        <section id="works" className="relative py-28 md:py-36 bg-background">
            <div className="section-divider mx-auto mb-28 max-w-7xl md:mb-36" />
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                
                {/* Section Header */}
                <ScrollReveal>
                    <div className="mb-20 md:mb-32 text-center">
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                            Portfolio
                        </p>
                        <h2
                            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Selected Works
                        </h2>
                        <p className="mx-auto mt-4 max-w-lg text-sm text-muted mb-6">
                            A curated collection of multimedia projects spanning social media, video editing, motion graphics, and brand design.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Vertically Stacked Specific Categories (Z-Pattern) */}
                <div className="flex flex-col gap-32 md:gap-40">
                    {showcaseProjects.map((showcase, index) => {
                        const { categoryName, project } = showcase;
                    
                        const isImageLeft = index % 2 !== 0;

                        return (
                            <ScrollReveal key={categoryName} delay={0.1}>
                                <div className="w-full">
                                    {/* Toolbar Top Left & Top Right of the category content */}
                                    <div className="flex flex-col sm:flex-row items-center justify-between mb-10 pb-6 border-b border-border/50 gap-6">
                                        {/* Meta Category Row (Left) */}
                                        <div className="flex items-center flex-wrap gap-4 w-full sm:w-auto justify-start">
                                            <span className="flex h-1.5 w-1.5 rounded-full bg-accent"></span>
                                            <span className="text-sm font-bold uppercase tracking-widest text-accent">
                                                {categoryName}
                                            </span>
                                            {/* {project?.year && (
                                                <span className="rounded-full bg-surface px-4 py-1.5 text-[11px] font-semibold tracking-widest text-muted ring-1 ring-border">
                                                    {project.year}
                                                </span>
                                            )} */}
                                        </div>

                                        {/* Button View All right */}
                                        <Link
                                            href={`/#works`}
                                            className="inline-block w-full sm:w-auto text-center rounded-full border border-border px-8 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent shadow-sm"
                                        >
                                            View all project for {categoryName}
                                        </Link>
                                    </div>

                                    {/* Project Layout Payload */}
                                    {!project ? (
                                        // Empty Placeholder State
                                        <div className="w-full h-[300px] md:h-[400px] border border-dashed border-border/50 rounded-[2rem] flex flex-col items-center justify-center text-muted bg-surface/30">
                                            <p className="tracking-[0.2em] uppercase text-xs font-medium opacity-60">
                                                Projects coming soon
                                            </p>
                                        </div>
                                    ) : (
                                        // 2-Column Content Layout
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                            
                                            {/* Text Column */}
                                            <div className={`flex flex-col justify-center h-full min-h-[300px] lg:min-h-[400px] order-2 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                                                <h3 
                                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight text-foreground mb-6 leading-[1.1]"
                                                    style={{ fontFamily: "var(--font-display)" }}
                                                >
                                                    {project.title}
                                                </h3>

                                                <p className="text-base md:text-lg text-muted max-w-xl leading-relaxed">
                                                    {project.description}
                                                </p>
                                                
                                                {project.client && (
                                                    <p className="text-sm mt-6 text-white/50 tracking-wide">
                                                        Recognized by <span className="text-white/80 font-medium">{project.client}</span>
                                                    </p>
                                                )}
                                            </div>

                                            {/* Visual Column */}
                                            <div className={`relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/4.5] rounded-[2rem] overflow-hidden bg-surface shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center order-1 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                                                <div className="absolute inset-0 ring-1 ring-border rounded-[2rem] z-20 pointer-events-none"></div>

                                                <div className="absolute inset-0 w-full h-full">
                                                    {project.videoUrl ? (
                                                        <video
                                                            src={project.videoUrl}
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <Image
                                                            src={project.coverImageUrl || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"}
                                                            alt={project.title}
                                                            fill
                                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                                            priority={index === 0}
                                                        />
                                                    )}
                                                    
                                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* 12-Image Bento Box Categories (`Product Design`, `Photography`) */}
                <div className="flex flex-col gap-32 md:gap-40 mt-32 md:mt-40">
                    {BENTO_CATEGORIES.map((categoryName) => {
                        const dummyImages = [
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1600100344415-325b34bc26d5?w=800" : "https://images.unsplash.com/photo-1542314831-c6a4d14eff3e?w=800",
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=800" : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800" : "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1582214300762-b4c4ba8380eb?w=800" : "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1503602642458-232111445657?w=800" : "https://images.unsplash.com/photo-1620288610736-1e96a4004944?w=800",
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=800" : "https://images.unsplash.com/photo-1563914856001-c81bdf934ec7?w=800",
                            // Repeat similar vibe for items 6-11
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800" : "https://images.unsplash.com/photo-1506744626753-1fa7604ed429?w=800",
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1550005973-5408ead48666?w=800" : "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800",
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800" : "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1481481600463-68ceea2819cd?w=800" : "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800",
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800" : "https://images.unsplash.com/photo-1419242902214-272b3f66ce7a?w=800",
                            categoryName === "Product Design" ? "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=800" : "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                        ];

                        return (
                            <ScrollReveal key={categoryName} delay={0.1}>
                                <div className="w-full">
                                    {/* Toolbar Top Left & Top Right of the category content */}
                                    <div className="flex flex-col sm:flex-row items-center justify-between mb-10 pb-6 border-b border-border/50 gap-6">
                                        {/* Meta Category Row (Left) */}
                                        <div className="flex items-center flex-wrap gap-4 w-full sm:w-auto justify-start">
                                            <span className="flex h-1.5 w-1.5 rounded-full bg-accent"></span>
                                            <span className="text-sm font-bold uppercase tracking-widest text-accent">
                                                {categoryName}
                                            </span>
                                        </div>

                                        {/* Button View All right */}
                                        <Link
                                            href={`/#works`}
                                            className="inline-block w-full sm:w-auto text-center rounded-full border border-border px-8 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent shadow-sm"
                                        >
                                            View all project for {categoryName}
                                        </Link>
                                    </div>

                                    {/* MASONRY GRID */}
                                    <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 md:gap-4 mt-8 space-y-3 md:space-y-4">
                                        {Array.from({ length: 12 }).map((_, i) => {
                                            return (
                                                <div 
                                                    key={`${categoryName}-${i}`} 
                                                    className="relative break-inside-avoid rounded-2xl md:rounded-[2rem] overflow-hidden bg-surface ring-1 ring-border/50 group"
                                                >
                                                    <Image
                                                        src={dummyImages[i]}
                                                        alt={`${categoryName} mockup ${i + 1}`}
                                                        width={800}
                                                        height={800}
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                        style={{ width: "100%", height: "auto" }} 
                                                        className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                                    />
                                                    
                                                    <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent pointer-events-none" />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
