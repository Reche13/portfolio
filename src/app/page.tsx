"use client";

import Lenis from "lenis";
import { useEffect } from "react";

import SectionOne from "@/sections/SectionOne";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => console.log("page"), []);

  return (
    <div className="w-full relative bg-black">
      <SectionOne />
      <div className="bg-white h-screen w-full"></div>
    </div>
  );
}
