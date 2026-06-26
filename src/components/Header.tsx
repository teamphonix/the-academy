"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-900 border-b border-primary/20 sticky top-0 z-50 shadow-md">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://static.wixstatic.com/media/ba59cd_89132585b20c4f61906a13d941ae2389~mv2.png"
              alt="The H.I.P.H.O.P. Academy Logo"
              className="w-16 h-16 object-contain flex-shrink-0"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-sm md:text-base text-white tracking-wide uppercase leading-tight">
                The H.I.P.H.O.P. Academy
              </div>
              <div className="text-xs text-primary font-semibold tracking-wider">
                How I Put Harmony On Pain
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/partner"
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors"
            >
              Partner
            </Link>
            <Link
              href="/contact"
              className="text-sm bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-neutral-300 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-neutral-800 pt-4 animate-fadeIn">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/partner"
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="text-sm bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded hover:bg-primary-hover transition-colors text-center shadow-lg shadow-primary/20 py-2 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
