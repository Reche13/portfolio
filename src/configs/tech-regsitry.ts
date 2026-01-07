import { ReactIcon } from "@/assets/tech-icons/react";
import { TypeScriptIcon } from "@/assets/tech-icons/typescript";
import { NextIcon } from "@/assets/tech-icons/next";
import { GolangIcon } from "@/assets/tech-icons/golang";
import { PostgreSQLIcon } from "@/assets/tech-icons/postgresql";
import { AWSIcon } from "@/assets/tech-icons/aws";
import { BunIcon } from "@/assets/tech-icons/bun";
import { CSSIcon } from "@/assets/tech-icons/css";
import { ExpressIcon } from "@/assets/tech-icons/express";
import { GithubIcon } from "@/assets/tech-icons/github";
import { HtmlIcon } from "@/assets/tech-icons/html";
import { JavaScriptIcon } from "@/assets/tech-icons/javascript";
import { AppwriteIcon } from "@/assets/tech-icons/appwrite";
import { BootstrapIcon } from "@/assets/tech-icons/bootstrap";
import { FigmaIcon } from "@/assets/tech-icons/figma";
import { MDXIcon } from "@/assets/tech-icons/mdx";
import { MongoDBIcon } from "@/assets/tech-icons/mongodb";
import { MotionIcon } from "@/assets/tech-icons/motion";
import { NestJSIcon } from "@/assets/tech-icons/nestjs";
import { NetlifyIcon } from "@/assets/tech-icons/netlify";
import { NodeJSIcon } from "@/assets/tech-icons/nodejs";
import { PostmanIcon } from "@/assets/tech-icons/postman";
import { PrismaIcon } from "@/assets/tech-icons/prisma";
import { SanityIcon } from "@/assets/tech-icons/sanity";
import { ShadcnIcon } from "@/assets/tech-icons/shadcn";
import { SocketIOIcon } from "@/assets/tech-icons/socketio";
import { TailwindCSSIcon } from "@/assets/tech-icons/tailwindcss";
import { ThreeJSIcon } from "@/assets/tech-icons/threejs";
import { VercelIcon } from "@/assets/tech-icons/vercel";
import { DockerIcon } from "@/assets/tech-icons/docker";

export const TECH_REGISTRY = {
  react: {
    title: "React",
    icon: ReactIcon,
  },
  golang: {
    title: "Golang",
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
  docker: {
    title: "Docker",
    icon: DockerIcon,
  },
  aws: {
    title: "AWS",
    icon: AWSIcon,
  },
  bun: {
    title: "Bun",
    icon: BunIcon,
  },
  css: {
    title: "CSS",
    icon: CSSIcon,
  },
  express: {
    title: "Express",
    icon: ExpressIcon,
  },
  github: {
    title: "Github",
    icon: GithubIcon,
  },
  html: {
    title: "HTML",
    icon: HtmlIcon,
  },
  javascript: {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  appwrite: {
    title: "Appwrite",
    icon: AppwriteIcon,
  },
  bootstrap: {
    title: "Bootstrap",
    icon: BootstrapIcon,
  },
  figma: {
    title: "Figma",
    icon: FigmaIcon,
  },
  mdx: {
    title: "MDX",
    icon: MDXIcon,
  },
  mongodb: {
    title: "MongoDB",
    icon: MongoDBIcon,
  },
  motion: {
    title: "Motion",
    icon: MotionIcon,
  },
  nestjs: {
    title: "NestJS",
    icon: NestJSIcon,
  },
  netlify: {
    title: "Netlify",
    icon: NetlifyIcon,
  },
  nodejs: {
    title: "Node.js",
    icon: NodeJSIcon,
  },
  postman: {
    title: "Postman",
    icon: PostmanIcon,
  },
  prisma: {
    title: "Prisma",
    icon: PrismaIcon,
  },
  sanity: {
    title: "Sanity",
    icon: SanityIcon,
  },
  shadcn: {
    title: "Shadcn",
    icon: ShadcnIcon,
  },
  socketio: {
    title: "Socket.IO",
    icon: SocketIOIcon,
  },
  tailwindcss: {
    title: "Tailwind CSS",
    icon: TailwindCSSIcon,
  },
  threejs: {
    title: "Three.js",
    icon: ThreeJSIcon,
  },
  vercel: {
    title: "Vercel",
    icon: VercelIcon,
  },
} as const;

export type TechKey = keyof typeof TECH_REGISTRY;
