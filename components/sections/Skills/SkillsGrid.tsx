import { skillsData } from "@/data/skills";
import { SkillCategoryCard } from "./SkillCategoryCard";
import { Stagger, StaggerItem } from "@/components/animations";

export function SkillsGrid() {
  return (
    <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.map((category) => (
        <StaggerItem key={category.title}>
          <SkillCategoryCard category={category} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
