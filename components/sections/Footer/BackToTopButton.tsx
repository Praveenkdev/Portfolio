"use client"

import * as React from "react"

export function BackToTopButton() {
  const scrollToTop = () => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      aria-label="Back to top" 
      className="absolute md:relative right-gutter bottom-lg md:right-auto md:bottom-auto md:order-3 text-on-surface-variant hover:text-primary transition-colors duration-200 p-2 hover:bg-surface-container-high rounded-full flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <span className="material-symbols-outlined" style={{ fontSize: '20px' }} aria-hidden="true">
        arrow_upward
      </span>
    </button>
  )
}
