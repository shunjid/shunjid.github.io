import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import { cn } from "@/lib/utils";

export function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/link hover:text-accent focus-visible:text-accent inline-flex items-baseline gap-1 transition-colors",
        className,
      )}
    >
      {children}
      <FiArrowUpRight
        aria-hidden="true"
        className="size-3.5 shrink-0 translate-y-px transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-px motion-reduce:transition-none print:hidden"
      />
    </a>
  );
}
