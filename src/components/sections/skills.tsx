import { Section } from "@/components/section";
import { Resume } from "@/data/types";

export function Skills({ skills }: Pick<Resume, "skills">) {
  return (
    <Section id="skills" title="Tools">
      <ul className="text-ink flex max-w-3xl flex-wrap gap-x-7 gap-y-3 text-xl font-semibold tracking-tight sm:text-2xl">
        {skills.map((skill) => (
          <li key={skill.title}>{skill.title}</li>
        ))}
      </ul>
    </Section>
  );
}
