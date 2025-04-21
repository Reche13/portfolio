import AnimatedPara from "@/components/AnimatedPara";
import { useTransform, MotionValue, motion } from "motion/react";
import React from "react";

const About = ({ scrollY }: { scrollY: MotionValue<number> }) => {
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

export default About;
