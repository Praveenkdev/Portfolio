export interface ProjectFeature {
  label: string;
  value: string;
}

export interface OtherProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: ProjectFeature[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

export const otherProjectsData: OtherProject[] = [
  {
    id: "ai-story-generator",
    title: "AI Story Generator",
    description: "An AI-powered web application that generates creative stories from user prompts using modern AI technologies. The application provides an interactive interface for generating engaging stories with a smooth user experience.",
    techStack: ["Python", "JavaScript", "AI", "HTML", "CSS"],
    features: [
      { label: "Overview", value: "Generates creative stories dynamically from user prompts." },
      { label: "Interface", value: "Provides an interactive and responsive web interface." },
      { label: "Integration", value: "Leverages modern AI technologies for seamless content generation." },
    ],
    liveDemoUrl: "",
    githubUrl: "https://github.com/Praveenkdev/AI-Story-Generator.git",
  },
  {
    id: "smart-door-lock",
    title: "Smart Door Lock System",
    description: "An IoT-based smart security system that combines hardware and software to provide secure door access using embedded systems and modern authentication techniques.",
    techStack: ["Arduino", "Embedded Systems", "IoT", "Sensors", "C Programming"],
    features: [
      { label: "Hardware", value: "Combines sensors and embedded hardware for physical access control." },
      { label: "Security", value: "Provides secure door access using modern authentication techniques." },
      { label: "System", value: "Engineered using C programming and Arduino microcontrollers." },
    ],
    liveDemoUrl: "",
    githubUrl: "https://github.com/Praveenkdev/SMART_DOOR_LOCK_SYSTEM.git",
  },
];
