/**
 * Core Type Definitions for Gamified Portfolio
 */

/**
 * Skill Level enumeration (1-5)
 */
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

/**
 * Skill Type categories
 */
export type SkillType = 
  | 'Core Ability'
  | 'Specialization'
  | 'Passive Buff'
  | 'Unlocked Feature';

/**
 * Skill interface - RPG-style skill node
 */
export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  type: SkillType;
  description: string;
  icon: string;
  yearsOfExperience?: number;
  technologies?: string[];
  prerequisites?: string[];
  certifications?: string[];
}

/**
 * Project Category for gamification
 */
export type ProjectCategory = 'Artifact' | 'Spellbook' | 'Quest' | 'Backend' | 'Frontend' | 'Full Stack';

/**
 * Project interface - Portfolio project/artifact
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  technologies: string[];
  impact: string;
  year: number;
  featured: boolean;
  image?: string;
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}

/**
 * Timeline Entry Type
 */
export type TimelineType = 'education' | 'experience';

/**
 * Timeline Entry interface - Career journey milestone
 */
export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  type: TimelineType;
  startDate: string;
  endDate?: string;
  period?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  level: number;
}

/**
 * Education Entry interface - Specific education data
 */
export interface EducationEntry extends TimelineEntry {
  type: 'education';
  degree: string;
  field: string;
}

/**
 * Experience Entry interface - Work experience data
 */
export interface ExperienceEntry extends TimelineEntry {
  type: 'experience';
  role: string;
  company: string;
}

/**
 * Skill State interface - For Zustand store
 */
export interface SkillState {
  unlockedSkills: Set<string>;
  expandedSkill: string | null;
  hoveredSkill: string | null;
  unlockSkill: (skillId: string) => void;
  lockSkill: (skillId: string) => void;
  expandSkill: (skillId: string) => void;
  collapseSkill: () => void;
  hoverSkill: (skillId: string | null) => void;
}

/**
 * Achievement State interface - For Zustand store
 */
export interface AchievementState {
  unlockedAchievements: Set<string>;
  recentlyUnlocked: string[];
  unlockAchievement: (id: string) => void;
  removeRecentlyUnlocked: (id: string) => void;
}

/**
 * UI Preferences State - For Zustand store
 */
export interface UIState {
  sidebarOpen: boolean;
  darkMode: boolean;
  reducedMotion: boolean;
  toggleSidebar: () => void;
  setSidebar: (open: boolean) => void;
  setDarkMode: (value: boolean) => void;
  setReducedMotion: (value: boolean) => void;
}

/**
 * Stakeholder/Portfolio Owner information
 */
export interface PortfolioOwner {
  name: string;
  role: string;
  title: string;
  bio: string;
  company: string;
  yearsOfExperience: number;
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

/**
 * Social Link interface
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}
