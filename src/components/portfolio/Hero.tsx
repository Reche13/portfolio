"use client";

import { GolangIcon } from "@/assets/tech-icons/golang";
import { NextIcon } from "@/assets/tech-icons/next";
import { PostgreSQLIcon } from "@/assets/tech-icons/postgresql";
import { ReactIcon } from "@/assets/tech-icons/react";
import { TypeScriptIcon } from "@/assets/tech-icons/typescript";
import { Container } from "@/components/common/Container";
import { TechCapsule } from "../common/TechCapsule";
import { FileText, Send } from "lucide-react";

export const Hero = () => {
  return (
    <Container>
      <div className="w-full pt-20">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 selection:text-zinc-50 selection:bg-orange-600">
          Reché Soares
        </h1>
        <div className="mt-4 font-medium text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 selection:bg-orange-600 selection:text-zinc-50">
          <span>I'm a </span>
          <span className="font-semibold text-orange-600">
            Full Stack Developer
          </span>
          <span> who loves building interactive web apps using </span>
          <TechCapsule label="Golang" icon={GolangIcon} />,{" "}
          <TechCapsule label="TypeScript" icon={TypeScriptIcon} />,{" "}
          <TechCapsule label="PostgreSQL" icon={PostgreSQLIcon} />,{" "}
          <TechCapsule label="React" icon={ReactIcon} />, &{" "}
          <TechCapsule label="Next.js" icon={NextIcon} />,{" "}
          <span>
            pairing strong backend engineering with clean, intuitive interfaces.
          </span>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button className="h-9 cursor-pointer border border-zinc-700 dark:border-zinc-300 bg-zinc-200 dark:bg-zinc-900 px-3 py-1.5 rounded-lg flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
            <FileText className="size-4" />
            <span className="text-sm">View Resume</span>
          </button>
          <button className="h-9 cursor-pointer bg-zinc-950 dark:bg-zinc-50 px-3 py-1.5 rounded-lg flex items-center gap-2 text-zinc-50 dark:text-zinc-900">
            <Send className="size-4" />
            <span className="text-sm">Get in touch</span>
          </button>
        </div>
      </div>
    </Container>
  );
};
