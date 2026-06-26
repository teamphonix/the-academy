import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-primary/20 text-neutral-400">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://static.wixstatic.com/media/ba59cd_89132585b20c4f61906a13d941ae2389~mv2.png"
                alt="The H.I.P.H.O.P. Academy Logo"
                className="w-12 h-12 object-contain flex-shrink-0"
              />
              <div>
                <div className="font-bold text-base text-white tracking-wide uppercase">
                  The H.I.P.H.O.P. Academy
                </div>
                <div className="text-xs text-primary font-semibold tracking-wider">
                  How I Put Harmony On Pain
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              Transforming pain into harmony through education, empowerment, and community support for transition-age young adults.
            </p>
            <div className="bg-primary/5 border border-primary/30 rounded p-4">
              <p className="text-xs text-neutral-300">
                <strong className="text-primary font-bold">Important Notice:</strong> Our programs serve ages 18–25 only. We do not provide services to minors.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base text-white font-bold tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/programs" className="text-sm hover:text-primary transition-colors">
                Programs
              </Link>
              <Link href="/about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/how-it-works" className="text-sm hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="/partner" className="text-sm hover:text-primary transition-colors">
                Partner With Us
              </Link>
              <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base text-white font-bold tracking-wider uppercase mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-neutral-500">Email</p>
                  <a
                    href="mailto:info@hiphopacademy.org"
                    className="text-sm text-neutral-300 hover:text-primary transition-colors"
                  >
                    info@hiphopacademy.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-neutral-500">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-neutral-300 hover:text-primary transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Decor */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src="https://static.wixstatic.com/media/ba59cd_89132585b20c4f61906a13d941ae2389~mv2.png"
              alt="The H.I.P.H.O.P. Academy Logo"
              className="w-40 h-40 object-contain flex-shrink-0"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
            <p>
              © {new Date().getFullYear()} The H.I.P.H.O.P. Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
