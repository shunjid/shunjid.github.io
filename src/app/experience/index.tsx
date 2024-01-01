import { ArrowBigRightDashIcon } from "lucide-react";
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
              <h4 className="my-2 inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                {individualExperience.title}
              </h4>
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
          <CardContent className="mt-4 text-xs">
            <ul className="space-y-2 text-left text-gray-500 dark:text-gray-400">
              {individualExperience.contributions.map((contribution) => (
                <li
                  key={contribution}
                  className="flex items-center space-x-3 text-xs rtl:space-x-reverse"
                >
                  <ArrowBigRightDashIcon className="h-2.5 w-2.5 flex-shrink-0 text-teal-600" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}
