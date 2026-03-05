"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";


const navLinks = [
    { label: "Works", href: "#works" },
    { label: "Reel", href: "#reel" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

interface NavbarProps {
    photographerName?: string;
}

export default function Navbar({ photographerName = "DAFA" }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <nav
                id="main-navbar"
                className={cn(
                    "fixed top-0 left-0 z-50 w-full transition-all duration-500",
                    scrolled
                        ? "glass-navbar glass-navbar--scrolled py-3"
                        : "glass-navbar py-4"
                )}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
                    <Link
                        href="/"
                        className="text-lg font-bold tracking-[0.3em] text-foreground transition-colors hover:text-accent"
                    >
                        {photographerName}
                    </Link>

                    <ul className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="relative text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className="hidden items-center gap-2 rounded-full border border-border px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent md:flex"
                    >
                        Get in Touch
                    </a>

                    <button
                        className="relative z-50 flex h-10 w-10 items-center justify-center text-foreground md:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            <div
                className={cn(
                    "fixed inset-0 z-40 flex flex-col items-center justify-center bg-background transition-all duration-500 md:hidden",
                    mobileOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                )}
            >
                <ul className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <li
                            key={link.href}
                            className={cn(
                                "transition-all duration-500",
                                mobileOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-8 opacity-0"
                            )}
                            style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
                        >
                            <a
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-2xl font-light uppercase tracking-[0.3em] text-foreground transition-colors hover:text-accent"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li
                        className={cn(
                            "transition-all duration-500",
                            mobileOpen
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        )}
                        style={{
                            transitionDelay: mobileOpen
                                ? `${navLinks.length * 80}ms`
                                : "0ms",
                        }}
                    >
                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="mt-4 inline-block rounded-full border border-accent px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-background"
                        >
                            Get in Touch
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
