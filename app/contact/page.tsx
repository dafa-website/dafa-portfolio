import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";

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

export default async function ContactPage() {
  const { about } = await getData();

  return (
    <main>
      <Navbar photographerName={about.name?.toUpperCase()} />

      <div className="pt-24 md:pt-32">
        <ContactForm />
      </div>

      <Footer photographerName={about.name} />
    </main>
  );
}
