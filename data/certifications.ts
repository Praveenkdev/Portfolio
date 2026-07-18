export interface Certification {
  id: string;
  title: string;
  icon: string;
  issuer?: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  skills?: string[];
  badgeImage?: string;
  status?: string;
  category?: string;
  providerLogo?: string;
  displayOrder?: number;
}

export const certificationsData: Certification[] = [
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect",
    icon: "cloud"
  },
  {
    id: "deep-learning-coursera",
    title: "Deep Learning Specialization (Coursera)",
    icon: "psychology"
  },
  {
    id: "professional-scrum-master",
    title: "Professional Scrum Master I",
    icon: "group_work"
  },
  {
    id: "gcp-data-engineer",
    title: "Google Cloud Professional Data Engineer",
    icon: "database"
  }
];
