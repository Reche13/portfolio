import { Container } from "@/components/common/Container";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HEADER_LINKS } from "@/configs/header";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="sticky top-0 z-30 w-full border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 backdrop-blur-md">
      <Container>
        <header className="w-full flex items-center justify-between py-4">
          <div className="text-zinc-900 dark:text-zinc-50 font-semibold h-8 w-8 bg-orange-600 rounded-full items-center justify-center flex">
            R
          </div>
          <div className="flex items-center gap-8">
            {HEADER_LINKS.map((link, idx) => (
              <Link
                key={`footer-link${link.href}-${idx}`}
                href={link.href}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-orange-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeSwitcher />
        </header>
      </Container>
    </div>
  );
};
