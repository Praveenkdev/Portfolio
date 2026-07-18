import { SkillCategory } from "@/data/skills";
import { SkillItem } from "./SkillItem";

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <div className="border border-white/10 bg-[#0a0a0a] transition-all duration-300 ease-in-out hover:border-white/30 hover:bg-[#111111] rounded-lg p-6 flex flex-col h-full group">
      <div className="flex items-center gap-2 mb-4">
        <span 
          className="material-symbols-outlined text-secondary" 
          aria-hidden="true"
        >
          {category.icon}
        </span>
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
