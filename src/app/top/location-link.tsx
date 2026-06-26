import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import { IResume } from "@/data/types";

export default function LocationLink(
  props: React.PropsWithoutRef<{
    data: Pick<IResume, "location" | "locationLink">;
  }>,
) {
  const { location, locationLink } = props.data;

  return (
    <p className="text-muted-foreground max-w-md items-center text-xs text-pretty">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none font-medium decoration-dotted transition-colors hover:text-emerald-600 hover:underline"
        href={locationLink}
        target="_blank"
        aria-label={location}
      >
        <FaMapMarkerAlt aria-hidden="true" className="h-3 w-3" />
        {location}
      </a>
    </p>
  );
}
