import React from "react";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

export default function Skills(
  props: React.PropsWithoutRef<{ data: string[] }>,
) {
  const skills = props.data;

  return (
    <Section>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => {
          return <Badge key={skill}>{skill}</Badge>;
        })}
      </div>
    </Section>
  );
}
