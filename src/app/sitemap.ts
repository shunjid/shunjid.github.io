import { MetadataRoute } from "next";

import { resume } from "@/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: resume.personalWebsiteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
