import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on software engineering, AI in production, SaaS delivery, and working with global clients. From Cyverix Solutions, Faisalabad.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
