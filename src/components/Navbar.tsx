"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  locale: string;
  handleChangeLocale: () => void;
  dictionary: {
    nav_about: string;
    nav_projects: string;
    nav_blog: string;
    nav_contact: string;
    nav_resume: string;
    lang: string;
  };
}

const navLinks = [
  { label: "nav_about", href: "#about" },
  { label: "nav_projects", href: "#projects" },
  { label: "nav_blog", href: "#blog" },
  { label: "nav_contact", href: "#contact" },
];

export default function Navbar({
  locale,
  handleChangeLocale,
  dictionary,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-md border-b border-white/5">
      <div className="content flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="#"
          className="text-white font-bold text-lg hover:text-accent transition-colors"
        >
          Renato F. Ordonho
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {dictionary[link.label as keyof typeof dictionary]}
            </Link>
          ))}
          <button
            onClick={handleChangeLocale}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {locale === "en-US" ? "🇺🇸 EN" : "🇧🇷 PT"}
          </button>
          <a
            href="/CV/curriculo-renato-ordonho.pdf"
            download
            className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {dictionary.nav_resume}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-secondary border-t border-white/5">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {dictionary[link.label as keyof typeof dictionary]}
              </Link>
            ))}
            <button
              onClick={() => {
                handleChangeLocale();
                setMobileMenuOpen(false);
              }}
              className="text-gray-400 hover:text-white transition-colors text-sm text-left"
            >
              {locale === "en-US" ? "🇺 EN" : "🇧🇷 PT"}
            </button>
            <a
              href="/CV/curriculo-renato-ordonho.pdf"
              download
              className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md text-sm font-medium transition-colors text-center"
            >
              {dictionary.nav_resume}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
