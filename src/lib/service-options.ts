/** Titles aligned with `components/sections/Services.tsx` */
export const SERVICE_OPTIONS = [
  "Website",
  "Software Development",
  "AI Solutions",
  "Automation Systems",
  "DevOps and Cloud",
  "UI/UX Design",
  "Mobile Apps",
  "Desktop Applications",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export const DEFAULT_SERVICE: ServiceOption = "Website";
