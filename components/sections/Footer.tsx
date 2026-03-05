import { Instagram, Linkedin } from "lucide-react";



const footerLinks = [
    { label: "Works", href: "#works" },
    { label: "Reel", href: "#reel" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: <Instagram size={16} />, href: "https://instagram.com/dafarizqullah", label: "Instagram" },
    { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/dafarizqullah", label: "LinkedIn" },
];

interface FooterProps {
    photographerName?: string;
}

export default function Footer({ photographerName = "Dafa Rizqullah" }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-surface py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
                    <a
                        href="#hero"
                        className="text-sm font-bold uppercase tracking-[0.3em] text-foreground transition-colors hover:text-accent"
                    >
                        {photographerName}
                    </a>

                    <ul className="flex items-center gap-6">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-all duration-300 hover:text-accent"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-6 text-center">
                    <p className="text-xs text-muted/60">
                        © {currentYear} {photographerName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
