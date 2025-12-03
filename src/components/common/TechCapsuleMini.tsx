"use client";

import { SVGProps, JSX } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  size?: "sm" | "md" | "lg";
}

export const TechCapsuleMini = ({ icon: Icon, label, size = "sm" }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="hover:scale-120 transition-all duration-300 hover:cursor-pointer">
          <Icon
            className={cn(
              size === "sm" && "size-6",
              size === "md" && "size-8",
              size === "lg" && "size-10"
            )}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent className="">
        <p className="text-xs font-medium text-zinc-50 dark:text-zinc-900">
          {label}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};
