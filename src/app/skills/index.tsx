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
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.title}
            className="group inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-sm dark:border-gray-800 dark:text-gray-200"
          >
            <skill.icon
              className="size-4 transition-transform group-hover:scale-110"
              style={{ color: skill.color }}
            />
            {skill.title}
          </span>
        ))}
      </div>
    </Section>
  );
}
