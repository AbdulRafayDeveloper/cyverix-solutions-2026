import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web, SaaS, AI, automation, DevOps, UI and UX, and mobile development. See what we offer and get in touch when you are ready.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
