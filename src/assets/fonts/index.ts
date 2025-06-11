import {
  Bricolage_Grotesque,
  Bebas_Neue,
  Geist,
  Geist_Mono,
  Inter,
} from "next/font/google";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
