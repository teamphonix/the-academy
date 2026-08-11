import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how The H.I.P.H.O.P. Academy supports transition-age young adults through education, mentorship, peer support, and creative development.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
