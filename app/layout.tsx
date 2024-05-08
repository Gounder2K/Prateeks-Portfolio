import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://prateeks-portfolio-tau.vercel.app"),
  title: "Prateeks Portfolio",
  description: "Developer Portfolio By Prateek Gounder",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Prateek Gounder"],
  openGraph: {
    title: "Prateek Gounder",
    description: "Software Engineer",
    images: "/OpenGraph.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
