import { Experience } from "@/data/types";

export function formatEnd(end: string) {
  return end === "CURRENT" ? "Present" : end;
}

export function yearRange(start: string, end: string) {
  const from = start.slice(0, 4);
  const to = end === "CURRENT" ? "Present" : end.slice(0, 4);
  return from === to ? from : `${from} – ${to}`;
}

export function roleId(role: Experience) {
  return `role-${role.company}-${role.shortTitle}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}

export type CompanyGroup = {
  company: string;
  companyWebsite: string;
  companyLogo?: string;
  roles: Experience[];
};

export function groupByCompany(experience: Experience[]): CompanyGroup[] {
  return experience.reduce<CompanyGroup[]>((groups, role) => {
    const current = groups.at(-1);
    if (current && current.company === role.company) {
      current.roles.push(role);
    } else {
      groups.push({
        company: role.company,
        companyWebsite: role.companyWebsite,
        companyLogo: role.companyLogo,
        roles: [role],
      });
    }
    return groups;
  }, []);
}
