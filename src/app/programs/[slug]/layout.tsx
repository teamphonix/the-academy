import type { Metadata } from "next";
import programs from "@/data/programs.json";

type ProgramLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProgramLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((item) => item.programUrlSlug === slug);

  return {
    title: program?.programName ?? "Program",
    description: program?.shortDescription ?? "Explore this Academy program.",
  };
}

export default function ProgramLayout({ children }: ProgramLayoutProps) {
  return children;
}
