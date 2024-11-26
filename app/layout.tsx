import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Background from "@/components/background";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap",
});
const dataMono = localFont({
  src: "./fonts/DataMonoHTRIALVF.ttf",
  variable: "--data-mono",
});
const reformaSans = localFont({
  src: "./fonts/ReformaSansTRIAL-20.ttf",
  variable: "--reforma-sans",
});
const xhddCompressed = localFont({
  src: "./fonts/XHDD-Compressed trial.ttf",
  variable: "--xhdd-compressed",
});

export const metadata: Metadata = {
  title: "ART.8M",
  description:
    "ART.8M is a professional video creator and content manager specializing in unique, bold, and creative visual content for social media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${dataMono.variable} ${reformaSans.variable} ${xhddCompressed.variable} antialiased`}
      >
        <Background />
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
