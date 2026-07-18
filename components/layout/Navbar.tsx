"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 50;

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-surface/90 backdrop-blur-md border-b border-white/10 shadow-sm py-2" 
          : "bg-transparent border-b-transparent py-4"
      )}
    >
      <div className="flex justify-between items-center px-gutter max-w-[1200px] mx-auto">
        {/* Brand */}
        <Link 
          href="/" 
          className="font-heading text-xl md:text-2xl font-bold text-primary dark:text-primary tracking-tighter"
        >
          Praveen Kumar
        </Link>

        {/* Navigation Links (Web) */}
        <div className="hidden md:flex space-x-gutter items-center gap-6">
          <Link 
            href="/" 
            className="text-primary font-bold border-b-2 border-secondary pb-1 font-heading text-sm hover:text-primary transition-all duration-200"
          >
            Home
          </Link>
          <Link 
            href="#projects" 
            className="text-muted-foreground hover:text-primary transition-colors font-heading text-sm duration-200"
          >
            Projects
          </Link>
          <Link 
            href="#experience" 
            className="text-muted-foreground hover:text-primary transition-colors font-heading text-sm duration-200"
          >
            Experience
          </Link>
          <Link 
            href="#skills" 
            className="text-muted-foreground hover:text-primary transition-colors font-heading text-sm duration-200"
          >
            Skills
          </Link>
          <Link 
            href="#education" 
            className="text-muted-foreground hover:text-primary transition-colors font-heading text-sm duration-200"
          >
            Education
          </Link>
          <Link 
            href="#contact" 
            className="text-muted-foreground hover:text-primary transition-colors font-heading text-sm duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Trailing Action */}
        <div className="hidden md:block">
          <Button variant="default" size="sm" className="font-heading text-sm rounded-lg px-4">
            Resume
          </Button>
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
