import { motion } from "motion/react";
import { ReactNode } from "react";

export const Inner = ({ children }: { children: ReactNode }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const perspective = {
    initial: {
      scale: 1,
      y: 0,
    },
    enter: {
      scale: 1,
      y: 0,
    },
    exit: {
      scale: 0.9,
      y: -150,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide = {
    initial: {
      y: "100vh",
    },
    enter: {
      y: "100vh",
    },
    exit: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 1,
    },
  };

  return (
    <div className="dark:bg-zinc-100 bg-zinc-950">
      <motion.div
        {...anim(slide)}
        className="fixed z-50 top-0 left-0 bg-zinc-100 dark:bg-zinc-950 w-full h-full"
      />
      <motion.div
        {...anim(perspective)}
        className="bg-zinc-100 dark:bg-zinc-950"
      >
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
};
