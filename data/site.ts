import { Instagram, Linkedin } from "lucide-react";

export const NAV_LINKS = [
  { label: "Works", href: "/#works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Works", href: "#works" },
  { label: "Reel", href: "#reel" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dafarizqullah",
    icon: Linkedin,
  },
] as const;

export const CONTACT_INFO = {
  email: "achmaddafarizqullah@gmail.com",
  phone: "+62 8996898752",
  location: "Margonda, Depok, Jawa Barat",
} as const;

export const CONTACT_COPY = {
  titleLineOne: "Your Brand Deserves",
  titleLineTwo: "to Be Seen Differently.",
  description:
    "Whether you know exactly what you want or just have a rough idea that's enough to start. Got a project in mind? A collab idea? Or just want to talk through something? Always open for all of it.",
  ctaLabel: "Contact Me",
} as const;
