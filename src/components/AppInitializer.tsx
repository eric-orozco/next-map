'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/stores/appStore';
import '@/lib/i18n'; // Initialize i18next

/**
 * AppInitializer handles client-side initialization tasks
 * such as syncing language state with i18next
 */
export default function AppInitializer() {
  const { initializeLanguage } = useAppStore();

  useEffect(() => {
    // Initialize language on app startup (only once)
    console.log('AppInitializer: Initializing language on app startup');
    initializeLanguage();
  }, [initializeLanguage]);

  // This component doesn't render anything
  return null;
}
