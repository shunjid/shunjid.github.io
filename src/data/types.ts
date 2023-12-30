export type ResumeIconLoader = (
  props: React.SVGProps<SVGSVGElement>,
) => React.JSX.Element;

export interface ResumeSocialInfo {
  name: string;
  url: string;
  icon: ResumeIconLoader;
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
};
