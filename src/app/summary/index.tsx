import React from "react";

import { Section } from "@/components/ui/section";
import { IResume } from "@/data/types";

export default function Summary(
  props: React.PropsWithoutRef<{
    data: Pick<IResume, "summaries">;
  }>,
) {
  const { summaries } = props.data;

  return (
    <Section>
      <h2 className="text-xl font-bold">About</h2>
      <p className="text-muted-foreground text-justify text-xs leading-relaxed font-medium">
        {summaries.join(" ")}
      </p>
    </Section>
  );
}
