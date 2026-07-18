export interface ProjectFeature {
  label: string;
  value: string;
}

export interface OtherProject {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  tags: string[];
  features: ProjectFeature[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

export const otherProjectsData: OtherProject[] = [
  {
    id: "ai-story-generator",
    title: "AI Story Generator",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwr-0rq7HQFEJ85RKw6J9SgTQhp7hvQxS15InHYHGZIv2smf2k06-xRgk1iMFtf3tyosaYeLHsPOQ4i0qwphZhC98FMzlNr-24bOyEAS5fAdI99u_jPpNxDefmU0FLEIJ9iYIzXYDq7qCIM2DblJB7UcZq7OPWnr5oO9lAkhx26qXd6B8xTsUR8URGrj7qBjSB3qowInD2KQwio237f-bKB_OKb3_cz8lEXTMGh1kfHPcc2WyfMNNg",
    imageAlt: "AI story generation tool UI",
    tags: ["Python", "OpenAI API", "Next.js", "Redis"],
    features: [
      { label: "Problem", value: "Generating coherent, creative long-form narratives with AI context management." },
      { label: "Solution", value: "A custom LLM orchestration layer with stateful memory." },
      { label: "Challenges", value: "Managing token limits and maintaining narrative consistency." },
    ],
    liveDemoUrl: "",
    githubUrl: "",
  },
  {
    id: "smart-door-lock",
    title: "Smart Door Lock System",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLc7hn3x8yLIQfbTbByUCCdHrYvORHtl_AKA0u2ACk9CLB9o4CZfqs4RifjRzj9w18RehpKopQRP8zFF9lQyNzPa5IRlyHoJvTn3FVpbEQ3AOzKE7UXHXzl11MDFWbatK1HjYrhKxqeb5832AfDTkTeWqNpgpNrpWIHc0GXXia5--EsszEobr5Frn06EPcwCg83LhNCXflZcGZxA3YhiZdTKLemx9MHHyner-QYjTJNvxfUGQjiqQA",
    imageAlt: "ESP32 microcontroller wired to door lock",
    tags: ["C++", "FreeRTOS", "MQTT", "React Native"],
    features: [
      { label: "Problem", value: "Low-latency, secure remote access for legacy lock hardware." },
      { label: "Solution", value: "ESP32-based controller with AES-256 encrypted WebSocket communication." },
      { label: "Challenges", value: "Optimizing power consumption and handling unstable network states." },
    ],
    liveDemoUrl: "",
    githubUrl: "",
  },
];
