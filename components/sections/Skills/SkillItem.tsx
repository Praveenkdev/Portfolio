import { Skill } from "@/data/skills";

interface SkillItemProps {
  skill: Skill;
  isFirst: boolean;
}

export function SkillItem({ skill, isFirst }: SkillItemProps) {
  return (
    <li 
      className={`flex items-center gap-4 py-2 transition-colors duration-200 ease-in-out text-muted-foreground hover:text-white ${!isFirst ? "border-t border-white/5" : ""}`}
    >
      <div 
        className="w-6 h-6 bg-[#1a1a1a] rounded flex items-center justify-center text-[12px] font-mono shrink-0"
        aria-hidden="true"
      >
        {skill.iconPrefix}
      </div>
      <span className="font-mono text-sm">{skill.name}</span>
    </li>
  );
}
