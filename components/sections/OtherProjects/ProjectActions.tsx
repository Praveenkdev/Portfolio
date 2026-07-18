import { buttonVariants } from "@/components/ui/button";

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
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">open_in_new</span> 
          Live Demo
        </a>
      )}
      
      {githubUrl && (
        <a 
          href={githubUrl}
          className={`${buttonVariants({ variant: "outline" })} border-primary text-primary hover:bg-surface-container font-heading text-sm px-4 py-2 gap-1 group`}
          aria-label="View Source Code on GitHub"
        >
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">code</span> 
          GitHub
        </a>
      )}
    </div>
  );
}
