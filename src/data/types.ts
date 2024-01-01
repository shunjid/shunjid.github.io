export type ResumeIconLoader = (
  props: React.SVGProps<SVGSVGElement>,
) => React.JSX.Element;

export interface ResumeSocialInfo {
  name: string;
  url: string;
  icon: ResumeIconLoader;
}

export interface ResumeExperience {
  title: string;
  company: string;
  companyWebsite: string;
  start: string;
  end: string;
  contributions: string[];
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
  skills: string[];
  summaries: string[];
  experience: ResumeExperience[];
  achievements: string[];
};
