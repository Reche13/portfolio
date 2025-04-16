"use client";

import Lenis from "lenis";
import { MotionValue, useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef } from "react";

import { Bricolage_Grotesque, Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-bricolage-grotesque",
});

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
    <div ref={container} className="w-full relative h-[200vh] bg-white">
      <SectionOne scrollY={scrollYProgress} />
      <SectionTwo scrollY={scrollYProgress} />
    </div>
  );
}

const SectionOne = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const scale = useTransform(scrollY, [0, 1], [1, 0.8]);
  console.log(scrollY);
  const rotate = useTransform(scrollY, [0, 1], [0, -6]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 flex items-center justify-center h-screen bg-[#CA231D]"
    >
      <div className="flex flex-col items-center gap-5">
        <span
          className={`${bricolageGrotesque.className} text-center font-bold text-[40px] md:text-[64px] text-[#F6EDDC]`}
        >
          Hey I&rsquo;m
        </span>
        <h1
          className={`${bebasNeue.className} flex flex-col items-center text-center text-[#F6EDDC] text-[128px] md:text-[175px] leading-36`}
        >
          <span>RECHÉ</span>
          <span>SOARES</span>
        </h1>
      </div>
    </motion.div>
  );
};

const SectionTwo = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const scale = useTransform(scrollY, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollY, [0, 1], [6, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative flex items-center justify-center h-screen bg-[#17140F] px-4"
    >
      <p
        className={`${bricolageGrotesque.className} text-center font-bold text-[40px] md:text-[64px] text-[#F6EDDC] max-w-[20ch]`}
      >
        A Full Stack Engineer from Goa that loves building web apps that are
        fast, scalable, and smooth.
      </p>
    </motion.div>
  );
};
