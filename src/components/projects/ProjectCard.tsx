"use client";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { TechCapsuleMini } from "../common/TechCapsuleMini";
import { GithubIcon } from "@/assets/animated-icons/github";
import { RadioIcon } from "@/assets/animated-icons/radio";
import { Project } from "@/types";
import { TECH_REGISTRY } from "@/configs/tech-regsitry";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <motion.div
      whileHover="hover"
      variants={{}}
      className="group flex flex-col rounded-[20px] h-full w-full p-0 overflow-hidden transition-all bg-zinc-200/30 hover:bg-zinc-200/60 dark:bg-zinc-800/30 dark:hover:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 selection:bg-orange-600 selection:text-zinc-50"
    >
      <div className="">
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            variants={{
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {project.videoUrl && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 opacity-0 transition-all duration-500 group-hover:opacity-100 hover:backdrop-blur-xs">
                  <button className="flex size-16 items-center justify-center rounded-full bg-white/20 transition-all duration-300 hover:bg-white/30 cursor-pointer">
                    <PlayCircle className="size-8 text-zinc-50" />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContent className="w-full p-0 border-none overflow-hidden rounded-2xl">
                <div className="aspect-video w-full">
                  <video
                    className="h-full w-full object-cover rounded-lg outline-none"
                    src={project.videoUrl}
                    autoPlay
                    loop
                    controls
                  />
                </div>
                <DialogTitle className="sr-only">{project.title}</DialogTitle>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="p-6 flex-1">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h3>
          <div className="flex items-center gap-8 mt-5">
            <Link
              href={project.websiteUrl}
              className="cursor-pointer group/l flex items-center gap-1.5 pb-0.5 text-sm text-zinc-600 dark:text-zinc-300 hover:text-orange-600"
            >
              <RadioIcon size={22} />
              <span className="border-b-2 border-transparent group-hover/l:border-orange-600 border-dashed transition-colors duration-100">
                View Live
              </span>
            </Link>

            <Link
              href={project.githubUrl}
              className="cursor-pointer group/l flex items-center gap-1.5 pb-0.5 text-sm text-zinc-600 dark:text-zinc-300 hover:text-orange-600"
            >
              <GithubIcon size={22} />
              <span className="border-b-2 border-transparent group-hover/l:border-orange-600 border-dashed transition-colors duration-100">
                View Github
              </span>
            </Link>
          </div>
          <p className="text-sm font-normal text-zinc-600 dark:text-zinc-400 mt-3">
            {project.description}
          </p>
        </div>

        <div className="px-6 pb-6 pt-2 flex flex-col">
          <div className="">
            <h4 className="text-sm font-medium text-zinc-500">Technologies</h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.stack.map((key, idx) => {
                const tech = TECH_REGISTRY[key];
                if (!tech) return null;
                return (
                  <TechCapsuleMini
                    key={`${tech.title}-${idx}-${project.id}`}
                    icon={tech.icon}
                    label={tech.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-5 flex justify-between">
            <span />
            <Link
              href={`/projects/${project.id}`}
              className="flex items-center gap-2 group/a text-zinc-600 dark:text-zinc-400 hover:text-orange-600 "
            >
              <span className="text-sm font-normal border-b-2 border-transparent group-hover/a:border-orange-600 border-dashed transition-all duration-100">
                View Details
              </span>
              <ArrowRight className="size-4 -translate-x-1 group-hover/a:translate-x-0 transition-transform duration-300 ease-[0.25,1,0.5,1]" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
