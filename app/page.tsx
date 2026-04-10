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
  featuredProjectsQuery,
  videoEditingProjectsQuery,
  aboutQuery,
  siteSettingsQuery,
} from "@/lib/queries";
import { mockProjects, mockAbout } from "@/lib/mockData";
import type { Project, About, SiteSettings } from "@/types";

async function getData() {
  const [featuredProjects, videoEditingProjects, about, settings] = await Promise.all([
    safeFetch<Project[]>(featuredProjectsQuery),
    safeFetch<Project[]>(videoEditingProjectsQuery, {
      category: "Video Editing",
      start: 0,
      end: 3,
    }),
    safeFetch<About>(aboutQuery),
    safeFetch<SiteSettings>(siteSettingsQuery),
  ]);

  const mergedProjects = [
    ...(featuredProjects ?? []),
    ...(videoEditingProjects ?? []),
  ];
  const uniqueProjects = Array.from(
    new Map(mergedProjects.map((project) => [project._id, project])).values(),
  );

  return {
    projects: uniqueProjects.length > 0 ? uniqueProjects : mockProjects,
    about: about || mockAbout,
    settings,
  };
}

export default async function Home() {
  const { projects, about, settings } = await getData();
  const heroVideoUrl = settings?.heroVideoUrl || about.heroVideoUrl;

  return (
    <main>
      <Navbar photographerName={about.name?.toUpperCase()} />

      <Hero
        videoUrl={heroVideoUrl}
      />

      <SkillsMarquee />

      <CategoryOverview />

      <SelectedWorks projects={projects} />

      <AboutPreview />

      <Contact />

      <Footer photographerName={about.name} />
    </main>
  );
}
