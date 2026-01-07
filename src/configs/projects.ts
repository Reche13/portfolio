import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "echodb",
    title: "Echo DB",
    description:
      "A lightweight in-memory database based on RESP protocol. Supports KV store, Lists, Persitence using AOF, configurations using YAML and much more.",
    imageUrl: "/images/projects/berlix.png",
    videoUrl: "",
    githubUrl: "https://github.com/reche13/echodb",
    websiteUrl: "https://echo.rechesoares.com",
    stack: ["golang", "docker"],
  },

  {
    id: "berlix",
    title: "Berlix UI",
    description:
      "A UI library of clean, animated components you can drop into any project.",
    imageUrl: "/images/projects/berlix.png",
    videoUrl: "",
    githubUrl: "https://github.com/reche13/berlix",
    websiteUrl: "https://ui.rechesoares.com",
    stack: ["typescript", "react", "next", "tailwindcss", "motion"],
  },

  {
    id: "http",
    title: "HTTP Server from Scratch",
    description:
      "A HTTP/1.1 server written entirely from scartch in go, with a custom requst parser, supporting concurent requests, chunked request and respones, handling upto 300K r/s.",
    imageUrl: "/images/projects/proj.jpg",
    videoUrl: "",
    githubUrl: "https://github.com/reche13/http-from-scratch",
    websiteUrl: "",
    stack: ["golang"],
  },

  {
    id: "polonium",
    title: "Polonium",
    description:
      "A Postman-like tool for testing REST and WebSocket endpoints with support for custom headers, cookies, payloads, and organized collections using nested folders",
    imageUrl: "/images/projects/berlix.png",
    videoUrl: "",
    githubUrl: "https://github.com/reche13/polonium",
    websiteUrl: "https://polonium.rechesoares.com",
    stack: ["typescript", "react", "next", "tailwindcss", "shadcn"],
  },
];
