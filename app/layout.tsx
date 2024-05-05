import type { Metadata } from "next";
import Providers from "./Providers";
import { Lato } from "next/font/google";
import { Kanit } from "next/font/google";
import { NavitagionBar, SideMenu } from "./ui/NavigationBar";
import "./globals.css";
import Footer from "./ui/Footer";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});
const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

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
      <html className={`${lato.variable} ${kanit.variable} bg-cream min-h-screen`} lang="en">
        <body>
          <NavitagionBar />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
