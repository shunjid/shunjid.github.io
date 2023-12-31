import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

import { IResume } from "./types";

const summaries = [
  "With over 3 years of expertise, I specialize in designing and developing robust software solutions.",
  "My expertise includes collaborating with cross-functional teams, leading projects from concept to completion, and consistently delivering high-quality results.",
  "From shaping technical blueprints to troubleshooting complex issues, I am committed to pushing the boundaries of technology.",
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
      "Collaborate with the product team to analyze opportunities and gaps in existing and new projects.",
      "Create technical specifications through in-depth research on product and architecture.",
      "Identify improvement opportunities for the product and codebase through thorough analysis and spikes.",
      "Migrate existing services to the latest runtime and framework versions.",
      "Design and develop public API endpoints and upgrade existing ones.",
      "Debug and resolve bugs reported by the solutions team and customers.",
    ],
  },
  {
    title: "Software Engineer I",
    company: "Optimizely",
    companyWebsite: "https://optimizely.com",
    start: "2022 JAN",
    end: "2022 DEC",
    contributions: [
      "Design and develop public API endpoints and webhook events with unit tests and adherence to best practices.",
      "Update existing public API endpoints and webhook events based on customer requirements.",
      "Debug and resolve customer-reported bugs.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Newscred",
    companyWebsite: "https://newscred.com",
    start: "2021 OCT",
    end: "2021 DEC",
    contributions: [
      "Create data analytics dashboard reports for the product team to understand various metrics.",
      "Update existing public API endpoints and webhook events based on customer needs.",
      "Debug and resolve customer-reported bugs.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Newscred",
    companyWebsite: "https://newscred.com",
    start: "2021 MAY",
    end: "2021 SEPT",
    contributions: [
      "Collaborate as one of the interns in a team of three to plan a configuration export/import system.",
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
      "Plan and develop a mobile app for icddr,b, an international health research institute based in Bangladesh.",
      "Integrate bKash payment gateway into the mobile app.",
      "Collaborate with icddr,b doctors and the bKash payment gateway team during software development.",
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
