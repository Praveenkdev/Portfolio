import { SkillCategory } from "@/data/skills"
import { Code, Brain, Globe, Database, Cpu, Wrench, Users } from "lucide-react";
import { SkillItem } from "./SkillItem";

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <div className="border border-white/10 bg-[#0a0a0a] transition-all duration-300 ease-in-out hover:border-white/30 hover:bg-[#111111] rounded-lg p-6 flex flex-col h-full group">
      <div className="flex items-center gap-2 mb-4">
        {category.icon === "code" && <Code className="w-5 h-5 text-secondary" />}
        {category.icon === "neurology" && <Brain className="w-5 h-5 text-secondary" />}
        {category.icon === "web" && <Globe className="w-5 h-5 text-secondary" />}
        {category.icon === "database" && <Database className="w-5 h-5 text-secondary" />}
        {category.icon === "memory" && <Cpu className="w-5 h-5 text-secondary" />}
        {category.icon === "build" && <Wrench className="w-5 h-5 text-secondary" />}
        {category.icon === "groups" && <Users className="w-5 h-5 text-secondary" />}
        <h4 className="font-heading text-xl font-medium text-primary">
          {category.title}
        </h4>
      </div>
      
      <div className="h-[1px] w-full bg-white/5 mb-4"></div>
      
      <ul className="flex flex-col gap-2 flex-grow">
        {category.skills.map((skill, index) => (
          <SkillItem 
            key={skill.name} 
            skill={skill} 
            isFirst={index === 0} 
          />
        ))}
      </ul>
    </div>
  );
}
