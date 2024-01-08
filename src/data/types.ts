import { IconType } from "react-icons";

export type ResumeAchievementLoader = () => React.JSX.Element;

export interface ResumeSocialInfo {
  name: string;
  url: string;
  icon: IconType;
}

export interface ResumeExperience {
  title: string;
  company: string;
  companyWebsite: string;
  start: string;
  end: string;
  contributions: string[];
}

export interface ResumeEducation {
  institution: string;
  start: string;
  end: string;
  degree: string;
  website: string;
  descriptionList: {
    title?: string;
    text: string;
  }[];
}

export interface ResumeSkill {
  icon: IconType;
  title: string;
  color: string;
}

export type IResume = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  social: ResumeSocialInfo[];
  skills: ResumeSkill[];
  summaries: string[];
  experience: ResumeExperience[];
  achievements: ResumeAchievementLoader[];
  educations: ResumeEducation[];
};
