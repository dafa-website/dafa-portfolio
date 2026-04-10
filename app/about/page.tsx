import Navbar from "@/components/layout/Navbar";
import AboutPreview from "@/components/sections/AboutPreview";
import ExperienceSection from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

import { safeFetch } from "@/lib/sanity";
import { aboutQuery } from "@/lib/queries";
import { mockAbout } from "@/lib/mockData";
import type { About } from "@/types";

async function getData() {
  const about = await safeFetch<About>(aboutQuery);

  return {
    about: about || mockAbout,
  };
}

export default async function AboutPage() {
  const { about } = await getData();

  return (
    <main>
      <Navbar photographerName={about.name?.toUpperCase()} />

      <AboutPreview showCta={false} />

      <ExperienceSection jobs={about.jobs || []} />

      <Contact />
      <Footer photographerName={about.name} />
    </main>
  );
}
