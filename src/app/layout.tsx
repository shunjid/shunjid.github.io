import "./globals.css";

import { Google_Sans, Google_Sans_Code } from "next/font/google";
import React from "react";

const googleSans = Google_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-google-sans",
  adjustFontFallback: false,
});

const googleSansCode = Google_Sans_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-google-sans-code",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${googleSansCode.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
