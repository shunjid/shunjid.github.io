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
      "Create technical specifications through in-depth research on product and architecture and performing spikes.",
      "Migrate existing services to the latest runtime and framework versions.",
      "Build public API endpoints, webhook events and resolve customer reported bugs.",
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
      "Lead a team of 5 Engineering students during a mobile app development using flutter.",
      "Integrate bKash payment gateway into the mobile app developed for icddr,b.",
    ],
  },
];

const achievements: string[] = [
  '<b>2023 Q3, Optimizely Spot Award: </b> Received monthly spot award with an appreciation message from a Software Engineering Manager saying, <i>"Shunjid is one of the most accomplished engineers on our team. His consistent track record of delivering tasks with exceptional quality in recent SPRINTs is truly commendable. He is always humble & open for suggestions, helped others to improve & produced high quality of works."</i>',
  '<b>2023 Q1, Optimizely Spot Award: </b> Received monthly spot award with an appreciation message from the team lead saying, <i>"Shunjid always tries to learn new things and apply the knowledge in his regular contributions to make our life easier. He has built trust and is always showing great responsibilities for his work."</i>',
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
  achievements,
};

export { resume };
