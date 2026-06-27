import { Metadata, Viewport } from "next";

import { resume } from "@/data";

import Achievements from "./achievements";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Summary from "./summary";
import Top from "./top";

export const metadata: Metadata = {
  metadataBase: new URL(resume.personalWebsiteUrl),
  title: resume.name,
  description: resume.about,
  openGraph: {
    type: "website",
    url: "/",
    siteName: resume.name,
    title: resume.name,
    description: resume.about,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${resume.name} — ${resume.about}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: resume.name,
    description: resume.about,
    creator: "@shunjid_codes",
    images: [
      {
        url: "/og.png",
        alt: `${resume.name} — ${resume.about}`,
      },
    ],
  },
  keywords: [
    "shunjid",
    "shunjid showrov",
    "srs",
    "shunjid rahman",
    "showrov",
    "সানজিদ",
    "সানজিদ রহমান সৌরভ",
    "সৌরভ",
    "সানজিদ রহমান",
    "সানজিদ সৌরভ",
  ],
  icons: {
    icon: [
      { url: "/icon.svg?v=5", type: "image/svg+xml" },
      { url: "/favicon.ico?v=5", sizes: "any" },
    ],
    apple: ["/apple-icon.png?v=5"],
    shortcut: ["/apple-icon.png?v=5"],
  },
};

export const viewport: Viewport = {
  themeColor: "#059669",
};

export default function Page() {
  return (
    <main className="relative container mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white pb-8 print:space-y-6">
        <Top data={{ ...resume }} />
        <Summary data={{ ...resume }} />
        <Experience data={{ ...resume }} />
        <Achievements data={{ ...resume }} />
        <Skills data={{ ...resume }} />
        <Education data={{ ...resume }} />
      </section>
    </main>
  );
}
