"use client";

import { SVGProps, JSX } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface Props {
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const TechCapsuleMini = ({ icon: Icon, label }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="size-6 hover:scale-120 transition-all duration-300 hover:cursor-pointer">
          <Icon className="size-6" />
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
