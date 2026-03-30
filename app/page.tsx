import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import SelectedWorks from "@/components/sections/Gallery";
import CategoryOverview from "@/components/sections/CategoryOverview";
import VideoReel from "@/components/sections/VideoReel";
import AboutSection from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

import { safeFetch } from "@/lib/sanity";
import {
  featuredProjectsQuery,
  aboutQuery,
  siteSettingsQuery,
} from "@/lib/queries";
import { mockProjects, mockAbout } from "@/lib/mockData";
import type { Project, About, SiteSettings } from "@/types";

async function getData() {
  const [projects, about, settings] = await Promise.all([
    safeFetch<Project[]>(featuredProjectsQuery),
    safeFetch<About>(aboutQuery),
    safeFetch<SiteSettings>(siteSettingsQuery),
  ]);

  return {
    projects: projects && projects.length > 0 ? projects : mockProjects,
    about: about || mockAbout,
    settings,
  };
}

export default async function Home() {
  const { projects, about, settings } = await getData();

  return (
    <main>
      <Navbar photographerName={about.name?.toUpperCase()} />

      <Hero
        name={about.name?.toUpperCase()}
        tagline={about.tagline}
        videoUrl={settings?.heroVideoUrl || about.heroVideoUrl}
      />

      <SkillsMarquee />

      <CategoryOverview />

      <SelectedWorks projects={projects} />

      {/* <VideoReel
        title="Video Works"
        subtitle="Short-form content, broadcast assets, and creative edits"
      /> */}

      <AboutSection about={about} />

      <Contact />

      <Footer photographerName={about.name} />
    </main>
  );
}
