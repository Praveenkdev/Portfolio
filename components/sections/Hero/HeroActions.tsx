import { buttonVariants } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      <a href="#" className={`${buttonVariants({ variant: "default" })} font-heading text-sm px-6 py-5 rounded-lg flex items-center gap-2 group`}>
        View Projects
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
      <a href="#" className={`${buttonVariants({ variant: "secondary" })} font-heading text-sm px-6 py-5 rounded-lg flex items-center gap-2`}>
        Download Resume
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      </a>
      <a href="#" className={`${buttonVariants({ variant: "ghost" })} font-heading text-sm px-6 py-5 rounded-lg flex items-center gap-2`}>
        Contact Me
      </a>
    </div>
  );
}
