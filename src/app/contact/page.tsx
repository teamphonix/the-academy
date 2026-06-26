"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Send, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate standard Wix submission behavior (1.5s delay)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col">
      <Header />

      {/* Hero Header */}
      <section className="py-12 md:py-16 px-6 md:px-12 border-b border-neutral-800 bg-neutral-950/20">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions? Ready to get started? We're here to help.
          </motion.p>
        </div>
      </section>

      {/* Form & Contact details container */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Information Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide mb-4">
                  Get In Touch
                </h2>
                <p className="text-sm text-neutral-450 leading-relaxed">
                  We look forward to connecting. Reach out using our details or fill out the contact form and our team will get back to you shortly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-850 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white uppercase tracking-wider">Email</h3>
                    <a
                      href="mailto:Jonti@HipHopAcademyNJ.Org"
                      className="text-sm text-neutral-400 hover:text-primary transition-colors"
                    >
                      Jonti@HipHopAcademyNJ.Org
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-850 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white uppercase tracking-wider">Phone</h3>
                    <a
                      href="tel:+12014526570"
                      className="text-sm text-neutral-400 hover:text-primary transition-colors"
                    >
                      (201) 452-6570
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-850 flex items-center justify-center text-primary flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white uppercase tracking-wider">Hours</h3>
                    <p className="text-sm text-neutral-400">
                      Monday &ndash; Friday: 9:00 AM &ndash; 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-2 bg-neutral-950 border border-neutral-850 p-6 md:p-8 rounded-lg shadow-2xl">
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide mb-6">
                Send Us A Message
              </h2>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                      required
                      placeholder="Your Name"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-650 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-650 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={onChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-650 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={onChange}
                      required
                      placeholder="Inquiry Subject"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-650 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={onChange}
                    required
                    placeholder="Describe your inquiry..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-650 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-bold px-8 py-3.5 rounded flex items-center justify-center gap-2 transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>

                  {success && (
                    <motion.div
                      className="flex items-center gap-2 text-green-500 text-sm font-semibold"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <Check size={18} /> Message sent successfully!
                    </motion.div>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
