/**
 * Jest Setup File for Next Map Project
 *
 * This file runs before each test and sets up the testing environment
 * with necessary mocks and global configurations.
 */

// Import Jest DOM matchers
import '@testing-library/jest-dom';

// Mock i18next modules for testing
jest.mock('i18next-http-backend', () => ({}));
jest.mock('i18next-browser-languagedetector', () => ({}));

// Mock react-i18next with improved translation handling
jest.mock('react-i18next', () => ({
  useTranslation: (namespace = 'common') => ({
    t: key => {
      // Handle namespace:key format
      const translations = {
        'common:welcome': 'Welcome to Next Map',
        'navigation:home': 'Home',
        'navigation:explore': 'Explore',
        'navigation:about': 'About',
        'auth:signIn': 'Sign In',
        'auth:signOut': 'Sign Out',
        'map:title': 'Map Title',
        'errors:generic': 'An unexpected error occurred',
        'homepage:hero.title': 'Welcome to Next Map',
        'homepage:hero.subtitle': 'Explore the world in 3D',
      };

      // If key doesn't contain namespace, prepend the current namespace
      const fullKey = key.includes(':') ? key : `${namespace}:${key}`;
      return translations[fullKey] || key;
    },
    i18n: {
      language: 'en',
      changeLanguage: jest.fn().mockResolvedValue(undefined),
      exists: jest.fn().mockReturnValue(true),
      dir: jest.fn().mockReturnValue('ltr'),
    },
    ready: true,
  }),
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

// Mock our consolidated i18n utilities
jest.mock('@/lib/i18n', () => ({
  __esModule: true,
  default: {
    language: 'en',
    changeLanguage: jest.fn().mockResolvedValue(undefined),
    t: jest.fn(key => key),
  },
  supportedLanguages: [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ],
  changeLanguage: jest.fn().mockResolvedValue(true),
  getCurrentLanguage: jest.fn().mockReturnValue('en'),
  getLanguageInfo: jest
    .fn()
    .mockReturnValue({ code: 'en', name: 'English', flag: '🇺🇸' }),
  isLanguageSupported: jest.fn().mockReturnValue(true),
  getBrowserLanguage: jest.fn().mockReturnValue('en'),
  formatDate: jest.fn().mockReturnValue('January 1, 2024'),
  formatNumber: jest.fn().mockReturnValue('1,000'),
  formatCurrency: jest.fn().mockReturnValue('$1,000.00'),
  getTextDirection: jest.fn().mockReturnValue('ltr'),
  translateWithFallback: jest.fn((key, fallback) => fallback),
}));

// Mock next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    };
  },
}));

// Mock next/navigation for App Router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// Mock MapLibre GL JS
jest.mock('maplibre-gl', () => ({
  Map: jest.fn(() => ({
    on: jest.fn(),
    off: jest.fn(),
    remove: jest.fn(),
    addLayer: jest.fn(),
    removeLayer: jest.fn(),
    getLayer: jest.fn(),
    addSource: jest.fn(),
    removeSource: jest.fn(),
    getSource: jest.fn(),
    fitBounds: jest.fn(),
    flyTo: jest.fn(),
    setCenter: jest.fn(),
    setZoom: jest.fn(),
    getCenter: jest.fn(),
    getZoom: jest.fn(),
    getBearing: jest.fn(),
    getPitch: jest.fn(),
    setBearing: jest.fn(),
    setPitch: jest.fn(),
  })),
  NavigationControl: jest.fn(),
  GeolocateControl: jest.fn(),
  ScaleControl: jest.fn(),
}));

// Mock react-map-gl/maplibre
jest.mock('react-map-gl/maplibre', () => ({
  Map: jest.fn(({ children, ...props }) => (
    <div data-testid="map" {...props}>
      {children}
    </div>
  )),
  NavigationControl: () => <div data-testid="navigation-control" />,
  GeolocateControl: () => <div data-testid="geolocate-control" />,
  ScaleControl: () => <div data-testid="scale-control" />,
}));

// Global test utilities
globalThis.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

globalThis.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
