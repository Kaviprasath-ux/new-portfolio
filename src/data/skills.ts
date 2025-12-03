export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Design",
    skills: [
      "UI Design",
      "UX Design",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Visual Design",
      "Interaction Design",
      "Motion Design",
    ],
  },
  {
    name: "Tools",
    skills: [
      "Figma",
      "Framer",
      "Rive",
      "Adobe Creative Suite",
      "Principle",
      "ProtoPie",
    ],
  },
  {
    name: "Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React basics",
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      "Problem Solving",
      "Communication",
      "Collaboration",
      "Design Thinking",
    ],
  },
];

export const allTools = [
  "Figma",
  "Framer",
  "Rive",
  "Adobe Creative Suite",
  "Principle",
  "ProtoPie",
  "VS Code",
  "Notion",
  "Miro",
];
