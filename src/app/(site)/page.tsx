import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";

export default function Home() {
  return (
    <div className="relative w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex-1 min-h-[200vh]">
      <div
        className="absolute inset-0 h-full w-full 
      bg-white dark:bg-zinc-950 
      bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] 
      bg-size-[40px_40px]"
      />
      <div className="relative px-8 w-fit mx-auto">
        <Hero />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </div>
    </div>
  );
}
