import { Container } from "@/components/common/Container";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  return (
    <div className="sticky top-0 z-30 w-full border-b border-zinc-300 dark:border-zinc-800 backdrop-blur-sm">
      <Container>
        <header className="w-full flex items-center justify-between py-4">
          <span className="text-zinc-900 dark:text-zinc-50 font-semibold">
            R
          </span>
          <ThemeSwitcher />
        </header>
      </Container>
    </div>
  );
};
