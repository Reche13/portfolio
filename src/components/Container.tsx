import { ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`max-w-4xl mx-auto ${className}`}>{children}</div>;
};
