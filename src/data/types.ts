export type ResumeIconLoader = (
  props: React.SVGProps<SVGSVGElement>,
) => React.JSX.Element;

export interface IResumeSocialContact {
  name: string;
  url: string;
  icon: ResumeIconLoader;
}

export interface IResumeContact {
  social: IResumeSocialContact[];
}

export interface IResume {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  skills: string[];
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: IResumeContact;
}
