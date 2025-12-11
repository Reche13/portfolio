"use client";
import { PROJECTS } from "@/configs/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-6">
      {PROJECTS.map((proj, idx) => (
        <ProjectCard key={`project-home-${proj.id}-${idx}`} project={proj} />
      ))}
    </div>
  );
};
