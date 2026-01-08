import { BackgroundGrid } from "@/components/common/BackgroundGrid";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";

export default function Home() {
  return (
    <div className="relative w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex-1 min-h-screen">
      <BackgroundGrid />
      <div className="relative px-8 w-fit mx-auto">
        <Hero />
        <Projects />
        <Experience />
        {/* <Stack /> */}
        <Contact />
      </div>
    </div>
  );
}
