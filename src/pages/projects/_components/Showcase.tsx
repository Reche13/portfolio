import { Project } from "@/pages/_components/Projects";
import { Container } from "@/components/Container";

export const Showcase = () => {
  return (
    <Container className="w-full px-4 md:px-10 py-8  bg-zinc-50 dark:bg-zinc-900 shadow-reche">
      <div className="w-full flex flex-col md:flex-row gap-8 mt-6 items-stretch">
        <Project
          url="https://berlix.vercel.app"
          imageUrl="/berlix.png"
          title="Berlix UI"
          desc="A UI library of clean, animated components you can drop into any project."
        />
        <Project
          url="https://polonium.rechesoares.com"
          imageUrl="/polonium.png"
          title="Polonium"
          desc="An API client for testing REST and WebSocket requests, no login required."
        />
      </div>
    </Container>
  );
};
