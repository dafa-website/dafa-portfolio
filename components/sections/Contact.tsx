"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { CONTACT_COPY, CONTACT_INFO } from "@/data/site";
import { ArrowRight } from "lucide-react";

interface ContactProps {
    email?: string;
}

export default function Contact({
    email = CONTACT_INFO.email,
}: ContactProps) {
    return (
        <section id="contact" className="relative bg-black py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
                <ScrollReveal>
                    <h2
                        className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        {CONTACT_COPY.titleLineOne}
                        <br />
                        {CONTACT_COPY.titleLineTwo}
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                        {CONTACT_COPY.description}
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="mt-8 flex justify-center">
                        <a
                            href={`mailto:${email}`}
                            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-gradient-to-b from-[#242424] to-[#111111] px-6 py-3 text-base font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:from-[#2a2a2a] hover:to-[#151515]"
                        >
                            <span>{CONTACT_COPY.ctaLabel}</span>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 transition-all duration-300 group-hover:bg-white">
                                <ArrowRight
                                    size={16}
                                    className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-black"
                                    strokeWidth={2.5}
                                />
                            </span>
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
