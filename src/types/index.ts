import { SVGProps, JSX } from "react";

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  websiteUrl: string;
  githubUrl: string;
  stack: Tech[];
};

export type Tech = {
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};
