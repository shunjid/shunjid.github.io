import React from "react";

import { Section } from "@/components/ui/section";
import { IResume } from "@/data/types";

export default function Summary(
  props: React.PropsWithoutRef<{
    data: Pick<IResume, "summaries">;
  }>,
) {
  const [lead, ...rest] = props.data.summaries;

  return (
    <Section>
      <h2 className="text-xl font-bold">About</h2>
      <div className="space-y-2 border-l-2 border-violet-200 pl-4 dark:border-violet-500/30">
        <p className="text-sm leading-relaxed font-medium text-pretty text-gray-700 dark:text-gray-200">
          {lead}
        </p>
        {rest.length > 0 && (
          <p className="text-xs leading-relaxed text-pretty text-gray-500 dark:text-gray-400">
            {rest.join(" ")}
          </p>
        )}
      </div>
    </Section>
  );
}
