import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Cyverix Solutions: how we work, our studio in Faisalabad, Punjab, Pakistan, and what engineering-first means when we build your product.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
