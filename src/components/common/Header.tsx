import { Container } from "@/components/common/Container";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  return (
    <div className="sticky top-0 z-30 w-full border-b border-zinc-300 dark:border-zinc-800 backdrop-blur-sm">
      <Container>
        <header className="w-full flex items-center justify-between py-4">
          <div className="text-zinc-900 dark:text-zinc-50 font-semibold h-8 w-8 bg-orange-600 rounded-full items-center justify-center flex">
            R
          </div>
          <ThemeSwitcher />
        </header>
      </Container>
    </div>
  );
};
