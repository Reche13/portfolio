"use client";

import { ChevronsDownUpIcon } from "@/assets/animated-icons/chevron-down-up";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { TechCapsule } from "../common/TechCapsule";
import Image from "next/image";
import { Experience } from "@/types";

export const ExperienceCard = ({
  exp,
  isOpen = false,
}: {
  exp: Experience;
  isOpen?: boolean;
}) => {
  const [open, setOpen] = useState(isOpen);

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
                src={exp.logo}
                alt={exp.id}
                width={100}
                height={100}
                className="w-6 h-6"
              />
            </div>
            <div className="text-left">
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {exp.name}
              </span>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {exp.position}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {exp.from} - {exp.till}
              </span>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {exp.location}
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
                  {exp.stack.map((tech, idx) => (
                    <TechCapsule
                      key={`${exp.id}-tech-${tech.label}-${idx}`}
                      size="sm"
                      label={tech.label}
                      icon={tech.icon}
                    />
                  ))}
                </div>

                <div className="mt-6">
                  <ul className="pl-5 list-disc flex flex-col gap-2 text-sm font-normal text-zinc-600 dark:text-zinc-400">
                    {exp.achievements.map((ach, idx) => (
                      <li key={`${exp.id}-achievement-${idx}`}>{ach}</li>
                    ))}
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
