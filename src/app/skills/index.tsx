import React from "react";
import { SiMongodb } from "react-icons/si";

import { Section } from "@/components/ui/section";
import { IResume } from "@/data/types";

export default function Skills(
  props: React.PropsWithoutRef<{ data: Pick<IResume, "skills"> }>,
) {
  const { skills } = props.data;

  return (
    <Section>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          const badgeStyle = `inline-block whitespace-nowrap rounded-[0.57rem] ${skill.color} px-[0.85em] pb-[0.45em] pt-[0.45em] text-center align-baseline text-[0.65em] font-semibold leading-none`;

          return (
            <span key={skill.title} className={badgeStyle}>
              <div className="flex gap-1">
                <skill.icon />
                {skill.title}
              </div>
            </span>
          );
        })}
      </div>
    </Section>
  );
}
