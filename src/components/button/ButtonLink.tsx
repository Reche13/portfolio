import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "../Magnetic";
import { bricolage } from "@/assets/fonts";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  href: string;
}

export default function ButtonLink({
  children,
  variant = "primary",
  href,
  ...attributes
}: ButtonProps) {
  const circle = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "50%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <a
        {...attributes}
        href={href}
        className={`w-fit group relative overflow-hidden flex items-center justify-center border rounded-full cursor-pointer py-3 px-8 ${
          variant === "primary" ? "bg-[#1c1d20]" : "bg-transparent"
        } ${variant === "tertiary" ? "border-white" : "border-[#1c1d20]"}`}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
      >
        <span
          className={`${
            bricolage.className
          } relative z-10 transition-colors text-base font-normal duration-300 ease-linear ${
            variant === "primary"
              ? "text-white group-hover:text-white"
              : variant === "secondary"
              ? "text-[#1c1d20] group-hover:text-white"
              : "text-white group-hover:text-white"
          }`}
        >
          {children}
        </span>
        <span
          ref={circle}
          className="bg-primary absolute top-full w-full h-[150%] rounded-full"
        ></span>
      </a>
    </Magnetic>
  );
}
