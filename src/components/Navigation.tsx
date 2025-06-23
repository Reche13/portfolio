"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { House, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <div className="relative w-full">
      <Container className="fixed w-full z-50 top-0 left-1/2 transform -translate-x-1/2">
        <motion.header
          animate={{
            boxShadow: scrolled ? "0 2px 5px 0 rgba(0, 0, 0, 0.2)" : "none",
            y: scrolled ? 10 : 0,
            width: scrolled ? "95%" : "100%",
            borderRadius: scrolled ? 100 : 0,
          }}
          className="w-full py-3 px-4 shadow flex items-center justify-between bg-zinc-50/50 dark:bg-transparent backdrop-blur-[10px] mx-auto"
        >
          <Link href="/">
            <div className="size-10 rounded-full bg-orange-600 shrink-0 flex items-center justify-center">
              <House className="text-white size-4" strokeWidth={1.5} />
            </div>
          </Link>
          <nav className="flex items-center gap-0 md:px-4">
            {/* Desktop Links */}
            {links.map((link, index) => (
              <Link
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-orange-600 transition-colors duration-150 ease-in-out relative px-4 py-1 hidden md:block"
                key={`${link.href}-${index}`}
                href={link.href}
              >
                <span className="relative z-10">{link.label}</span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbarHover"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute inset-y-0 inset-x-2 border-[2px] bg-orange-500/5 border-orange-600 z-0 rounded-xl"
                  />
                )}
              </Link>
            ))}

            <ThemeSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 md:hidden flex items-center rounded-xl p-1 border-[2px] border-transparent hover:bg-orange-500/5 hover:border-orange-600 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-orange-600 cursor-pointer"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </nav>
        </motion.header>
      </Container>

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "anticipate" }}
        className="fixed inset-0 bg-zinc-50 dark:bg-zinc-900 shadow-lg z-40 p-6 flex flex-col gap-6 items-center justify-center md:hidden"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-lg font-medium text-zinc-700 dark:text-zinc-100 hover:text-orange-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  // { label: "Contact", href: "/contact" },
];
