import React from "react";
import { cn } from "@/lib/utils";
import { inter } from "@/assets/fonts";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

const Heading = ({
  as = "h1",
  className,
  children,
  ...props
}: HeadingProps) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "relative z-0 text-zinc-900 dark:text-zinc-50 selection:bg-amber-400 font-bold tracking-tighter drop-shadow-lg text-4xl",
        `${inter.className}`,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
