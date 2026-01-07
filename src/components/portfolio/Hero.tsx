"use client";

import { GolangIcon } from "@/assets/tech-icons/golang";
import { NextIcon } from "@/assets/tech-icons/next";
import { PostgreSQLIcon } from "@/assets/tech-icons/postgresql";
import { ReactIcon } from "@/assets/tech-icons/react";
import { TypeScriptIcon } from "@/assets/tech-icons/typescript";
import { Container } from "@/components/common/Container";
import { TechCapsule } from "../common/TechCapsule";

export const Hero = () => {
  return (
    <Container>
      <div className="w-full pt-20">
        <h1 className="text-shadow-xs text-3xl font-bold text-zinc-900 dark:text-zinc-50 selection:text-zinc-50 selection:bg-orange-600">
          Reché Soares
        </h1>
        <div className="mt-6 font-medium text-base leading-loose tracking-tight text-zinc-600 dark:text-zinc-400 selection:bg-orange-600 selection:text-zinc-50">
          <span>I'm a </span>
          <span className="font-semibold text-orange-600">
            Full Stack Developer
          </span>
          <span>
            {" "}
            with{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">
              3.5+ years
            </span>{" "}
            of experience building interactive web apps using{" "}
          </span>
          <TechCapsule
            className="translate-y-0.5"
            label="Golang"
            icon={GolangIcon}
            size="sm"
          />
          ,{" "}
          <TechCapsule
            className="translate-y-0.5"
            label="TypeScript"
            icon={TypeScriptIcon}
            size="sm"
          />
          ,{" "}
          <TechCapsule
            className="translate-y-0.5"
            label="PostgreSQL"
            icon={PostgreSQLIcon}
            size="sm"
          />
          ,{" "}
          <TechCapsule
            className="translate-y-0.5"
            label="React"
            icon={ReactIcon}
            size="sm"
          />
          , &{" "}
          <TechCapsule
            className="translate-y-0.5"
            label="Next.js"
            icon={NextIcon}
            size="sm"
          />
          ,{" "}
          <span>
            pairing strong backend engineering with clean, intuitive interfaces.
          </span>
        </div>
      </div>
    </Container>
  );
};
