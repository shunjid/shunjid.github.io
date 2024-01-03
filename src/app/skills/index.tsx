import React from "react";

import { Section } from "@/components/ui/section";
import { IResume } from "@/data/types";

export default function Skills(
  props: React.PropsWithoutRef<{ data: Pick<IResume, "skills"> }>,
) {
  const { skills } = props.data;

  return (
    <Section>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => {
          return (
            <span
              key={skill}
              className="text-primary-700 inline-block whitespace-nowrap rounded-[0.27rem] bg-sky-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none"
            >
              {skill}
            </span>
          );
        })}
      </div>
    </Section>
  );
}
