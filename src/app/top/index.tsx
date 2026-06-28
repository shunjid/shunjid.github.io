import { IResume } from "@/data/types";

import LocationLink from "./location-link";
import SocialLinks from "./social-links";

// Display footprint: 96px (size-24) on mobile, 112px (sm:size-28) above 640px.
const AVATAR_WIDTHS = [96, 112, 192, 224, 336];

export default function Top(
  props: React.PropsWithoutRef<{
    data: Omit<IResume, "skills" | "summaries">;
  }>,
) {
  const { name, about, locationLink, location, social, avatarUrl } = props.data;

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1 space-y-2.5">
        {/* Name and about */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            {name}
          </h1>
          <p className="max-w-md text-sm font-medium text-pretty text-gray-600 dark:text-gray-300">
            {about}
          </p>
        </div>

        {/* Links */}
        <LocationLink data={{ location, locationLink }} />
        <SocialLinks data={{ social }} />
      </div>

      {/* Avatar — responsive sizing via GitHub's `s` param so the browser
          downloads only what the display dimensions need. */}
      <img
        alt={name}
        src={`${avatarUrl}&s=224`}
        srcSet={AVATAR_WIDTHS.map((w) => `${avatarUrl}&s=${w} ${w}w`).join(
          ", ",
        )}
        sizes="(min-width: 640px) 112px, 96px"
        width={112}
        height={112}
        fetchPriority="high"
        referrerPolicy="no-referrer"
        className="size-24 shrink-0 rounded-2xl object-cover shadow-sm ring-1 ring-gray-200 sm:size-28 dark:ring-gray-800"
      />
    </div>
  );
}
