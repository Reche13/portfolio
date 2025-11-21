import { ReactNode } from "react";
import { Header } from "@/components/common/Header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      {children}
    </div>
  );
}
