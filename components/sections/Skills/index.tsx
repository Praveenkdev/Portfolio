import { SkillsGrid } from "./SkillsGrid";

export function SkillsSection() {
  return (
    <section className="px-6 md:px-gutter max-w-[1200px] mx-auto w-full pt-20 pb-20">
      <div className="mb-12 text-left">
        <h2 className="font-heading text-4xl md:font-heading md:text-6xl text-primary mb-2 font-bold tracking-tight">
          Technical Expertise
        </h2>
        <p className="font-sans text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A comprehensive overview of my tech stack and the domains I specialize in.
        </p>
      </div>
      
      <SkillsGrid />
    </section>
  );
}
