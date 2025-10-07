import { Container } from "@/components/Container";
import Heading from "@/components/text/Heading";
import { FileUser } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container className="w-full px-4 md:px-10 pb-8 pt-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="w-full flex items-center justify-between">
        <Heading>Reché Soares</Heading>
      </div>

      <p className="text-neutral-600 dark:text-zinc-300 font-medium max-w-[65ch] mt-4">
        I&apos;m a{" "}
        <span className="font-semibold text-orange-600">
          Fullstack Engineer
        </span>{" "}
        blending clean frontend design with robust backend systems. I build apps
        that look great, run smoothly, and scale effortlessly. When I&apos;m not
        coding, you&apos;ll find me at the piano or guitar, playing classical or
        jazz.
      </p>
      <Link
        href="/resume.pdf"
        className="w-fit mt-6 border-[2px] cursor-pointer border-zinc-300 dark:border-zinc-600 hover:border-orange-600 active:border-orange-600 focus:border-orange-600 hover:bg-orange-500/5 active:bg-orange-500/5 focus:bg-orange-500/5 text-zinc-500 dark:text-zinc-400 hover:text-orange-600 active:text-orange-600 focus:text-orange-600 transition duration-300 text-xs font-medium flex items-center gap-1 py-1.5 px-2 rounded-xl"
      >
        <FileUser strokeWidth={2} className="size-4" />
        View Resume
      </Link>
    </Container>
  );
};
