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
    title: "Languages",
    icon: "code",
    skills: [
      { name: "Python", iconPrefix: "Py" },
      { name: "JavaScript", iconPrefix: "Js" },
      { name: "HTML", iconPrefix: "Ht" },
      { name: "CSS", iconPrefix: "Cs" },
    ],
  },
  {
    title: "AI / ML",
    icon: "neurology",
    skills: [
      { name: "PyTorch", iconPrefix: "Pt" },
      { name: "NumPy", iconPrefix: "Np" },
      { name: "Diffusion Models (DDPM)", iconPrefix: "Dm" },
      { name: "OpenAI API", iconPrefix: "Oa" },
    ],
  },
  {
    title: "Web Development",
    icon: "web",
    skills: [
      { name: "RESTful APIs", iconPrefix: "Ra" },
      { name: "Asynchronous Programming", iconPrefix: "Ap" },
      { name: "Environment Configuration", iconPrefix: "Ec" },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", iconPrefix: "My" },
      { name: "SQLite", iconPrefix: "Sq" },
    ],
  },
  {
    title: "Embedded Systems",
    icon: "memory",
    skills: [
      { name: "Arduino", iconPrefix: "Ar" },
      { name: "Circuit Design", iconPrefix: "Cd" },
      { name: "Hardware-Software Integration", iconPrefix: "Hs" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "build",
    skills: [
      { name: "Git", iconPrefix: "Gt" },
      { name: "GitHub", iconPrefix: "Gh" },
      { name: "Google Colab", iconPrefix: "Gc" },
      { name: "Microsoft Excel", iconPrefix: "Me" },
      { name: "VS Code", iconPrefix: "Vs" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "groups",
    skills: [
      { name: "Problem Solving", iconPrefix: "Ps" },
      { name: "Teamwork", iconPrefix: "Tw" },
      { name: "Communication", iconPrefix: "Co" },
    ],
  },
];
