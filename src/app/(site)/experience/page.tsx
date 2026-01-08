import { PageHeading } from "@/components/common/PageHeading";
import { Container } from "@/components/common/Container";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { BackgroundGrid } from "@/components/common/BackgroundGrid";

export default function ExperiencePage() {
  return (
    <div className="relative w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex-1 min-h-screen">
      <BackgroundGrid />
      <div className="relative px-8 w-fit mx-auto pt-20">
        <Container>
          <PageHeading
            heading="Work Experience"
            subHeading="My work experiences across different companies and roles"
          />

          <div className="mt-8 w-full h-px rounded-full bg-zinc-200 dark:bg-zinc-800" />

          <div className="mt-14">
            <ExperienceSection />
          </div>
        </Container>
      </div>
    </div>
  );
}
