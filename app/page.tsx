import { Hero } from "@/components/sections/Hero";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProject";
import { SkillsSection } from "@/components/sections/Skills";
import { OtherProjectsSection } from "@/components/sections/OtherProjects";
import { ExperienceSection } from "@/components/sections/Experience";
import { EducationSection } from "@/components/sections/Education";
import { CertificationsSection } from "@/components/sections/Certifications";
import { ContactSection } from "@/components/sections/Contact";


export default function Home() {
  return (
    <main className="flex-grow flex flex-col w-full relative">
      <Hero />
      
      {/* Projects Glow (Charcoal + Blue) */}
      <div className="relative w-full">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        <FeaturedProjectSection />
        <OtherProjectsSection />
      </div>

      {/* Experience Glow (Deep Purple + Navy) */}
      <div className="relative w-full">
        <div className="absolute top-1/3 left-[10%] w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        <ExperienceSection />
      </div>

      {/* Skills Glow (Dark Slate + Teal) */}
      <div className="relative w-full">
        <div className="absolute top-1/4 left-0 w-[400px] h-[600px] bg-teal-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-slate-900/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        <SkillsSection />
      </div>

      <div className="w-full max-w-container-max mx-auto px-gutter py-xl flex flex-col gap-xl relative">
        <div className="absolute inset-0 bg-cyan-900/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        <EducationSection />
        <CertificationsSection />
      </div>

      {/* Contact Glow (Indigo + Cyan) */}
      <div className="w-full max-w-container-max mx-auto px-gutter py-xl relative overflow-hidden">
        <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        <ContactSection />
      </div>
    </main>
  );
}
