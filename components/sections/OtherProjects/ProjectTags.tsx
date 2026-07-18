interface ProjectTagsProps {
  tags: string[];
}

export function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="bg-[#1a1a1a] rounded px-2 py-1 font-heading text-sm font-medium text-on-surface"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
