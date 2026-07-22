import { OtherProject, ProjectFeature } from "@/data/other-projects";
import { ProjectTags } from "./ProjectTags";
import { ProjectActions } from "./ProjectActions";
import { MotionCard } from "@/components/animations";

interface ProjectCardProps {
  project: OtherProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MotionCard className="bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-colors duration-200 rounded-xl p-6 flex flex-col h-full group">

      {/* Title */}
      <h3 className="font-heading text-3xl font-semibold text-primary mb-2 tracking-tight">
        {project.title}
      </h3>
      
      {/* Tags */}
      <ProjectTags tags={project.techStack} />
      
      {/* Features (Problem / Solution / Challenges) */}
      <div className="space-y-4 flex-grow mb-6 border-t border-white/10 pt-4 mt-2">
        {project.features.map((feature: ProjectFeature, idx: number) => (
          <div key={idx}>
            <h4 className="font-heading text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
              {feature.label}
            </h4>
            <p className="font-sans text-base text-foreground leading-relaxed">
              {feature.value}
            </p>
          </div>
        ))}
      </div>
      
      {/* Actions */}
      <ProjectActions 
        liveDemoUrl={project.liveDemoUrl} 
        githubUrl={project.githubUrl} 
      />
      
    </MotionCard>
  );
}
