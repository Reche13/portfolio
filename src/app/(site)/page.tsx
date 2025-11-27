import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";

export default function Home() {
  return (
    <div className="w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex-1 min-h-[200vh]">
      <Hero />
      <Projects />
    </div>
  );
}
