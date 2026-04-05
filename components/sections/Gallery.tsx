"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SHOWCASE_DATA } from "@/constants/portfolio";

export default function SelectedWorks() {
    return (
        <section id="works" className="relative py-28 md:py-36 bg-background">
            <div className="section-divider mx-auto mb-28 max-w-7xl md:mb-36" />
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                
                {/* Section Header */}
                <ScrollReveal>
                    <div className="mb-20 md:mb-32 text-center">
                        <h1
                            className="text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Exactly What I Do
                        </h1>
                    </div>
                </ScrollReveal>

                {/* Vertically Stacked Categories */}
                <div className="flex flex-col gap-32 md:gap-40">
                    {SHOWCASE_DATA.map((project, index) => (
                        <div key={project.category} className="w-full flex flex-col gap-12 md:gap-16">
                            {/* Category Headings */}
                            <ScrollReveal delay={0.1}>
                                <h2
                                    className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
                                    style={{ fontFamily: "var(--font-montserrat)" }}
                                >
                                    {project.category}
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                                    
                                    {/* Text Column */}
                                    <div className="flex flex-col justify-center h-full order-2 lg:order-1 lg:col-span-5">
                                        <h3 
                                            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
                                            style={{ fontFamily: "var(--font-montserrat)" }}
                                        >
                                            {project.title}
                                        </h3>

                                        <p className="text-sm md:text-base text-white/80 max-w-xl leading-relaxed mb-8">
                                            {project.description}
                                        </p>
                                        
                                        <div className="mt-2">
                                            <Link
                                                href={`/#works`}
                                                className="group relative inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3 text-sm sm:text-base font-medium text-white transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                            >
                                                <span className="relative z-10">View All {project.category.toLowerCase()} project</span>
                                                {/* Glow effect */}
                                                <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Visual Column */}
                                    <div className="relative w-full aspect-video rounded-3xl border border-white/20 overflow-hidden bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center order-1 lg:order-2 lg:col-span-7 shadow-2xl">
                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                                            <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center bg-black/20 backdrop-blur-md transition-transform duration-300 hover:scale-110">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                                                    <polygon points="5,3 19,12 5,21" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 60vw"
                                                className="object-cover"
                                                priority={index === 0}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
