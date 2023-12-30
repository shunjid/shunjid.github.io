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
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        {summaries.join(" ")}
      </p>
    </Section>
  );
}
