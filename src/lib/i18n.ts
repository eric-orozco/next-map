import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { criticalTranslations } from './criticalTranslations';

/**
 * Supported languages configuration
 */
export const supportedLanguages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'ar-SA', name: 'العربية', flag: '🇸🇦' },
] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number]['code'];

// Initialize i18next
const isServer = globalThis.window === undefined;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    // Supported languages
    supportedLngs: supportedLanguages.map(lang => lang.code),

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      requestOptions: {
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'default',
      },
    },

    detection: {
      order: isServer ? ['htmlTag'] : ['localStorage', 'navigator', 'htmlTag'],
      caches: isServer ? [] : ['localStorage'],
    },

    defaultNS: 'common',
    ns: ['common', 'navigation', 'map', 'auth', 'errors', 'homepage'],

    // Configure React i18next for SSR
    react: {
      useSuspense: false,
    },

    // Add critical translations for immediate availability
    resources: {
      en: criticalTranslations.en,
    },

    // Preload namespaces for better SSR
    preload: supportedLanguages.map(lang => lang.code),

    // Server-side configuration
    ...(isServer && {
      initImmediate: false, // Load resources synchronously on server
    }),
  });

/**
 * Utility functions for internationalization
 */

/**
 * Change the application language
 */
export const changeLanguage = async (
  language: SupportedLanguage
): Promise<boolean> => {
  try {
    await i18n.changeLanguage(language);
    // Store the language preference in localStorage
    localStorage.setItem('i18nextLng', language);
    return true;
  } catch (error) {
    console.error('Failed to change language:', error);
    return false;
  }
};

/**
 * Get the current language
 */
export const getCurrentLanguage = (): SupportedLanguage => {
  return (i18n.language as SupportedLanguage) || 'en';
};

/**
 * Get language display name and flag
 */
export const getLanguageInfo = (code: SupportedLanguage) => {
  return (
    supportedLanguages.find(lang => lang.code === code) || supportedLanguages[0]
  );
};

/**
 * Check if a language is supported
 */
export const isLanguageSupported = (
  code: string
): code is SupportedLanguage => {
  return supportedLanguages.some(lang => lang.code === code);
};

/**
 * Get browser language preference
 */
export const getBrowserLanguage = (): SupportedLanguage => {
  if (globalThis.window === undefined) return 'en';

  const browserLang = navigator.language.split('-')[0];
  return isLanguageSupported(browserLang) ? browserLang : 'en';
};

/**
 * Format a date according to the current locale
 */
export const formatDate = (
  date: Date,
  options?: Intl.DateTimeFormatOptions
): string => {
  const currentLang = getCurrentLanguage();
  return new Intl.DateTimeFormat(currentLang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(date);
};

/**
 * Format a number according to the current locale
 */
export const formatNumber = (
  num: number,
  options?: Intl.NumberFormatOptions
): string => {
  const currentLang = getCurrentLanguage();
  return new Intl.NumberFormat(currentLang, options).format(num);
};

/**
 * Format currency according to the current locale
 */
export const formatCurrency = (amount: number, currency = 'USD'): string => {
  const currentLang = getCurrentLanguage();
  return new Intl.NumberFormat(currentLang, {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Get text diretion for current language (for RTL support)
 */
export const getTextDirection = (): 'ltr' | 'rtl' => {
  const currentLang = getCurrentLanguage();
  // RTL languages
  const rtlLanguages: string[] = ['ar-SA'];
  return rtlLanguages.includes(currentLang) ? 'rtl' : 'ltr';
};

/**
 * Translate key with fallback
 */
export const translateWithFallback = (
  key: string,
  fallback: string,
  options?: Record<string, unknown>
): string => {
  try {
    const translation = i18n.t(key, options);
    const translationStr = String(translation);
    return translationStr === key ? fallback : translationStr;
  } catch {
    return fallback;
  }
};

// Export the i18n instance as default
export { default } from 'i18next';
