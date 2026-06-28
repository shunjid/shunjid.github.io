import { Metadata, Viewport } from "next";

import { resume } from "@/data";

import Achievements from "./achievements";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Summary from "./summary";
import Top from "./top";

const description =
  "Senior Software Engineer at Optimizely with 5+ years building robust, scalable software — public APIs, webhook events, and developer tooling. Based in Dhaka, Bangladesh.";

const PUBLISHED_TIME = "2021-01-01T00:00:00.000Z";
const linkedInProfile =
  resume.social.find((platform) => platform.name === "LinkedIn")?.url ??
  resume.personalWebsiteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(resume.personalWebsiteUrl),
  title: resume.name,
  description,
  authors: [{ name: resume.name, url: linkedInProfile }],
  referrer: "strict-origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "article",
    url: "/",
    siteName: resume.name,
    title: resume.name,
    description,
    publishedTime: PUBLISHED_TIME,
    authors: [linkedInProfile],
    images: [
      {
        url: "/og.png?v=2",
        width: 1200,
        height: 630,
        alt: `${resume.name} — ${resume.about}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: resume.name,
    description,
    creator: "@shunjid_codes",
    images: [
      {
        url: "/og.png?v=2",
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
