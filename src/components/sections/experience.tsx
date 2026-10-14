import { ExternalLink } from "@/components/external-link";
import { Section } from "@/components/section";
import { stepTone } from "@/components/steps";
import { Resume } from "@/data/types";
import {
  CompanyGroup,
  formatEnd,
  groupByCompany,
  roleId,
  yearRange,
} from "@/lib/format";
import { cn } from "@/lib/utils";

function Company({
  group,
  climbing,
}: {
  group: CompanyGroup;
  climbing: boolean;
}) {
  const first = group.roles.at(-1)!;
  const last = group.roles[0];

  return (
    <article className="print:break-inside-avoid">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-ink text-xl font-bold tracking-tight">
          <ExternalLink href={group.companyWebsite}>
            {group.companyLogo && (
              <img
                src={group.companyLogo}
                alt=""
                width={20}
                height={20}
                className="mr-2 size-5 self-center"
              />
            )}
            {group.company}
          </ExternalLink>
        </h3>
        <p className="text-muted font-mono text-xs tracking-wide uppercase tabular-nums">
          {yearRange(first.start, last.end)}
          {group.roles.length > 1 && ` · ${group.roles.length} roles`}
        </p>
      </header>

      <ol className="mt-4">
        {group.roles.map((role, index) => {
          const tone = climbing
            ? stepTone(group.roles.length - 1 - index, group.roles.length)
            : null;
          const isCurrent = role.end === "CURRENT";

          return (
            <li
              key={role.start + role.title}
              id={roleId(role)}
              className="border-ink/10 grid scroll-mt-8 gap-x-6 gap-y-2 border-t py-6 sm:grid-cols-[9rem_1fr] print:break-inside-avoid"
            >
              <div className="flex items-center gap-3 sm:block">
                <span
                  aria-hidden="true"
                  className={cn(
                    "block size-3 sm:mb-3",
                    tone ? tone.background : "bg-ink/15",
                  )}
                />
                <p className="text-muted font-mono text-[0.7rem] tracking-wide uppercase tabular-nums">
                  {role.start} – {formatEnd(role.end)}
                </p>
              </div>
              <div>
                <h4 className="text-ink text-lg font-semibold tracking-tight">
                  {role.title}
                  {isCurrent && (
                    <span className="text-accent ml-2 text-sm font-bold">
                      Now
                    </span>
                  )}
                </h4>
                <ul className="text-muted mt-3 space-y-2 leading-relaxed">
                  {role.contributions.map((contribution) => (
                    <li key={contribution} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-[0.65em] size-1.5 shrink-0",
                          tone ? tone.background : "bg-ink/30",
                        )}
                      />
                      <span className="text-pretty">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </article>
  );
}

export function ExperienceSection({
  experience,
  company,
}: Pick<Resume, "experience" | "company">) {
  const groups = groupByCompany(experience);
  const current = groups.filter((group) => group.company === company);
  const before = groups.filter((group) => group.company !== company);

  return (
    <>
      <Section id="experience" title="The climb">
        <div className="space-y-12">
          {current.map((group) => (
            <Company
              key={group.company + group.roles[0].start}
              group={group}
              climbing
            />
          ))}
        </div>
      </Section>
      {before.length > 0 && (
        <Section id="before" title={`Before ${company}`}>
          <div className="space-y-12">
            {before.map((group) => (
              <Company
                key={group.company + group.roles[0].start}
                group={group}
                climbing={false}
              />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
