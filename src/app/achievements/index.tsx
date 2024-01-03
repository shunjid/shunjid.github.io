import { CheckCircle2Icon, MedalIcon, TrophyIcon } from "lucide-react";
import React from "react";

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
      <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        {achievements.map((achievement) => (
          <li
            key={achievement.toString()}
            className="flex items-center space-x-3 text-xs rtl:space-x-reverse"
          >
            <TrophyIcon className="h-2.5 w-2.5 flex-shrink-0 text-teal-600" />
            <div className="text-justify leading-relaxed">{achievement()}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
