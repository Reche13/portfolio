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
        I&apos;m a Frontend Engineer who loves clean UIs and polished
        animations. When I&apos;m not coding, you&apos;ll find me at the piano
        or guitar, playing classical or jazz.
      </p>
    </Container>
  );
};
