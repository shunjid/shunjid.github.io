import { MetadataRoute } from "next";

import { resume } from "@/data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", resume.personalWebsiteUrl).toString(),
    host: resume.personalWebsiteUrl,
  };
}
