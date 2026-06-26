import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import { Section } from "@/components/ui/section";
import { IResume, ResumeExperience } from "@/data/types";
import { cn } from "@/lib/utils";

type CompanyGroup = {
  company: string;
  companyWebsite: string;
  roles: ResumeExperience[];
};

/**
 * Collapse consecutive roles at the same company into a single timeline group
 * so the promotion path (e.g. SE I → SE II → Senior) reads as one story.
 */
function groupByCompany(experiences: ResumeExperience[]): CompanyGroup[] {
  return experiences.reduce<CompanyGroup[]>((groups, role) => {
    const current = groups.at(-1);

    if (current && current.company === role.company) {
      current.roles.push(role);
    } else {
      groups.push({
        company: role.company,
        companyWebsite: role.companyWebsite,
        roles: [role],
      });
    }

    return groups;
  }, []);
}

const formatDate = (value: string) => (value === "CURRENT" ? "Present" : value);

export default function Experience(
  props: React.PropsWithoutRef<{
    data: Pick<IResume, "experience">;
  }>,
) {
  const groups = groupByCompany(props.data.experience);

  return (
    <Section>
      <h2 className="text-xl font-bold">Experience</h2>

      <div className="space-y-8">
        {groups.map((group) => {
          return (
            <div key={group.company}>
              <a
                className="group/link mb-3 inline-flex items-center gap-1 text-base font-bold tracking-tight text-gray-900 transition-colors hover:text-emerald-600 dark:text-gray-50 dark:hover:text-emerald-400"
                href={group.companyWebsite}
                aria-label={group.company}
                target="_blank"
                rel="noreferrer"
              >
                {group.company}
                <FiArrowUpRight className="size-3.5 text-gray-400 transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-emerald-600 dark:group-hover/link:text-emerald-400" />
              </a>

              <ol className="relative space-y-5 border-l border-gray-200 dark:border-gray-800">
                {group.roles.map((role) => {
                  const isCurrent = role.end === "CURRENT";

                  return (
                    <li
                      key={role.start.concat(role.title)}
                      className="relative pl-6"
                    >
                      {isCurrent ? (
                        <span className="absolute top-1 -left-1.5 flex size-3 items-center justify-center">
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative size-3 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-gray-950" />
                        </span>
                      ) : (
                        <span className="absolute top-1.5 -left-1 size-2 rounded-full bg-gray-300 ring-4 ring-white dark:bg-gray-600 dark:ring-gray-950" />
                      )}

                      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                          {role.title}
                        </h3>
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-medium tabular-nums",
                            isCurrent
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                              : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400",
                          )}
                        >
                          {role.start} — {formatDate(role.end)}
                        </span>
                      </div>

                      <ul className="mt-2 space-y-1.5">
                        {role.contributions.map((contribution) => (
                          <li
                            key={contribution}
                            className="flex gap-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400"
                          >
                            <span className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600" />
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
