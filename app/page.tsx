import { Hero } from "@/components/sections/Hero";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProject";
import { SkillsSection } from "@/components/sections/Skills";
import { OtherProjectsSection } from "@/components/sections/OtherProjects";
import { ExperienceSection } from "@/components/sections/Experience";
import { EducationSection } from "@/components/sections/Education";
import { CertificationsSection } from "@/components/sections/Certifications";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col w-full">
      <Hero />
      <FeaturedProjectSection />
      <SkillsSection />
      <OtherProjectsSection />
      <ExperienceSection />
      
      <div className="w-full max-w-container-max mx-auto px-gutter py-xl flex flex-col gap-xl">
        <EducationSection />
        <CertificationsSection />
      </div>
    </main>
  );
}
