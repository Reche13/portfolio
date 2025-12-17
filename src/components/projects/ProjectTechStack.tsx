"use client";

import { TECH_REGISTRY, TechKey } from "@/configs/tech-regsitry";
import { TechCapsule } from "@/components/common/TechCapsule";

export const ProjectTechStack = ({ keys }: { keys: TechKey[] }) => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {keys.map((key) => {
        const tech = TECH_REGISTRY[key];
        if (!tech) return null;

        return (
          <TechCapsule
            key={`project-${key}`}
            label={tech.title}
            icon={tech.icon}
            size="sm"
          />
        );
      })}
    </div>
  );
};
