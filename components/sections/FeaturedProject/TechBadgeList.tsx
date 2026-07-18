import { Badge } from "@/components/ui/badge";

interface TechBadgeListProps {
  technologies: string[];
}

export function TechBadgeList({ technologies }: TechBadgeListProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {technologies.map((tech) => (
        <Badge
          key={tech}
          variant="outline"
          className="px-3 py-1 bg-surface border-white/10 text-on-surface-variant font-heading"
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
}
