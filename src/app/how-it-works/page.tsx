"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col">
      <Header />

      {/* Hero Banner Section (Title and description are now part of the generated image) */}
      <section className="w-full border-b border-neutral-800">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[200px] md:h-[300px]"
        >
          <img
            src="/how-it-works-banner.png"
            alt="How It Works Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Philosophy & Pillars Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-[100rem] mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-6">
              Our Philosophy, Purpose, and Model
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto text-neutral-300 text-sm md:text-base leading-relaxed">
              <p>
                The H.I.P.H.O.P. Academy exists to support individuals in transition by providing structure, creative opportunity, and real world exposure inside professional environments. Our work is grounded in lived experience, accountability, and consistency, not shortcuts or hype.
              </p>
              <p>
                We believe real change happens when people are given clear expectations, meaningful responsibility, and access to environments where growth is modeled daily. Hip Hop is more than music here. It is a framework for discipline, expression, ownership, and rebuilding identity.
              </p>
              <p>
                Our programs are designed to meet people where they are while holding standards that prepare them for stability, independence, and long term success.
              </p>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="border-t border-neutral-800 pt-12">
            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide mb-8 text-center">
              Our Approach
            </h3>
            <p className="text-sm md:text-base text-neutral-305 text-center mb-8 max-w-2xl mx-auto">
              We operate as a structured nonprofit academy built on three core pillars:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Structure and Accountability",
                  desc: "Clear routines, expectations, and boundaries create safety and focus. Participants engage in consistent programming designed to reduce chaos and support forward momentum.",
                },
                {
                  title: "Creative Expression with Purpose",
                  desc: "Creativity is used as a tool for confidence, communication, and emotional processing. Expression is paired with professionalism and responsibility so growth extends beyond the creative space.",
                },
                {
                  title: "Real World Exposure",
                  desc: "Participants learn within active professional environments through carefully managed partnerships. Exposure to real operations helps bridge the gap between learning and real life without disrupting business or client standards.",
                },
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  className="bg-neutral-900 border border-primary/20 p-6 rounded-lg shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <h4 className="font-bold text-lg text-primary uppercase tracking-wide mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Process Steps */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-[100rem] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-6 text-center">
            Trust The Process
          </h2>
          <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center text-neutral-300 text-sm md:text-base leading-relaxed">
            <p className="mb-4">
              Our programs serve individuals navigating major life transitions who are seeking structure, purpose, and a supportive environment to grow.
            </p>
            <p>
              Many participants come through community organizations, workforce development programs, recovery support systems, or self referral. What unites them is a willingness to show up consistently, engage with accountability, and invest in their own development.
            </p>
          </div>

          {/* Workflow list */}
          <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
            {[
              {
                img: "https://static.wixstatic.com/media/ba59cd_4c98b841f067460589fc2d4b2574dc67~mv2.jpg",
                title: "Initial Contact",
                desc: "Reach out through our contact form, email, or referral partner. This first step helps us understand goals, readiness, and areas of support.",
              },
              {
                img: "https://static.wixstatic.com/media/ba59cd_7f5afe6750314b4a8df4565ac39821ca~mv2.jpg",
                title: "Assessment & Placement",
                desc: "We conduct a brief intake to understand interests, needs, and fit. Participants are guided toward the most appropriate program pathway.",
              },
              {
                img: "https://static.wixstatic.com/media/ba59cd_f12fedd75dfd4c399a3e7a0e954e5417~mv2.jpg",
                title: "Active Participation",
                desc: "Participants engage in structured sessions, workshops, creative labs, mentorship, and group activities aligned with their selected program.",
              },
              {
                img: "https://static.wixstatic.com/media/ba59cd_3a9403917280401891ba90dd26b4d72c~mv2.jpg",
                title: "Progress & Accountability",
                desc: "Progress is supported through consistency, feedback, reflection, and accountability with space to adjust and strengthen skills.",
              },
              {
                img: "https://static.wixstatic.com/media/ba59cd_9f296cca7bbd495494c99bca1159fb33~mv2.jpg",
                title: "Completion & Beyond",
                desc: "Participants complete programming with clearer direction, next-step planning, and continued access to community connections.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col sm:flex-row gap-6 items-center sm:items-start bg-neutral-950 p-6 rounded-lg border border-neutral-850 shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] flex-shrink-0 object-contain"
                />
                <div className="text-center sm:text-left space-y-2 flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                    {step.title}
                  </h2>
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility collaboration info */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-neutral-950 border-t-2 border-b border-primary border-neutral-850">
        <div className="max-w-[100rem] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-6">
              Partner Facilities and Community Collaboration
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto text-neutral-400 text-sm md:text-base leading-relaxed">
              <p>
                The Academy partners with professional creative facilities that align with our mission and standards. These partnerships allow participants to learn in real spaces while maintaining clear boundaries that protect both paid clients and program participants.
              </p>
              <p>
                Facilities benefit by contributing to meaningful community impact, honoring legacy, and helping shape the next generation, while the Academy gains stable environments for programming and expansion.
              </p>
              <p>
                This model allows the Academy to grow responsibly while preserving the integrity of each partner space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-neutral-950/80">
        <div className="max-w-[100rem] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-3">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-sm md:text-base text-neutral-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward transforming your life. Contact us today to schedule your enrollment assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="text-sm md:text-base bg-primary text-primary-foreground font-bold px-6 py-3 rounded hover:bg-primary-hover transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link
              href="/programs"
              className="text-sm md:text-base bg-transparent text-primary border border-primary px-6 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-primary/10 transition-colors inline-flex items-center justify-center"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
