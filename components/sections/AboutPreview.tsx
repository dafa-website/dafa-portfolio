"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { ABOUT_PREVIEW_COPY } from "@/data/home";

interface AboutPreviewProps {
  showCta?: boolean;
  ctaHref?: string;
}

export default function AboutPreview({
  showCta = true,
  ctaHref = "/about",
}: AboutPreviewProps) {
  return (
    <section id="about-preview" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center">
            <h2
              className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {ABOUT_PREVIEW_COPY.headingLineOne}
              <br />
              {ABOUT_PREVIEW_COPY.headingLineTwo}
            </h2>
            <p className="mt-4 text-sm text-white/60 sm:text-base">
              {ABOUT_PREVIEW_COPY.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal variant="fade-right">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-[0_30px_80px_rgba(0,0,0,0.6)] md:mx-0">
              <Image
                src="/images/Aboutme.png"
                alt="Dafa Rizqullah portrait"
                fill
                sizes="(max-width: 768px) 70vw, 360px"
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={0.1}>
            <div className="flex flex-col items-center text-center text-white md:items-start md:text-left">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-white mb-12">
                Behind the creations
              </span>
              <h3 className="text-xl font-semibold sm:text-2xl">
                {ABOUT_PREVIEW_COPY.intro}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                {ABOUT_PREVIEW_COPY.body}
              </p>
              {showCta && (
                <Link
                  href={ctaHref}
                  className="mt-8 inline-flex items-center gap-3 whitespace-nowrap text-xs font-semibold text-white/80 transition-colors hover:text-white sm:text-sm"
                >
                  <span>{ABOUT_PREVIEW_COPY.cta}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
