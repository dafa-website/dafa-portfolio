"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CategoryOverview() {
    return (
        <section id="expertise" className="relative py-20 pb-0 bg-black">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                
                {/* Header Section */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
                        <h2
                            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
                            style={{ fontFamily: "var(--font-montserrat)" }} 
                        >
                            Overview
                        </h2>
                        <p className="max-w-2xl text-base md:text-lg text-muted font-medium">
                            A curated selection of projects across video, motion, and visual design.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <div className="mx-auto w-full max-w-6xl rounded-[28px] border border-white/12 bg-[#0c0c0c] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.6)]">
                        <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-black/70">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        className="ml-1 opacity-90"
                                    >
                                        <polygon points="6,4 20,12 6,20" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
                
            </div>
        </section>
    );
}
