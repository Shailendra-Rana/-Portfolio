import { create } from 'zustand';
import { AchievementState } from '@types';

/**
 * Achievement Store
 * Manages unlocked achievements and recently unlocked notifications
 */
export const useAchievementStore = create<AchievementState>((set) => ({
  unlockedAchievements: new Set([
    'first-skill-unlock',
    'project-completed',
    'developer-badge',
  ]),
  recentlyUnlocked: [],

  unlockAchievement: (id: string) =>
    set((state) => ({
      unlockedAchievements: new Set(state.unlockedAchievements).add(id),
      recentlyUnlocked: [...state.recentlyUnlocked, id].slice(-3), // Keep last 3
    })),

  removeRecentlyUnlocked: (id: string) =>
    set((state) => ({
      recentlyUnlocked: state.recentlyUnlocked.filter(item => item !== id),
    })),
}));

/**
 * Check if achievement is unlocked
 */
export const isAchievementUnlocked = (achievementId: string): boolean => {
  const { unlockedAchievements } = useAchievementStore.getState();
  return unlockedAchievements.has(achievementId);
};

/**
 * Get all unlocked achievements
 */
export const getUnlockedAchievements = (): string[] => {
  const { unlockedAchievements } = useAchievementStore.getState();
  return Array.from(unlockedAchievements);
};
