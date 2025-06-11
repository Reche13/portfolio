import { Container } from "@/components/Container";
import Heading from "@/components/text/Heading";
import React from "react";

export const Header = () => {
  return (
    <Container className="w-full px-4 md:px-10 pb-8 pt-24 bg-zinc-50 dark:bg-zinc-900 shadow-reche">
      <div className="w-full flex items-center justify-between">
        <Heading className="text-3xl">Projects</Heading>
      </div>

      <p className="text-neutral-600 dark:text-zinc-300 font-medium max-w-[60ch] mt-4">
        These are some of the things I&apos;ve built. Some solve real problems,
        some are just for fun. I care a lot about clean design, smooth
        interactions, and building stuff that actually works.
      </p>
    </Container>
  );
};
