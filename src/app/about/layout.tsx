import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Cyverix Solutions: how we work, where we are based, and what engineering-first means for you when we build your product.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
