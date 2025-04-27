import { ReactNode } from "react";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`${className} max-w-[1280px] mx-auto px-5 md:px-8`}>
      {children}
    </div>
  );
}

Container.displayName = "Container";

export { Container };
