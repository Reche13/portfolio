import { GolangIcon } from "@/assets/tech-icons/golang";
import { NextIcon } from "@/assets/tech-icons/next";
import { PostgreSQLIcon } from "@/assets/tech-icons/postgresql";
import { ReactIcon } from "@/assets/tech-icons/react";
import { TypeScriptIcon } from "@/assets/tech-icons/typescript";
import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "echodb",
    title: "Echo DB",
    description:
      "A lightweight in-memory database built on top of RESP protocol. Supports KV store, Lists, Sets, pub-sub, and much more.",
    imageUrl: "/images/projects/berlix.png",
    videoUrl: "io",
    githubUrl: "github.com/reche13/berlix",
    websiteUrl: "ui.rechesoares.com",
    stack: ["golang", "next", "postgresql", "typescript"],
  },

  {
    id: "echodb",
    title: "HTTP Server from Scratch",
    description:
      "a HTTP server written entirely from scartch in go, with a custom requst parser, supporting concurent requests, handling upto 300K r/s.",
    imageUrl: "/images/projects/proj.jpg",
    videoUrl: "io",
    githubUrl: "github.com/reche13/berlix",
    websiteUrl: "ui.rechesoares.com",
    stack: ["golang", "react"],
  },

  {
    id: "berlix",
    title: "Berlix UI",
    description:
      "A UI library of clean, animated components you can drop into any project.",
    imageUrl: "/images/projects/berlix.png",
    videoUrl: "io",
    githubUrl: "github.com/reche13/berlix",
    websiteUrl: "ui.rechesoares.com",
    stack: ["typescript", "react", "next"],
  },

  {
    id: "microservice",
    title: "Microservice Application",
    description:
      "A UI library of clean, animated components you can drop into any project.",
    imageUrl: "/images/projects/berlix.png",
    videoUrl: "io",
    githubUrl: "github.com/reche13/berlix",
    websiteUrl: "ui.rechesoares.com",
    stack: ["react", "golang", "postgresql"],
  },
];
