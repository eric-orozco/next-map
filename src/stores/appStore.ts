import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeMode } from '@/lib/theme';
import { 
  changeLanguage, 
  getCurrentLanguage, 
  type SupportedLanguage 
} from '@/lib/i18n';

// RTL languages
const RTL_LANGUAGES = new Set<SupportedLanguage>(['ar-SA']);

// Helper function to check if a language is RTL
const isRTLLanguage = (lang: SupportedLanguage): boolean => 
  RTL_LANGUAGES.has(lang);

interface AppState {
  // Theme
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;

  // Language
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => Promise<void>;
  syncLanguageWithI18n: () => void;
  initializeLanguage: () => Promise<void>;
  isRTL: boolean;
  setIsRTL: (isRTL: boolean) => void;

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
    defaultMapStyle: string;
    enableGeolocation: boolean;
  };
  updatePreferences: (prefs: Partial<AppState['preferences']>) => void;

  // Loading States
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // Error State
  error: string | null;
  setError: (error: string | null) => void;
  clearError: () => void;
}



export const useAppStore = create(
  persist<AppState>(
    (set) => ({
      // Theme
      themeMode: 'light' as const,
      setThemeMode: (mode: ThemeMode) => set({ themeMode: mode }),

      // Language
      language: 'en' as SupportedLanguage,
      setLanguage: async (lang: SupportedLanguage) => {
        const isRTL = isRTLLanguage(lang);
        
        // Sync with i18next first
        try {
          await changeLanguage(lang);
          
          // Update HTML document attributes
          if (typeof document !== 'undefined') {
            document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
          }
          
          // Only update store if i18next change was successful
          set({ language: lang, isRTL });
        } catch (error) {
          console.error('Failed to change language:', error);
          // Don't update the store if i18next fails
        }
      },
      syncLanguageWithI18n: () => {
        const currentLang = getCurrentLanguage();
        const isRTL = isRTLLanguage(currentLang);
        set({ language: currentLang, isRTL });
      },
      initializeLanguage: async () => {
        const currentLang = getCurrentLanguage();
        const isRTL = isRTLLanguage(currentLang);
        
        // Update HTML document attributes
        if (typeof document !== 'undefined') {
          document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
          document.documentElement.lang = currentLang;
        }
        
        set({ language: currentLang, isRTL });
      },
      isRTL: false,
      setIsRTL: (isRTL: boolean) => set({ isRTL }),

      // UI State
      sidebarOpen: false,
      setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      // Map State
      currentMapId: null as string | null,
      setCurrentMapId: (mapId: string | null) => set({ currentMapId: mapId }),

      // User Preferences
      preferences: {
        showTutorial: true,
        enableNotifications: true,
        enableVR: false,
        defaultMapStyle: 'streets',
        enableGeolocation: true,
      },
      updatePreferences: (prefs: Partial<AppState['preferences']>) =>
        set((state) => ({
          preferences: { ...state.preferences, ...prefs },
        })),

      // Loading States
      isLoading: false,
      setIsLoading: (loading: boolean) => set({ isLoading: loading }),

      // Error State
      error: null as string | null,
      setError: (error: string | null) => set({ error }),
      clearError: () => set({ error: null }),
    }),
    {
      name: 'nextmap-storage',
      partialize: (state) => {
        const { themeMode, language, preferences } = state;
        return { themeMode, language, preferences } as AppState;
      },
    }
  )
);
