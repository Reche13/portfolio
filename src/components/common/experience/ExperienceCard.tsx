"use client";

import { ChevronsDownUpIcon } from "@/assets/animated-icons/chevron-down-up";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { TechCapsule } from "../TechCapsule";
import { TypeScriptIcon } from "@/assets/tech-icons/typescript";
import { NextIcon } from "@/assets/tech-icons/next";
import { ReactIcon } from "@/assets/tech-icons/react";
import { GolangIcon } from "@/assets/tech-icons/golang";
import Image from "next/image";

export const ExperienceCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="selection:bg-orange-600 selection:text-zinc-50"
    >
      <CollapsibleTrigger className="cursor-pointer w-full">
        <div className="w-full py-1 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-zinc-950 dark:bg-zinc-50">
              <Image
                src="/images/work/thalus-2.png"
                alt="thalus"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            </div>
            <div className="text-left">
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Thalus AI (Vericy)
              </span>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Full Stack Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                2023 - Present
              </span>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Bridgewater, NJ (Remote)
              </p>
            </div>
            <div className="">
              <ChevronsDownUpIcon
                className="size-5 text-zinc-500"
                open={open}
              />
            </div>
          </div>
        </div>
      </CollapsibleTrigger>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0 }}
            style={{ overflow: "hidden" }}
          >
            <CollapsibleContent forceMount className="mt-1">
              <div className="w-full py-4">
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Technology & Tools
                </span>
                <div className="w-full mt-1 flex gap-2 flex-wrap">
                  <TechCapsule
                    size="sm"
                    label="TypeScript"
                    icon={TypeScriptIcon}
                  />
                  <TechCapsule size="sm" label="Next.js" icon={NextIcon} />
                  <TechCapsule size="sm" label="React" icon={ReactIcon} />
                  <TechCapsule size="sm" label="Golang" icon={GolangIcon} />
                </div>

                <div className="mt-6">
                  <ul className="pl-5 list-disc flex flex-col gap-2 text-sm font-normal text-zinc-600 dark:text-zinc-400">
                    <li>
                      Led the architecture and implementation of a Turborepo
                      monorepo, consolidating 7+ projects, centralizing shared
                      packages, reducing deployment time by 40% and accelerating
                      feature development by 60%.
                    </li>
                    <li>
                      Migrated legacy apps to Next.js + TypeScript, improving
                      speed, SEO, and maintainability, using smart caching
                      strategies and optimized rendering, while cutting bugs by
                      over 50% using Jest and Cypress tests.
                    </li>
                    <li>
                      Engineered Go CLI tools to automate project scaffolding,
                      accelerating dev workflows.
                    </li>
                    <li>
                      Developed scalable REST APIs using Node.js, Go and
                      PostgreSQL to streamline backend processes.
                    </li>
                    <li>
                      Implemented CI/CD pipelines across multiple projects by
                      using Github Actions, Vercel, Docker and AWS, integrating
                      testing and automated deployments, speeding up integration
                      and release cycles.
                    </li>
                    <li>
                      Built data-driven B2B and B2C dashboards with optimized
                      state management, for fast performance.
                    </li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Collapsible>
  );
};
