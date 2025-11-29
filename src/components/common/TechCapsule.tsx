"use client";

import { cn } from "@/lib/utils";
import { SVGProps, JSX } from "react";

interface Props {
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  size?: "sm" | "lg";
}

export const TechCapsule = ({ label, icon: Icon, size = "lg" }: Props) => {
  return (
    <div
      className={cn(
        "rounded-lg inline-flex items-center bg-zinc-100 dark:bg-zinc-800 border border-dashed border-zinc-400 dark:border-zinc-500 w-fit py-1 cursor-pointer",
        size === "sm" && "gap-1 px-1.5",
        size === "lg" && "gap-2 px-2.5"
      )}
    >
      <Icon
        className={cn(size === "sm" && "size-4", size === "lg" && "size-5")}
      />
      <span
        className={cn(
          "font-medium  text-zinc-900 dark:text-zinc-50",
          size == "sm" && "text-xs",
          size == "lg" && "text-sm"
        )}
      >
        {label}
      </span>
    </div>
  );
};
