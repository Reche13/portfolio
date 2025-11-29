import type { Metadata } from "next";
import "./globals.css";
import { jetBrainsMono } from "@/assets/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Reche Soares | Fullstack Developer",
  description: "Building impactful, scalable apps for the modern web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
