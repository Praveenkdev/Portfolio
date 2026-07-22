import { otherProjectsData } from "@/data/other-projects";
import { ProjectCard } from "./ProjectCard";
import { Stagger, StaggerItem } from "@/components/animations";

export function ProjectsGrid() {
  return (
    <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {otherProjectsData.map((project) => (
        <StaggerItem key={project.id}>
          <ProjectCard project={project} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
