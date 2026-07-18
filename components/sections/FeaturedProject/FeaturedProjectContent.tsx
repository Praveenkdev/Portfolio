import { Project } from "@/types";
import { TechBadgeList } from "./TechBadgeList";

interface FeaturedProjectContentProps {
  project: Project;
}

export function FeaturedProjectContent({ project }: FeaturedProjectContentProps) {
  return (
    <div className="md:w-1/2 p-12 flex flex-col justify-center">
      <h4 className="font-heading text-xl font-medium text-primary mb-2 group-hover:text-secondary transition-colors">
        {project.title}
      </h4>
      
      <p className="font-sans text-base text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <TechBadgeList technologies={project.techStack} />
      
      <div className="mt-auto">
        <a 
          href={project.link}
          className="inline-flex bg-transparent border border-secondary text-secondary font-heading text-sm font-medium px-4 py-2 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors w-max"
        >
          Explore Repository
        </a>
      </div>
    </div>
  );
}
