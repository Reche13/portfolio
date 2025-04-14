"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const path = useRef<SVGPathElement | null>(null);
  let progress = 0;
  let time = Math.PI / 2;
  let reqId: number | null = null;
  let x = 0;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress: number) => {
    const { innerWidth } = window;
    const width = innerWidth * 0.8;
    path.current?.setAttributeNS(
      "",
      "d",
      `M 0 50 Q ${width * x} ${50 + progress} ${width} 50`
    );
  };

  const handleMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { movementY, clientX } = e;
    if (path.current) {
      const { left, width } = path.current.getBoundingClientRect();
      x = (clientX - left) / width;
      progress += movementY;
      setPath(progress);
    }
  };

  const handleMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    time += 0.2;
    setPath(newProgress);
    progress = lerp(progress, 0, 0.025);

    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  const lerp = (a: number, b: number, t: number) => {
    return a + (b - a) * t;
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center px-40">
      <div className="w-full h-px relative">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full h-10 relative -top-5 z-10 hover:h-[150px] hover:-top-[75px]"
        />
        <svg className="absolute -top-[50px] w-full h-[100px]">
          <path strokeWidth={1} stroke="#fff" ref={path}></path>
        </svg>
      </div>
    </div>
  );
}
