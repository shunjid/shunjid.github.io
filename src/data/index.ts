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

const experience = [
  {
    title: "Software Engineer II",
    company: "Optimizely",
    companyWebsite: "https://optimizely.com",
    start: "2023 JAN",
    end: "CURRENT",
    contributions: [
      "Collaborate with the product team to analyse opportunities and gaps of existing and new projects.",
      "Write technical specifications by doing research on the product and architecture.",
      "Find improvment opportunities of product and codebase by performing spikes",
      "Migrate existing services to latest runtime and framework versions.",
      "Design and develop public API endpoints, webhook events, upgrading existing ones.",
      "Debug and solve bugs reported by solutions team and customers.",
    ],
  },
  {
    title: "Software Engineer I",
    company: "Optimizely",
    companyWebsite: "https://optimizely.com",
    start: "2022 JAN",
    end: "2022 DEC",
    contributions: [
      "Design and develop public API endpoints, webhook events with unit tests and best practices.",
      "Update existing public API endpoints and webhook events based on customer needs.",
      "Debug and solve customer reported bugs.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Newscred",
    companyWebsite: "https://newscred.com",
    start: "2021 OCT",
    end: "2021 DEC",
    contributions: [
      "Create data analytics dashboard reports for product team to understand several metrics.",
      "Update existing public API endpoints and webhook events based on customer needs.",
      "Debug and solve customer reported bugs.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Newscred",
    companyWebsite: "https://newscred.com",
    start: "2021 MAY",
    end: "2021 SEPT",
    contributions: [
      "Collaborate with a team of three interns to plan a configuration export/import system.",
      "Develop the configuration export/import system with unit and integration tests.",
    ],
  },
  {
    title: "Software Developer",
    company: "Daffodil International University",
    companyWebsite: "https://diu.edu.bd",
    start: "2020 OCT",
    end: "2021 MAR",
    contributions: [
      "Lead a team of 5 Engineering students",
      "Plan and develop a mobile app for the icddr,b (an international health research institute based in Bangladesh).",
      "Work on integrating bKash payment gateway.",
      "Collaborate with the doctors of icddr,b and bKash payment gateway team while building the software.",
    ],
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
  experience,
};

export { resume };
