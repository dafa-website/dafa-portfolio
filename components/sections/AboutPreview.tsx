"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { isSanityConfigured, urlFor } from "@/lib/sanity";
import type { About } from "@/types";

interface AboutPreviewProps {
  about?: About | null;
  showCta?: boolean;
  ctaHref?: string;
}

export default function AboutPreview({
  about,
  showCta = true,
  ctaHref = "/about",
}: AboutPreviewProps) {
  if (!about) return null;

  const preview = about.preview;
  const headingLineOne = preview?.headingLineOne ?? "";
  const headingLineTwo = preview?.headingLineTwo ?? "";
  const subtitle = preview?.subtitle ?? about.tagline ?? "";
  const intro = preview?.intro ?? about.name ?? "";
  const body = preview?.body ?? about.bio ?? "";
  const ctaLabel = preview?.cta ?? "";

  const profileImageUrl =
    about.profileImage && isSanityConfigured
      ? urlFor(about.profileImage).width(720).height(960).fit("crop").url()
      : null;

  const showHeading = Boolean(headingLineOne || headingLineTwo);

  return (
    <section id="about-preview" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center">
            {showHeading && (
              <h2
                className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {headingLineOne}
                <br />
                {headingLineTwo}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-sm text-white/60 sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal variant="fade-right">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] md:mx-0">
              {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt={`${about.name} portrait`}
                  fill
                  sizes="(max-width: 768px) 70vw, 360px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-[#0b0b0b]" />
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={0.1}>
            <div className="flex flex-col items-center text-center text-white md:items-start md:text-left">
              {intro && (
                <h3 className="text-xl font-semibold sm:text-2xl">{intro}</h3>
              )}
              {body && (
                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                  {body}
                </p>
              )}
              {showCta && ctaLabel && (
                <Link
                  href={ctaHref}
                  className="mt-8 inline-flex items-center gap-3 whitespace-nowrap text-xs font-semibold text-white/80 transition-colors hover:text-white sm:text-sm"
                >
                  <span>{ctaLabel}</span>
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
