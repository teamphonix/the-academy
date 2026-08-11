import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of The H.I.P.H.O.P. Academy website.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
