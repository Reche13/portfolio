import { ReactIcon } from "@/assets/tech-icons/react";
import { TypeScriptIcon } from "@/assets/tech-icons/typescript";
import { NextIcon } from "@/assets/tech-icons/next";
import { GolangIcon } from "@/assets/tech-icons/golang";
import { PostgreSQLIcon } from "@/assets/tech-icons/postgresql";

export const TECH_REGISTRY = {
  react: {
    title: "React",
    icon: ReactIcon,
  },
  golang: {
    title: "Go",
    icon: GolangIcon,
  },
  typescript: {
    title: "TypeScript",
    icon: TypeScriptIcon,
  },
  next: {
    title: "Next.js",
    icon: NextIcon,
  },
  postgresql: {
    title: "PostgreSQL",
    icon: PostgreSQLIcon,
  },
} as const;

export type TechKey = keyof typeof TECH_REGISTRY;
