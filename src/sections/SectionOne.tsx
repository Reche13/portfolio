import React, { useRef } from "react";
import Hero from "./Hero";
import About from "./About";
import { useScroll } from "motion/react";

const SectionOne = () => {
  const container = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="w-full relative h-[200vh] bg-black">
      <Hero scrollY={scrollYProgress} />
      <About scrollY={scrollYProgress} />
    </div>
  );
};

export default React.memo(SectionOne);
