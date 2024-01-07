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
    <div className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        {/* Name and about */}
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="max-w-md text-pretty text-sm font-medium text-muted-foreground">
          {about}
        </p>

        {/* Links */}
        <LocationLink data={{ location, locationLink }} />
        <SocialLinks data={{ social }} />
      </div>

      {/* Avatar */}
      <Avatar className="h-28 w-28">
        <AvatarImage alt={name} src={avatarUrl} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
    </div>
  );
}
