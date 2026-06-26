import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IResume } from "@/data/types";

import LocationLink from "./location-link";
import SocialLinks from "./social-links";

export default function Top(
  props: React.PropsWithoutRef<{
    data: Omit<IResume, "skills" | "summaries">;
  }>,
) {
  const { name, about, locationLink, location, social, avatarUrl, initials } =
    props.data;

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

      {/* Avatar */}
      <Avatar className="size-24 shrink-0 rounded-2xl shadow-sm ring-1 ring-gray-200 sm:size-28 dark:ring-gray-800">
        <AvatarImage alt={name} src={avatarUrl} />
        <AvatarFallback className="text-lg font-semibold text-gray-700">
          {initials}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
