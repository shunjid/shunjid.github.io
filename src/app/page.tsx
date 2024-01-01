import { Metadata } from "next";

import { resume } from "@/data";

import Achievements from "./achievements";
import Experience from "./experience";
import Footer from "./footer";
import Skills from "./skills";
import Summary from "./summary";
import Top from "./top";

export const metadata: Metadata = {
  title: `${resume.name}`,
  description: resume.about,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Top data={{ ...resume }} />
        <Summary data={{ ...resume }} />
        <Experience data={{ ...resume }} />
        <Achievements data={{ ...resume }} />
        <Skills data={{ ...resume }} />
      </section>

      <Footer data={{ ...resume }} />
    </main>
  );
}
