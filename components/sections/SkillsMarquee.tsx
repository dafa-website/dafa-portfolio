"use client";

import { SKILLS } from "@/data/home";

export default function SkillsMarquee() {
  const duplicatedSkills = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section className="py-12 w-full flex justify-center px-4 md:px-8 bg-black">
      <div className="w-full max-w-[1400px] overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-full">
          <div className="animate-marquee flex whitespace-nowrap items-center">
            {duplicatedSkills.map((skill, index) => {
              const Icon = skill.icon;
              
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 mx-8 text-muted hover:text-foreground transition-colors duration-300"
                >
                  <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="font-sans text-xl font-medium tracking-wide flex items-center gap-2">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
