import { Camera, Film, PenTool, Share2, Video } from "lucide-react";
import { SiCanva, SiFigma, SiGooglegemini } from "react-icons/si";
import {
  AdobeAfterEffectsIcon,
  AdobeIllustratorIcon,
  AdobePhotoshopIcon,
  AdobePremiereProIcon,
  CapCutIcon,
} from "@/components/icons/BrandIcons";

export const HERO_COPY = {
  lineOne: "Your brand",
  lineTwoPrefix: "has a",
  lineTwoEmphasis: "story",
  tagline: "Let's make sure people actually remember it.",
  descriptionLead: "Every business has something worth saying.",
  descriptionEmphasis:
    "The problem is most of it gets lost in content that blends in.",
  descriptionTail:
    "I help brands cut through that with visuals and creative direction that are built to be remembered, not just scrolled past.",
} as const;

export const ABOUT_PREVIEW_COPY = {
  headingLineOne: "The person behind",
  headingLineTwo: "the work",
  subtitle: "Every project here has the same person behind it.",
  intro: "Hi, I'm Dafa Rizqullah!",
  body:
    "A lot of what I do centers around personal branding content, helping people and businesses shape how they're seen before they even get the chance to introduce themselves. I also help figure out what kind of content actually gets watched, not just what has a KPI target, but what genuinely makes people stop, stay, and come back for more. That curiosity never went away. It just got sharper.",
  cta: "It didn't start here, find out where it did.",
} as const;

export const CATEGORY_OVERVIEW_ITEMS = [
  {
    title: "Social Media",
    icon: Share2,
    description:
      "Crafting engaging campaigns and viral content strategies tailored to amplify brand presence and audience interaction.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Motion Graphic",
    icon: Video,
    description:
      "Bringing static designs to life with fluid animations. I create dynamic visual narratives that capture attention.",
    className: "col-span-1",
  },
  {
    title: "Video Editing",
    icon: Film,
    description:
      "From pacing to color grading, I construct compelling visual stories that resonate emotionally and drive deeper engagement.",
    className: "col-span-1",
  },
  {
    title: "Product Design",
    icon: PenTool,
    description:
      "Applying human-centered design principles to build intuitive, aesthetically pleasing digital products and user experiences.",
    className: "col-span-1",
  },
  {
    title: "Photography",
    icon: Camera,
    description:
      "Capturing high-quality, evocative imagery. I focus on lighting, composition, and mood to deliver striking visual assets.",
    className: "md:col-span-2 lg:col-span-1",
  },
] as const;

export const SKILLS = [
  { name: "Adobe Premiere Pro", icon: AdobePremiereProIcon },
  { name: "After Effects", icon: AdobeAfterEffectsIcon },
  { name: "Illustrator", icon: AdobeIllustratorIcon },
  { name: "Photoshop", icon: AdobePhotoshopIcon },
  { name: "CapCut", icon: CapCutIcon },
  { name: "Canva", icon: SiCanva },
  { name: "Figma", icon: SiFigma },
  { name: "Gemini Banana", icon: SiGooglegemini },
] as const;

export const WORK_CATEGORIES_ORDER = [
  "Video Editing",
  "Graphic Design",
  "AI Product Photography",
] as const;
