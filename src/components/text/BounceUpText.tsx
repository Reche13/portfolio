import React, { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

interface Props {
  text: string;
  reverse?: boolean;
  delay?: number;
}

const BounceUpText = ({ text, reverse = false, delay = 0 }: Props) => {
  const textContainerRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(textContainerRef, { once: true });

  useEffect(() => console.log("bounce up"), []);

  return (
    <motion.div
      ref={textContainerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {},
      }}
      className="overflow-hidden text-[128px] md:text-[175px]  flex items-end pt-4 px-10 relative"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: {
              y: "107%",
              opacity: 0,
              rotate: `${i * 20 + 20}deg`,
            },
            visible: {
              y: "0",
              opacity: 1,
              rotate: "0deg",
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 12,
                mass: 0.8,
                duration: 0.7,
                delay: delay + (reverse ? text.length - i : i) * 0.1,
              },
            },
          }}
          className="inline-block align-bottom leading-none selection:bg-[#515BEA] hover:opacity-50 will-change-transform"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BounceUpText;
