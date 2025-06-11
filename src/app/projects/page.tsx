"use client";

import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";
import Lenis from "lenis";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Header } from "./_components/Header";
import { Showcase } from "./_components/Showcase";

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
    <div className="w-full min-h-screen bg-zinc-100 dark:bg-zinc-950 selection:bg-amber-400 relative">
      <Navigation />
      <Header />
      <Showcase />
      <Footer />
      <Container className="w-full px-4 md:px-10 py-2  bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          built with 🔥 by Reché Soares
        </p>
      </Container>
    </div>
  );
}
