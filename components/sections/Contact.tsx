"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Mail, ArrowUpRight, Phone } from "lucide-react";



interface ContactProps {
    email?: string;
    phone?: string;
}

export default function Contact({
    email = "achmaddafarizqullah@gmail.com",
    phone = "+62 8996898752",
}: ContactProps) {
    return (
        <section id="contact" className="relative py-28 md:py-36">
            <div className="section-divider mx-auto mb-28 max-w-7xl md:mb-36" />

            <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
                <ScrollReveal>
                    <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                        Get in Touch
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                    <h2
                        className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Let&apos;s Create
                        <br />
                        <span className="text-gradient">Something Amazing</span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <p className="mx-auto mt-6 max-w-md text-base text-muted">
                        Need compelling visual content? From viral social media campaigns
                        to broadcast motion graphics &mdash; let&apos;s bring your vision to life.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.45}>
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                        <a
                            href={`mailto:${email}`}
                            className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light hover:gap-4"
                        >
                            <Mail size={16} />
                            Send a Message
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>

                        <a
                            href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                        >
                            <Phone size={16} />
                            WhatsApp
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.55}>
                    <div className="mt-8 flex flex-col items-center gap-2 text-sm text-muted">
                        <span>{email}</span>
                        <span>Margonda, Depok, Jawa Barat</span>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
