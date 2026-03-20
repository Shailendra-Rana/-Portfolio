import { Project } from '@types';

/**
 * Project/Portfolio Data
 * Showcase of professional projects and achievements
 */
export const PROJECTS: Project[] = [
  {
    id: 'ai-workflow-automation',
    title: 'AI-Powered Workflow Automation Suite',
    description: 'Full-stack tool leveraging Gemini LLM for document analysis automation',
    longDescription: 'Designed and deployed a full-stack AI orchestration tool that leverages the Google Gemini LLM to automate document analysis workflows. Developed a secure .NET middleware layer for LLM API orchestration with rate-limiting and data sanitization. Utilized Claude 3.5 and Open Code for rapid prototyping and refactoring, achieving 300% acceleration from concept to production.',
    category: 'Backend',
    technologies: ['.NET 8', 'Google Gemini API', 'Angular', 'LLM Integration', 'Prompt Engineering', 'Clean Architecture', 'Microservices'],
    impact: 'Reduced manual documentation processing overhead by 2 hours per workflow, enabling faster business process automation',
    year: 2024,
    featured: true,
    links: {
      github: 'https://github.com/Shailendra-Rana',
      docs: '#',
    },
  },
  {
    id: 'logistics-api-integration',
    title: 'Scalable Global Logistics API Layer',
    description: 'Enterprise-grade API integration layer for 30+ global logistics carriers',
    longDescription: 'Architected a comprehensive API integration layer supporting 30+ global logistics carriers with robust error-handling and circuit-breaker patterns. Implemented comprehensive error handling, rate limiting, and resilience mechanisms ensuring 99.9% system uptime. Designed for high-concurrency scenarios handling thousands of concurrent requests with optimized performance.',
    category: 'Backend',
    technologies: ['C#', '.NET 8', 'ASP.NET Core', 'Web API', 'Circuit Breaker', 'Microservices', 'Clean Architecture', 'SOLID Principles'],
    impact: 'Achieved 99.9% system uptime and enabled seamless integration with 30+ carrier systems, streamlining global logistics operations',
    year: 2023,
    featured: true,
    links: {
      github: 'https://github.com/Shailendra-Rana',
      docs: '#',
    },
  },
  {
    id: 'bigquery-data-pipeline',
    title: 'High-Performance Data Pipeline Optimization',
    description: 'Optimized data pipelines using GCP BigQuery achieving 50% latency reduction',
    longDescription: 'Engineered and optimized complex data pipelines using Google Cloud Platform\'s BigQuery for high-load analytical reporting. Implemented advanced query optimization techniques, partitioning strategies, and data warehouse design patterns. Reduced data latency by 50% while maintaining cost efficiency and enabling real-time analytics for enterprise customers.',
    category: 'Backend',
    technologies: ['GCP', 'BigQuery', 'Data Pipelines', 'SQL', 'Data Warehouse', 'ETL', 'Performance Tuning'],
    impact: 'Reduced data latency by 50%, enabling real-time analytics and faster business intelligence reporting for high-load systems',
    year: 2023,
    featured: true,
    links: {
      github: '#',
      docs: '#',
    },
  },
  {
    id: 'observability-monitoring-system',
    title: 'High-Load Monitoring & Observability Platform',
    description: 'Enterprise-grade monitoring solution using Grafana and Graylog',
    longDescription: 'Implemented comprehensive observability solution using Grafana and Graylog for monitoring high-concurrency e-commerce traffic. Designed custom dashboards for real-time performance metrics, implemented proactive alerting mechanisms, and developed incident response playbooks. Achieved 99.9% system uptime through continuous monitoring and performance tuning.',
    category: 'Backend',
    technologies: ['Grafana', 'Graylog', 'ELK Stack', 'Elasticsearch', 'Observability', 'Performance Monitoring', 'Alerting'],
    impact: 'Maintained 99.9% uptime for high-load e-commerce systems and enabled proactive issue detection and resolution',
    year: 2023,
    featured: false,
    links: {
      github: '#',
      docs: '#',
    },
  },
  {
    id: 'clean-code-standards',
    title: 'Code Quality & TDD Standards Initiative',
    description: 'Led Code Review Group enforcing clean code practices and test-driven development',
    longDescription: 'Championed clean code practices and TDD methodology across development teams. Established comprehensive code review standards, implemented automated testing frameworks (xUnit/NUnit), and enforced SOLID principles. Led Code Review Group that decreased post-release production bugs by 30% while improving code maintainability and developer productivity.',
    category: 'Backend',
    technologies: ['Clean Code', 'TDD', 'xUnit', 'NUnit', 'SOLID Principles', 'Code Review', 'Best Practices', 'C#'],
    impact: 'Reduced post-release bugs by 30%, improved code quality across teams, and established sustainable development standards',
    year: 2023,
    featured: false,
    links: {
      github: '#',
      docs: '#',
    },
  },
  {
    id: 'servicenow-integration',
    title: 'ServiceNow Integration & CSA Certification',
    description: 'Pursuing ServiceNow Certified System Administrator (CSA) certification',
    longDescription: 'Actively pursuing ServiceNow Certified System Administrator (CSA) certification to deepen expertise in platform administration and ITIL processes. Building foundational knowledge in ServiceNow configuration, workflow automation, and best practices for enterprise service management.',
    category: 'Backend',
    technologies: ['ServiceNow', 'ITIL', 'Service Management', 'Workflow Automation', 'Configuration'],
    impact: 'Enhancing platform administration expertise to support enterprise service management and IT operations',
    year: 2024,
    featured: false,
    links: {
      github: '#',
      docs: '#',
    },
  },
];

/**
 * Get project by ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find(project => project.id === id);
};

/**
 * Get featured projects
 */
export const getFeaturedProjects = (): Project[] => {
  return PROJECTS.filter(project => project.featured);
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return PROJECTS.filter(project => project.category === category);
};

/**
 * Get projects by technology
 */
export const getProjectsByTechnology = (tech: string): Project[] => {
  return PROJECTS.filter(project => 
    project.technologies.some(t => t.toLowerCase() === tech.toLowerCase())
  );
};
