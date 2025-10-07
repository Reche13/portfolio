import { inter } from "@/assets/fonts";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Head>
        <title>Reche Soares | Fullstack Developer</title>
        <meta
          name="description"
          content="Building impactful, scalable apps for the modern web."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.className} antialiased`}>
        <Analytics />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
