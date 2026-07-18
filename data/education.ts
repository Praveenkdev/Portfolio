export interface Education {
  id: string;
  degree: string;
  institution: string;
  dateRange: string;
  achievements?: string[];
}

export const educationData: Education[] = [
  {
    id: "btech-ece",
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
    dateRange: "2022 – 2026",
    achievements: []
  }
];
