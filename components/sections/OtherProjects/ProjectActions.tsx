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
          className="bg-primary text-background font-heading text-sm font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-secondary"
          aria-label="View Live Demo"
        >
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">open_in_new</span> 
          Live Demo
        </a>
      )}
      
      {githubUrl && (
        <a 
          href={githubUrl}
          className="bg-transparent border border-primary text-primary font-heading text-sm font-medium px-4 py-2 rounded hover:bg-surface-container transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="View Source Code on GitHub"
        >
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">code</span> 
          GitHub
        </a>
      )}
    </div>
  );
}
