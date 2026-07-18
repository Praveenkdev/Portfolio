export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills?: string[];
  location?: string;
  employmentType?: string;
  companyUrl?: string;
  companyLogo?: string;
  achievements?: string[];
  currentlyWorking?: boolean;
}

export const experienceData: Experience[] = [
  {
    id: "tech-innovations-lab",
    company: "Tech Innovations Lab",
    role: "Full Stack Engineer",
    startDate: "Jun 2023",
    endDate: "Present",
    description: [
      "Architected and deployed a microservices-based analytics dashboard, reducing data query latency by 40%.",
      "Spearheaded the migration of legacy monolithic architecture to scalable Kubernetes clusters on AWS.",
      "Implemented comprehensive CI/CD pipelines using GitHub Actions, accelerating deployment frequency."
    ],
    skills: ["Distributed Systems", "AWS", "Go"],
    currentlyWorking: true
  },
  {
    id: "system-dynamics",
    company: "System Dynamics",
    role: "Software Research Intern",
    startDate: "Jan 2022",
    endDate: "May 2023",
    description: [
      "Developed proof-of-concept machine learning models for predictive maintenance in industrial IoT environments.",
      "Optimized data ingestion pipelines processing high-frequency sensor data using Apache Kafka."
    ],
    skills: ["Machine Learning", "Python", "Kafka"],
    currentlyWorking: false
  },
  {
    id: "digital-horizons",
    company: "Digital Horizons",
    role: "Junior Developer",
    startDate: "Aug 2020",
    endDate: "Dec 2021",
    description: [
      "Collaborated on building responsive front-end interfaces using React and modern CSS frameworks.",
      "Wrote comprehensive unit tests, improving overall code coverage by 25%."
    ],
    skills: ["Frontend Architecture", "React", "Testing"],
    currentlyWorking: false
  }
];
