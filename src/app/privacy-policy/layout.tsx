import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Cyverix Solutions collects, uses, and protects information when you use our site or get in touch.",
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
