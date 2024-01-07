import React from "react";

import { Button } from "@/components/ui/button";
import { IResume } from "@/data/types";

export default function SocialLinks(
  props: React.PropsWithoutRef<{
    data: Pick<IResume, "social">;
  }>,
) {
  const socialPlatforms = props.data.social;

  return (
    <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
      {socialPlatforms.map((socialPlatform) => (
        <Button
          key={socialPlatform.name}
          className="h-8 w-8 hover:bg-black hover:text-white"
          variant="outline"
          size="icon"
          asChild
        >
          <a href={socialPlatform.url} aria-label={socialPlatform.name}>
            <socialPlatform.icon className="h-4 w-4" />
          </a>
        </Button>
      ))}
    </div>
  );
}
