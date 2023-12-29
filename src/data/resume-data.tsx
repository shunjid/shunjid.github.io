import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Shunjid Rahman Showrov",
  initials: "SRS",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka",
  about: "Software Engineer II at Optimizely",
  skills: [
    "TypeScript",
    "Python",
    "Express",
    "Nest.js",
    "Flask",
    "Jest",
    "Pytest",
    "MongoDB",
    "MySQL",
  ],
  summary: `With over 3 years of dedicated expertise, 
    I specialize in crafting robust APIs using technologies such as TypeScript, Express.js, Node.js, Nest.js, and Python with Flask. 
    My skill set extends to proficiently writing tests with Pytest, Mocha, Chai, Sinon, and Nock, demonstrating a commitment to ensuring the reliability and robustness of software solutions.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/29749035?v=4",
  personalWebsiteUrl: "https://shunjid.github.io",
  contact: {
    email: undefined,
    tel: undefined,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shunjid",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shunjid/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/shunjid",
        icon: XIcon,
      },
    ],
  },
  education: [],
  work: [],
  projects: [],
} as const;
