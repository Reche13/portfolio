import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return <div className={cn("mx-auto max-w-3xl", className)}>{children}</div>;
};
