import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/About";
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

      {/* Add top padding so it doesn't overlap behind the sticky navbar initially */}
      <div className="pt-24 md:pt-32 bg-black">
        <AboutSection about={about} />
        <ExperienceSection jobs={about.jobs || []} />
      </div>

      <Contact />
      <Footer photographerName={about.name} />
    </main>
  );
}
