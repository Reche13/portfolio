import { TechKey } from "@/configs/tech-regsitry";
import { SVGProps, JSX } from "react";

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  websiteUrl: string;
  githubUrl: string;
  stack: TechKey[];
};

export type Tech = {
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export type Experience = {
  id: string;
  name: string;
  position: string;
  logo: string;
  location: string;
  from: string;
  till: string;
  stack: Tech[];
  achievements: string[];
};

// export type ProjectFrontmatter = Omit<Project>;

export type ProjectCaseStudy = {
  slug: string;
  frontmatter: Project;
  content: string;
};
