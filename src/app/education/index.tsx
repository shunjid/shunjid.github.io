import React from "react";

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
        <div
          key={education.institution}
          className="block w-full rounded-lg bg-white text-left"
        >
          <div>
            <h5 className="mb-1 text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {education.institution}
            </h5>
            <h6 className="my-2 text-xs font-medium leading-tight text-neutral-500 dark:text-neutral-50">
              {education.year}
            </h6>
            <p
              className="text-justify text-xs leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: education.description }}
            ></p>
          </div>
        </div>
      ))}
    </Section>
  );
}
