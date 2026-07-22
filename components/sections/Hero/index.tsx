import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { MotionSection } from "@/components/animations";

import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  return (
    <MotionSection className="flex-grow pt-[80px] md:pt-[120px] flex flex-col relative overflow-hidden">
      <HeroBackground />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-gutter w-full relative z-10 pb-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
      <ScrollIndicator />
    </MotionSection>
  );
}
