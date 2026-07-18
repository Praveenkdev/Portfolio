import { Project } from "@/types";
import { FeaturedProjectVisual } from "./FeaturedProjectVisual";
import { FeaturedProjectContent } from "./FeaturedProjectContent";

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <div className="bg-[#201f1f]/80 backdrop-blur-md border border-white/10 rounded-2xl p-0 overflow-hidden hover:border-secondary/30 transition-all duration-300 flex flex-col md:flex-row group">
      <FeaturedProjectVisual />
      <FeaturedProjectContent project={project} />
    </div>
  );
}
