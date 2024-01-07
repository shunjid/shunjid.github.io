import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { IResume } from "@/data/types";

export default function Education(
  props: React.PropsWithoutRef<{
    data: Pick<IResume, "educations">;
  }>,
) {
  const { educations } = props.data;

  return (
    <Section>
      <h2 className="text-xl font-bold">Education</h2>
      {educations.map((education) => (
        <Card key={1} className="bg-warning">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <span className="my-2 inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                {education.degree}
              </span>
              <div className="text-xs tabular-nums text-gray-700">
                {education.start} - {education.end}
              </div>
            </div>

            <a
              className="text-sm leading-none hover:underline"
              href={education.website}
              aria-label={education.institution}
              target="_blank"
            >
              {education.institution}
            </a>
          </CardHeader>
          <CardContent className="mt-4 text-xs">
            <ul className="list-inside list-disc space-y-2 text-left font-medium text-blue-500 dark:text-gray-400">
              {education.descriptionList.map((description) => (
                <li key={description.title}>
                  <span className="text-gray-500">
                    {description.title ? (
                      <span className="font-bold">{description.title}</span>
                    ) : (
                      <></>
                    )}
                    {": "}
                    {description.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}
