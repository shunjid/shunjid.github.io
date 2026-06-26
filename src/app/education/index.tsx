import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

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

      <ol className="relative space-y-6 border-l border-gray-200 dark:border-gray-800">
        {educations.map((education) => (
          <li key={education.degree} className="relative pl-6">
            <span className="absolute top-1.5 -left-1 size-2 rounded-full bg-violet-500 ring-4 ring-white dark:ring-gray-950" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                {education.degree}
              </h3>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500 tabular-nums dark:bg-gray-800 dark:text-gray-400">
                {education.start} — {education.end}
              </span>
            </div>

            <a
              className="group/link mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-gray-600 transition-colors hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
              href={education.website}
              aria-label={education.institution}
              target="_blank"
              rel="noreferrer"
            >
              {education.institution}
              <FiArrowUpRight className="size-3 text-gray-400 transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-violet-600 dark:group-hover/link:text-violet-400" />
            </a>

            <dl className="mt-2.5 divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-100 dark:divide-gray-800 dark:border-gray-800">
              {education.descriptionList.map((description) => (
                <div
                  key={description.title ?? description.text}
                  className="flex items-baseline justify-between gap-x-4 px-3 py-1.5"
                >
                  {description.title && (
                    <dt className="text-xs text-gray-500 dark:text-gray-400">
                      {description.title}
                    </dt>
                  )}
                  <dd className="ml-auto text-right text-xs font-semibold text-gray-800 tabular-nums dark:text-gray-200">
                    {description.text}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ol>
    </Section>
  );
}
