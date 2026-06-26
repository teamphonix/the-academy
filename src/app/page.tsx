"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import slidesData from "@/data/homepageslides.json";
import programsData from "@/data/programs.json";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [progIndex, setProgIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Auto slide interval
  useEffect(() => {
    if (slidesData.length > 1) {
      const interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % slidesData.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, []);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const nextProgram = () => {
    setProgIndex((prev) => (prev + 1) % programsData.length);
  };

  const prevProgram = () => {
    setProgIndex((prev) => (prev - 1 + programsData.length) % programsData.length);
  };

  // Preset program images in correct order matching the mock JS (these are rectangle landscape)
  const programImages = [
    "https://static.wixstatic.com/media/ba59cd_aa9c6e5c8fb14f1587d06639bfdaf0f4~mv2.jpeg",
    "https://static.wixstatic.com/media/ba59cd_fe78fb92cc8648b8ac812340b333f7e0~mv2.jpeg",
    "https://static.wixstatic.com/media/ba59cd_8b0624f581324ae6bade3eda2e56c2d2~mv2.jpeg",
  ];

  return (
    <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col">
      <Header />

      {/* Hero Slideshow Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        {slidesData.length > 0 && (
          <>
            {/* Background Images with AnimatePresence */}
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <img
                    src={slidesData[slideIndex].slideImage}
                    alt={slidesData[slideIndex].slideTitle || "Slide Image"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-neutral-950/60" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
              <div className="max-w-3xl w-full flex-1 flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${slideIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight tracking-tight uppercase">
                      {slideIndex === 0 ? (
                        <>
                          <div>Harmony Through</div>
                          <div className="text-primary">H.I.P.H.O.P.</div>
                        </>
                      ) : slideIndex === 1 ? (
                        <>
                          <div>Empower Your</div>
                          <div className="text-primary">Inner Light</div>
                        </>
                      ) : (
                        slidesData[slideIndex].slideTitle
                      )}
                    </h1>
                    <p className="text-base md:text-lg text-neutral-200 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                      {slidesData[slideIndex].slideDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href={slidesData[slideIndex].callToActionUrl || "/programs"}
                        className="text-sm md:text-base bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-primary-hover transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                      >
                        {slidesData[slideIndex].callToActionText || "Explore"}
                        <ArrowRight size={18} />
                      </Link>
                      <Link
                        href="/about"
                        className="text-sm md:text-base bg-transparent text-primary border border-primary px-6 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-primary/10 transition-colors inline-flex items-center justify-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots indicator */}
              {slidesData.length > 1 && (
                <div className="flex gap-2 justify-center pb-8 md:pb-12">
                  {slidesData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSlideIndex(idx)}
                      className={`transition-all duration-300 h-2 rounded-full ${
                        idx === slideIndex ? "bg-primary w-8" : "bg-neutral-600 w-2"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Arrows */}
            {slidesData.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 bg-primary/30 text-white p-2 md:p-3 rounded-full hover:bg-primary/80 transition-colors z-10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 bg-primary/30 text-white p-2 md:p-3 rounded-full hover:bg-primary/80 transition-colors z-10"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </>
        )}
      </section>

      {/* Our Programs Section */}
      {programsData.length > 0 && (
        <section className="py-16 md:py-20 px-6 md:px-12 border-b border-neutral-800">
          <div className="max-w-[100rem] mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl text-white font-bold uppercase tracking-wider mb-3">
                Our Programs
              </h2>
              <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto mb-2 leading-relaxed">
                Delivered in professional creative facilities through partnerships, with clear standards that protect people, process, and purpose.
              </p>
              <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                Three transformative pathways for transition-age young adults.
              </p>
            </div>

            {/* Mobile Program Swiper (Carousel) */}
            <div className="md:hidden relative">
              <div className="overflow-hidden">
                <div
                  ref={carouselRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${progIndex * 100}%)` }}
                >
                  {programsData.map((prog, idx) => (
                    <div key={prog._id} className="w-full flex-shrink-0 px-2 flex flex-col">
                      <Link
                        href={`/programs/${prog.programUrlSlug}`}
                        className="block relative overflow-hidden rounded-lg border border-neutral-800 aspect-square group shadow-lg mb-4"
                      >
                        <img
                          src={programImages[idx] || prog.programImage}
                          alt={prog.programName || "Program Image"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                      <div className="text-center px-4">
                        <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">{prog.programName}</h3>
                        <p className="text-xs text-neutral-450 line-clamp-2 leading-relaxed">{prog.shortDescription}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {programsData.length > 1 && (
                <>
                  <button
                    onClick={prevProgram}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
                    aria-label="Previous program"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextProgram}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
                    aria-label="Next program"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Dots for mobile programs */}
              <div className="flex gap-2 justify-center mt-6">
                {programsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setProgIndex(idx)}
                    className={`transition-all duration-300 h-2 rounded-full ${
                      idx === progIndex ? "bg-primary w-8" : "bg-neutral-700 w-2"
                    }`}
                    aria-label={`Go to program ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Programs Grid */}
            <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {programsData.map((prog, idx) => (
                <div key={prog._id} className="flex flex-col">
                  <Link
                    href={`/programs/${prog.programUrlSlug}`}
                    className="block relative overflow-hidden rounded-lg border border-neutral-800 hover:border-primary/50 aspect-square group shadow-lg transition-all duration-300 hover:shadow-primary/5 mb-4"
                  >
                    <img
                      src={programImages[idx] || prog.programImage}
                      alt={prog.programName || "Program Image"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  <div className="text-center px-4">
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">
                      {prog.programName}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {prog.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 border-b border-neutral-800 bg-neutral-900/50">
        <div className="max-w-[100rem] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white font-bold uppercase tracking-wider mb-3">
              Why Choose Us
            </h2>
            <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Built with intention. Grounded in real life. Designed for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Real-World Learning",
                desc: "Programs operate inside professional creative spaces with real expectations, boundaries, and standards, not simulations or isolated classrooms.",
              },
              {
                title: "Small & Intentional",
                desc: "We work in small groups to preserve safety, focus, accountability, and meaningful mentorship.",
              },
              {
                title: "Structure Without Shame",
                desc: "Growth is supported through clear expectations, consistency, and responsibility, not punishment, pressure, or fear.",
              },
              {
                title: "Built With Purpose",
                desc: "Our programs prioritize identity, discipline, and stability before performance or outcomes.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 bg-neutral-950 p-6 rounded-lg border border-neutral-850">
                <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-base md:text-lg text-white mb-2 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-350 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us CTA Banner (Text overlay removed, now displays raw image containing baked-in text) */}
      <section className="py-12 md:py-16 px-6 md:px-12 border-b border-neutral-800">
        <div className="max-w-[100rem] mx-auto">
          <Link
            href="/partner"
            className="block relative overflow-hidden rounded-lg border border-neutral-850 group shadow-2xl"
          >
            <img
              src="https://static.wixstatic.com/media/ba59cd_a1b3681066124e068ad6fbeb31acaeab~mv2.jpeg"
              alt="Partner With Us"
              className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
      </section>

      {/* Bottom Ready To Transform Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-neutral-950/85">
        <div className="max-w-[100rem] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl text-white font-bold uppercase tracking-wider mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-sm md:text-base text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join The H.I.P.H.O.P. Academy and discover how to put harmony on pain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="text-sm md:text-base bg-primary text-primary-foreground font-bold px-6 md:px-8 py-3 md:py-4 rounded hover:bg-primary-hover transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Get Started
              <ArrowRight size={18} />
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
