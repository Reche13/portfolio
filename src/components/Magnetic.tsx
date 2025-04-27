import React, {
  isValidElement,
  JSX,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import gsap from "gsap";

export default function Magnetic({
  children,
}: {
  // eslint-disable-next-line
  children: ReactElement<any, keyof JSX.IntrinsicElements>;
}) {
  const magnetic = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    if (magnetic.current) {
      magnetic.current.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magnetic.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      });
      magnetic.current.addEventListener("mouseleave", () => {
        xTo(0);
        yTo(0);
      });
    }
  }, []);

  if (!isValidElement(children)) {
    console.error("Magnetic expects a single React element as a child.");
    return null;
  }

  return React.cloneElement(children, { ref: magnetic });
}
