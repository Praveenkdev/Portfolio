import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";

interface ProjectActionsProps {
  liveDemoUrl?: string;
  githubUrl?: string;
}

export function ProjectActions({ liveDemoUrl, githubUrl }: ProjectActionsProps) {
  return (
    <div className="flex gap-4 mt-auto">
      {liveDemoUrl && (
        <a 
          href={liveDemoUrl}
          className={`${buttonVariants({ variant: "default" })} font-heading text-sm px-4 py-2 group`}
          aria-label="View Live Demo"
        >
          <ExternalLink className="w-4 h-4" aria-hidden="true" /> 
          Live Demo
        </a>
      )}
      
      {githubUrl && (
        <a 
          href={githubUrl}
          className={`${buttonVariants({ variant: "outline" })} border-primary text-primary hover:bg-surface-container font-heading text-sm px-4 py-2 gap-1 group`}
          aria-label="View Source Code on GitHub"
        >
          <Code className="w-4 h-4" aria-hidden="true" /> 
          GitHub
        </a>
      )}
    </div>
  );
}
