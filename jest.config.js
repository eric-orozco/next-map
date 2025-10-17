/**
 * Jest Configuration for Next Map Project
 *
 * This configuration extends Next.js's built-in Jest setup with custom
 * settings for our mapping application using MapLibre GL JS, Material UI,
 * and i18next internationalization.
 */

import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
});

// Custom Jest configuration
const customJestConfig = {
  // Setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Test environment
  testEnvironment: 'jest-environment-jsdom',

  // Module name mappings (automatically synced with tsconfig.json paths)
  moduleNameMapper: {
    // Handle path aliases
    '^@/(.*)$': '<rootDir>/src/$1',

    // Handle CSS imports (for components that import CSS)
    [String.raw`\.(css|less|scss|sass)$`]: 'identity-obj-proxy',

    // Handle static file imports
    [String.raw`\.(jpg|jpeg|png|gif|webp|svg)$`]:
      '<rootDir>/__mocks__/fileMock.js',
  },

  // Test file patterns
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.(test|spec).{js,jsx,ts,tsx}',
    '<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to ignore during testing
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/dist/',
  ],

  // Transform configuration
  transform: {
    // Use next/jest to handle TypeScript and JSX files
    [String.raw`^.+\.(js|jsx|ts|tsx)$`]: [
      'babel-jest',
      { presets: ['next/babel'] },
    ],
  },

  // Files to ignore during transformation
  transformIgnorePatterns: [
    '/node_modules/',
    String.raw`^.+\.module\.(css|sass|scss)$`,
  ],

  // Coverage collection settings
  collectCoverage: false, // Set to true to collect coverage by default
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/index.{js,jsx,ts,tsx}',
    '!src/app/layout.tsx', // App router layout
    '!src/app/page.tsx', // App router pages (tested via E2E)
    '!src/lib/db.ts', // Database connection
    '!src/lib/auth.ts', // Auth configuration
  ],

  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },

  // Coverage reporting
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],

  // Coverage directory
  coverageDirectory: 'coverage',

  // Clear mocks between tests
  clearMocks: true,

  // Restore mocks after each test
  restoreMocks: true,

  // Test timeout (useful for async operations)
  testTimeout: 10000,

  // Verbose output during testing
  verbose: false,

  // Watch mode settings
  watchman: true,

  // Error handling
  errorOnDeprecated: true,

  // Module directories
  moduleDirectories: ['node_modules', '<rootDir>/'],

  // File extensions Jest should handle
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Global setup and teardown
  // globalSetup: '<rootDir>/jest.global-setup.js',
  // globalTeardown: '<rootDir>/jest.global-teardown.js',

  // Custom resolver for complex module resolution
  // resolver: '<rootDir>/jest.resolver.js',

  // Maximum worker processes for parallel test execution
  maxWorkers: '50%',

  // Cache directory
  cacheDirectory: '<rootDir>/.jest-cache',
};

// Export the Jest configuration
// createJestConfig is used to ensure Next.js config loading (async)
export default createJestConfig(customJestConfig);
