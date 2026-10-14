import { RichTextBlock } from "@/components/rich-text";
import { Section } from "@/components/section";
import { Resume } from "@/data/types";

export function Achievements({ achievements }: Pick<Resume, "achievements">) {
  return (
    <Section id="achievements" title="Recognition">
      <ol>
        {achievements.map((achievement) => (
          <li
            key={achievement.title + (achievement.date ?? "")}
            className="border-ink/10 grid gap-x-6 gap-y-1 border-t py-6 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr] print:break-inside-avoid"
          >
            <p className="text-muted pt-1 font-mono text-[0.7rem] tracking-wide uppercase tabular-nums">
              {achievement.date}
            </p>
            <div>
              <h3 className="text-ink text-lg font-semibold tracking-tight text-pretty">
                {achievement.title}
              </h3>
              <RichTextBlock parts={achievement.description} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
