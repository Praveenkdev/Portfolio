import { ProjectsGrid } from "./ProjectsGrid";
import { MotionSection, SlideUp } from "@/components/animations";

export function OtherProjectsSection() {
  return (
    <MotionSection className="px-6 md:px-gutter max-w-[1200px] mx-auto w-full pt-20 pb-20">
      <header className="mb-12 text-left">
        <SlideUp delay={0.1}>
          <h2 className="font-heading text-4xl md:font-heading md:text-6xl text-primary mb-4 font-bold tracking-tight">
            Other Projects
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A selection of engineering explorations focused on applied AI and hardware integration.
          </p>
        </SlideUp>
      </header>
      
      <ProjectsGrid />
    </MotionSection>
  );
}
