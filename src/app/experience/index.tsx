import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { IResume } from "@/data/types";

export default function Experience(
  props: React.PropsWithoutRef<{
    data: Pick<IResume, "experience">;
  }>,
) {
  const { experience } = props.data;

  return (
    <Section>
      <h2 className="text-xl font-bold">Experience</h2>
      {experience.map((individualExperience) => (
        <Card key={1} className="bg-warning">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <span className="my-2 inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                {individualExperience.title}
              </span>
              <div className="text-xs tabular-nums text-gray-700">
                {individualExperience.start} - {individualExperience.end}
              </div>
            </div>

            <a
              className="text-sm leading-none hover:underline"
              href={individualExperience.companyWebsite}
              aria-label={individualExperience.company}
              target="_blank"
            >
              {individualExperience.company}
            </a>
          </CardHeader>
          <CardContent className="mt-4 text-xs font-medium">
            <ul className="list-inside list-disc space-y-2 text-left text-blue-500 dark:text-gray-400">
              {individualExperience.contributions.map((contribution) => (
                <li key={contribution}>
                  <span className="text-gray-500">{contribution}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}
