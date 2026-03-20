import { create } from 'zustand';
import { UIState } from '@types';

const STORAGE_KEY = 'portfolio-dark-mode';

/** Apply or remove the `html.light` class based on darkMode value */
function applyThemeClass(isDark: boolean): void {
  if (typeof document === 'undefined') return;
  if (isDark) {
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
  }
}

/**
 * UI Preferences Store
 * Manages sidebar state, dark mode, and accessibility preferences
 */
export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: false,
  darkMode: true, // Default to dark mode for RPG aesthetic
  reducedMotion: false,

  toggleSidebar: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  setSidebar: (open: boolean) =>
    set({ sidebarOpen: open }),

  setDarkMode: (value: boolean) => {
    applyThemeClass(value);
    try {
      localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      // localStorage unavailable (private browsing, etc.) — silently ignore
    }
    set({ darkMode: value });
  },

  setReducedMotion: (value: boolean) =>
    set({ reducedMotion: value }),
}));

/**
 * Detect system preference for reduced motion
 */
export const detectReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Initialize UI store with persisted preferences.
 * Reads darkMode from localStorage (defaults to true/dark if absent).
 * Applies the correct theme class immediately on page load.
 */
export const initializeUIPreferences = (): void => {
  const reducedMotion = detectReducedMotion();
  useUIStore.getState().setReducedMotion(reducedMotion);

  let isDark = true; // default: dark
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      isDark = stored !== 'false';
    }
  } catch {
    // localStorage unavailable — use default
  }

  applyThemeClass(isDark);
  useUIStore.setState({ darkMode: isDark });
};
