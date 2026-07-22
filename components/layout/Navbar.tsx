"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/use-scroll";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

export function Navbar() {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 50;
  
  const activeSection = useActiveSection(["projects", "experience", "skills", "education", "contact"]);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-[#050816]/70 backdrop-blur-xl border-b border-white/5 shadow-sm py-3" 
          : "bg-transparent border-b-transparent py-4"
      )}
    >
      <div className="flex justify-between items-center px-gutter max-w-[1200px] mx-auto">
        {/* Brand */}
        <Link 
          href="/" 
          className="font-heading text-xl md:text-2xl font-bold text-primary dark:text-primary tracking-tighter hover:text-cyan-400 transition-colors duration-300"
        >
          Praveen Kumar
        </Link>

        {/* Navigation Links (Web) */}
        <div className="hidden md:flex items-center space-x-1">
          {["home", "projects", "experience", "skills", "education", "contact"].map((section) => {
            const isActive = activeSection === section || (section === "home" && activeSection === "");
            return (
              <Link
                key={section}
                href={section === "home" ? "/" : `#${section}`}
                className={cn(
                  "relative font-heading text-sm capitalize px-4 py-1.5 transition-colors duration-200 rounded-full",
                  isActive ? "text-cyan-50 font-bold" : "text-muted-foreground hover:text-primary"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/5 border border-cyan-500/20 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.15)] z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {section}
              </Link>
            );
          })}
        </div>

        {/* Trailing Action */}
        <div className="hidden md:block">
          <a 
            href="/resume/Praveen_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            aria-label="Download my resume as a PDF"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-heading")}
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-muted-foreground" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
