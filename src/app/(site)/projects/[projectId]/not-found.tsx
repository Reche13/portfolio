import { BackgroundGrid } from "@/components/common/BackgroundGrid";
import { Container } from "@/components/common/Container";
import { AlertTriangle } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="relative w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex-1 min-h-screen">
      <BackgroundGrid />
      <div className="relative px-8 w-fit mx-auto pt-20">
        <Container>
          <div className="mt-10 w-full text-lg font-medium text-zinc-900 dark:text-zinc-50 flex flex-col items-center gap-3">
            <AlertTriangle />
            <span>Project Not Found</span>
          </div>
        </Container>
      </div>
    </div>
  );
}
