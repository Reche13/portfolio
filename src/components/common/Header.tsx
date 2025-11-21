import { Container } from "@/components/common/Container";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  return (
    <div className="w-full bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-300 dark:border-zinc-800">
      <Container>
        <header className="w-full flex items-center justify-between py-4">
          <span>Reche</span>
          <ThemeSwitcher />
        </header>
      </Container>
    </div>
  );
};
