"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
                Privacy Policy
              </h1>
              <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                Effective Date: July 10, 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none text-sm md:text-base text-neutral-300 space-y-6 leading-relaxed">
              <p>
                The H.I.P.H.O.P. Academy (&ldquo;The Academy,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of our website visitors, supporters, volunteers, partners, and program participants. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or interact with our organization.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                Information We Collect
              </h2>
              <p>
                We may collect information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Organization or employer (if applicable)</li>
                <li>Volunteer or partnership information</li>
                <li>Donation information (when applicable)</li>
                <li>Information submitted through contact forms or event registrations</li>
              </ul>
              <p>
                We may also automatically collect limited technical information such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Date and time of visits</li>
              </ul>
              <p>
                This information helps us improve the functionality and security of our website.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                How We Use Your Information
              </h2>
              <p>
                Information collected may be used to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Respond to inquiries</li>
                <li>Provide information about our programs and services</li>
                <li>Communicate about volunteer opportunities and events</li>
                <li>Process donations and acknowledgments</li>
                <li>Evaluate partnership opportunities</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
              <p>
                We will only use personal information for purposes consistent with our charitable mission.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                Information Sharing
              </h2>
              <p>
                The H.I.P.H.O.P. Academy does not sell, rent, or trade personal information.
              </p>
              <p>
                We may share information only:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>With trusted service providers assisting in website operation or payment processing</li>
                <li>When required by law</li>
                <li>To protect the rights, safety, or property of the organization or others</li>
              </ul>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                Data Security
              </h2>
              <p>
                We use reasonable administrative, technical, and organizational safeguards to protect personal information against unauthorized access, disclosure, alteration, or destruction. While no method of transmission over the Internet is completely secure, we take appropriate measures to safeguard the information entrusted to us.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                Cookies
              </h2>
              <p>
                Our website may use cookies and similar technologies to improve functionality, analyze website traffic, and enhance the user experience. Visitors may disable cookies through their browser settings; however, some website features may not function properly.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                Third-Party Services
              </h2>
              <p>
                Our website may contain links to third-party websites or utilize third-party services such as payment processors, social media platforms, or embedded media. We are not responsible for the privacy practices of those third parties and encourage visitors to review their respective privacy policies.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                Children's Privacy
              </h2>
              <p>
                The Academy's primary programs are designed for transition-age young adults ages 18 through 25. We do not knowingly collect personal information from children under the age of 13 through our website. If we become aware that such information has been submitted, we will take appropriate steps to remove it.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                Your Rights
              </h2>
              <p>
                You may request to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Review personal information we maintain about you</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your personal information where legally permitted</li>
                <li>Opt out of future communications</li>
              </ul>
              <p>
                Requests may be submitted using the contact information below.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
              </p>

              <hr className="border-neutral-800" />

              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide pt-4">
                Contact Us
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
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
