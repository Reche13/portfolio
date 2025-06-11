import Line from "@/app/line";
import AnimatedPara from "@/components/AnimatedPara";
import { Container } from "@/components/Container";
import AboutCircle from "@/components/SvgPath/AboutCircle";
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
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        boxShadow: "0px 0px 1px rgba(255, 255, 255, 0)",
      }}
      className="relative h-screen bg-[#1c1d20] px-4 will-change-transform"
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
      <Container className="h-full">
        <div className="w-full h-full flex flex-col justify-center">
          <AnimatedPara>
            A Full Stack Engineer from Goa that loves building web apps that are
            fast, scalable, and smooth.
          </AnimatedPara>
          <div className="flex items-center mt-10">
            <Line />
            <AboutCircle />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default React.memo(About);
