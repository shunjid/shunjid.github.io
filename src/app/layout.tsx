import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

export const metadata: Metadata = {
  title: "Shunjid Rahman",
  description: "Portfolio of Shunjid Rahman Showrov",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
