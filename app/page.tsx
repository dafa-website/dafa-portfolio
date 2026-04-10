import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import SelectedWorks from "@/components/sections/Gallery";
import CategoryOverview from "@/components/sections/CategoryOverview";
import AboutPreview from "@/components/sections/AboutPreview";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

import { safeFetch } from "@/lib/sanity";
import {
  projectsQuery,
  aboutQuery,
  siteSettingsQuery,
} from "@/lib/queries";
import type { Project, About, SiteSettings } from "@/types";

async function getData() {
  const [projects, about, settings] = await Promise.all([
    safeFetch<Project[]>(projectsQuery),
    safeFetch<About>(aboutQuery),
    safeFetch<SiteSettings>(siteSettingsQuery),
  ]);

  return {
    projects: projects ?? [],
    about,
    settings,
  };
}

export default async function Home() {
  const { projects, about, settings } = await getData();
  const heroVideoUrl = settings?.heroVideoUrl || about?.heroVideoUrl;
  const heroTagline = settings?.heroTagline || about?.tagline;

  return (
    <main>
      <Navbar photographerName={about?.name?.toUpperCase()} />

      <Hero
        videoUrl={heroVideoUrl}
        tagline={heroTagline}
      />

      <SkillsMarquee />

      <CategoryOverview
        title={settings?.overviewTitle}
        description={settings?.overviewDescription}
        videoUrl={settings?.overviewVideoUrl}
      />

      <SelectedWorks projects={projects} />

      <AboutPreview about={about} />

      <Contact />

      <Footer photographerName={about?.name} />
    </main>
  );
}
