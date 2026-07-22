export interface Experience {
  id: string;
  role: string;
  company: string;
  dateRange: string;
  description: string[];
  skills?: string[];
}

export const experienceData: Experience[] = [
  {
    id: "analog-intelligence-intern",
    role: "AI & Full Stack Developer Intern",
    company: "Analog Intelligence",
    dateRange: "Present",
    description: [
      "Developing intelligent AI voice agents and full-stack web applications.",
      "Building scalable software architectures using Python, React, and Node.js.",
      "Focusing on high performance and exceptional user experience."
    ],
    skills: ["AI Development", "Full Stack Web Development", "Voice Technology", "Python", "React", "Node.js"]
  },
  {
    id: "embedded-systems-intern",
    role: "Embedded Systems Intern",
    company: "CodeBind Technologies (Chennai)",
    dateRange: "June 2025 – July 2025",
    description: [
      "Assisted in embedded system development.",
      "Participated in hardware-software integration.",
      "Tested and debugged embedded modules.",
      "Applied structured problem-solving techniques."
    ],
    skills: ["Embedded Systems", "Hardware-Software Integration", "Debugging"]
  },
  {
    id: "data-analytics-intern",
    role: "Data Analytics Intern",
    company: "SkillFied Mentor (Remote)",
    dateRange: "May 2025 – June 2025",
    description: [
      "Collected and cleaned datasets.",
      "Performed data analysis using Google Colab and Microsoft Excel.",
      "Built visualizations.",
      "Improved dataset quality by identifying inconsistencies."
    ],
    skills: ["Data Analysis", "Google Colab", "Microsoft Excel", "Data Visualization"]
  }
];
