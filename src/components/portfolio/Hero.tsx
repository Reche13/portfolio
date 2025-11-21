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
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Reché Soares
        </h1>
        <p className="mt-1 font-medium text-lg leading-loose text-zinc-700 dark:text-zinc-300">
          I'm a{" "}
          <span className="font-semibold text-orange-600">
            Full Stack Developer
          </span>{" "}
          who loves building interactive web apps using{" "}
          <TechCapsule label="Golang" icon={GolangIcon} />,{" "}
          <TechCapsule label="TypeScript" icon={TypeScriptIcon} />,{" "}
          <TechCapsule label="PostgreSQL" icon={PostgreSQLIcon} />,{" "}
          <TechCapsule label="React" icon={ReactIcon} />, &{" "}
          <TechCapsule label="Next.js" icon={NextIcon} />, pairing strong
          backend engineering with clean, intuitive interfaces.
        </p>
      </div>
    </Container>
  );
};
