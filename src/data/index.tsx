import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiChai,
  SiDocker,
  SiExpress,
  SiFlask,
  SiJest,
  SiMocha,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPytest,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import {
  Achievement0,
  Achievement1,
  Achievement2,
  Achievement3,
  Achievement4,
  Achievement5,
  Achievement6,
  Achievement7,
} from "./components/achievements";
import { IResume } from "./types";

const summaries = [
  "With over 3 years of expertise, I specialize in designing and developing robust software solutions.",
  "My expertise includes collaborating with cross-functional teams, leading projects from concept to completion, and consistently delivering high-quality results.",
  "From shaping technical blueprints to troubleshooting complex issues, I am committed to pushing the boundaries of technology.",
];

const skills = [
  {
    title: "TypeScript",
    icon: SiTypescript,
    color: "bg-blue-200",
  },
  {
    title: "Python",
    icon: SiPython,
    color: "bg-yellow-200",
  },
  {
    title: "Express",
    icon: SiExpress,
    color: "bg-gray-200",
  },
  {
    title: "React.js",
    icon: SiReact,
    color: "bg-sky-200",
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    color: "bg-gray-200",
  },
  {
    title: "Nest.js",
    icon: SiNestjs,
    color: "bg-rose-200",
  },
  {
    title: "Flask",
    icon: SiFlask,
    color: "bg-sky-200",
  },
  {
    title: "Jest",
    icon: SiJest,
    color: "bg-red-200",
  },
  {
    title: "Mocha",
    icon: SiMocha,
    color: "bg-amber-200",
  },
  {
    title: "Chai",
    icon: SiChai,
    color: "bg-orange-200",
  },
  {
    title: "Pytest",
    icon: SiPytest,
    color: "bg-sky-200",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    color: "bg-green-200",
  },
  {
    title: "MySQL",
    icon: SiMysql,
    color: "bg-indigo-200",
  },
  {
    title: "Docker",
    icon: SiDocker,
    color: "bg-sky-200",
  },
];

const social = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shunjid/",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    url: "https://x.com/shunjid_codes",
    icon: FaXTwitter,
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

const achievements = [
  Achievement7,
  Achievement6,
  Achievement5,
  Achievement4,
  Achievement3,
  Achievement2,
  Achievement1,
  Achievement0,
];

const educations = [
  {
    institution: "Daffodil International University",
    degree: "B.Sc. in Software Engineering",
    start: "2017",
    end: "2021",
    website: "https://diu.edu.bd",
    descriptionList: [
      {
        title: "Cumulative Grade Point Average",
        text: "3.99 / 4.00",
      },
      {
        title: "Credit Hours",
        text: "139 / 139",
      },
      {
        title: "Result Based Scholarships",
        text: "10 / 12 (Trimesters)",
      },
      {
        title: "Training",
        text: "1 month training program by Dongeso University, South Korea.",
      },
    ],
  },
  {
    institution: "Dhaka City College",
    degree: "Higher Secondary School Certificate",
    start: "2014",
    end: "2016",
    website: "https://www.dhakacitycollege.edu.bd/",
    descriptionList: [
      {
        title: "Grade Point Average",
        text: "5.00 / 5.00",
      },
    ],
  },
  {
    institution: "A.K. High School",
    degree: "Secondary School Certificate",
    start: "2009",
    end: "2014",
    website: "https://akschoolandcollege.edu.bd/",
    descriptionList: [
      {
        title: "Grade Point Average (S.S.C)",
        text: "5.00 / 5.00",
      },
      {
        title: "Grade Point Average (J.S.C)",
        text: "5.00 / 5.00",
      },
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
  achievements,
  educations,
};

export { resume };
