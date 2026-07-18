import { Hero } from "@/components/sections/Hero";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProject";
import { SkillsSection } from "@/components/sections/Skills";
import { OtherProjectsSection } from "@/components/sections/OtherProjects";
import { ExperienceSection } from "@/components/sections/Experience";
import { EducationSection } from "@/components/sections/Education";
import { CertificationsSection } from "@/components/sections/Certifications";
import { ContactSection } from "@/components/sections/Contact";
import { Reveal } from "@/components/animations/Reveal";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col w-full">
      <Reveal animation="slide-up">
        <Hero />
      </Reveal>
      
      <Reveal animation="slide-up" delay={0.1}>
        <FeaturedProjectSection />
      </Reveal>
      
      <Reveal animation="slide-up" delay={0.1}>
        <SkillsSection />
      </Reveal>
      
      <Reveal animation="slide-up" delay={0.1}>
        <OtherProjectsSection />
      </Reveal>
      
      <Reveal animation="slide-up" delay={0.1}>
        <ExperienceSection />
      </Reveal>
      
      <div className="w-full max-w-container-max mx-auto px-gutter py-xl flex flex-col gap-xl">
        <Reveal animation="slide-up">
          <EducationSection />
        </Reveal>
        
        <Reveal animation="slide-up">
          <CertificationsSection />
        </Reveal>
      </div>

      <div className="w-full max-w-container-max mx-auto px-gutter py-xl">
        <Reveal animation="slide-up">
          <ContactSection />
        </Reveal>
      </div>
    </main>
  );
}
