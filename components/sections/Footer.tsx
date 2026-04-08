import { FOOTER_LINKS, SOCIAL_LINKS } from "@/data/site";

interface FooterProps {
    photographerName?: string;
}

export default function Footer({ photographerName = "Dafa Rizqullah" }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-black py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
                    <a
                        href="#hero"
                        className="text-sm font-bold uppercase tracking-[0.3em] text-foreground transition-colors hover:text-accent"
                    >
                        {photographerName}
                    </a>

                    <ul className="flex items-center gap-6">
                        {FOOTER_LINKS.map((link) => (
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
                        {SOCIAL_LINKS.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-all duration-300 hover:text-accent"
                                >
                                    <Icon size={16} />
                                </a>
                            );
                        })}
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
