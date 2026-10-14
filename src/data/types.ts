export type IconName = "linkedin" | "github" | "x";

export type RichText = { text: string; href?: string } | { quote: string };

export interface SocialLink {
  name: string;
  url: string;
  icon: IconName;
}

export interface Experience {
  title: string;
  shortTitle: string;
  company: string;
  companyWebsite: string;
  companyLogo?: string;
  start: string;
  end: string;
  contributions: string[];
}

export interface Achievement {
  date?: string;
  title: string;
  description: RichText[];
}

export interface Skill {
  title: string;
}

export interface Education {
  institution: string;
  degree: string;
  start: string;
  end: string;
  website: string;
  details: { label: string; value: string }[];
}

export interface Resume {
  name: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  summary: string;
  seo: {
    description: string;
    publishedTime: string;
    twitterCreator: string;
    ogImage: string;
    keywords: string[];
  };
  social: SocialLink[];
  experience: Experience[];
  achievements: Achievement[];
  skills: Skill[];
  educations: Education[];
}
