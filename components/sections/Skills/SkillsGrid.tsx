import { skillsData } from "@/data/skills";
import { SkillCategoryCard } from "./SkillCategoryCard";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.map((category) => (
        <SkillCategoryCard key={category.title} category={category} />
      ))}
    </div>
  );
}
