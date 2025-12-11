import { TypeScriptIcon } from "@/assets/tech-icons/typescript";
import { Experience } from "@/types";

export const EXPERIENCE: Experience[] = [
  {
    id: "thalus-ai",
    name: "Thalus AI",
    position: "Full Stack Engineer",
    logo: "/images/work/thalus.png",
    location: "Bridgewater, NJ (Remote)",
    from: "2023",
    till: "Present",

    stack: [
      { label: "TypeScript", icon: TypeScriptIcon },
      { label: "TypeScript", icon: TypeScriptIcon },
    ],

    achievements: [
      "Led the architecture and implementation of a Turborepo monorepo, consolidating 7+ projects, centralizing shared packages, reducing deployment time by 40% and accelerating feature development by 60%.",
      "Migrated legacy apps to Next.js + TypeScript, improving speed, SEO, and maintainability, using smart caching strategies and optimized rendering, while cutting bugs by over 50% using Jest and Cypress tests.",
      "Engineered Go CLI tools to automate project scaffolding, accelerating dev workflows.",
      "Developed scalable REST APIs using Node.js, Go and PostgreSQL to streamline backend processes.",
      "Implemented CI/CD pipelines across multiple projects by using Github Actions, Vercel, Docker and AWS, integrating testing and automated deployments, speeding up integration and release cycles.",
      "Built data-driven B2B and B2C dashboards with optimized state management, for fast performance.",
    ],
  },

  {
    id: "intellicure-healthcare",
    name: "Intellicure Healthcare",
    position: "Full Stack Engineer",
    logo: "/images/work/intellicure.svg",
    location: "Goa, India",
    from: "2022",
    till: "2023",

    stack: [
      { label: "TypeScript", icon: TypeScriptIcon },
      { label: "TypeScript", icon: TypeScriptIcon },
    ],

    achievements: [
      "Led the architecture and implementation of a Turborepo monorepo, consolidating 7+ projects, centralizing shared packages, reducing deployment time by 40% and accelerating feature development by 60%.",
      "Migrated legacy apps to Next.js + TypeScript, improving speed, SEO, and maintainability, using smart caching strategies and optimized rendering, while cutting bugs by over 50% using Jest and Cypress tests.",
      "Engineered Go CLI tools to automate project scaffolding, accelerating dev workflows.",
      "Developed scalable REST APIs using Node.js, Go and PostgreSQL to streamline backend processes.",
      "Implemented CI/CD pipelines across multiple projects by using Github Actions, Vercel, Docker and AWS, integrating testing and automated deployments, speeding up integration and release cycles.",
      "Built data-driven B2B and B2C dashboards with optimized state management, for fast performance.",
    ],
  },
];
