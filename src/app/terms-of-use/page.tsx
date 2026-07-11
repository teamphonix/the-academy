"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col">
      <Header />

      <section className="py-16 md:py-24 px-6 md:px-12 relative z-10 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-xs md:text-sm text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-2 font-bold mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-2">
                Terms of Use
              </h1>
              <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                Effective Date: July 10, 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none text-sm md:text-base text-neutral-300 space-y-6 leading-relaxed">
              <p>
                Welcome to the website of THE HIP HOP ACADEMY A NJ NONPROFIT CORPORATION (&ldquo;The H.I.P.H.O.P. Academy,&rdquo; &ldquo;The Academy,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree to these Terms, please do not use this website.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                1. Purpose of the Website
              </h2>
              <p>
                This website is provided to share information about The H.I.P.H.O.P. Academy's mission, programs, partnerships, events, volunteer opportunities, and charitable activities. The information on this website is intended for educational and informational purposes only.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                2. Acceptable Use
              </h2>
              <p>
                You agree to use this website only for lawful purposes. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Violate any applicable federal, state, or local law.</li>
                <li>Attempt to gain unauthorized access to our systems or data.</li>
                <li>Introduce viruses, malware, or harmful code.</li>
                <li>Disrupt or interfere with the operation or security of the website.</li>
                <li>Use the website to harass, threaten, or harm others.</li>
                <li>Misrepresent your identity or affiliation with another person or organization.</li>
              </ul>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                3. Intellectual Property
              </h2>
              <p>
                Unless otherwise noted, all content on this website—including text, graphics, logos, photographs, videos, documents, curriculum materials, and other content—is the property of THE HIP HOP ACADEMY A NJ NONPROFIT CORPORATION or is used with permission.
              </p>
              <p>
                Content may not be copied, reproduced, distributed, modified, or used for commercial purposes without prior written permission.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                4. Donations
              </h2>
              <p>
                Any donations made through this website are voluntary and will be used to support the charitable mission and programs of The H.I.P.H.O.P. Academy.
              </p>
              <p>
                Once the organization receives federal tax-exempt recognition under Section 501(c)(3) of the Internal Revenue Code, donations may become tax-deductible to the extent permitted by law. Donors should consult their own tax advisor regarding deductibility.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                5. Volunteer and Program Participation
              </h2>
              <p>
                Submitting an inquiry, volunteer application, or program interest form does not guarantee acceptance into any program or volunteer opportunity. Participation is subject to eligibility requirements, organizational policies, available capacity, and applicable laws.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                6. Third-Party Links
              </h2>
              <p>
                This website may contain links to third-party websites for informational purposes. The Academy does not control or endorse the content, policies, or practices of third-party websites and is not responsible for their availability or accuracy.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                7. Disclaimer
              </h2>
              <p>
                The information provided on this website is offered in good faith for general informational purposes. While we strive to keep information accurate and current, The Academy makes no warranties or representations regarding the completeness, accuracy, reliability, or availability of any information on this website.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, THE HIP HOP ACADEMY A NJ NONPROFIT CORPORATION shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of, or inability to use, this website or any information contained herein.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                9. Privacy
              </h2>
              <p>
                Your use of this website is also governed by our Privacy Policy, which describes how we collect, use, and safeguard personal information.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                10. Accessibility
              </h2>
              <p>
                The Academy is committed to providing an accessible online experience for all visitors. We continually work to improve accessibility and welcome feedback regarding any accessibility barriers encountered while using our website.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                11. Changes to These Terms
              </h2>
              <p>
                The Academy reserves the right to update or modify these Terms of Use at any time. Changes become effective upon posting to this page. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                12. Governing Law
              </h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of the State of New Jersey and applicable federal law.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                13. Contact Information
              </h2>
              <div className="bg-neutral-950 border border-neutral-850 rounded-lg p-6 space-y-3">
                <p className="font-bold text-white uppercase">
                  THE HIP HOP ACADEMY A NJ NONPROFIT CORPORATION
                </p>
                <p className="text-sm">
                  189 Fairmount Avenue<br />
                  Newark, NJ 07103
                </p>
                <p className="text-sm">
                  <span className="text-neutral-500 font-semibold uppercase">Email: </span>
                  <a href="mailto:Jonti@HipHopAcademyNJ.Org" className="text-primary hover:underline">
                    Jonti@HipHopAcademyNJ.Org
                  </a>
                </p>
                <p className="text-sm">
                  <span className="text-neutral-500 font-semibold uppercase">Phone: </span>
                  <a href="tel:+12014526570" className="text-primary hover:underline">
                    (201) 452-6570
                  </a>
                </p>
              </div>

              <p className="text-xs text-neutral-400 pt-6">
                Thank you for supporting our mission to empower transition-age young adults through creativity, workforce development, mentorship, and recovery-oriented programming.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
