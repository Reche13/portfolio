import AnimatedPara from "@/components/AnimatedPara";
import { useTransform, MotionValue, motion } from "motion/react";
import React, { useEffect } from "react";

const About = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const scale = useTransform(scrollY, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollY, [0, 1], [6, 0]);

  useEffect(() => console.log("About"), []);

  return (
    <motion.div
      style={{
        scale,
        rotate,
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        boxShadow: "0px 0px 1px rgba(255, 255, 255, 0)",
      }}
      className="relative flex items-center justify-center h-screen bg-[#17140F] px-4 will-change-transform"
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

export default React.memo(About);
