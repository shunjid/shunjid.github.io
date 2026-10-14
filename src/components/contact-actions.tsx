import { icons } from "@/data/icons";
import { SocialLink } from "@/data/types";
import { cn } from "@/lib/utils";

export function ContactActions({
  social,
  inverted = false,
}: {
  social: SocialLink[];
  inverted?: boolean;
}) {
  const linkedin = social.find((link) => link.icon === "linkedin");
  const others = social.filter((link) => link.icon !== "linkedin");

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 print:hidden">
      {linkedin && (
        <a
          href={linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex h-11 items-center gap-2.5 rounded-lg px-5 font-semibold sm:h-12 sm:px-6",
            inverted ? "text-ink bg-white" : "bg-ink text-white",
          )}
        >
          {inverted ? (
            <icons.linkedin aria-hidden="true" className="size-4" />
          ) : (
            <span
              aria-hidden="true"
              className="inline-flex size-6 items-center justify-center rounded-full bg-white"
            >
              <icons.linkedin className="text-ink size-3" />
            </span>
          )}
          Message on LinkedIn
        </a>
      )}
      {others.map((link) => {
        const Icon = icons[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-lg border transition-colors sm:size-12",
              inverted
                ? "border-white/25 text-white/80 hover:border-white hover:text-white"
                : "border-ink/15 text-muted hover:border-ink hover:text-ink",
            )}
          >
            <Icon aria-hidden="true" className="size-[1.1rem]" />
          </a>
        );
      })}
    </div>
  );
}
