import { stepTone } from "@/components/steps";
import { Experience } from "@/data/types";
import { roleId } from "@/lib/format";
import { cn } from "@/lib/utils";

export function Staircase({
  roles,
  company,
}: {
  roles: Experience[];
  company: string;
}) {
  const steps = [...roles].reverse();

  return (
    <ol
      aria-label={`Promotions at ${company}`}
      className="grid h-[26svh] min-h-52 grid-cols-4 items-end lg:h-full lg:min-h-0"
    >
      {steps.map((role, index) => {
        const tone = stepTone(index, steps.length);
        const isCurrent = role.end === "CURRENT";
        const height = `${Math.round(20 + ((index + 1) / steps.length) * 80)}%`;

        return (
          <li
            key={role.title}
            className="flex h-full flex-col justify-end"
            style={
              {
                "--stair-height": height,
                "--stair-index": index,
              } as React.CSSProperties
            }
          >
            <a
              href={`#${roleId(role)}`}
              className={cn(
                "stair-block flex h-(--stair-height) flex-col justify-start p-3 sm:p-5 lg:p-6",
                tone.background,
                tone.text,
              )}
            >
              <span
                aria-hidden="true"
                className="text-base leading-none font-bold tracking-[-0.03em] sm:text-2xl lg:text-3xl"
              >
                {role.shortTitle}
              </span>
              <span
                aria-hidden="true"
                className="mt-2 font-mono text-[0.7rem] tracking-wide uppercase sm:text-xs"
              >
                {isCurrent ? "Now" : role.start.slice(0, 4)}
              </span>
              <span className="sr-only">
                {`${role.title}, ${role.start} to ${isCurrent ? "present" : role.end}`}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
