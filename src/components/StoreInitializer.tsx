'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useAppStore } from '@/stores/appStore';
import { type Locale } from '@/i18n';

/**
 * Component that initializes the app store with server-side locale
 * to prevent hydration mismatches between server and client.
 */
export default function StoreInitializer() {
  const locale = useLocale() as Locale;
  const { setLanguage, language } = useAppStore();

  useEffect(() => {
    // Only update if the store language doesn't match the current locale
    if (language !== locale) {
      setLanguage(locale);
    }
  }, [locale, language, setLanguage]);

  return null;
}
