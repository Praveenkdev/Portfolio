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
