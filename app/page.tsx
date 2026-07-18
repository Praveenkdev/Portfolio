import { Hero } from "@/components/sections/Hero";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProject";
import { SkillsSection } from "@/components/sections/Skills";
import { OtherProjectsSection } from "@/components/sections/OtherProjects";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col w-full">
      <Hero />
      <FeaturedProjectSection />
      <SkillsSection />
      <OtherProjectsSection />
    </main>
  );
}
