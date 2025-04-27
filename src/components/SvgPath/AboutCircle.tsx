import React, { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { bebasNeue } from "@/assets/fonts";

const AboutCircle = () => {
  const eyeX = useSpring(0, { stiffness: 300, damping: 20 });
  const eyeY = useSpring(0, { stiffness: 300, damping: 20 });
  const eyeContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleEyeMouseMove = (e: MouseEvent) => {
      if (!eyeContainer.current) return;
      const { left, width, top, height } =
        eyeContainer.current.getBoundingClientRect();
      const deltaX = e.clientX - (left + width / 2);
      const deltaY = e.clientY - (top + height / 2);

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const maxMove = 6;
      const moveX = (deltaX / distance) * maxMove;
      const moveY = (deltaY / distance) * maxMove;

      eyeX.set(moveX);
      eyeY.set(moveY);
    };
    window.addEventListener("mousemove", handleEyeMouseMove);
    return () => window.removeEventListener("mousemove", handleEyeMouseMove);
  }, []);

  return (
    <div className="relative p-2 min-w-[180px] h-[180px] rounded-full bg-[#515BEA] flex items-center justify-center overflow-hidden">
      <div
        ref={eyeContainer}
        className="w-[100px] h-[50px] flex items-center justify-center gap-2"
      >
        <div className="relative bg-white h-[40px] w-[40px] rounded-full overflow-hidden p-0.5 flex items-center justify-center">
          <div className="absolute top-[5px] rounded-full blur-[5px] left-1/2 -translate-x-1/2 w-[20px] h-[10px] bg-white/70 z-10" />
          <motion.div
            style={{ x: eyeX, y: eyeY }}
            className="bg-black w-[25px] h-[25px] rounded-full"
          />
        </div>
        <div className="relative bg-white h-[40px] w-[40px] rounded-full overflow-hidden p-0.5 flex items-center justify-center">
          <div className="absolute top-[5px] rounded-full blur-[5px] left-1/2 -translate-x-1/2 w-[20px] h-[10px] bg-white/70 z-10" />
          <motion.div
            style={{ x: eyeX, y: eyeY }}
            className="bg-black w-[25px] h-[25px] rounded-full"
          ></motion.div>
        </div>
      </div>

      <motion.svg
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        style={{ originX: "50%", originY: "50%" }}
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="about-circle"
            d="M75,75 m-74.5,0 a74.5,74.5 0 1,0 149,0 a74.5,74.5 0 1,0 -149,0"
          />
        </defs>
        <text
          style={{ letterSpacing: "4px" }}
          className={`${bebasNeue.className} tracking-wide text-[30px]`}
          fill="white"
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <textPath href="#about-circle" startOffset={i * 50 + "%"}>
                ABOUT
              </textPath>
              <textPath href="#about-circle" startOffset={i * 50 + 20 + "%"}>
                ME
              </textPath>
            </React.Fragment>
          ))}
        </text>
      </motion.svg>
    </div>
  );
};

export default AboutCircle;
