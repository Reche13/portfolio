import { notFound } from "next/navigation";
import { getProject } from "@/lib/project";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx/mdx-components";
import rehypeHighlight from "@shikijs/rehype";
import { Container } from "@/components/common/Container";
import Image from "next/image";
import { TECH_REGISTRY } from "@/configs/tech-regsitry";
import { TechCapsule } from "@/components/common/TechCapsule";
import { ProjectTechStack } from "@/components/projects/ProjectTechStack";
import Link from "next/link";
import { RadioIcon } from "@/assets/animated-icons/radio";
import { GithubIcon } from "@/assets/animated-icons/github";
import { BackgroundGrid } from "@/components/common/BackgroundGrid";

interface ProjectPageParams {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  const { projectId } = await params;
  const project = getProject(projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex-1 min-h-screen">
      <BackgroundGrid />
      <div className="relative px-8 mx-auto pt-20">
        <Container>
          <div className="flex flex-col gap-8 w-full">
            <Image
              className="w-full rounded-[20px]"
              src={project.frontmatter.imageUrl}
              alt={project.frontmatter.title}
              height={600}
              width={1000}
            />

            <div className="">
              <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
                {project.frontmatter.title}
              </h1>
              <p className="text-base font-medium text-zinc-500 mt-3">
                {project.frontmatter.description}
              </p>
              <div className="mt-4">
                <ProjectTechStack keys={project.frontmatter.stack} />
              </div>
            </div>

            <div className="flex items-center gap-8 mt-4">
              <Link
                href={project.frontmatter.websiteUrl}
                className="cursor-pointer group/l flex items-center gap-1.5 pb-0.5 text-sm text-zinc-600 dark:text-zinc-300 hover:text-orange-600"
              >
                <RadioIcon size={22} />
                <span className="border-b-2 border-transparent group-hover/l:border-orange-600 border-dashed transition-colors duration-100">
                  View Live
                </span>
              </Link>

              <Link
                href={project.frontmatter.githubUrl}
                className="cursor-pointer group/l flex items-center gap-1.5 pb-0.5 text-sm text-zinc-600 dark:text-zinc-300 hover:text-orange-600"
              >
                <GithubIcon size={22} />
                <span className="border-b-2 border-transparent group-hover/l:border-orange-600 border-dashed transition-colors duration-100">
                  View Github
                </span>
              </Link>
            </div>
          </div>

          <article className="mt-16">
            <MDXRemote
              source={project.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [[rehypeHighlight, { theme: "github-dark" }]],
                },
              }}
            />
          </article>
        </Container>
      </div>
    </div>
  );
}
