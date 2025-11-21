import { ReactNode } from "react";
import { Header } from "@/components/common/Header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-zinc-100 dark:bg-zinc-950">
      <Header />
      {children}
    </div>
  );
}
