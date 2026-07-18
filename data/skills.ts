export interface Skill {
  name: string;
  iconPrefix: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "desktop_windows",
    skills: [
      { name: "React", iconPrefix: "Re" },
      { name: "Next.js", iconPrefix: "Nx" },
      { name: "Tailwind CSS", iconPrefix: "Tw" },
      { name: "TypeScript", iconPrefix: "Ts" },
    ],
  },
  {
    title: "Backend",
    icon: "dns",
    skills: [
      { name: "Node.js", iconPrefix: "No" },
      { name: "Python", iconPrefix: "Py" },
      { name: "Django", iconPrefix: "Dj" },
      { name: "PostgreSQL", iconPrefix: "Pg" },
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: "neurology",
    skills: [
      { name: "PyTorch", iconPrefix: "Pt" },
      { name: "TensorFlow", iconPrefix: "Tf" },
      { name: "Scikit-learn", iconPrefix: "Sk" },
      { name: "Computer Vision", iconPrefix: "Cv" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", iconPrefix: "Mg" },
      { name: "Redis", iconPrefix: "Rd" },
      { name: "MySQL", iconPrefix: "My" },
      { name: "Firebase", iconPrefix: "Fb" },
    ],
  },
  {
    title: "Embedded Systems",
    icon: "memory",
    skills: [
      { name: "C", iconPrefix: "C" },
      { name: "C++", iconPrefix: "C+" },
      { name: "Arduino", iconPrefix: "Ar" },
      { name: "Raspberry Pi", iconPrefix: "Rp" },
    ],
  },
  {
    title: "Developer Tools",
    icon: "build",
    skills: [
      { name: "Git", iconPrefix: "Gt" },
      { name: "Docker", iconPrefix: "Dk" },
      { name: "AWS", iconPrefix: "Aw" },
      { name: "Linux", iconPrefix: "Lx" },
    ],
  },
];
