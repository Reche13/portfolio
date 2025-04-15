import React, { useEffect, useRef, useState } from "react";

const Line = () => {
  const path = useRef<SVGPathElement | null>(null);
  const progressRef = useRef(0);
  const timeRef = useRef(Math.PI / 2);
  const reqIdRef = useRef<number | null>(null);
  const xRef = useRef(0);
  const [fillColor, setFillColor] = useState("none");

  useEffect(() => {
    setPath(progressRef.current);
  }, []);

  const setPath = (progress: number) => {
    const { innerWidth } = window;
    const width = innerWidth;
    path.current?.setAttributeNS(
      "",
      "d",
      `M 0 50 Q ${width * xRef.current} ${50 + progress} ${width} 50`
    );
    setFillColor(progress > 0 ? "black" : "white");
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
    timeRef.current += 0.2;
    setPath(newProgress);
    progressRef.current = lerp(progressRef.current, 0, 0.01);

    if (Math.abs(progressRef.current) > 0.75) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    timeRef.current = Math.PI / 2;
    progressRef.current = 0;
    setFillColor("none");
  };

  const lerp = (a: number, b: number, t: number) => {
    return a + (b - a) * t;
  };

  return (
    <div className="w-full h-px relative bg-white">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-10 relative -top-5 z-10 hover:h-[200px] hover:-top-[100px]"
      />
      <svg className="absolute -top-[50px] w-full h-[100px]">
        <path
          strokeWidth={1}
          strokeLinecap="round"
          stroke="#fff"
          ref={path}
          fill={fillColor}
        ></path>
      </svg>
    </div>
  );
};

export default Line;
