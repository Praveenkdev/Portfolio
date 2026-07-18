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
    description: "An AI-powered story generation application leveraging the OpenAI API and modern web integration techniques.",
    techStack: ["HTML", "CSS", "JavaScript", "OpenAI API"],
    features: [
      { label: "Overview", value: "Built an AI-powered story generation application using the OpenAI API." },
      { label: "Architecture", value: "Designed RESTful API integration with secure environment configuration and asynchronous JavaScript request handling." },
      { label: "User Experience", value: "Created a responsive prompt-based user interface with robust error handling." },
    ],
    liveDemoUrl: "",
    githubUrl: "",
  },
  {
    id: "smart-door-lock",
    title: "Smart Door Lock System",
    description: "An Arduino-based password-protected door lock system with advanced security features and physical feedback.",
    techStack: ["Arduino", "Embedded Systems"],
    features: [
      { label: "Hardware", value: "Developed an Arduino-based password-protected door lock using a keypad, servo motor, LEDs, and buzzer." },
      { label: "Security", value: "Implemented a 10-second security lockout after three failed attempts." },
      { label: "Engineering", value: "Resolved keypad library conflicts and stk500_getsync() debugging issues during development." },
    ],
    liveDemoUrl: "",
    githubUrl: "",
  },
];
