"use client";

import { motion } from "motion/react";

type Props = React.ComponentProps<"svg"> & {
  open?: boolean;
};

export function ChevronsDownUpIcon({ open = false, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Bottom arrow */}
      <motion.path
        variants={{
          closed: { d: "M7 15L12 20L17 15" },
          open: { d: "M7 20L12 15L17 20" },
        }}
        initial={false}
        animate={open ? "open" : "closed"}
        transition={{ duration: 0.25 }}
      />

      {/* Top arrow */}
      <motion.path
        variants={{
          closed: { d: "M7 9L12 4L17 9" },
          open: { d: "M7 4L12 9L17 4" },
        }}
        initial={false}
        animate={open ? "open" : "closed"}
        transition={{ duration: 0.25 }}
      />
    </svg>
  );
}
