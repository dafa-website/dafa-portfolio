"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Share2, Video, Film, PenTool, Camera } from "lucide-react";

export default function CategoryOverview() {
    const categories = [
        {
            title: "Social Media",
            icon: <Share2 className="w-5 h-5 text-foreground/70" />,
            description: "Crafting engaging campaigns and viral content strategies tailored to amplify brand presence and audience interaction.",
            className: "md:col-span-2 lg:col-span-2",
        },
        {
            title: "Motion Graphic",
            icon: <Video className="w-5 h-5 text-foreground/70" />,
            description: "Bringing static designs to life with fluid animations. I create dynamic visual narratives that capture attention.",
            className: "col-span-1",
        },
        {
            title: "Video Editing",
            icon: <Film className="w-5 h-5 text-foreground/70" />,
            description: "From pacing to color grading, I construct compelling visual stories that resonate emotionally and drive deeper engagement.",
            className: "col-span-1",
        },
        {
            title: "Product Design",
            icon: <PenTool className="w-5 h-5 text-foreground/70" />,
            description: "Applying human-centered design principles to build intuitive, aesthetically pleasing digital products and user experiences.",
            className: "col-span-1",
        },
        {
            title: "Photography",
            icon: <Camera className="w-5 h-5 text-foreground/70" />,
            description: "Capturing high-quality, evocative imagery. I focus on lighting, composition, and mood to deliver striking visual assets.",
            className: "md:col-span-2 lg:col-span-1",
        }
    ];

    return (
        <section id="expertise" className="relative py-20 pb-0 bg-background">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                
                {/* Header Section */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
                        <h2
                            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
                            style={{ fontFamily: "var(--font-display)" }} 
                        >
                            Multidisciplinary Expertise
                        </h2>
                        <p className="max-w-2xl text-base md:text-lg text-muted font-medium">
                            Transforming brand concepts into high-impact digital realities through expertly crafted visuals, motion, and design.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {categories.map((category, index) => (
                        <ScrollReveal 
                            key={category.title} 
                            delay={0.1 * index}
                            className={`${category.className}`}
                        >
                            <div className="h-full flex flex-col p-8 md:p-10 rounded-[1.5rem] bg-surface/40 hover:bg-surface/60 border border-white/5 transition-colors duration-300">
                                
                                {/* Icon Badge */}
                                <div className="w-12 h-12 rounded-xl bg-background/50 border border-white/5 flex items-center justify-center mb-8 shadow-sm">
                                    {category.icon}
                                </div>
                                
                                {/* Text Content */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                                    {category.title}
                                </h3>
                                
                                <p className="text-sm md:text-base text-muted/80 leading-relaxed font-medium">
                                    {category.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                
            </div>
        </section>
    );
}
