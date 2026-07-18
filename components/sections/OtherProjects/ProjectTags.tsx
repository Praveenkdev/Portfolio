import { Badge } from "@/components/ui/badge";

interface ProjectTagsProps {
  tags: string[];
}

export function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <Badge
          key={tag} 
          variant="tech"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
