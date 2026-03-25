import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "See real projects we delivered: web apps, SaaS, AI, marketplaces, and more. Each write-up covers the problem, what we did, and what you get.",
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
