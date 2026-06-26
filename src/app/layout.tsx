import "./globals.css";

import type { Metadata } from "next";
import { Google_Sans, Inter } from "next/font/google";
import React from "react";

const googleSans = Google_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-google-sans",
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shunjid Rahman",
  description: "Portfolio of Shunjid Rahman Showrov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${googleSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
