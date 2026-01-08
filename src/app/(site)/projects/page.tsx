import { PageHeading } from "@/components/common/PageHeading";
import { Container } from "@/components/common/Container";
import { ProjectList } from "@/components/projects/ProjectList";
import { BackgroundGrid } from "@/components/common/BackgroundGrid";

export default function ProjectsPage() {
  return (
    <div className="relative w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex-1 min-h-screen">
      <BackgroundGrid />
      <div className="relative px-8 w-fit mx-auto pt-20">
        <Container>
          <PageHeading
            heading="Projects"
            subHeading="My projects across different technologies and domains"
          />

          <div className="mt-8 w-full h-px rounded-full bg-zinc-200 dark:bg-zinc-800" />

          <div className="mt-14">
            <ProjectList />
          </div>
        </Container>
      </div>
    </div>
  );
}
