import { create } from 'zustand';
import { SkillState } from '@types';

/**
 * Skill Tree Store
 * Manages skill unlock state, expanded skills, and hover states
 */
export const useSkillStore = create<SkillState>((set) => ({
  // IDs must match keys defined in src/data/skills.ts
  unlockedSkills: new Set(['csharp-dotnet', 'database-sql', 'microservices-architecture', 'ai-llm-integration']),
  expandedSkill: null,
  hoveredSkill: null,

  unlockSkill: (skillId: string) =>
    set((state) => ({
      unlockedSkills: new Set(state.unlockedSkills).add(skillId),
    })),

  lockSkill: (skillId: string) =>
    set((state) => {
      const newUnlocked = new Set(state.unlockedSkills);
      newUnlocked.delete(skillId);
      return { unlockedSkills: newUnlocked };
    }),

  expandSkill: (skillId: string) =>
    set({ expandedSkill: skillId }),

  collapseSkill: () =>
    set({ expandedSkill: null }),

  hoverSkill: (skillId: string | null) =>
    set({ hoveredSkill: skillId }),
}));

/**
 * Check if skill is unlocked
 */
export const isSkillUnlocked = (skillId: string): boolean => {
  const { unlockedSkills } = useSkillStore.getState();
  return unlockedSkills.has(skillId);
};

/**
 * Get all unlocked skills
 */
export const getUnlockedSkills = (): string[] => {
  const { unlockedSkills } = useSkillStore.getState();
  return Array.from(unlockedSkills);
};
