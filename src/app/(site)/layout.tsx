import { ReactNode } from "react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
