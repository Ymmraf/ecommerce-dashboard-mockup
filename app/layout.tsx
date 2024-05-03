import type { Metadata } from "next";
import Providers from "./Providers";
import { Lato } from "next/font/google";
import { Kanit } from "next/font/google";
import "./globals.css";

const lato = Lato({ weight: ["100","300","400","700","900"], subsets: ["latin"], variable: "--font-lato"})
const kanit = Kanit({ weight: ["100","200","300","400","500","600","700","800","900"], subsets: ["latin"], variable: "--font-kanit"})

export const metadata: Metadata = {
  title: "Freshy",
  description: "Get your everyday fresh products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html className={`${lato.variable} ${kanit.variable}`} lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
