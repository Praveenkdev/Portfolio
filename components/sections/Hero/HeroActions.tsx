"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      <motion.a 
        href="#projects" 
        className={`${buttonVariants({ variant: "default" })} font-heading text-sm px-6 py-5 rounded-lg flex items-center gap-2 group relative`}
        initial={{ boxShadow: "0px 0px 0px rgba(6,182,212,0)" }}
        animate={{ boxShadow: ["0px 0px 0px rgba(6,182,212,0)", "0px 0px 30px rgba(6,182,212,0.6)", "0px 0px 0px rgba(6,182,212,0)"] }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 3 }}
      >
        View Projects
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </motion.a>
      <motion.a 
        href="/resume/Praveen_Kumar_Resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        download
        aria-label="Download my resume as a PDF"
        className={`${buttonVariants({ variant: "secondary" })} font-heading text-sm px-6 py-5 rounded-lg flex items-center gap-2 group hover:text-primary transition-colors relative`}
        initial={{ boxShadow: "0px 0px 0px rgba(6,182,212,0)" }}
        animate={{ boxShadow: ["0px 0px 0px rgba(6,182,212,0)", "0px 0px 20px rgba(6,182,212,0.4)", "0px 0px 0px rgba(6,182,212,0)"] }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 3.5 }}
      >
        Download CV
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      </motion.a>
      <motion.a 
        href="#contact" 
        className={`${buttonVariants({ variant: "ghost" })} font-heading text-sm px-6 py-5 rounded-lg flex items-center gap-2`}
        initial={{ textShadow: "0px 0px 0px rgba(6,182,212,0)" }}
        animate={{ textShadow: ["0px 0px 0px rgba(6,182,212,0)", "0px 0px 10px rgba(6,182,212,0.6)", "0px 0px 0px rgba(6,182,212,0)"] }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 4 }}
      >
        Contact Me
      </motion.a>
    </div>
  );
}
