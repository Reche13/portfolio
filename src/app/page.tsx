"use client";

import Lenis from "lenis";
import { useEffect } from "react";

import SectionOne from "@/sections/SectionOne";
import Projects from "@/sections/Projects";
import Footer from "@/sections/Footer";

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

  return (
    <div className="w-full relative bg-black">
      <SectionOne />
      <div className="w-full overflow-hidden">
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
