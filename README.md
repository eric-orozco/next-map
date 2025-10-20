# Next Map - Advanced 3D Mapping Platform

[![CI/CD Pipeline](https://github.com/eric-orozco/next-map/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/eric-orozco/next-map/actions/workflows/ci-cd.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)

[**Live Demo**](https://next-map-beta.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Docker Setup](#docker-setup)
- [CI/CD & Deployment](#cicd--deployment)
- [Development Guide](#development-guide)
- [Internationalization](#internationalization)
- [Testing Strategy](#testing-strategy)
- [Architecture](#architecture)

> A modern 3D mapping platform built with Next.js 15, React 19, TypeScript, and MapLibre GL JS. Features advanced internationalization, Material UI theming, and server-side rendering optimization.

## Features

### Core Mapping Features

- **Advanced 3D Mapping** - Powered by MapLibre GL JS with vector tile support
- **Interactive Visualization** - Dynamic map layers and interactive markers
- **Custom Map Styles** - Multiple themes including light, dark, and cyberpunk modes
- **Performance Optimized** - Server-side rendering with hydration optimization

### User Experience

- **Mobile-First Responsive Design** - Optimized for mobile, tablet, and desktop
- **Material UI Components** - Modern, accessible component library with theming
- **Multiple Themes** - Light, dark, and custom themes with smooth transitions
- **Advanced Internationalization** - 9-language support with RTL layout for Arabic

### Development & Performance

- **Next.js 15 with Turbopack** - Latest Next.js with ultra-fast bundling
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety throughout the application
- **Comprehensive Testing** - Jest unit tests and Playwright E2E tests
- **Modern State Management** - Zustand for lightweight, efficient state handling

## Technology Stack

### Frontend

- **Next.js 15** - React framework with App Router and Turbopack
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Material UI v7** - Modern React component library
- **Emotion** - CSS-in-JS styling solution
- **MapLibre GL JS** - Open-source mapping library with 3D terrain

### State Management & Data

- **Zustand** - Lightweight state management
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation
- **Prisma** - Next-generation ORM

### Internationalization

- **next-intl** - Server-side internationalization framework
- **RTL Layout Support** - Right-to-left text direction for Arabic

### Testing & Quality

- **Jest** - Unit testing framework with coverage
- **Testing Library** - React component testing utilities
- **Playwright** - Cross-browser end-to-end testing
- **ESLint** - Code linting and style enforcement
- **Prettier** - Code formatting

### Development Tools

- **pnpm** - Fast, disk space efficient package manager
- **Turbopack** - Next-generation bundler for development
- **TypeScript** - Static type checking and IntelliSense

## Project Status

### Latest Updates (October 2025)

- **Migrated to next-intl** - Server-side internationalization with SSR optimization
- **Fixed Hydration Issues** - Resolved client-server mismatch in theme and RTL rendering
- **Enhanced E2E Testing** - Comprehensive Playwright test coverage across browsers
- **Upgraded to React 19** - Latest React with concurrent features
- **Updated to Material UI v7** - Latest component library version
- **Added Multi-Language Support** - Complete translations with RTL support for Arabic
- **Optimized Build Performance** - Turbopack integration for faster development

### Architecture Highlights

- **Modern React Stack** - React 19 + Next.js 15 + TypeScript
- **3D Mapping** - MapLibre GL JS with terrain visualization
- **Server-Side i18n** - next-intl with SSR optimization
- **Performance Optimized** - Turbopack for lightning-fast builds
- **Enterprise Ready** - Comprehensive testing, type safety, and internationalization

## Development Guide

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

## Available Scripts

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

## Architecture

### Project Structure

```
next-map/
├── .github/workflows/     # CI/CD pipeline configuration
├── messages/             # Translation files (9 languages)
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── [locale]/    # Internationalized routes
│   │   └── layout.tsx   # Root layout
│   ├── components/      # React components + tests
│   ├── i18n/           # next-intl configuration
│   ├── lib/            # Utilities and theme
│   ├── stores/         # Zustand state management
│   └── middleware.ts   # i18n routing middleware
├── tests/e2e/          # Playwright E2E tests
└── [config files]     # Jest, Playwright, Next.js, etc.
```

### Key Architecture Patterns

- **Server-Side Rendering** - Full SSR with next-intl integration
- **Type Safety** - TypeScript throughout with strict mode
- **Modern State Management** - Zustand for lightweight, efficient state
- **Component Testing** - Jest + Testing Library for unit tests
- **E2E Testing** - Playwright for cross-browser validation
- **Performance** - Turbopack bundling + automatic code splitting

- **Content Security Policy**: Configured security headers
- **XSS Protection**: Automatic Next.js protections
- **CSRF Protection**: NextAuth.js built-in CSRF protection
- **Dependency Scanning**: Automated security updates via Dependabot

## Themes

| Theme     | Description                    | Colors                 |
| --------- | ------------------------------ | ---------------------- |
| Light     | Clean, professional appearance | Blue primary, white bg |
| Dark      | Modern dark mode               | Blue accents, dark bg  |
| Cyberpunk | Futuristic neon design         | Neon colors, dark bg   |

### Adding New Themes

To add a custom theme:

1. **Create theme object** in `src/lib/theme.ts`:

```typescript
export const myTheme: Theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: { main: '#your-color' },
    background: { default: '#your-bg' },
    // ... other palette options
  },
  typography: {
    // Custom typography if needed
  },
});
```

2. **Register theme** in the themes object:

```typescript
export const themes = {
  light: lightTheme,
  dark: darkTheme,
  cyberpunk: cyberpunkTheme,
  myTheme: myTheme, // Add your theme here
} as const;
```

3. **Theme is automatically available** - The theme switcher will detect and include the new theme.

## Internationalization

This project uses **next-intl** for server-side internationalization with consolidated message files. All translations are stored in the `/messages` directory with one JSON file per locale containing all namespaces.

### Supported Languages

| Language               | Code    | Status   | RTL | Coverage |
| ---------------------- | ------- | -------- | --- | -------- |
| English                | `en`    | Primary  | No  | 100%     |
| Spanish                | `es`    | Complete | No  | 100%     |
| French                 | `fr`    | Complete | No  | 100%     |
| Chinese (Simplified)   | `zh-CN` | Complete | No  | 100%     |
| Japanese               | `ja`    | Complete | No  | 100%     |
| Korean                 | `ko`    | Complete | No  | 100%     |
| Norwegian              | `no`    | Complete | No  | 100%     |
| Portuguese (Brazilian) | `pt-BR` | Complete | No  | 100%     |
| Arabic (Saudi Arabia)  | `ar-SA` | Complete | Yes | 100%     |

### Adding New Languages

To add a new language:

1. **Create message file**: Add `messages/{locale}.json` with translations
2. **Update routing config**: Add locale to `src/i18n/routing.ts` locales array
3. **Test RTL support**: For RTL languages, update layout detection in `src/app/[locale]/layout.tsx`

Example for German (`de`):

```json
// messages/de.json
{
  "HomePage": {
    "title": "Next Map",
    "subtitle": "Erweiterte 3D-Kartierung"
  },
  "Navigation": {
    "home": "Startseite",
    "about": "Über uns"
  },
  "Common": {
    "loading": "Laden...",
    "error": "Fehler"
  }
}
```

### File Structure

```
messages/
├── en.json          # English (default)
├── es.json          # Spanish
├── fr.json          # French
├── zh-CN.json       # Chinese (Simplified)
├── ja.json          # Japanese
├── ko.json          # Korean
├── no.json          # Norwegian
├── pt-BR.json       # Portuguese (Brazilian)
└── ar-SA.json       # Arabic (Saudi Arabia)
```

**Message File Format:**

- **Namespaced structure**: Each file contains all translations organized by namespace (HomePage, Navigation, Common, etc.)
- **Server-side loading**: Messages are loaded server-side by next-intl for optimal performance
- **Type safety**: TypeScript integration provides autocompletion for translation keys

## Testing Strategy

### Comprehensive Testing Approach

#### Unit Testing (Jest + Testing Library)

```bash
pnpm test              # Watch mode
pnpm test:coverage     # Coverage report
```

**Coverage Areas:**

- React component rendering and behavior
- Custom hooks functionality
- Utility functions and helpers
- State management (Zustand stores)
- i18n integration and translation loading

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

- Homepage functionality and content loading
- Navigation and routing behavior
- Language switching and i18n
- Responsive design (mobile/desktop)
- 3D map rendering and interaction
- Theme switching functionality

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

## Deployment

The project is configured for deployment via GitHub Actions pipeline. Push to main branch triggers automatic deployment after all tests pass.

> ** Detailed Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete setup instructions

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

> **Note**: Static export disables SSR, API routes, and server-side i18n

## Docker Setup

This project includes comprehensive Docker support for consistent development and deployment across different environments. The Docker setup provides containerized application and database services with optimized configurations for both development and production.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/macOS) or Docker Engine (Linux)
- Docker Compose (included with Docker Desktop)
- Basic understanding of Docker concepts (containers, images, volumes)

### Quick Start with Docker

#### 1. Clone and Setup Environment

```bash
# Clone the repository
git clone https://github.com/eric-orozco/next-map.git
cd next-map

# Copy and configure environment variables
cp .env.docker.example .env.docker
```

#### 2. Configure Environment Variables

Edit `.env.docker` and update the following required variables:

```bash
# Database Configuration
POSTGRES_USER=nextmap
POSTGRES_PASSWORD=your-secure-password-here
POSTGRES_DB=nextmap
POSTGRES_PORT=5432

# Application Configuration
APP_PORT=3000
NODE_ENV=production

# NextAuth Configuration
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
NEXTAUTH_URL=http://localhost:3000

# Optional: Map API Key
NEXT_PUBLIC_MAP_API_KEY=your-map-api-key-here
```

#### 3. Start the Application

Choose one of the following methods:

**Using npm scripts (recommended):**

```bash
# Start production environment
pnpm docker:up

# Start with build (if you made changes)
pnpm docker:up:build

# Start development environment with hot reloading
pnpm docker:up:dev
```

**Using Docker Compose directly:**

```bash
# Production
docker compose -f docker/docker-compose.yml up -d

# Development
docker compose -f docker/docker-compose.dev.yml up -d
```

Your application will be available at: **http://localhost:3000**

### Docker Commands Reference

#### Production Environment

```bash
# Start/Stop Services
pnpm docker:up                # Start existing containers
pnpm docker:up:build          # Build and start all services
pnpm docker:down              # Stop and remove containers
pnpm docker:down:volumes      # Stop and remove containers + persistent data

# Monitoring & Logs
pnpm docker:logs              # View all service logs
pnpm docker:logs:app          # Application logs only
pnpm docker:logs:postgres     # Database logs only

# Container Access
pnpm docker:shell             # Shell access to app container
pnpm docker:db:shell          # PostgreSQL shell access

# Maintenance
pnpm docker:clean             # Remove unused containers/images
pnpm docker:reset             # Complete reset (removes all data)
```

#### Development Environment

```bash
# Development with Hot Reloading
pnpm docker:up:dev            # Start development environment
pnpm docker:build:dev         # Build development image only

# Using convenience scripts (from project root)
./scripts/docker-dev.sh       # Start development environment
./scripts/docker-prod.sh      # Start production environment
```

#### Manual Docker Commands

If you prefer to use Docker commands directly:

```bash
# Build images
docker build -f docker/Dockerfile -t next-map .          # Production image
docker build -f docker/Dockerfile.dev -t next-map:dev . # Development image

# Run containers manually
docker run -p 3000:3000 --env-file .env.docker next-map

# Using Docker Compose directly
docker compose -f docker/docker-compose.yml up -d        # Production
docker compose -f docker/docker-compose.dev.yml up -d   # Development

# Check service status
docker compose -f docker/docker-compose.yml ps
```

### Docker Architecture & Services

The Docker setup provides a complete containerized environment with the following components:

#### **Application Container**

**Production Build (multi-stage):**

- **Stage 1 - Dependencies**: Installs pnpm and Node.js dependencies
- **Stage 2 - Builder**: Compiles TypeScript and builds optimized Next.js application
- **Stage 3 - Runner**: Minimal Alpine Linux runtime with only production files

**Development Build:**

- Node.js runtime with development dependencies
- Source code mounted as volumes for hot reloading
- File watching enabled for automatic rebuilds

#### **Database Container**

**PostgreSQL Database:**

- PostgreSQL 15 Alpine image for optimal performance
- Persistent data storage with named Docker volumes
- Health checks and automatic restart policies
- Database initialization scripts for schema setup
- Configurable through environment variables

#### **Networking & Communication**

**Docker Network:**

- Isolated internal network for service communication
- Service discovery (app can reach database via `postgres` hostname)
- External port mapping for browser access
- Secure inter-container communication

#### **Volume Management**

**Persistent Volumes:**

- `postgres_data`: Database files persist across container restarts
- `node_modules`: Cached dependencies for faster builds (development)

**Bind Mounts (Development only):**

- Source code directory mounted for live code changes
- Excludes `node_modules` and `.next` to prevent conflicts

### Docker File Organization

All Docker-related files are organized in the `/docker` directory for better project structure:

```
next-map/
├── .dockerignore              # Files excluded from Docker build context
├── .env.docker.example        # Environment variables template
├── scripts/                   # Convenience scripts
│   ├── docker-dev.sh         # Start development environment
│   └── docker-prod.sh        # Start production environment
└── docker/                   # Docker configuration directory
    ├── Dockerfile            # Multi-stage production build
    ├── Dockerfile.dev        # Development environment with hot reload
    ├── docker-compose.yml    # Production services configuration
    ├── docker-compose.dev.yml # Development services configuration
    ├── docker-compose.override.yml # Local development overrides
    └── postgres/             # Database configuration
        └── init/
            └── 01-init.sh    # Database initialization script
```

**Key Configuration Details:**

- **Build Context**: All Dockerfiles use `..` as context to access the entire project
- **Volume Mounts**: Development containers mount `..:/app` for live code changes
- **Service Discovery**: Containers communicate using service names (e.g., `postgres`)
- **Port Configuration**: Customizable through environment variables

### Troubleshooting Docker Issues

#### Common Problems and Solutions

**Container fails to start:**

```bash
# Check container status and logs
docker ps -a
docker compose -f docker/docker-compose.yml logs

# Restart all services
docker compose -f docker/docker-compose.yml down
docker compose -f docker/docker-compose.yml up -d
```

**Database connection issues:**

```bash
# Verify database container health
docker compose -f docker/docker-compose.yml ps

# Check database logs for errors
docker compose -f docker/docker-compose.yml logs postgres

# Test database connectivity
docker compose -f docker/docker-compose.yml exec postgres pg_isready -U nextmap

# Reset database (WARNING: removes all data)
docker compose -f docker/docker-compose.yml down -v
docker compose -f docker/docker-compose.yml up -d
```

**Port conflicts:**

```bash
# Check which processes are using ports
netstat -an | findstr :3000    # Windows
lsof -i :3000                  # macOS/Linux

# Modify ports in .env.docker
APP_PORT=3001
POSTGRES_PORT=5433

# Or stop conflicting services
sudo service postgresql stop   # Linux
brew services stop postgresql  # macOS
```

**Build issues:**

```bash
# Clear Docker build cache
docker builder prune

# Rebuild without cache
docker compose -f docker/docker-compose.yml build --no-cache

# Check Dockerfile syntax
docker build -f docker/Dockerfile --dry-run .
```

**Permission issues (Linux/WSL):**

```bash
# Fix ownership issues
sudo chown -R $USER:$USER .

# Add user to docker group
sudo usermod -aG docker $USER
# Restart terminal after running this command
```

#### Performance Optimization

**For better Docker performance:**

- **Increase Docker memory allocation** to 8GB+ in Docker Desktop settings
- **Enable BuildKit** for faster builds: `export DOCKER_BUILDKIT=1`
- **Use multi-stage builds** (already implemented in production Dockerfile)
- **Optimize .dockerignore** to exclude unnecessary files (already configured)
- **Use Docker volume** for node_modules in development (already implemented)

**Development-specific optimizations:**

- Use `WATCHPACK_POLLING=true` for file watching in WSL2 environments
- Mount source code as bind volumes for instant file changes
- Exclude `node_modules` and `.next` from bind mounts to prevent conflicts

### Cross-Platform Compatibility

This Docker setup provides consistent development and deployment across different operating systems:

**Supported Platforms:**

- **Windows** (Docker Desktop with WSL2 backend recommended)
- **macOS** (Docker Desktop for Mac)
- **Linux** (Docker Engine or Docker Desktop)

**Platform-specific considerations:**

**Windows (WSL2):**

- Enable WSL2 integration in Docker Desktop
- Clone repository inside WSL2 filesystem for better performance
- Use `WATCHPACK_POLLING=true` in development for file watching

**macOS:**

- Enable "Use gRPC FUSE for file sharing" in Docker Desktop for better volume performance
- Allocate sufficient resources in Docker Desktop preferences

**Linux:**

- Install Docker Engine directly or use Docker Desktop
- Add user to docker group to avoid using sudo
- Ensure proper file permissions for mounted volumes

**Getting started on any platform:**

```bash
git clone https://github.com/eric-orozco/next-map.git
cd next-map
cp .env.docker.example .env.docker
# Edit .env.docker with your configuration
docker compose -f docker/docker-compose.yml up -d
```

Access your application at **http://localhost:3000** on any platform!

## CI/CD & Deployment

### Automated Deployment Pipeline

The project uses **GitHub Actions** for continuous integration and deployment. Every code change triggers an automated pipeline that ensures quality and deploys to production.

#### Workflow Triggers

- **Pull Requests** → Preview deployment + full test suite
- **Push to main** → Production deployment (after all checks pass)
- **Manual trigger** → Can be run on-demand via GitHub Actions

#### Pipeline Stages (Parallel Execution)

**Stage 1: Code Quality & Security** _(~5 min)_

- ESLint linting and TypeScript type checking
- Code formatting validation (Prettier)
- Security audit for dependencies

**Stage 2: Unit & Integration Tests** _(~8 min)_

- Jest test suite with coverage reporting
- Component and utility function testing
- Coverage uploaded to Codecov

**Stage 3: End-to-End Testing** _(~12 min)_

- Playwright browser testing (Chromium in CI)
- Homepage functionality and navigation
- Cross-device responsive design validation

**Stage 4: Build & Artifact Creation** _(~10 min)_

- Next.js production build with Turbopack
- Build artifact caching for performance
- Static asset optimization

#### Deployment Process

**For Pull Requests:**

1. All tests and quality checks must pass
2. **Preview deployment** created automatically
3. PR automatically commented with preview URL
4. Preview updates on every commit

**For Production (main branch):**

1. All pipeline stages must complete successfully
2. **Production deployment** automatically triggered
3. GitHub deployment status created
4. Live site updated automatically

#### Quality Gates

All deployments require:

- Zero TypeScript errors
- Zero ESLint violations
- All Jest tests passing
- All Playwright E2E tests passing
- Successful production build
- Security audit passing

#### Performance Optimizations

- **Parallel job execution** reduces total pipeline time
- **Dependency caching** with pnpm for faster installs
- **Build artifact caching** speeds up subsequent builds
- **Conditional steps** skip deployment if secrets unavailable

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
- **Dependabot**: Automated dependency updates and security patches

## Contributing

### Development Process

1. Fork and clone the repository
2. Install dependencies: `pnpm install`
3. Create feature branch: `git checkout -b feature/name`
4. Make changes and run tests: `pnpm test:coverage && pnpm test:e2e`
5. Ensure code quality: `pnpm lint && pnpm type-check`
6. Submit pull request

### Requirements

- All tests must pass
- TypeScript strict mode compliance
- ESLint + Prettier formatting
- Conventional commit messages

---

**Next Map** - A modern 3D mapping platform showcasing Next.js 15, React 19, and advanced internationalization.

```

```
