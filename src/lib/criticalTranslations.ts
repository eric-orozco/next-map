/**
 * Critical translations for SSR
 * These translations are embedded to prevent hydration mismatches
 */

export const criticalTranslations = {
  en: {
    navigation: {
      home: 'Home',
      explore: 'Explore',
      create: 'Create',
      dashboard: 'Dashboard',
      maps: 'Maps',
      library: 'My Library',
      favorites: 'Favorites',
      trending: 'Trending',
      recent: 'Recent',
      public: 'Public Maps',
      private: 'Private Maps',
      shared: 'Shared with Me',
    },
    common: {
      welcome: 'Welcome to Next Map',
      loading: 'Loading...',
      error: 'Error',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
    },
    homepage: {
      title: 'Next Map',
      subtitle: 'Advanced 3D Mapping with VR Support',
      heroDescription: 'Showcase of cutting-edge web technologies including MapLibre GL JS, Material UI, Next.js 15, React 19, TypeScript, and WebXR integration. Built for modern browsers with mobile-first responsive design.',
      exploreMaps: 'Explore Maps',
      viewSource: 'View Source',
      technologyShowcase: 'Technology Showcase',
      builtWithModernStack: 'Built With Modern Stack',
      features: {
        advancedMapping: {
          title: 'Advanced Mapping',
          description: 'Powered by MapLibre GL JS with custom vector tiles and real-time data visualization.',
        },
        '3dVisualization': {
          title: '3D Visualization',
          description: 'Interactive 3D terrain rendering with customizable elevation and lighting effects.',
        },
        vrIntegration: {
          title: 'VR Integration',
          description: 'Immersive VR experience compatible with major VR headsets using WebXR API.',
        },
        internationalization: {
          title: 'Internationalization',
          description: 'Multi-language support with dynamic locale switching and RTL text support.',
        },
        authentication: {
          title: 'Authentication',
          description: 'Secure authentication with OAuth providers and JWT-based session management.',
        },
        performance: {
          title: 'Performance',
          description: 'Optimized for speed with code splitting, lazy loading, and service workers.',
        },
      },
    },
  },
} as const;

export type CriticalTranslations = typeof criticalTranslations;
