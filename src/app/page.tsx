"use client";

import Lenis from "lenis";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

import AnimatedPara from "@/components/AnimatedPara";
import { bebasNeue, bricolage } from "@/assets/fonts";
import BounceUpText from "@/components/text/BounceUpText";
import FadeUpText from "@/components/text/FadeUpText";

export default function Home() {
  const container = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={container} className="w-full relative h-[200vh] bg-black">
      {/* <MainContainer /> */}
      <SectionOne scrollY={scrollYProgress} />
      <SectionTwo scrollY={scrollYProgress} />
      <div className="bg-white h-screen w-full"></div>
    </div>
  );
}

const SectionOne = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const scale = useTransform(scrollY, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollY, [0, 1], [0, -6]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 flex items-center justify-center h-screen bg-[#CA231D]"
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/arches-texture.png')",
          backgroundRepeat: "repeat",
          opacity: 0.7,
          mixBlendMode: "multiply",
        }}
      />

      <div
        className={`${bebasNeue.className} pointer-events-none text-center text-[20vh] md:text-[50vh] text-black/5 z-[-1] font-bold absolute inset-0 h-full overflow-hidden flex flex-col items-center justify-center leading-[1]`}
      >
        {/* <span className="">FULLSTACK</span> */}
        {/* <span>DEVELOPER</span> */}
      </div>
      <div className="flex flex-col items-center">
        <FadeUpText>
          <span
            className={`${bricolage.className} text-center font-bold text-[40px] md:text-[64px] text-[#F6EDDC] selection:bg-black`}
          >
            Hey I&rsquo;m
          </span>
        </FadeUpText>

        <div
          className={`${bebasNeue.className} flex flex-col items-center text-center text-[#F6EDDC] mt-10`}
        >
          <BounceUpText text="RECHÉ" />
          <BounceUpText reverse delay={0.5} text="SOARES" />
        </div>
      </div>
    </motion.div>
  );
};

const SectionTwo = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const scale = useTransform(scrollY, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollY, [0, 1], [6, 0]);

  return (
    <motion.div
      style={{
        scale,
        rotate,
      }}
      className="relative flex items-center justify-center h-screen bg-[#17140F] px-4"
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/linen-texture.png')",
          backgroundRepeat: "repeat",
          opacity: 0.7,
          mixBlendMode: "difference",
        }}
      />
      <AnimatedPara>
        A Full Stack Engineer from Goa that loves building web apps that are
        fast, scalable, and smooth.
      </AnimatedPara>
    </motion.div>
  );
};
