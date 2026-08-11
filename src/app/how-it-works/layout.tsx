import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See how Academy membership connects young adults ages 18–25 with structured programs, mentorship, and community support.",
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
