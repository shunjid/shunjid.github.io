import { icons } from "./icons";
import data from "./resume.json";
import { Resume } from "./types";

export const resume = data as Resume;

for (const link of resume.social) {
  if (!(link.icon in icons)) {
    throw new Error(
      `Unknown icon "${link.icon}" for ${link.name} in resume.json`,
    );
  }
}

for (const achievement of resume.achievements) {
  for (const part of achievement.description) {
    if (!("text" in part) && !("quote" in part)) {
      throw new Error(`Empty description part in "${achievement.title}"`);
    }
  }
}

export function avatarSrc(size: number) {
  const url = new URL(resume.avatarUrl);
  url.searchParams.set("s", String(size));
  return url.toString();
}
