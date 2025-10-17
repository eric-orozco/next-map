import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ThemeMode } from '@/lib/theme'

interface AppState {
  // Theme
  themeMode: ThemeMode
  setThemeMode: (mode: ThemeMode) => void
  
  // Language
  language: string
  setLanguage: (lang: string) => void
  isRTL: boolean
  setIsRTL: (isRTL: boolean) => void
  
  // UI State
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
  
  // Map State
  currentMapId: string | null
  setCurrentMapId: (mapId: string | null) => void
  
  // User Preferences  
  preferences: {
    showTutorial: boolean
    enableNotifications: boolean
    enableVR: boolean
    defaultMapStyle: string
    enableGeolocation: boolean
  }
  updatePreferences: (prefs: Partial<AppState['preferences']>) => void
  
  // Loading States
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  
  // Error State
  error: string | null
  setError: (error: string | null) => void
  clearError: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Theme
      themeMode: 'light',
      setThemeMode: (mode) => set({ themeMode: mode }),
      
      // Language
      language: 'en',
      setLanguage: (lang) => {
        const isRTL = ['ar-SA'].includes(lang)
        set({ language: lang, isRTL })
      },
      isRTL: false,
      setIsRTL: (isRTL) => set({ isRTL }),
      
      // UI State
      sidebarOpen: false,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      
      // Map State
      currentMapId: null,
      setCurrentMapId: (mapId) => set({ currentMapId: mapId }),
      
      // User Preferences
      preferences: {
        showTutorial: true,
        enableNotifications: true,
        enableVR: false,
        defaultMapStyle: 'streets',
        enableGeolocation: true,
      },
      updatePreferences: (prefs) => 
        set((state) => ({ 
          preferences: { ...state.preferences, ...prefs } 
        })),
      
      // Loading States
      isLoading: false,
      setIsLoading: (loading) => set({ isLoading: loading }),
      
      // Error State
      error: null,
      setError: (error) => set({ error }),
      clearError: () => set({ error: null }),
    }),
    {
      name: 'nextmap-storage',
      partialize: (state) => ({
        themeMode: state.themeMode,
        language: state.language,
        preferences: state.preferences,
      }),
    }
  )
)