'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/stores/appStore';
import '@/lib/i18n'; // Initialize i18next

/**
 * AppInitializer handles client-side initialization tasks
 * such as syncing language state with i18next
 */
export default function AppInitializer() {
  const { initializeLanguage, language } = useAppStore();

  useEffect(() => {
    // Initialize language on app startup
    console.log('AppInitializer: Initializing language, current language:', language);
    initializeLanguage();
  }, [initializeLanguage, language]);

  // This component doesn't render anything
  return null;
}