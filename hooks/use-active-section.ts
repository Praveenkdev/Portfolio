import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Find the current section in view
      // We look at the sections from bottom to top to find the first one that is above the middle of the screen
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = "";
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          // Element's top relative to the document
          const offsetTop = top + window.scrollY;
          
          if (scrollPosition >= offsetTop) {
            current = id;
          }
        }
      }

      // If we are at the very top, set active to the first one (or empty for home)
      if (window.scrollY < 100) {
        setActiveSection(""); // Home
      } else {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
}
