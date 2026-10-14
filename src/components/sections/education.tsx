import { ExternalLink } from "@/components/external-link";
import { Section } from "@/components/section";
import { Resume } from "@/data/types";

const isFigure = (value: string) => /^[\d.]+\s*\/\s*[\d.]+/.test(value);

export function EducationSection({ educations }: Pick<Resume, "educations">) {
  return (
    <Section id="education" title="Education">
      <ol>
        {educations.map((education) => (
          <li
            key={education.degree}
            className="border-ink/10 grid gap-x-6 gap-y-1 border-t py-6 sm:grid-cols-[9rem_1fr] print:break-inside-avoid"
          >
            <p className="text-muted pt-1 font-mono text-[0.7rem] tracking-wide uppercase tabular-nums">
              {education.start} – {education.end}
            </p>
            <div>
              <h3 className="text-ink text-lg font-semibold tracking-tight">
                {education.degree}
              </h3>
              <p className="text-muted">
                <ExternalLink href={education.website}>
                  {education.institution}
                </ExternalLink>
              </p>
              <dl className="mt-3 space-y-1.5 text-sm">
                {education.details.map((detail) =>
                  isFigure(detail.value) ? (
                    <div
                      key={detail.label}
                      className="flex max-w-md items-baseline justify-between gap-6"
                    >
                      <dt className="text-muted">{detail.label}</dt>
                      <dd className="text-ink font-mono text-[0.8rem] tabular-nums">
                        {detail.value}
                      </dd>
                    </div>
                  ) : (
                    <div key={detail.label} className="max-w-md pt-1">
                      <dt className="text-muted">{detail.label}</dt>
                      <dd className="text-ink mt-0.5 text-pretty">
                        {detail.value}
                      </dd>
                    </div>
                  ),
                )}
              </dl>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
