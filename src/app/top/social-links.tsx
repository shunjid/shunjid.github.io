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
    <div className="text-muted-foreground flex gap-x-1 pt-1 text-sm print:hidden">
      {socialPlatforms.map((socialPlatform) => (
        <Button
          key={socialPlatform.name}
          className="size-8 transition-colors hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
          variant="outline"
          size="icon"
          asChild
        >
          <a href={socialPlatform.url} aria-label={socialPlatform.name}>
            <socialPlatform.icon aria-hidden="true" className="h-4 w-4" />
          </a>
        </Button>
      ))}
    </div>
  );
}
