import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy practices for The H.I.P.H.O.P. Academy website.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
