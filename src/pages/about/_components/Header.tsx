import { Container } from "@/components/Container";
import Heading from "@/components/text/Heading";
import React from "react";

export const Header = () => {
  return (
    <Container className="w-full px-4 md:px-10 pb-8 pt-24 bg-zinc-50 dark:bg-zinc-900 shadow-reche">
      <div className="w-full flex items-center justify-between">
        <Heading className="text-3xl">About Me</Heading>
      </div>

      <p className="text-neutral-600 dark:text-zinc-300 font-medium max-w-[60ch] mt-4">
        I&apos;m a Frontend Engineer with <strong>3+ </strong>
        years of experience, mostly at early-stage startups where I&apos;ve had
        the chance to build things from the ground up. From designing frontend
        architecture and scaling multi-app monorepos to creating full design
        systems.
        <br />
        <br />I recently launched Berlix UI, an animated UI library that crossed
        500 users in its first week. I care about design, flow, and the little
        details most people overlook.
      </p>
    </Container>
  );
};
