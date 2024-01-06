import React from "react";

import { CommandMenu } from "@/components/command-menu";
import { IResume } from "@/data/types";

export default function Footer(
  props: React.PropsWithoutRef<{
    data: Pick<IResume, "personalWebsiteUrl" | "social">;
  }>,
) {
  const { personalWebsiteUrl, social } = props.data;

  return (
    <div className="hidden lg:block">
      <CommandMenu
        links={[
          {
            url: personalWebsiteUrl,
            title: "Personal Website",
          },
          ...social.map((socialMeta) => ({
            url: socialMeta.url,
            title: socialMeta.name,
          })),
        ]}
      />
    </div>
  );
}
