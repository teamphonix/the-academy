import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore programs offered through The H.I.P.H.O.P. Academy for young adults ages 18–25.",
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
