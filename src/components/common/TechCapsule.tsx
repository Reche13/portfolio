"use client";

import { SVGProps, JSX } from "react";

interface Props {
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const TechCapsule = ({ label, icon: Icon }: Props) => {
  return (
    <div className="rounded-lg inline-flex translate-y-1 items-center gap-2 bg-zinc-100 dark:bg-zinc-800 border-1 border-dashed border-zinc-400 dark:border-zinc-500 w-fit px-2 py-1 cursor-pointer">
      <Icon className="size-5" />
      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
        {label}
      </span>
    </div>
  );
};
