import { featuredProject } from "@/data/featured-project";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { MotionSection } from "@/components/animations";

export function FeaturedProjectSection() {
  return (
    <MotionSection id="projects" className="max-w-[1200px] mx-auto px-6 md:px-gutter w-full relative z-10 pb-20">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="font-heading text-xl font-medium text-primary tracking-tight">
            Featured Project
          </h3>
          <p className="font-sans text-base text-muted-foreground mt-1">
            Deep Learning in Medical Imaging
          </p>
        </div>
        {featuredProject.link && (
          <a 
            href={featuredProject.link} 
            className="text-secondary font-heading text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded-sm"
            aria-label="View full case study for Featured Project"
          >
            View Case Study 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
      
      <FeaturedProjectCard project={featuredProject} />
    </MotionSection>
  );
}
