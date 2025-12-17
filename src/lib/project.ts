import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectCaseStudy, Project } from "@/types";

const PROJECTS_DIR = path.join(process.cwd(), "src/data/projects");

export function getProject(slug: string): ProjectCaseStudy | null {
  if (!slug || slug.includes("/") || slug.includes("..")) {
    return null;
  }

  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return {
    slug,
    frontmatter: data as Project,
    content,
  };
}

export function getAllProjects(): ProjectCaseStudy[] {
  const files = fs.readdirSync(PROJECTS_DIR);

  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const project = getProject(slug);
      return project!;
    })
    .filter(Boolean);
}
