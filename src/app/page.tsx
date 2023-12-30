import { Metadata } from "next";

import { CommandMenu } from "@/components/command-menu";
import { resume } from "@/data";

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
        <Skills data={{ ...resume }} />
      </section>

      <CommandMenu
        links={[
          {
            url: resume.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...resume.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
