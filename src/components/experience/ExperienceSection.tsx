"use client";
import { EXPERIENCE } from "@/configs/experience";

import { ExperienceCard } from "@/components/experience/ExperienceCard";

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-8">
      {EXPERIENCE.map((exp, index) => (
        <ExperienceCard
          isOpen
          exp={exp}
          key={`work-expirience-card-${index}`}
        />
      ))}
    </div>
  );
};
