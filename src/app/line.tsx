import React, { useEffect, useRef, useState } from "react";

const Line = () => {
  const path = useRef<SVGPathElement | null>(null);
  const progressRef = useRef(0);
  const timeRef = useRef(Math.PI / 2);
  const reqIdRef = useRef<number | null>(null);
  const xRef = useRef(0);

  useEffect(() => {
    setPath(progressRef.current);
  }, []);

  const setPath = (progress: number) => {
    const { innerWidth } = window;
    const width = innerWidth * 0.6;
    path.current?.setAttributeNS(
      "",
      "d",
      `M 0 50 Q ${width * xRef.current} ${50 + progress} ${width} 50`
    );
  };

  const handleMouseEnter = () => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
      resetAnimation();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { movementY, clientX } = e;
    if (path.current) {
      const { left, width } = path.current.getBoundingClientRect();
      xRef.current = (clientX - left) / width;
      progressRef.current += movementY;
      setPath(progressRef.current);
    }
  };

  const handleMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progressRef.current * Math.sin(timeRef.current);
    timeRef.current += 0.3;
    setPath(newProgress);
    progressRef.current = lerp(progressRef.current, 0, 0.025);

    if (Math.abs(progressRef.current) > 0.75) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    timeRef.current = Math.PI / 2;
    progressRef.current = 0;
  };

  const lerp = (a: number, b: number, t: number) => {
    return a + (b - a) * t;
  };

  return (
    <div className="w-full h-px relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-10 relative -top-5 z-10 hover:h-[100px] hover:-top-[50px]"
      />
      <svg className="absolute -top-[50px] w-full h-[100px]">
        <path
          strokeWidth={3}
          strokeLinecap="round"
          stroke="#ffffff77"
          ref={path}
          fill="none"
        ></path>
      </svg>
    </div>
  );
};

export default Line;
