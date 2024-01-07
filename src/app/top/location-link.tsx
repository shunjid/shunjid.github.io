import { GlobeIcon } from "lucide-react";
import React from "react";

import { IResume } from "@/data/types";

export default function LocationLink(
  props: React.PropsWithoutRef<{
    data: Pick<IResume, "location" | "locationLink">;
  }>,
) {
  const { location, locationLink } = props.data;

  return (
    <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline font-medium leading-none underline decoration-dotted"
        href={locationLink}
        target="_blank"
        aria-label={location}
      >
        <GlobeIcon className="h-3 w-3" />
        {location}
      </a>
    </p>
  );
}
