import { bebasNeue, bricolage } from "@/assets/fonts";
import BounceUpText from "@/components/text/BounceUpText";
import FadeUpText from "@/components/text/FadeUpText";
import { MotionValue, useTransform, motion } from "motion/react";
import React, { useEffect } from "react";

const Hero = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const scale = useTransform(scrollY, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollY, [0, 1], [0, -6]);

  useEffect(() => console.log("Hero"), []);

  return (
    <motion.div
      style={{
        scale,
        rotate,
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        boxShadow: "0px 0px 1px rgba(255, 255, 255, 0)",
      }}
      className="sticky top-0 flex items-center will-change-transform justify-center h-screen bg-white"
    >
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          backgroundImage: "url('/arches-texture.png')",
          backgroundRepeat: "repeat",
          opacity: 0.8,
          mixBlendMode: "multiply",
        }}
      />

      <div
        className={`${bebasNeue.className} pointer-events-none text-center text-[20vh] md:text-[50vh] text-[#0000000a] z-[-1] font-bold absolute inset-0 h-full overflow-hidden flex flex-col items-center justify-center leading-[1]`}
      >
        <span className="">FULLSTACK</span>
        <span>DEVELOPER</span>
      </div>
      <div className="flex flex-col items-center">
        <FadeUpText>
          <span
            className={`${bricolage.className} text-center font-bold text-[40px] md:text-[64px] text-[#1c1d20] selection:bg-[#515BEA]`}
          >
            Hey I&rsquo;m
          </span>
        </FadeUpText>

        <div
          className={`${bebasNeue.className} flex flex-col items-center text-center text-[#1c1d20] mt-10`}
        >
          <BounceUpText text="RECHÉ" />
          <BounceUpText reverse delay={0.5} text="SOARES" />
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Hero);
