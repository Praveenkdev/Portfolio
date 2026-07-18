export interface Certification {
  id: string;
  title: string;
  icon: string;
}

export const certificationsData: Certification[] = [
  {
    id: "python-full-stack",
    title: "Python Full Stack — SLA Institute (January 2026)",
    icon: "code",
  },
  {
    id: "ai-ml-industrial-robots",
    title: "AI and ML Tools for Industrial Robots — Value Added Course (March 2024)",
    icon: "neurology",
  },
  {
    id: "web-dev-internship",
    title: "Web Development Internship Certificate — SkillFied Mentor (June 2025)",
    icon: "web",
  },
  {
    id: "embedded-systems-internship",
    title: "Embedded Systems Internship Certificate — CodeBind Technologies (July 2025)",
    icon: "memory",
  },
];
