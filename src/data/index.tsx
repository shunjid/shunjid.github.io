import {
  SiDocker,
  SiExpress,
  SiFlask,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPytest,
  SiPython,
  SiReact,
  SiTypescript,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";

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
  {
    title: "TypeScript",
    icon: SiTypescript,
    color: "bg-blue-200",
  },
  {
    title: "Python",
    icon: SiPython,
    color: "bg-yellow-100",
  },
  {
    title: "Express",
    icon: SiExpress,
    color: "bg-gray-100",
  },
  {
    title: "React.js",
    icon: SiReact,
    color: "bg-sky-100",
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    color: "bg-gray-100",
  },
  {
    title: "Vue.js",
    icon: SiVuedotjs,
    color: "bg-emerald-100",
  },
  {
    title: "Vuetify",
    icon: SiVuetify,
    color: "bg-sky-100",
  },
  {
    title: "Nuxt.js",
    icon: SiNuxtdotjs,
    color: "bg-emerald-100",
  },
  {
    title: "Nest.js",
    icon: SiNestjs,
    color: "bg-rose-100",
  },
  {
    title: "Flask",
    icon: SiFlask,
    color: "bg-sky-100",
  },
  {
    title: "Jest",
    icon: SiJest,
    color: "bg-red-100",
  },
  {
    title: "Pytest",
    icon: SiPytest,
    color: "bg-sky-100",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    color: "bg-green-100",
  },
  {
    title: "MySQL",
    icon: SiMysql,
    color: "bg-indigo-100",
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

const achievementsHeaderClass = "text-blue-900 font-semibold";

const achievements = [
  () => (
    <div>
      <span className={achievementsHeaderClass}>
        2023 Q3, Optimizely Spot Award:
      </span>{" "}
      Received monthly spot award with an appreciation message from a Software
      Engineering Manager saying,
      <i>
        &quot;Shunjid is one of the most accomplished engineers on our team. His
        consistent track record of delivering tasks with exceptional quality in
        recent SPRINTs is truly commendable. He is always humble & open for
        suggestions, helped others to improve & produced high quality of
        works.&quot;
      </i>
    </div>
  ),
  () => (
    <div>
      <span className={achievementsHeaderClass}>
        2023 Q1, Optimizely Spot Award:{" "}
      </span>
      Received monthly spot award with an appreciation message from the team
      lead saying,
      <i>
        &quot;Shunjid always tries to learn new things and apply the knowledge
        in his regular contributions to make our life easier. He has built trust
        and is always showing great responsibilities for his work.&quot;
      </i>
    </div>
  ),
  () => (
    <div>
      <span className={achievementsHeaderClass}>
        2nd, 2020 International Flutter Hackathon:{" "}
      </span>
      I had the privilege of leading a team of 5 talented Software Engineering
      students in the highly competitive International Flutter Hackathon 2020.
      Together, we developed mobile application using a cutting-edge technology
      Flutter, which ultimately earned us the title of &apos;Runner-up&apos;.
    </div>
  ),
  () => (
    <div>
      <span className={achievementsHeaderClass}>
        4th, 2020 Microsoft AI Gaming, Code-A-Bot:{" "}
      </span>
      Microsoft Student Partners (Mumbai) organized an international programming
      tournament where the challenge was to code a bot using Python and Azure
      Cognitive Services API. Competing against talented participants from
      around the world, I made it to the final round and secured the 4th
      position.
    </div>
  ),
  () => (
    <div>
      <span className={achievementsHeaderClass}>
        Challenge Conqueror, 2019 Grameenphone API Hackathon:{" "}
      </span>
      Our team was selected as one of the top 20 teams among hundreds of
      applicants from all over the country for the final round of the
      competition. The challenge was to integrate a software&apos;s premium
      subscription billing with Grameenphone&apos;s Direct Operator Billing API.
      We were among the top teams who successfully accomplished this task and
      received certification.
    </div>
  ),
  () => (
    <div>
      <span className={achievementsHeaderClass}>
        2019, Student of the Summer Semester:{" "}
      </span>
      Received an award in recognition of my outstanding academic performance
      during the summer of 2019, under the Department of Software Engineering at
      Daffodil International University.
    </div>
  ),
  () => (
    <div>
      <span className={achievementsHeaderClass}>
        Champion, Software Project Fair:{" "}
      </span>
      Under the mentorship of Md. Anwar Hossen, Assistant Professor, Department
      of SWE, Daffodil International University, our team was awarded the
      prestigious title of champions in the Web Project category for our
      exceptional work on &apos;Routine Explorer and Analytical
      Intelligence&apos; project.
    </div>
  ),
  () => (
    <div>
      <span className={achievementsHeaderClass}>
        2014 Felicitation for S.S.C Exam Result:{" "}
      </span>
      Received a medal and a certificate from the{" "}
      <a
        href="https://en.wikipedia.org/wiki/Sheikh_Hasina"
        className="font-semibold hover:underline"
        aria-label="Honorable Prime Minister of Bangladesh Sheikh Hasina"
        target="_blank"
      >
        Honorable Prime Minister of Bangladesh Sheikh Hasina
      </a>{" "}
      for outstanding performance in the Secondary School Certificate
      examination. The event was organized by Sheikh Russel Jatiyo Shishu
      Kishore Parishad.
    </div>
  ),
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
