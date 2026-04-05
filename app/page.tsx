import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import SelectedWorks from "@/components/sections/Gallery";
import CategoryOverview from "@/components/sections/CategoryOverview";
// import AboutSection from "@/components/sections/About";
// import ExperienceSection from "@/components/sections/Experience";
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
  const { about, settings } = await getData();

  return (
    <main>
      <Navbar photographerName={about.name?.toUpperCase()} />

      <Hero
        name={about.name}
        tagline={about.tagline}
        bio={about.bio}
        location={about.location}
        experience={about.experience}
        videoUrl={settings?.heroVideoUrl || about.heroVideoUrl}
      />

      <SkillsMarquee />

      <CategoryOverview />

      <SelectedWorks />

      {/* <VideoReel
        title="Video Works"
        subtitle="Short-form content, broadcast assets, and creative edits"
      /> */}

      {/* <AboutSection about={about} /> */}
      {/* <ExperienceSection jobs={about.jobs || []} /> */}

      <Contact />

      <Footer photographerName={about.name} />
    </main>
  );
}
