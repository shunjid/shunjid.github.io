import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

import { IResume } from "./types";

const summaries = [
  "With over 3 years of dedicated expertise, I specialize in crafting robust APIs using technologies such as TypeScript, Express.js, Node.js, Nest.js, and Python with Flask.",
  "My skill set extends to proficiently writing tests with Pytest, Mocha, Chai, Sinon, and Nock, demonstrating a commitment to ensuring the reliability and robustness of software solutions.",
];

const skills = [
  "TypeScript",
  "Python",
  "Express",
  "Nest.js",
  "Flask",
  "Jest",
  "Pytest",
  "MongoDB",
  "MySQL",
];

const social = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shunjid/",
    icon: LinkedInIcon,
  },
  {
    name: "X",
    url: "https://x.com/shunjid_codes",
    icon: XIcon,
  },
];

const resume: IResume = {
  name: "Shunjid Rahman Showrov",
  initials: "SRS",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka",
  about: "Software Engineer II at Optimizely",
  avatarUrl: "https://avatars.githubusercontent.com/u/29749035?v=4",
  personalWebsiteUrl: "https://shunjid.github.io",
  summaries,
  skills,
  social,
};

export { resume };
