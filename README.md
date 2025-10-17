# Next Map - Advanced 3D Mapping with VR Support

[![CI/CD Pipeline](https://github.com/eric-orozco/next-map/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/eric-orozco/next-map/actions/workflows/ci-cd.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https:/## 🌍 Internationalization

### Language Support (9 Languages)

| Language | Code | Status | RTL | Coverage |
|----------|------|--------|-----|----------|
| 🇺🇸 English | `en` | ✅ Primary | No | 100% |
| 🇪🇸 Spanish | `es` | ✅ Complete | No | 100% |
| 🇫🇷 French | `fr` | ✅ Complete | No | 100% |
| 🇨🇳 Chinese (Simplified) | `zh-CN` | ✅ Complete | No | 100% |
| 🇯🇵 Japanese | `ja` | ✅ Complete | No | 100% |
| 🇰🇷 Korean | `ko` | ✅ Complete | No | 100% |
| 🇳🇴 Norwegian | `no` | ✅ Complete | No | 100% |
| 🇧🇷 Portuguese (Brazilian) | `pt-BR` | ✅ Complete | No | 100% |
| 🇸🇦 Arabic (Saudi Arabia) | `ar-SA` | ✅ Complete | Yes | 100% |

### i18n Architecture

#### Translation Structure
```
public/locales/
├── en/
│   ├── common.json      # Shared UI elements
│   ├── navigation.json  # Navigation menu
│   ├── homepage.json    # Homepage content
│   ├── map.json        # Map interface
│   ├── auth.json       # Authentication
│   └── errors.json     # Error messages
└── [other-languages]/  # Same structure for all languages
```

#### SSR-Optimized Loading
```typescript
// Critical translations embedded for SSR
export const criticalTranslations = {
  en: {
    common: { /* essential UI text */ },
    navigation: { /* menu items */ },
    homepage: { /* homepage content */ },
  }
};

// Lazy loading for additional content
const { t } = useTranslation('map'); // Loads map.json on demand
```

#### RTL Support (Arabic)
- Automatic layout direction switching
- RTL-optimized Material UI components
- Mirrored navigation and content flow
- Cultural date/number formatting

#### Usage Examples
```typescript
// In components
const { t } = useTranslation('common');
return <Button>{t('save')}</Button>;

// Language switching
const { changeLanguage } = useTranslation();
await changeLanguage('es'); // Switch to Spanish

// Namespace loading
const { t: tMap } = useTranslation('map');
const { t: tAuth } = useTranslation('auth');
```/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

> A showcase of cutting-edge web technologies including MapLibre GL JS, Material UI, Next.js 15, React 19, TypeScript, and WebXR integration. Built for modern browsers with mobile-first responsive design and full SSR support.

![Next Map Preview](https://via.placeholder.com/800x400/1976d2/ffffff?text=Next+Map+Preview)

## 🚀 Live Demo

**🌐 Production**: [next-map.vercel.app](https://next-map.vercel.app) *(Deploy with `vercel --prod`)*

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Quick Start](#-quick-start)
- [Development Guide](#-development-guide)
- [Deployment](#-deployment)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Testing Strategy](#-testing-strategy)
- [Codebase Architecture](#-codebase-architecture)
- [Internationalization](#-internationalization)
- [Contributing](#-contributing)

## 🚀 Features

### Core Mapping Features

- **Advanced 3D Mapping** - Powered by MapLibre GL JS with custom vector tiles
- **VR Integration** - WebXR-compatible VR experience for immersive mapping
- **Real-time Data Visualization** - Dynamic map layers and interactive markers
- **Custom Map Styles** - Multiple themes including light, dark, and cyberpunk modes

### User Experience

- **Mobile-First Responsive Design** - Optimized for mobile, tablet, and desktop
- **Material UI Components** - Modern, accessible component library
- **Multiple Themes** - Light, dark, and cyberpunk themes with smooth transitions
- **Internationalization** - Multi-language support (English, Spanish, French)

### Authentication & Security

- **NextAuth.js Integration** - Secure authentication with OAuth providers
- **JWT Session Management** - Stateless authentication with secure tokens
- **PostgreSQL Database** - Robust data persistence with Prisma ORM

### Performance & Development

- **Next.js 15 with Turbopack** - Latest Next.js with ultra-fast bundling
- **TypeScript** - Full type safety throughout the application
- **pnpm Package Manager** - Fastest and most efficient package management
- **Comprehensive Testing** - Jest unit tests and Playwright E2E tests

## 🛠 Technology Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Material UI v7** - Modern React component library
- **Emotion** - CSS-in-JS styling solution
- **MapLibre GL JS** - Open-source mapping library with 3D terrain
- **Framer Motion** - Smooth animations and transitions

### State Management & Data

- **Zustand** - Lightweight state management
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation
- **Prisma** - Next-generation ORM
- **PostgreSQL** - Robust relational database

### Authentication & Internationalization

- **NextAuth.js** - Complete authentication solution
- **i18next** - Internationalization framework
- **React i18next** - React integration for i18n

### Testing & Quality

- **Jest** - Unit testing framework
- **Testing Library** - React component testing
- **Playwright** - End-to-end testing
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking

### DevOps & Performance

- **pnpm** - Fast, disk space efficient package manager
- **Turbopack** - Next-generation bundler
- **PWA Ready** - Progressive web app capabilities
- **Docker Ready** - Containerization support

## ✅ Project Status

### 🎯 Latest Updates (September 2025)

- ✅ **Upgraded to React 19** - Latest React with concurrent features
- ✅ **Updated to Material UI v7** - Latest component library version
- ✅ **Removed Three.js Dependencies** - Clean architecture focused on MapLibre 3D
- ✅ **Added 6 New Languages** - Chinese, Japanese, Korean, Norwegian, Portuguese, Arabic
- ✅ **Implemented RTL Support** - Right-to-left layout for Arabic language
- ✅ **Enhanced i18n System** - Comprehensive translation coverage across all components

### 🌍 Language Support

The application now supports **9 languages** with complete translations:

- 🇺🇸 **English** (Primary)
- 🇪🇸 **Spanish**
- 🇫🇷 **French**
- 🇨🇳 **Chinese (Simplified)**
- 🇯🇵 **Japanese**
- 🇰🇷 **Korean**
- 🇳🇴 **Norwegian**
- 🇧🇷 **Portuguese (Brazilian)**
- 🇸🇦 **Arabic (Saudi Arabia)** with RTL support

### 🏗 Architecture Highlights

- **Modern React Stack** - React 19 + Next.js 15 + TypeScript
- **3D Mapping** - MapLibre GL JS with terrain visualization (no Three.js conflicts)
- **Performance Optimized** - pnpm + Turbopack for lightning-fast builds
- **Enterprise Ready** - Comprehensive testing, type safety, and i18n

## � Development Guide

### Environment Setup

1. **Clone & Install**
   ```bash
   git clone https://github.com/eric-orozco/next-map.git
   cd next-map
   pnpm install
   ```

2. **Environment Variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Required variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/nextmap"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

3. **Database Setup**
   ```bash
   pnpm db:generate    # Generate Prisma client
   pnpm db:push        # Create database schema
   pnpm db:studio      # Open database GUI (optional)
   ```

4. **Start Development**
   ```bash
   pnpm dev           # Development server with hot reload
   ```

### Available Scripts

#### Core Development
- `pnpm dev` - Development server with Turbopack hot reload
- `pnpm build` - Production build with optimization
- `pnpm start` - Production server
- `pnpm lint` - ESLint code quality checks
- `pnpm format` - Auto-fix Prettier formatting
- `pnpm type-check` - TypeScript type validation

#### Testing Suite
- `pnpm test` - Jest unit tests (watch mode)
- `pnpm test:ci` - Jest tests (single run)
- `pnpm test:coverage` - Jest with coverage report
- `pnpm test:e2e` - Playwright E2E tests
- `pnpm test:e2e:ui` - Playwright with interactive UI

#### Database Management
- `pnpm db:generate` - Regenerate Prisma client
- `pnpm db:push` - Push schema changes to database
- `pnpm db:migrate` - Create and run migrations
- `pnpm db:studio` - Open Prisma Studio (database GUI)

#### Deployment
- `pnpm deploy:vercel` - Deploy to Vercel production

### Development Workflow

1. **Feature Development**
   ```bash
   git checkout -b feature/your-feature
   pnpm dev                    # Start development server
   # Develop and test your feature
   pnpm test:coverage          # Run unit tests
   pnpm test:e2e              # Run E2E tests
   pnpm lint                  # Check code quality
   ```

2. **Pre-commit Checks**
   ```bash
   pnpm type-check            # TypeScript validation
   pnpm format:check          # Code formatting
   pnpm build                 # Verify production build
   ```

3. **Submit Changes**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature
   # Create Pull Request
   ```

### Key Development Tools

- **Turbopack**: Ultra-fast development builds
- **TypeScript**: Full type safety and IntelliSense
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting
- **Jest**: Unit testing with coverage
- **Playwright**: Cross-browser E2E testing
- **Prisma Studio**: Visual database management
- **pnpm**: Fast, efficient package management

## 📜 Available Scripts

### Development Commands
- `pnpm dev` - Start development server with Turbopack hot reload
- `pnpm build` - Create optimized production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint code quality checks
- `pnpm format` - Auto-fix code formatting with Prettier
- `pnpm format:check` - Check code formatting without fixing
- `pnpm type-check` - Run TypeScript type validation

### Testing Commands
- `pnpm test` - Run Jest unit tests in watch mode
- `pnpm test:ci` - Run Jest tests once (CI mode)
- `pnpm test:coverage` - Generate test coverage report
- `pnpm test:e2e` - Run Playwright end-to-end tests
- `pnpm test:e2e:ui` - Run Playwright tests with interactive UI

### Database Commands
- `pnpm db:generate` - Regenerate Prisma client after schema changes
- `pnpm db:push` - Push schema changes to database (development)
- `pnpm db:migrate` - Create and run database migrations (production)
- `pnpm db:studio` - Open Prisma Studio visual database editor

### Deployment Commands
- `pnpm deploy:vercel` - Deploy to Vercel production environment

## 🏗 Codebase Architecture

### Project Structure
```
next-map/
├── .github/                # GitHub Actions workflows and templates
│   ├── workflows/          # CI/CD pipeline configuration
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   └── pull_request_template.md
├── prisma/                 # Database schema and migrations
│   ├── schema.prisma       # Prisma database schema
│   └── migrations/         # Database migration files
├── public/                 # Static assets and i18n files
│   ├── locales/           # Translation files (9 languages)
│   │   ├── en/            # English translations
│   │   ├── es/            # Spanish translations
│   │   └── ...            # Other language directories
│   └── icons/             # Static icons and images
├── src/
│   ├── app/               # Next.js App Router (routes & layouts)
│   │   ├── layout.tsx     # Root layout with providers
│   │   ├── page.tsx       # Homepage component
│   │   └── globals.css    # Global styles
│   ├── components/        # Reusable React components
│   │   ├── Navigation.tsx  # App navigation bar
│   │   ├── MapComponent.tsx # 3D map integration
│   │   └── __tests__/     # Component unit tests
│   ├── lib/              # Utility libraries and configurations
│   │   ├── i18n.ts       # Internationalization setup
│   │   ├── theme.ts      # Material UI theme configuration
│   │   └── criticalTranslations.ts # SSR translations
│   ├── stores/           # Zustand state management
│   │   ├── appStore.ts   # Global app state
│   │   └── mapStore.ts   # Map-specific state
│   └── types/            # TypeScript type definitions
├── tests/
│   └── e2e/              # Playwright end-to-end tests
│       └── homepage.spec.ts # Homepage functionality tests
├── jest.config.js         # Jest testing configuration
├── playwright.config.ts   # Playwright E2E configuration
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies and scripts
```

### Key Architecture Patterns

#### 1. **Server-Side Rendering (SSR)**
- Next.js App Router with full SSR support
- Critical translations embedded for fast first paint
- SEO-optimized meta tags and structured data
- Material UI server-side styling

#### 2. **State Management**
```typescript
// Zustand stores for client-side state
const useAppStore = create((set) => ({
  theme: 'light',
  language: 'en',
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
}));
```

#### 3. **Internationalization Architecture**
```typescript
// Multi-layer i18n system
- Critical translations (SSR-embedded)
- Lazy-loaded translations (client-side)
- RTL support for Arabic
- Namespace organization (common, navigation, map, etc.)
```

#### 4. **Component Architecture**
```typescript
// TypeScript-first component design
interface NavigationProps {
  variant?: 'default' | 'minimal';
  showLanguageSelector?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  variant = 'default',
  showLanguageSelector = true,
}) => {
  // Component implementation
};
```

#### 5. **Testing Strategy**
```typescript
// Comprehensive testing approach
- Unit tests: Jest + Testing Library
- E2E tests: Playwright (cross-browser)
- Type safety: TypeScript strict mode
- Code quality: ESLint + Prettier
```

### Performance Optimizations

- **Turbopack**: Next-generation bundler for fast development
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Next.js Image component with WebP
- **Bundle Analysis**: Built-in bundle analyzer
- **Caching Strategy**: Multi-layer caching (build, runtime, CDN)

### Security Features

- **Content Security Policy**: Configured security headers
- **XSS Protection**: Automatic Next.js protections
- **CSRF Protection**: NextAuth.js built-in CSRF protection
- **Dependency Scanning**: Automated security updates via Dependabot

## 🎨 Themes

The application supports multiple themes to showcase design flexibility:

- **Light Theme** - Clean, professional appearance
- **Dark Theme** - Modern dark mode with blue accents
- **Cyberpunk Theme** - Futuristic neon design with custom fonts

## � Internationalization

- **English (EN)** - Primary language
- **Spanish (ES)** - Full translation support
- **French (FR)** - Full translation support
- **Chinese Simplified (ZH-CN)** - Full translation support
- **Japanese (JA)** - Full translation support
- **Korean (KO)** - Full translation support
- **Norwegian (NO)** - Full translation support
- **Portuguese Brazilian (PT-BR)** - Full translation support
- **Arabic Saudi Arabia (AR-SA)** - Full translation support with RTL layout
- **i18next** - Modern internationalization framework
- **React i18next** - React integration with hooks
- **RTL Support** - Right-to-left text support for Arabic
- **Namespace Support** - Organized translations (common, navigation, map, auth, errors)

## 🧪 Testing Strategy

### Comprehensive Testing Approach

#### Unit Testing (Jest + Testing Library)
```bash
pnpm test              # Watch mode
pnpm test:coverage     # Coverage report
```

**Coverage Areas:**
- ✅ React component rendering and behavior
- ✅ Custom hooks functionality
- ✅ Utility functions and helpers
- ✅ State management (Zustand stores)
- ✅ i18n integration and translation loading

**Example Test:**
```typescript
describe('Navigation Component', () => {
  it('renders navigation items correctly', async () => {
    render(<Navigation />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
```

#### End-to-End Testing (Playwright)
```bash
pnpm test:e2e          # Run E2E tests
pnpm test:e2e:ui       # Interactive mode
```

**Test Coverage:**
- ✅ Homepage functionality and content loading
- ✅ Navigation and routing behavior
- ✅ Language switching and i18n
- ✅ Responsive design (mobile/desktop)
- ✅ 3D map rendering and interaction
- ✅ Theme switching functionality

**Browser Support:**
- **Local Development**: Chrome, Firefox, Safari, Mobile Chrome
- **CI Pipeline**: Chromium (optimized for speed)

**Example E2E Test:**
```typescript
test('should display homepage content', async ({ page }) => {
  await page.goto('/');
  
  await expect(page.getByRole('heading', { name: 'Next Map' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Advanced 3D Mapping with VR Support' })).toBeVisible();
  await expect(page.locator('header')).toBeVisible();
});
```

#### Performance Testing
- Bundle size analysis
- Core Web Vitals monitoring
- Lighthouse CI integration
- Loading performance validation

#### Quality Gates
- **Unit Tests**: 80%+ coverage target
- **E2E Tests**: Critical user journeys validated
- **Type Safety**: Zero TypeScript errors
- **Code Quality**: ESLint rules enforced
- **Formatting**: Prettier consistency checks

## 🚀 Deployment

### Vercel (Recommended for SSR)

Next Map is optimized for **Vercel deployment** with full **Server-Side Rendering (SSR)** support:

#### Quick Deploy (2 minutes)
```bash
# Install Vercel CLI and deploy
npx vercel --prod
```

#### What You Get on Vercel:
- ✅ **Full SSR Support** - Dynamic server-side rendering
- ✅ **API Routes** - Serverless backend functionality  
- ✅ **Edge Functions** - Ultra-fast global distribution
- ✅ **Image Optimization** - Automatic WebP conversion
- ✅ **Global CDN** - Worldwide performance optimization
- ✅ **Automatic HTTPS** - Free SSL certificates
- ✅ **Preview Deployments** - Every PR gets a preview URL
- ✅ **Analytics** - Performance monitoring (free tier)

#### Production Features:
- **Multi-language SSR** - All 9 languages server-rendered
- **3D Map Rendering** - MapLibre GL JS with terrain
- **Material UI SSR** - Styled components server-rendered
- **Real-time i18n** - Language switching without reload

#### Manual Setup (Optional):
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

#### GitHub Actions Integration:
- Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` to GitHub secrets
- Automatic deployments on every push to main
- Preview deployments for pull requests

> **📚 Detailed Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete setup instructions

### Alternative Deployment Options

#### Docker (Self-hosted)
```bash
docker build -t next-map .
docker run -p 3000:3000 next-map
```

#### Static Export (Limited functionality)
```bash
pnpm build
pnpm start
```

> **⚠️ Note**: Static export disables SSR, API routes, and server-side i18n

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project includes a comprehensive CI/CD pipeline that runs on every push and pull request:

#### Pipeline Stages:

1. **Code Quality & Security** (5-8 minutes)
   - ESLint code linting
   - TypeScript type checking  
   - Prettier format checking
   - Security vulnerability scanning

2. **Unit Testing** (3-5 minutes)
   - Jest test suite execution
   - Code coverage reporting
   - Codecov integration
   - 80%+ coverage requirement

3. **End-to-End Testing** (2-3 minutes)
   - Playwright browser testing
   - Cross-browser compatibility (CI: Chromium only)
   - Mobile responsive testing
   - Homepage functionality validation

4. **Build & Optimization** (3-4 minutes)
   - Next.js production build
   - Turbopack bundling optimization
   - Build artifact caching
   - Asset optimization validation

5. **Deployment** (1-2 minutes) *[If Vercel secrets configured]*
   - Preview deployment (PRs)
   - Production deployment (main branch)
   - Deployment status reporting

#### Quality Gates:
- ✅ All tests must pass
- ✅ Code coverage > 80% *(currently disabled for development)*
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ✅ Successful production build

#### Branch Protection:
- Requires PR reviews
- Requires status checks to pass
- No direct pushes to main branch

#### Performance Optimizations:
- **Parallel job execution** - Multiple stages run simultaneously
- **Dependency caching** - pnpm cache across workflows
- **Build artifact caching** - Next.js build optimization
- **Conditional deployments** - Only runs when secrets are available

### Local Development Pipeline

Run the same checks locally:

```bash
# Run all quality checks
pnpm lint           # ESLint
pnpm type-check     # TypeScript
pnpm format:check   # Prettier
pnpm test:coverage  # Jest with coverage
pnpm test:e2e       # Playwright E2E
pnpm build          # Production build
```

### Monitoring & Analytics

- **GitHub Actions**: Build status and performance metrics
- **Codecov**: Test coverage reporting and trends
- **Vercel Analytics**: Production performance monitoring
- **Dependabot**: Automated dependency updates and security patches

## 🤝 Contributing

### Development Process

1. **Fork & Clone**
   ```bash
   git clone https://github.com/your-username/next-map.git
   cd next-map
   pnpm install
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Development & Testing**
   ```bash
   pnpm dev                    # Start development server
   pnpm test:coverage          # Run unit tests
   pnpm test:e2e              # Run E2E tests
   pnpm lint                  # Check code quality
   pnpm type-check            # Verify TypeScript
   ```

4. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   git push origin feature/amazing-feature
   ```

5. **Pull Request**
   - Create PR with clear description
   - Ensure all CI checks pass
   - Request review from maintainers

### Code Standards

- **TypeScript**: Strict mode enabled, full type coverage
- **ESLint**: Enforced code quality rules
- **Prettier**: Automatic code formatting
- **Conventional Commits**: Structured commit messages
- **Testing**: Unit tests for new components/functions

### Review Process

- All PRs require approval from code owners
- CI/CD pipeline must pass all checks
- Code coverage should not decrease
- Documentation updates for new features

---

## 📄 Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Comprehensive deployment guide
- **[API Documentation](./docs/api.md)** - API endpoints and usage *(coming soon)*
- **[Component Library](./docs/components.md)** - Component documentation *(coming soon)*

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎯 Project Goals

This project demonstrates:

- **🚀 Modern Stack Mastery** - Next.js 15, React 19, TypeScript, Material UI v7
- **🌐 Global Accessibility** - 9-language i18n with RTL support
- **🧪 Quality Engineering** - Comprehensive testing and CI/CD
- **⚡ Performance Excellence** - SSR, optimization, and monitoring
- **🛡️ Security Best Practices** - Headers, CSP, dependency scanning
- **📱 Responsive Design** - Mobile-first, cross-browser compatibility
- **🎨 Design Systems** - Multiple themes, consistent UI patterns
- **🔧 Developer Experience** - Fast builds, hot reload, type safety

**Built with ❤️ using cutting-edge web technologies**

---

*Ready to explore the future of web mapping? Deploy now with `vercel --prod`* 🚀
