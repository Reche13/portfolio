"use client"; // for Next.js App Router (optional)

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

const FadeUpText = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.8,
        duration: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpText;
