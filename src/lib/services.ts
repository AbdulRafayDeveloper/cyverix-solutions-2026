export type ServiceId =
  | "website"
  | "software"
  | "ai"
  | "automation"
  | "devops"
  | "uiux"
  | "mobile";

export interface ServiceDef {
  id: ServiceId;
  title: string;
  label: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  color: string;
}

export const SERVICES: ServiceDef[] = [
  {
    id: "website",
    title: "Website",
    label: "WEB",
    shortDescription:
      "Websites and customer portals built to load fast, convert visitors, and stay easy to update.",
    longDescription:
      "We build marketing sites, product landing pages, and customer-facing portals on Next.js, React, and modern CSS. You get a site that looks right on phones and desktops, ranks cleanly for search, and stays maintainable as your team edits content. Performance and security stay part of the plan from day one.",
    features: [
      "Responsive layouts",
      "SEO-friendly structure",
      "Speed tuning",
      "Clear user flows",
      "CMS hookups when you need them",
    ],
    color: "#00FFB2",
  },
  {
    id: "software",
    title: "Software Development",
    label: "SAAS",
    shortDescription:
      "SaaS products and internal tools built to handle real traffic, real users, and real permissions.",
    longDescription:
      "We work from multi-tenant dashboards through to heavier workflow tools. You get sign-in, roles, data models, and APIs thought through up front so the product stays fast and honest as more people use it.",
    features: [
      "Secure sign-in and roles",
      "Solid database design",
      "SaaS-style dashboards",
      "Cloud-ready deploys",
      "API-first thinking",
    ],
    color: "#7B5EA7",
  },
  {
    id: "ai",
    title: "AI Solutions",
    label: "AI",
    shortDescription:
      "Practical AI features that save time and support decisions, without hype.",
    longDescription:
      "We wire in language models, embeddings, or custom models where they clearly pay off. You get clear prompts, logging, and guardrails so the AI helps your team instead of adding new risks.",
    features: [
      "LLM integration",
      "Workflow automation",
      "Custom training where it fits",
      "Data pipelines",
      "Forecasting and analysis",
    ],
    color: "#00FFB2",
  },
  {
    id: "automation",
    title: "Automation Systems",
    label: "AUTO",
    shortDescription:
      "Connect your tools so repeat work runs on a schedule or on events, with alerts when something breaks.",
    longDescription:
      "We link CRMs, databases, spreadsheets, and APIs into pipelines you can trust. You get logging, retries, and notifications when a job fails, so your team stops doing the same manual steps by hand.",
    features: [
      "Workflow design",
      "Tool integration",
      "Error handling and monitoring",
      "Health checks",
      "Scheduling at scale",
    ],
    color: "#7B5EA7",
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    label: "INFRA",
    shortDescription:
      "Infrastructure and deploy pipelines you can repeat, with security baked in from the start.",
    longDescription:
      "We treat environments as code: Docker, Kubernetes, and Terraform where it fits, plus CI through GitHub Actions or similar. Reviews for security, secrets handling, and uptime are part of the work, not an afterthought after launch.",
    features: ["Docker and Kubernetes", "CI/CD", "AWS / Azure / Vercel", "Hardening", "Monitoring and scaling"],
    color: "#00FFB2",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    label: "DESIGN",
    shortDescription:
      "Interfaces that match your brand and make the next step obvious.",
    longDescription:
      "We run light discovery, map journeys, then move from wireframes to finished UI. You get a small design system and motion only where it helps. People should know what to do next without a manual.",
    features: ["User research", "Wireframes", "High-fidelity UI", "Design systems", "Motion where it helps"],
    color: "#7B5EA7",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    label: "APPS",
    shortDescription:
      "iOS and Android apps that feel native, with offline support when you need it.",
    longDescription:
      "We ship with React Native and Flutter, and go fully native when the product calls for it. You get sign-in, sync, push, and store rules handled so you can focus on product instead of platform surprises.",
    features: ["iOS and Android", "Offline support", "Push notifications", "Store requirements", "Live sync"],
    color: "#00FFB2",
  },
];
