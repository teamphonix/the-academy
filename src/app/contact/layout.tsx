import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The H.I.P.H.O.P. Academy about membership, programs, scholarships, or partnerships.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
