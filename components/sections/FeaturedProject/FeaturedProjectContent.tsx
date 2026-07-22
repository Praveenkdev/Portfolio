import { Project } from "@/types";
import { TechBadgeList } from "./TechBadgeList";
import { ExternalLink, Code } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/animations";

interface FeaturedProjectContentProps {
  project: Project;
}

export function FeaturedProjectContent({ project }: FeaturedProjectContentProps) {
  return (
    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-surface">
      <Stagger>
        <StaggerItem>
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-heading text-2xl font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
              {project.title}
            </h4>
          </div>
        </StaggerItem>
        
        <StaggerItem>
          <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>
        </StaggerItem>
        
        <StaggerItem>
          <TechBadgeList technologies={project.techStack} />
        </StaggerItem>
        
        <StaggerItem>
          <div className="mt-8 flex flex-wrap gap-4">
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-colors"
              >
                View Live
                <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 font-medium text-on-surface hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
              >
                Source Code
                <Code className="ml-2 w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </StaggerItem>
      </Stagger>
    </div>
  );
}
