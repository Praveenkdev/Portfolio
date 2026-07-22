"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useBootState } from "@/hooks/use-boot-state";

export function ScrollIndicator() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const isBooted = useBootState();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 50 && isVisible) {
        setIsVisible(false);
      } else if (latest <= 50 && !isVisible) {
        setIsVisible(true);
      }
    });
  }, [scrollY, isVisible]);

  if (!isBooted) return null;

  return (
    <motion.div 
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }} // Wait for hero to finish
    >
      <a 
        href="#about"
        aria-label="Scroll to about section"
        className="flex flex-col items-center gap-2 group cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs uppercase tracking-widest text-cyan-500/60 font-semibold group-hover:text-cyan-400 transition-colors">
          Scroll
        </span>
        <motion.div 
          className="w-5 h-8 rounded-full border-2 border-cyan-500/30 flex justify-center pt-1 shadow-[0_0_10px_rgba(6,182,212,0.2)] group-hover:border-cyan-400/60 transition-colors"
        >
          <motion.div 
            className="w-1 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(6,182,212,0.8)]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </a>
    </motion.div>
  );
}
