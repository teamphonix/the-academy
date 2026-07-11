"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import programsData from "@/data/programs.json";

export default function Programs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const prevProgram = () => {
    setActiveIdx((prev) => (prev === 0 ? programsData.length - 1 : prev - 1));
  };

  const nextProgram = () => {
    setActiveIdx((prev) => (prev === programsData.length - 1 ? 0 : prev + 1));
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextProgram();
      else prevProgram();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextProgram();
      else prevProgram();
    }
  };

  // Rectangle images for mobile view (original landscape ones)
  const mobileRectangleImages: Record<string, string> = {
    "boss-up-bootcamp": "https://static.wixstatic.com/media/ba59cd_17970a7da22c43428eee0fa577ec695a~mv2.jpeg",
    "the-inner-light-project": "/inner-light-studio.png",
    "we-do-recover": "https://static.wixstatic.com/media/ba59cd_83b2be5ef49e4931a69b526faca96c74~mv2.jpeg",
  };

  const shortDescriptions: Record<string, string> = {
    "the-inner-light-project": "An active recording studio pathway where participants step behind the microphone and console. Under professional guidance, you will learn to write meaningful lyrics, produce music, and channel life experiences into professional-grade creative projects.",
    "we-do-recover": "A safe space dedicated to long-term sobriety. Through structured peer groups, relapse prevention coaching, and constructive creative outlets, participants gain the community support and tools needed to keep moving forward.",
    "boss-up-bootcamp": "A practical roadmap to self-employment. Learn to turn creative ideas into viable business models, master modern digital tools, and build the entrepreneurial foundations needed to build a sustainable career.",
  };

  return (
    <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col">
      <Header />

      {/* Hero Banner Section (No dark overlay) */}
      <section className="w-full border-b border-neutral-800">
        <div className="relative w-full h-[200px] md:h-[300px]">
          <img
            src="https://static.wixstatic.com/media/ba59cd_e7631867d0aa42cc87acf7385cff522b~mv2.jpeg"
            alt="Our Programs Banner"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Title set below the image */}
        <div className="py-8 px-6 md:px-12 max-w-[100rem] mx-auto text-center border-b border-neutral-800 bg-neutral-950/20">
          <p className="text-sm md:text-base text-neutral-200 max-w-xl mx-auto leading-relaxed">
            Structured pathways that empower young adults to discover purpose, build stability, and gain real-world credentials.
          </p>
        </div>
      </section>

      {/* Mobile Responsive View (RECTANGLE image only) */}
      <section className="py-12 px-6 md:hidden">
        <div className="max-w-[100rem] mx-auto">
          {programsData.length > 0 ? (
            <div className="space-y-12">
              {programsData.map((prog, idx) => {
                const rectImg = mobileRectangleImages[prog.programUrlSlug] || prog.programImage;
                const desc = shortDescriptions[prog.programUrlSlug] || prog.shortDescription;

                return (
                  <div key={prog._id} className="space-y-6">
                    <motion.div
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      {rectImg && (
                        <Link
                          href={`/programs/${prog.programUrlSlug}`}
                          className="block w-full max-w-md mx-auto mb-8 overflow-hidden rounded-lg border border-neutral-850 hover:border-primary/50 transition-colors group shadow-lg relative"
                        >
                          <img
                            src={rectImg}
                            alt={prog.programName || "Program"}
                            className="w-full h-auto object-cover group-hover:scale-101 transition-transform"
                          />
                          {prog.programUrlSlug === "the-inner-light-project" && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
                              <p className="text-white text-center text-sm font-medium leading-snug">
                                Creative Confidence<br/>studio based development that builds identity, expression, and professional discipline
                              </p>
                            </div>
                          )}
                        </Link>
                      )}

                      <div className="text-center max-w-2xl px-4">
                        <h2 className="text-2xl font-bold text-white uppercase mb-3 tracking-wide">
                          {prog.programName}
                        </h2>
                        <p className="text-sm text-neutral-200 mb-4 leading-relaxed">
                          {desc}
                        </p>
                        {prog.targetAudience && (
                          <p className="text-xs text-neutral-300 mb-6">
                            <strong className="text-primary font-bold uppercase">For: </strong>
                            {prog.targetAudience}
                          </p>
                        )}
                        <Link
                          href={`/programs/${prog.programUrlSlug}`}
                          className="text-sm bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary-hover transition-colors inline-flex items-center gap-2 font-bold shadow-md shadow-primary/10"
                        >
                          Learn More <ArrowRight size={18} />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-300">Loading programs...</p>
            </div>
          )}
        </div>
      </section>

      {/* Desktop Layout (SQUARE image only) */}
      <section className="hidden md:block py-16 px-12 bg-neutral-900/10">
        <div className="max-w-[100rem] mx-auto">
          {programsData.length > 0 ? (
            <div className="relative">
              {/* Slides wrapper */}
              <div
                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <motion.div
                  className="flex"
                  animate={{ x: `-${activeIdx * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {programsData.map((prog) => {
                    const desc = shortDescriptions[prog.programUrlSlug] || prog.shortDescription;

                    return (
                      <div key={prog._id} className="w-full flex-shrink-0 px-8">
                        <div className="flex flex-col items-center">
                          
                          {/* Desktop view displays SQUARE image (programImage) ONLY */}
                          {prog.programImage && (
                            <Link
                              href={`/programs/${prog.programUrlSlug}`}
                              className="block w-full max-w-md mx-auto mb-8 overflow-hidden rounded-lg border border-neutral-800 hover:border-primary/50 aspect-square group shadow-2xl transition-all duration-305"
                            >
                              <img
                                src={prog.programImage}
                                alt={prog.programName}
                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                              />
                            </Link>
                          )}

                          <div className="text-center max-w-2xl px-6">
                            <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-3">
                              {prog.programName}
                            </h2>
                            <p className="text-base text-neutral-205 mb-4 leading-relaxed">
                              {desc}
                            </p>
                            {prog.targetAudience && (
                              <p className="text-sm text-neutral-250 mb-6">
                                <strong className="text-primary uppercase font-bold">For: </strong>
                                {prog.targetAudience}
                              </p>
                            )}
                            <Link
                              href={`/programs/${prog.programUrlSlug}`}
                              className="text-base bg-primary text-primary-foreground font-bold px-8 py-4 rounded hover:bg-primary-hover transition-colors inline-flex items-center gap-2 shadow-lg shadow-primary/20"
                            >
                              Learn More <ArrowRight size={18} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Slider Arrows */}
              <button
                onClick={prevProgram}
                className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-neutral-950/60 border border-neutral-800 text-white p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous program"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextProgram}
                className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-neutral-950/60 border border-neutral-800 text-white p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next program"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {programsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx ? "bg-primary w-8" : "bg-neutral-700 w-2"
                    }`}
                    aria-label={`Go to program ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-300">Loading programs...</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-neutral-950 border-t border-neutral-850">
        <div className="max-w-[100rem] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-white font-bold uppercase tracking-wider mb-3">
            Not Sure Which Program Is Right for You?
          </h2>
          <p className="text-sm md:text-base text-neutral-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Contact us to discuss your goals, background, and find the perfect program fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="text-sm md:text-base bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded hover:bg-primary-hover transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm md:text-base bg-transparent text-primary border border-primary px-6 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-primary/10 transition-colors inline-flex items-center justify-center"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
