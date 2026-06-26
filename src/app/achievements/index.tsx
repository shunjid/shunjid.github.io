import React from "react";
import { LuTrophy } from "react-icons/lu";

import { Section } from "@/components/ui/section";
import { IResume } from "@/data/types";

export default function Achievements(
  props: React.PropsWithoutRef<{
    data: Pick<IResume, "achievements">;
  }>,
) {
  const { achievements } = props.data;

  return (
    <Section>
      <h2 className="text-xl font-bold">Achievements</h2>
      <div className="columns-1 gap-3 sm:columns-2">
        {achievements.map((achievement) => (
          <div
            key={achievement.toString()}
            className="group mb-3 break-inside-avoid rounded-xl border border-gray-200 p-4 transition-all hover:border-violet-300 hover:shadow-sm dark:border-gray-800 dark:hover:border-violet-500/40"
          >
            <span className="mb-2.5 inline-flex size-7 items-center justify-center rounded-lg bg-violet-50 text-violet-600 ring-1 ring-violet-100 transition-colors group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-500/20">
              <LuTrophy className="size-3.5" />
            </span>
            <div className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 [&_a]:font-semibold [&_a]:text-violet-600 [&_a:hover]:underline">
              {achievement()}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
