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
      "Architected a Turborepo monorepo from scratch, consolidating 7+ Next.js and Node.js apps into a shared ecosystem (design system, UI, tooling), with CI/CD pipelines deploying seamlessly to AWS and Vercel.",
      "Designed and built scalable async pipelines using Node.js, BullMQ, and S3, including a privacy report PDF generation system with background workers, React-PDF rendering, and reliable job orchestration.",
      "Built a multi-tenant B2B SaaS platform from zero, owning the entire frontend architecture in Next.js, dashboards, charts, data-heavy UIs, and optimized state management using TanStack Query.",
      "Created an internal React-based browser extension framework, enabling multi-browser extension builds from a single codebase, with custom build tooling and clean abstractions over Chrome APIs and storage.",
      "Engineered an event-driven media generation pipeline that automatically creates OG/Twitter images for every privacy report generated, using Node.js workers and S3.",
      "Developed modular backend systems using Node.js, Go, PostgreSQL, and modern frameworks like Effect, including internal Go CLIs to streamline monorepo and developer workflows.",
      "Integrated third-party platforms like Slack, Notion, and internal tools to support B2B workflows and automation.",
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
      "Built an appointment booking system for Medicare centers using React, Node.js, and PostgreSQL, including calendar-based scheduling, an admin panel for managing doctors and patients, and automated email reminders for upcoming appointments.",
      "Migrated multiple PHP-based websites to React and Next.js, rebuilding specific pages and flows (forms, dashboards, static content) to improve load times, SEO, and frontend maintainability.",
      "Implemented role-based access and basic admin tooling across internal apps, handling authentication, permissions, and CRUD workflows for non-technical staff.",
      "Set up GitHub Actions workflows for React and Node.js projects to automate builds and deployments and reduce manual release steps.",
    ],
  },
];
