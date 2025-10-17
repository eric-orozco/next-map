/**
 * Critical translations for SSR
 * These translations are embedded to prevent hydration mismatches
 */

export const criticalTranslations = {
  en: {
    navigation: {
      home: "Home",
      explore: "Explore", 
      create: "Create",
      dashboard: "Dashboard",
      maps: "Maps",
      library: "My Library",
      favorites: "Favorites",
      trending: "Trending",
      recent: "Recent",
      public: "Public Maps",
      private: "Private Maps",
      shared: "Shared with Me"
    },
    common: {
      welcome: "Welcome to Next Map",
      loading: "Loading...",
      error: "Error",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      close: "Close"
    }
  }
} as const

export type CriticalTranslations = typeof criticalTranslations