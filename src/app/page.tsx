import { Metadata, Viewport } from "next";

import { ContactActions } from "@/components/contact-actions";
import { Achievements } from "@/components/sections/achievements";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Staircase } from "@/components/staircase";
import { avatarSrc, resume } from "@/data";

const linkedInProfile =
  resume.social.find((link) => link.icon === "linkedin")?.url ??
  resume.personalWebsiteUrl;

const ogAlt = `${resume.name}, ${resume.title} at ${resume.company}`;

export const metadata: Metadata = {
  metadataBase: new URL(resume.personalWebsiteUrl),
  title: resume.name,
  description: resume.seo.description,
  authors: [{ name: resume.name, url: linkedInProfile }],
  referrer: "strict-origin-when-cross-origin",
  alternates: { canonical: "/" },
  openGraph: {
    type: "article",
    url: "/",
    siteName: resume.name,
    title: resume.name,
    description: resume.seo.description,
    publishedTime: resume.seo.publishedTime,
    authors: [linkedInProfile],
    images: [{ url: resume.seo.ogImage, width: 1200, height: 630, alt: ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: resume.name,
    description: resume.seo.description,
    creator: resume.seo.twitterCreator,
    images: [{ url: resume.seo.ogImage, alt: ogAlt }],
  },
  keywords: resume.seo.keywords,
  icons: {
    icon: [
      { url: "/icon.svg?v=6", type: "image/svg+xml" },
      { url: "/favicon.ico?v=6", sizes: "any" },
    ],
    apple: ["/apple-icon.png?v=6"],
    shortcut: ["/apple-icon.png?v=6"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf9",
};

export default function Page() {
  const climb = resume.experience.filter(
    (role) => role.company === resume.company,
  );

  return (
    <>
      <a
        href="#content"
        className="bg-ink sr-only z-50 rounded-full px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>

      <header className="relative flex min-h-[100svh] flex-col lg:block lg:min-h-0">
        <div className="relative z-10 px-6 pt-14 sm:px-10 sm:pt-20 lg:max-w-[48%] lg:pt-20 lg:pr-8 lg:pl-16 xl:pl-20 [@media(max-height:820px)]:lg:pt-10">
          <img
            src={avatarSrc(96)}
            srcSet={`${avatarSrc(96)} 1x, ${avatarSrc(192)} 2x`}
            alt=""
            width={48}
            height={48}
            fetchPriority="high"
            referrerPolicy="no-referrer"
            className="size-12 rounded-full object-cover grayscale"
          />

          <h1 className="text-ink mt-8 text-[clamp(3rem,7vw,6rem)] leading-[0.9] font-bold tracking-[-0.04em] text-balance sm:mt-10 [@media(max-height:820px)]:lg:mt-6">
            {resume.name}
          </h1>
          <p className="text-ink mt-6 text-xl font-semibold tracking-tight sm:mt-8 sm:text-2xl">
            {resume.title}
            <span className="text-muted font-medium">
              {" "}
              at{" "}
              <span className="whitespace-nowrap">
                {resume.companyLogo && (
                  <img
                    src={resume.companyLogo}
                    alt=""
                    width={20}
                    height={20}
                    className="mr-1 inline-block size-[1em] align-[-0.125em]"
                  />
                )}
                {resume.company}
              </span>{" "}
              · {resume.location}
            </span>
          </p>
          <p className="text-muted mt-4 max-w-md leading-relaxed text-pretty">
            {resume.summary}
          </p>
          <div className="mt-8">
            <ContactActions social={resume.social} />
          </div>
        </div>

        <div className="mt-10 flex flex-1 flex-col justify-end lg:absolute lg:top-[12%] lg:right-0 lg:bottom-0 lg:mt-0 lg:block lg:w-[50%] print:hidden">
          <Staircase roles={climb} company={resume.company} />
        </div>
      </header>

      <main
        id="content"
        className="px-6 sm:px-10 lg:px-16 xl:px-20 [&>section:first-child]:border-t-0 [&>section:first-child]:pt-14 sm:[&>section:first-child]:pt-16"
      >
        <ExperienceSection
          experience={resume.experience}
          company={resume.company}
        />
        <Achievements achievements={resume.achievements} />
        <EducationSection educations={resume.educations} />
        <Skills skills={resume.skills} />
      </main>

      <svg
        aria-hidden="true"
        viewBox="0 0 4 4"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
        className="text-ink relative mt-8 -mb-px block h-16 w-full sm:h-24 print:hidden"
      >
        <path d="M0 3H1V2H2V1H3V0H4V4H0Z" fill="currentColor" />
      </svg>
      <footer className="bg-ink px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 xl:px-20 print:hidden">
        <p className="max-w-3xl text-5xl leading-[0.95] font-bold tracking-[-0.04em] sm:text-7xl">
          Let&apos;s talk about your team.
        </p>
        <p className="mt-6 max-w-md leading-relaxed text-white/70">
          LinkedIn is the fastest way to reach me.
        </p>
        <div className="mt-10">
          <ContactActions social={resume.social} inverted />
        </div>
        <p className="mt-20 text-xs text-white/50">{resume.name}</p>
      </footer>
    </>
  );
}
