"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center rounded-xl p-1 border-[2px] border-transparent hover:bg-orange-500/5 hover:border-orange-600 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-orange-600 cursor-pointer"
    >
      <Sun size={16} className="hidden dark:block" />
      <Moon size={16} className="block dark:hidden" />
    </button>
  );
};
