"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Partner() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col">
      <Header />

      {/* Hero Banner with text overlay */}
      <section className="w-full border-b border-neutral-800 relative h-[220px] md:h-[320px] overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src="https://static.wixstatic.com/media/ba59cd_a93ebdffd9af48398e7add98a0b005cc~mv2.jpeg"
            alt="Partner with us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/40" />
        </motion.div>
        
        {/* Dynamic overlay text */}
        <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Partner With Us
          </motion.h1>
          <motion.p 
            className="text-xs md:text-base text-neutral-200 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Join us in transforming lives. Together, we can create lasting change for young adults in our communities.
          </motion.p>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="py-12 md:py-16 px-6 md:px-12 border-b border-neutral-800">
        <div className="max-w-[100rem] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-3">
              Why Partner With Us
            </h2>
            <p className="text-sm md:text-base text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Building infrastructure, opportunity, and long term impact together
            </p>
            <p className="text-sm md:text-base text-neutral-300 max-w-3xl mx-auto mt-4 leading-relaxed">
              The H.I.P.H.O.P. Academy partners with organizations, facilities, and community leaders who understand that meaningful change requires structure, trust, and shared responsibility. We do not operate in isolation. We build systems that strengthen the work already happening on the ground.
            </p>
            <p className="text-xl md:text-2xl text-primary font-bold text-center max-w-3xl mx-auto mt-8 uppercase tracking-wide">
              "We don't fix lives. We create space for people to rebuild their own."
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-[100rem] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-3">
              Partnership Opportunities
            </h2>
            <p className="text-sm md:text-base text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              We work alongside corporations, institutions, and community organizations to create structured pathways for growth, accountability, and opportunity. Each partnership is built around shared goals, clear roles, and measurable impact, delivering value for participants, partners, and the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Corporate Partnerships",
                items: [
                  "Program sponsorships tied to measurable outcomes",
                  "Employee volunteer and mentorship opportunities",
                  "Matching gift and payroll giving programs",
                  "Equipment, services, or space contributions",
                ],
              },
              {
                title: "Educational Institutions",
                items: [
                  "Student support and transition programs",
                  "Research and impact collaboration",
                  "Internship and career placement pathways",
                  "Co-developed educational programming",
                ],
              },
              {
                title: "Community Organizations",
                items: [
                  "Referral and service partnerships",
                  "Shared spaces and resources",
                  "Co-hosted programs and events",
                  "Joint funding and grant initiatives",
                ],
              },
              {
                title: "Funding Partners",
                items: [
                  "Foundation and institutional grants",
                  "Major gifts supporting program growth",
                  "Program-specific funding opportunities",
                  "Long-term sustainability investments",
                ],
              },
            ].map((opp, idx) => (
              <motion.div
                key={idx}
                className="bg-neutral-900 border border-neutral-850 rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h3 className="font-bold text-base md:text-lg text-primary uppercase tracking-wide mb-4">
                  {opp.title}
                </h3>
                <ul className="space-y-3">
                  {opp.items.map((item, key) => (
                    <li key={key} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 border-b border-neutral-800">
        <div className="max-w-[100rem] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-3">
              Partnership Guidelines
            </h2>
            <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              We collaborate with partners who value integrity, accountability, and long term impact. Our partnerships are built on trust, shared responsibility, and a clear commitment to supporting young adults with care and intention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Expectations */}
            <div className="bg-neutral-950 border border-neutral-850 rounded-lg p-6 border-b-2 border-b-primary shadow">
              <h3 className="text-base md:text-lg text-white font-bold uppercase tracking-wide mb-4">
                Our Expectations
              </h3>
              <ul className="space-y-3">
                {[
                  "Alignment with our mission and core values",
                  "Ethical conduct and professional standards",
                  "Respect for participant privacy and boundaries",
                  "Clear communication and follow through",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offer */}
            <div className="bg-neutral-950 border border-neutral-850 rounded-lg p-6 border-b-2 border-b-primary shadow">
              <h3 className="text-base md:text-lg text-white font-bold uppercase tracking-wide mb-4">
                What We Offer
              </h3>
              <ul className="space-y-3">
                {[
                  "Transparent updates on program progress and outcomes",
                  "Meaningful recognition aligned with partner involvement",
                  "Opportunities for hands-on or strategic engagement",
                  "Dedicated support to ensure strong collaboration",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl text-primary font-bold uppercase tracking-wider">
              When values align, impact follows
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-neutral-950">
        <div className="max-w-[100rem] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-white font-bold uppercase tracking-wider mb-3">
            Let's Create Change Together
          </h2>
          <p className="text-sm md:text-base text-neutral-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Interested in partnering with The H.I.P.H.O.P. Academy? Contact us to discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="text-sm md:text-base bg-primary text-primary-foreground font-bold px-6 md:px-8 py-3 md:py-4 rounded hover:bg-primary-hover transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="text-sm md:text-base bg-transparent text-primary border border-primary px-6 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-primary/10 transition-colors inline-flex items-center justify-center"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
