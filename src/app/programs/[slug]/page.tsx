"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import programsData from "@/data/programs.json";

interface Program {
  _id: string;
  programName: string;
  programUrlSlug: string;
  shortDescription: string;
  fullDescription?: string;
  programImage: string;
  desktopimage?: string;
  targetAudience?: string;
}

export default function ProgramDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const found = programsData.find((p) => p.programUrlSlug === slug);
      setProgram(found || null);
      setLoading(false);
    }
  }, [slug]);

  // Emojis based on program slugs
  const emojiMap: Record<string, string> = {
    "the-inner-light-project": "✨",
    "boss-up-bootcamp": "🎯",
    "we-do-recover": "🤝",
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-base text-neutral-300 animate-pulse">Loading program details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 md:px-12 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wider">
            Program Not Found
          </h1>
          <p className="text-sm md:text-base text-neutral-300 mb-6 max-w-md">
            The program you are looking for does not exist in our system.
          </p>
          <Link
            href="/programs"
            className="text-sm bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary-hover transition-colors inline-flex items-center gap-2 font-bold shadow-md shadow-primary/20"
          >
            <ArrowLeft size={18} /> Back to Programs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const emoji = emojiMap[program.programUrlSlug] || "✨";
  
  // Format wix image string to normal url if necessary
  const formatWixImage = (imgStr?: string) => {
    if (!imgStr) return "";
    if (imgStr.startsWith("wix:image")) {
      const match = imgStr.match(/v1\/([^/]+)/);
      if (match) {
        return `https://static.wixstatic.com/media/${match[1]}`;
      }
    }
    return imgStr;
  };

  const bannerImage = program.programUrlSlug === "the-inner-light-project"
    ? "/inner-light-banner.png"
    : program.programUrlSlug === "boss-up-bootcamp"
    ? "/boss-up-banner.png"
    : program.programUrlSlug === "we-do-recover"
    ? "/we-do-recover-banner.png"
    : program.programImage;
  const bodyImage = program.programUrlSlug === "the-inner-light-project"
    ? "/inner-light-studio.png"
    : formatWixImage(program.desktopimage) || program.programImage;

  return (
    <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col">
      <Header />

      {/* Hero Banner Image */}
      {bannerImage && (
        <section className="w-full h-[200px] md:h-[320px] relative border-b border-neutral-800 overflow-hidden flex items-center justify-center">
          <img
            src={bannerImage}
            alt={program.programName}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-neutral-950/40" />
          
          {/* Overlay text dynamically */}
          {(program.programUrlSlug === "we-do-recover" || program.programUrlSlug === "the-inner-light-project" || program.programUrlSlug === "boss-up-bootcamp") && (
            <div className="relative z-10 px-6 text-center max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
              <motion.h1 
                className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {program.programName}
              </motion.h1>
              <motion.p 
                className="text-xs md:text-base text-neutral-200 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-2xl text-center leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {program.programUrlSlug === "we-do-recover" 
                  ? "A compassionate and supportive program for individuals on their journey to recovery from addiction."
                  : program.shortDescription}
              </motion.p>
            </div>
          )}
        </section>
      )}

      {/* Title Details (Moved below the Banner Image) */}
      <section className={`${(program.programUrlSlug === "the-inner-light-project" || program.programUrlSlug === "boss-up-bootcamp" || program.programUrlSlug === "we-do-recover") ? "py-4" : "py-8"} px-6 md:px-12 border-b border-neutral-800 bg-neutral-950/20`}>
        <div className="max-w-[100rem] mx-auto relative z-10">
          <Link
            href="/programs"
            className="text-xs md:text-sm text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-2 font-bold"
          >
            <ArrowLeft size={16} /> Back to Programs
          </Link>
          {program.programUrlSlug !== "the-inner-light-project" && program.programUrlSlug !== "boss-up-bootcamp" && program.programUrlSlug !== "we-do-recover" && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl mb-4">{emoji}</div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 uppercase tracking-wider leading-tight">
                {program.programName}
              </h1>
              <p className="text-sm md:text-base text-neutral-200 max-w-2xl leading-relaxed">
                {program.shortDescription}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                  About This Program
                </h2>
                <div className="text-sm md:text-base text-neutral-300 whitespace-pre-line leading-relaxed">
                  {program.fullDescription || program.shortDescription}
                </div>
              </div>

              {bodyImage && (
                <div className="relative overflow-hidden rounded-lg border border-neutral-850 shadow-2xl h-[350px] md:h-[450px]">
                  <img
                    src={bodyImage}
                    alt={program.programName}
                    className="w-full h-full object-cover"
                  />
                  {program.programUrlSlug === "the-inner-light-project" && (
                    <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-xs py-5 px-6 flex flex-col justify-center border-t border-white/10">
                      <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider mb-1.5">
                        Creative Confidence
                      </h4>
                      <p className="text-xs md:text-sm text-neutral-350 leading-relaxed font-medium">
                        studio based development that builds identity, expression, and professional discipline
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* What you will gain card */}
              <div className="bg-neutral-950 border border-neutral-850 rounded-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-wide">
                  What You'll Gain
                </h3>
                <ul className="space-y-4">
                  {[
                    "Personalized support and guidance from experienced mentors",
                    "Evidence-based tools and strategies for lasting change",
                    "A supportive community of peers on similar journeys",
                    "Practical skills you can apply immediately in your life",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm md:text-base text-neutral-250 leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {program.targetAudience && (
                  <div className="bg-neutral-950 border border-neutral-850 rounded-lg p-6 shadow">
                    <h3 className="text-xs text-primary font-bold uppercase tracking-wider mb-2">
                      For
                    </h3>
                    <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                      {program.targetAudience}
                    </p>
                  </div>
                )}

                <div className="bg-neutral-950 border border-primary/20 rounded-lg p-6 shadow-md shadow-primary/5">
                  <h3 className="text-xs text-primary font-bold uppercase tracking-wider mb-2">
                    Age Requirement
                  </h3>
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                    Transition-age young adults only. We do not provide services to minors.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-850 rounded-lg p-6 shadow">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400 mb-6">
                    Contact us to learn more about enrollment and registration.
                  </p>
                  <Link
                    href="/contact"
                    className="text-sm bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary-hover transition-colors inline-flex items-center justify-center gap-2 w-full font-bold shadow-lg shadow-primary/20"
                  >
                    Contact Us <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="bg-neutral-950 border border-neutral-850 rounded-lg p-6 shadow">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                    Learn More
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/how-it-works"
                      className="text-sm text-primary hover:text-primary-hover transition-colors block font-semibold"
                    >
                      How It Works &rarr;
                    </Link>
                    <Link
                      href="/about"
                      className="text-sm text-primary hover:text-primary-hover transition-colors block font-semibold"
                    >
                      About Us &rarr;
                    </Link>
                    <Link
                      href="/programs"
                      className="text-sm text-primary hover:text-primary-hover transition-colors block font-semibold"
                    >
                      All Programs &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
