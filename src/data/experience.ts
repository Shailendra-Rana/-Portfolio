import { TimelineEntry } from '@types';

/**
 * Experience Timeline Data
 * Career journey and education milestones
 */
export const TIMELINE_ENTRIES: TimelineEntry[] = [
  // Education
  {
    id: 'education-bca',
    title: 'Bachelor of Computer Applications (BCA)',
    organization: 'MGM\'s Dr. G.Y. Pathrikar College',
    type: 'education',
    startDate: '2016-06',
    endDate: '2019-05',
    description: 'Graduated with Distinction. Strong foundation in core computer science concepts, programming fundamentals, and software engineering principles.',
    achievements: [
      'Graduated with Distinction',
      'Strong foundation in CS fundamentals',
    ],
    technologies: ['Java', 'Database Design', 'Web Technologies', 'Software Engineering'],
    level: 5,
  },
  {
    id: 'education-mca',
    title: 'Master of Computer Applications (MCA)',
    organization: 'Marathwada Institute of Technology',
    type: 'education',
    startDate: '2020-06',
    endDate: '2022-05',
    description: 'Graduated with Distinction. Advanced studies in enterprise architecture, system design, and enterprise technologies.',
    achievements: [
      'Graduated with Distinction',
      'Advanced expertise in enterprise architecture',
      'Industry-ready skill set developed',
    ],
    technologies: ['Advanced Programming', 'Enterprise Architecture', 'Database Design', 'System Design'],
    level: 10,
  },

  // Professional Experience
  {
    id: 'experience-infosys',
    title: 'Process Executive',
    organization: 'Infosys BPM Ltd.',
    type: 'experience',
    startDate: '2019-07',
    endDate: '2021-03',
    description: 'Conducted deep-dive technical audits and database troubleshooting for Caterpillar\'s financial systems. Engineered VBA/Excel Macros to automate repetitive validation tasks, improving team operational efficiency by 20%.',
    achievements: [
      'Database Troubleshooting: 100% integrity for Caterpillar financial records',
      'Workflow Automation: Reduced manual validation tasks by 20%',
      'Root Cause Analysis: Collaborated with engineering teams on SQL-based fixes',
      'Awarded "Quick Learner of the Process"',
      'Awarded "Spot Award" for exceptional work',
    ],
    technologies: ['SQL', 'Excel VBA', 'Database Management', 'Data Validation', 'Technical Audit'],
    period: 'Jul 2019 - Mar 2021',
    level: 6,
  },
  {
    id: 'experience-centiro',
    title: 'Software Developer',
    organization: 'Centiro Solutions Pvt. Ltd.',
    type: 'experience',
    startDate: '2022-11',
    endDate: undefined, // Current
    description: 'Senior Backend Developer architecting scalable API layers for 30+ global logistics carriers. Engineered AI-powered workflow automation tools integrating Google Gemini LLM. Optimized data pipelines using GCP BigQuery, achieving 50% reduction in data latency.',
    achievements: [
      'Architected Scalable API Integration Layer for 30+ global logistics carriers with 99.9% uptime',
      'Optimized Data Pipelines using GCP BigQuery: 50% reduction in data latency',
      'Championed Clean Code & TDD: Decreased post-release bugs by 30%',
      'AI-Powered Workflow Automation: Integrated Gemini LLM for document analysis automation',
      'High-Load Monitoring: Utilized Grafana and Graylog for 99.9% uptime management',
      'Leveraged Claude 3.5 and Open Code for 3x development efficiency',
      'Led Code Review Group enforcing SOLID principles and best practices',
    ],
    technologies: ['C#', '.NET 8', 'ASP.NET Core', 'GCP', 'BigQuery', 'Google Gemini API', 'Grafana', 'Graylog', 'Microservices', 'Angular', 'MongoDB', 'MySQL'],
    period: 'Nov 2022 - Present',
    level: 9,
  },
];

/**
 * Get timeline entry by ID
 */
export const getTimelineEntryById = (id: string): TimelineEntry | undefined => {
  return TIMELINE_ENTRIES.find(entry => entry.id === id);
};

/**
 * Get all experience entries (sorted by date)
 */
export const getExperienceEntries = (): TimelineEntry[] => {
  return TIMELINE_ENTRIES.filter(entry => entry.type === 'experience')
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

/**
 * Get all education entries (sorted by date)
 */
export const getEducationEntries = (): TimelineEntry[] => {
  return TIMELINE_ENTRIES.filter(entry => entry.type === 'education')
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

/**
 * Get all timeline entries sorted chronologically
 */
export const getAllTimelineEntries = (): TimelineEntry[] => {
  return [...TIMELINE_ENTRIES].sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateA - dateB;
  });
};

/**
 * Get current role (most recent experience)
 */
export const getCurrentRole = (): TimelineEntry | undefined => {
  return getExperienceEntries().find(entry => !entry.endDate);
};

/**
 * Format date range for display
 */
export const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  if (!endDate) return `${start} - Present`;
  const end = new Date(endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return `${start} - ${end}`;
};
