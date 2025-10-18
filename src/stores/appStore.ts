import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeMode } from '@/lib/theme';

import { type Locale } from '@/i18n';

interface AppState {
  // Theme
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;

  // Language & RTL
  language: Locale;
  setLanguage: (lang: Locale) => void;
  initializeLanguage: () => void;
  isRTL: boolean;

  // UI State
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  // Map State
  currentMapId: string | null;
  setCurrentMapId: (mapId: string | null) => void;

  // User Preferences
  preferences: {
    showTutorial: boolean;
    enableNotifications: boolean;
    enableVR: boolean;
    enableGeolocation: boolean;
    defaultMapStyle: string;
    autoSave: boolean;
  };
  setPreferences: (preferences: Partial<AppState['preferences']>) => void;

  // Navigation State
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Theme
      themeMode: 'light' as const,
      setThemeMode: (mode: ThemeMode) => set({ themeMode: mode }),

      // Language & RTL
      language: 'en' as Locale,
      setLanguage: (lang: Locale) =>
        set({ language: lang, isRTL: lang === 'ar-SA' }),
      initializeLanguage: () => {
        // For next-intl, we don't need to initialize client-side - it's handled by the middleware
      },
      isRTL: false,

      // UI State
      sidebarOpen: false,
      setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
      toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),

      // Map State
      currentMapId: null,
      setCurrentMapId: (mapId: string | null) => set({ currentMapId: mapId }),

      // User Preferences
      preferences: {
        showTutorial: true,
        enableNotifications: true,
        enableVR: false,
        enableGeolocation: true,
        defaultMapStyle: 'default',
        autoSave: true,
      },
      setPreferences: (newPreferences: Partial<AppState['preferences']>) => {
        const currentPreferences = get().preferences;
        set({
          preferences: { ...currentPreferences, ...newPreferences },
        });
      },

      // Navigation State
      currentPage: 'home',
      setCurrentPage: (page: string) => set({ currentPage: page }),
    }),
    {
      name: 'app-store',
    }
  )
);
