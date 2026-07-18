import { Hero } from "@/components/sections/Hero";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProject";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col w-full">
      <Hero />
      <FeaturedProjectSection />
    </main>
  );
}
