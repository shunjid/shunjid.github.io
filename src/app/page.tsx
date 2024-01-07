import { Metadata, Viewport } from "next";

import { resume } from "@/data";

import Achievements from "./achievements";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Summary from "./summary";
import Top from "./top";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3611"),
  title: resume.name,
  description: resume.about,
  openGraph: {
    title: resume.name,
    description: resume.about,
    images: "https://images2.imgbox.com/aa/f3/E3kW6oXS_o.png",
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
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-icon.png?v=4"],
    shortcut: ["/apple-icon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#512cd4",
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
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
