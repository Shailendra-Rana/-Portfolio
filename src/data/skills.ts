import { Skill } from '@types';

/**
 * Skill Tree Data
 * All skills for Shailendra Sunil Rana
 */
export const SKILLS: Skill[] = [
  // Core Backend Skills
  {
    id: 'csharp-dotnet',
    name: 'C# & .NET 8',
    level: 5,
    type: 'Core Ability',
    description: 'Expert in .NET 8, ASP.NET Core, Web API, Clean Architecture, SOLID Principles, and TDD with xUnit/NUnit',
    icon: 'code-2',
    yearsOfExperience: 4.5,
    technologies: ['C#', '.NET 8', 'ASP.NET Core', 'Web API', 'Clean Architecture', 'SOLID', 'TDD', 'xUnit', 'NUnit'],
    certifications: [],
  },
  {
    id: 'microservices-architecture',
    name: 'Microservices & Architecture',
    level: 4,
    type: 'Core Ability',
    description: 'Proficient in designing scalable microservices architecture, API integration layers, circuit-breaker patterns, and high-concurrency systems',
    icon: 'layers',
    yearsOfExperience: 3,
    technologies: ['Microservices', 'API Design', 'Circuit Breaker', 'Design Patterns', 'System Architecture'],
    certifications: [],
  },
  {
    id: 'cloud-gcp',
    name: 'Google Cloud Platform (GCP)',
    level: 4,
    type: 'Core Ability',
    description: 'Expert in GCP services including BigQuery for data pipelines, optimizing data latency, and cloud infrastructure',
    icon: 'cloud',
    yearsOfExperience: 2.5,
    technologies: ['GCP', 'BigQuery', 'Cloud Storage', 'Data Pipelines', 'Analytics'],
    certifications: [],
  },
  {
    id: 'database-sql',
    name: 'SQL & Databases',
    level: 4,
    type: 'Core Ability',
    description: 'Expert in SQL Server, T-SQL, stored procedures, query optimization, and database troubleshooting. Proficient in MongoDB and MySQL',
    icon: 'database',
    yearsOfExperience: 4.5,
    technologies: ['SQL Server', 'T-SQL', 'Stored Procedures', 'Query Optimization', 'MongoDB', 'MySQL', 'BigQuery'],
    certifications: [],
  },
  
  // AI & Innovation
  {
    id: 'ai-llm-integration',
    name: 'AI & LLM Integration',
    level: 4,
    type: 'Specialization',
    description: 'Advanced expertise in integrating LLMs including Google Gemini API, prompt engineering, and AI-assisted development workflows. Leveraging Claude 3.5 and Open Code for accelerated SDLC',
    icon: 'sparkles',
    yearsOfExperience: 1.5,
    technologies: ['Google Gemini API', 'Claude 3.5', 'Prompt Engineering', 'LLM Integration', 'AI-Assisted Development', 'Open Code'],
    certifications: [],
  },

  // Frontend & Full-Stack
  {
    id: 'angular-typescript',
    name: 'Angular & TypeScript',
    level: 3,
    type: 'Core Ability',
    description: 'Proficient in Angular v14+, TypeScript, and building modern frontend applications',
    icon: 'code',
    yearsOfExperience: 2,
    technologies: ['Angular', 'v14+', 'TypeScript', 'RxJS', 'Reactive Forms'],
    certifications: [],
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    level: 2,
    type: 'Unlocked Feature',
    description: 'Familiarity with UI/UX design principles and tools like Figma for designing user interfaces',
    icon: 'palette',
    yearsOfExperience: 1,
    technologies: ['Figma', 'UI Design', 'UX Principles', 'Design Systems'],
    certifications: [],
  },

  // DevOps & Observability
  {
    id: 'devops-cicd',
    name: 'DevOps & CI/CD',
    level: 3,
    type: 'Unlocked Feature',
    description: 'Experience with CI/CD pipelines, deployment automation, and infrastructure management',
    icon: 'git-branch',
    yearsOfExperience: 2,
    technologies: ['CI/CD Pipelines', 'GitHub Actions', 'Jenkins', 'Deployment Automation'],
    certifications: [],
  },
  {
    id: 'observability-monitoring',
    name: 'Observability & Monitoring',
    level: 3,
    type: 'Core Ability',
    description: 'Expert in implementing and managing monitoring solutions using Grafana, Graylog, and ELK Stack for high-load systems',
    icon: 'activity',
    yearsOfExperience: 2,
    technologies: ['Grafana', 'Graylog', 'ELK Stack', 'Elasticsearch', 'Observability', 'Performance Tuning'],
    certifications: [],
  },

  // Soft Skills
  {
    id: 'code-quality-standards',
    name: 'Code Quality & Standards',
    level: 4,
    type: 'Passive Buff',
    description: 'Strong advocate for clean code practices, TDD, and code review standards. Led Code Review Group reducing post-release bugs by 30%',
    icon: 'check-circle',
    yearsOfExperience: 3,
    technologies: ['Code Review', 'TDD', 'Best Practices', 'SOLID Principles', 'Documentation'],
    certifications: [],
  },
];

/**
 * Get skill by ID
 */
export const getSkillById = (id: string): Skill | undefined => {
  return SKILLS.find(skill => skill.id === id);
};

/**
 * Get skills by type
 */
export const getSkillsByType = (type: Skill['type']): Skill[] => {
  return SKILLS.filter(skill => skill.type === type);
};

/**
 * Get all skill prerequisites
 */
export const getPrerequisites = (skillId: string): Skill[] => {
  const skill = getSkillById(skillId);
  if (!skill?.prerequisites || skill.prerequisites.length === 0) {
    return [];
  }
  return skill.prerequisites
    .map(id => getSkillById(id))
    .filter((skill): skill is Skill => skill !== undefined);
};
