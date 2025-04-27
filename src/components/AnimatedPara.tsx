"use client";

import { bricolage } from "@/assets/fonts";
import { useScroll, motion, MotionValue, useTransform } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

const AnimatedPara = ({ children }: { children: ReactNode }) => {
  const element = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.3"],
  });

  useEffect(() => console.log("anima para"), []);

  if (typeof children !== "string") return;
  const words = children.split(" ");

  return (
    <p
      ref={element}
      className={`${bricolage.className} flex flex-wrap gap-3 md:gap-4 font-bold text-[40px] md:text-[64px] leading-[1.2] text-white max-w-[20ch]`}
    >
      {words.map((w, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            range={[start, end]}
            progress={scrollYProgress}
            key={index}
            word={w}
          />
        );
      })}
    </p>
  );
};

interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}
const Word = ({ word, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  useEffect(() => console.log("word"), []);

  return (
    <span className="relative">
      <span className="absolute opacity-5">{word}</span>
      <motion.span style={{ opacity, willChange: "opacity" }}>
        {word}
      </motion.span>
    </span>
  );
};

export default AnimatedPara;
