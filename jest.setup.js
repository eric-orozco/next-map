/**
 * Jest Setup File for Next Map Project
 *
 * This file runs before each test and sets up the testing environment
 * with necessary mocks and global configurations.
 */

// Import Jest DOM matchers
import '@testing-library/jest-dom';

// Mock next-intl for testing
jest.mock('next-intl', () => ({
  useTranslations: (namespace = 'Common') => {
    const translations = {
      // HomePage namespace
      'HomePage.title': 'Next Map',
      'HomePage.subtitle': 'Advanced 3D mapping with VR support',
      'HomePage.exploreMaps': 'Explore Maps',
      'HomePage.features.advancedMapping.title': 'Advanced Mapping',
      'HomePage.features.3dVisualization.title': '3D Visualization',
      // Navigation namespace
      'Navigation.home': 'Home',
      'Navigation.explore': 'Explore',
      'Navigation.create': 'Create Map',
      'Navigation.dashboard': 'Dashboard',
      // Common namespace
      'Common.welcome': 'Welcome to Next Map',
      'Common.loading': 'Loading...',
      'Common.error': 'An error occurred',
      'Common.save': 'Save',
    };
    
    return (key) => {
      const fullKey = `${namespace}.${key}`;
      return translations[fullKey] || key;
    };
  },
  useLocale: () => 'en',
  useMessages: () => ({}),
}));

// Mock next-intl/server
jest.mock('next-intl/server', () => ({
  getMessages: jest.fn().mockResolvedValue({}),
  getTranslations: jest.fn(() => (key) => key),
  setRequestLocale: jest.fn(),
}));

// Mock our i18n configuration
jest.mock('@/i18n', () => ({
  locales: ['en', 'es', 'fr', 'zh-CN', 'ja', 'ko', 'no', 'pt-BR', 'ar-SA'],
  supportedLanguages: [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '��' },
    { code: 'no', name: 'Norsk', flag: '🇳🇴' },
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
    { code: 'ar-SA', name: 'العربية', flag: '🇸🇦' },
  ],
}));

// Mock next/navigation (App Router)
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
  usePathname: jest.fn(() => '/en'),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  useParams: jest.fn(() => ({ locale: 'en' })),
}));

// Mock next/router for legacy support
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
