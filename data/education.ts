export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  focus: string[];
  specialization?: string;
  location?: string;
  grade?: string;
  description?: string;
  logo?: string;
  website?: string;
  achievements?: string[];
  honors?: string[];
  coursework?: string[];
  projects?: string[];
  transcriptUrl?: string;
}

export const educationData: Education[] = [
  {
    id: "global-institute",
    institution: "Global Institute of Technology",
    degree: "Master of Science in Computer Science",
    startDate: "2021",
    endDate: "2023",
    focus: ["Artificial Intelligence", "Distributed Systems"]
  },
  {
    id: "national-engineering-college",
    institution: "National Engineering College",
    degree: "Bachelor of Technology in Computer Science",
    startDate: "2017",
    endDate: "2021",
    focus: ["Software Engineering", "Embedded Systems"]
  }
];
