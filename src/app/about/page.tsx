"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col">
      <Header />

      {/* Hero Banner Section (Title and description are part of the generated image) */}
      <section className="w-full border-b border-neutral-800">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[200px] md:h-[300px]"
        >
          <img
            src="/about-banner.png"
            alt="About Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 border-b border-neutral-800 bg-neutral-950/40">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
              The Problem
            </h2>
            <p className="text-sm md:text-base text-neutral-350 leading-relaxed">
              At-risk youth receiving crucial assistance and support face a sudden cliff when they age out of services at 18 to 21. Overnight, they lose access to the resources, mentorship, and support systems they depend on.
            </p>
            <p className="text-lg md:text-2xl font-black text-primary uppercase tracking-wide pt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              "We pick up the ball where they get dropped off."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 border-b border-neutral-800">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Text description */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                Our Philosophy
              </h2>
              <div className="space-y-4 text-sm md:text-base text-neutral-400 leading-relaxed">
                <p>
                  <strong className="text-primary font-bold block text-lg mb-2">
                    Hip Hop means more than music. It's How I Put Harmony On Pain.
                  </strong>
                </p>
                <p>
                  At The H.I.P.H.O.P. Academy, we believe that every individual has the power to transform their struggles into strength, their pain into purpose, and their challenges into opportunities for growth.
                </p>
                <p>
                  Our approach is grounded in the understanding that true healing and empowerment come from within. We provide the tools, support, and community that transition-age young adults need to discover their inner light, develop essential life skills, and create lasting positive change.
                </p>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { image: "/card-compassion.png", title: "Compassion", desc: "Every journey met with care" },
                { image: "/card-community.png", title: "Community", desc: "Networks that foster growth" },
                { image: "/card-purpose.png", title: "Purpose", desc: "Discovering your unique path" },
                { image: "/card-innovation.png", title: "Innovation", desc: "Proven methods, creative approaches" },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-950 border border-primary/20 rounded-lg overflow-hidden flex flex-col shadow-2xl group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative w-full h-[140px] overflow-hidden">
                    <img
                      src={val.image}
                      alt={val.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center flex-grow flex flex-col justify-center">
                    <h3 className="font-bold text-lg text-white uppercase tracking-wide mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-neutral-950/85 border-b border-neutral-800">
        <div className="max-w-[100rem] mx-auto">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-3">
              Our Mission
            </h2>
            <p className="text-sm md:text-base text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              To equip transition-age young adults with the continuous resources and support needed after aging out of assistance programs, fostering growth within creative spaces with staff and guidance that align with their personal goals.
            </p>
          </div>
        </div>
      </section>

      {/* How We Operate Section */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-[100rem] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-3">
              How We Operate
            </h2>
            <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Through partnerships, professional standards, and community-centered approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Delivery card */}
            <div className="bg-neutral-950 border border-primary/20 rounded-lg p-6 md:p-8 shadow">
              <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-4">
                Program Delivery
              </h3>
              <ul className="space-y-3">
                {[
                  "Individual mentorship and coaching",
                  "Group workshops and skill-building",
                  "Community events and peer support",
                  "Online resources and ongoing support",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm md:text-base text-neutral-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team card */}
            <div className="bg-neutral-950 border border-primary/20 rounded-lg p-6 md:p-8 shadow">
              <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-4">
                Our Team
              </h3>
              <ul className="space-y-3">
                {[
                  "Licensed mental health counselors",
                  "Career and life skills coaches",
                  "Peer mentors with lived experience",
                  "Community partners and experts",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm md:text-base text-neutral-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
