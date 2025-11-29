"use client";
import { useTheme } from "next-themes";
import { MoonIcon } from "@/assets/animated-icons/moon";
import { SunIcon } from "@/assets/animated-icons/sun";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center rounded-lg p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-orange-600 cursor-pointer"
    >
      <SunIcon size={20} className="hidden dark:block" />
      <MoonIcon size={20} className="block dark:hidden" />
    </button>
  );
};
