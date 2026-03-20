import { PortfolioOwner, SocialLink } from '@types';

/**
 * Portfolio Owner Information
 */
export const PORTFOLIO_OWNER: PortfolioOwner = {
  name: 'Shailendra Sunil Rana',
  role: 'Senior Backend Developer | AI-Driven Developer',
  title: 'Senior Backend Developer',
  bio: 'Innovative Senior Backend Developer with 4.5+ years of experience specializing in .NET 8, Clean Architecture, and AI-driven application development. Expert in leveraging Claude and Open Code to accelerate SDLC and deliver production-ready code with 3x efficiency.',
  company: 'Centiro Solutions Pvt. Ltd.',
  yearsOfExperience: 4.5,
  email: 'shailendrarana891@gmail.com',
  github: 'https://github.com/Shailendra-Rana',
  linkedin: 'https://linkedin.com/in/shailendraarana',
  twitter: '',
  website: 'https://shailendra-rana.github.io/Portfolio/',
};

/**
 * Social Links
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Shailendra-Rana',
    icon: 'github',
    label: 'View my GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/shailendraarana',
    icon: 'linkedin',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'Email',
    url: 'mailto:shailendrarana891@gmail.com',
    icon: 'mail',
    label: 'Send me an email',
  },
];

/**
 * Navigation Menu Items
 */
export const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Timeline', href: '#timeline', id: 'timeline' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

/**
 * Hero Section Content
 */
export const HERO_CONTENT = {
  greeting: 'Hello, I\'m',
  title: 'Shailendra Sunil Rana',
  subtitle: 'Senior Backend Developer | AI-Driven Developer',
  description: 'Innovative backend developer with 4.5+ years of experience specializing in .NET 8, Clean Architecture, and AI-driven application development. Currently architecting scalable API layers and AI-powered automation tools at Centiro Solutions.',
  ctaButtons: [
    { label: 'View My Work', href: '#projects', variant: 'primary' },
    { label: 'Get in Touch', href: '#contact', variant: 'secondary' },
  ],
};

/**
 * Colors - RPG Palette
 */
export const COLORS = {
  primary: {
    dark: '#1a0033',
    medium: '#330066',
    light: '#4d0099',
  },
  accent: {
    cyan: '#00d9ff',
    purple: '#9d4edd',
    pink: '#ff006e',
  },
  secondary: {
    gold: '#f7b801',
    gray_dark: '#2d3748',
    gray_light: '#e2e8f0',
  },
  text: {
    primary: '#ffffff',
    secondary: '#e2e8f0',
    muted: '#a0aec0',
  },
};

/**
 * Animation Durations (ms)
 */
export const ANIMATION_DURATIONS = {
  fast: 200,
  standard: 300,
  slow: 600,
  verySlow: 1000,
};

/**
 * Responsive Breakpoints
 */
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
};

/**
 * API/Form URLs
 */
export const FORM_CONFIG = {
  googleFormUrl: '', // To be filled with actual Google Form URL from Drive
  googleFormEmbedId: '', // To be filled with actual form embed ID
};

/**
 * Metadata
 */
export const METADATA = {
  title: 'Shailendra Sunil Rana - Senior Backend Developer & AI Integration Expert',
  description: 'Senior Backend Developer with 4.5+ years of experience in .NET 8, Clean Architecture, and AI-driven application development. Specialized in building scalable APIs and AI-powered automation tools.',
  keywords: [
    'backend developer',
    'c#',
    '.net 8',
    'ai integration',
    'microservices',
    'clean architecture',
    'gcp',
    'bigquery',
    'angular',
    'full-stack',
  ],
  author: 'Shailendra Sunil Rana',
  image: '/Portfolio/og-image.png',
  url: 'https://shailendra-rana.github.io/Portfolio/',
};
