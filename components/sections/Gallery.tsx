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

                {/* Bento Grid Categories (`Product Design`, `Photography`) */}
                <div className="flex flex-col gap-28 md:gap-36 mt-28 md:mt-36">
                    {BENTO_CATEGORIES.map((categoryName) => {
                        const images = categoryName === "Product Design" ? [
                            { src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop", span: "col-span-2 row-span-2" },
                            { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&h=400&fit=crop", span: "col-span-2 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                        ] : [
                            { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop", span: "col-span-2 row-span-2" },
                            { src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop", span: "col-span-2 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1518173946687-a9ce5fd53553?w=600&h=600&fit=crop", span: "col-span-1 row-span-1" },
                        ];

                        return (
                            <ScrollReveal key={categoryName} delay={0.1}>
                                <div className="w-full">
                                    {/* Category toolbar */}
                                    <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-6 border-b border-border/50 gap-6">
                                        <div className="flex items-center flex-wrap gap-4 w-full sm:w-auto justify-start">
                                            <span className="flex h-1.5 w-1.5 rounded-full bg-accent"></span>
                                            <span className="text-sm font-bold uppercase tracking-widest text-accent">
                                                {categoryName}
                                            </span>
                                        </div>

                                        <Link
                                            href={`/#works`}
                                            className="inline-block w-full sm:w-auto text-center rounded-full border border-border px-8 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent shadow-sm"
                                        >
                                            View all project for {categoryName}
                                        </Link>
                                    </div>

                                    {/* Bento grid */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] lg:auto-rows-[220px] gap-2 sm:gap-3">
                                        {images.map((img, i) => (
                                            <div
                                                key={`${categoryName}-${i}`}
                                                className={`relative overflow-hidden rounded-lg sm:rounded-xl group ${img.span}`}
                                            >
                                                <Image
                                                    src={img.src}
                                                    alt={`${categoryName} work ${i + 1}`}
                                                    fill
                                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent pointer-events-none" />
                                            </div>
                                        ))}
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
