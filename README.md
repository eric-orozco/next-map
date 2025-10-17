# Next Map - Advanced 3D Mapping with VR Support

Modern Web App Skill

![Next Map Preview](https://via.placeholder.com/800x400/1976d2/ffffff?text=Next+Map+Preview)

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

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/next-map.git
   cd next-map
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.local.example .env.local
   ```

   Update `.env.local` with your configuration:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/nextmap"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Database Setup**

   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Start Development Server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

### Development

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Testing

- `pnpm test` - Run Jest tests in watch mode
- `pnpm test:ci` - Run Jest tests once
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm test:e2e` - Run Playwright E2E tests
- `pnpm test:e2e:ui` - Run Playwright tests with UI mode

### Database

- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema changes to database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Prisma Studio

### Quality Assurance

- `pnpm type-check` - Run TypeScript type checking

## 🏗 Project Structure

```
next-map/
├── prisma/              # Database schema and migrations
├── public/              # Static assets and localization files
├── src/
│   ├── app/            # Next.js app directory (routes)
│   ├── components/     # Reusable React components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility libraries and configurations
│   ├── stores/         # Zustand state management
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Helper functions
├── tests/
│   └── e2e/           # Playwright end-to-end tests
├── jest.config.js      # Jest configuration
├── playwright.config.ts # Playwright configuration
└── package.json        # Project dependencies and scripts
```

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

### Unit Tests (Jest + Testing Library)

- Component testing with React Testing Library
- Custom hooks testing
- Utility function testing
- 80%+ code coverage target

### E2E Tests (Playwright)

- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile responsive testing
- User journey testing
- Visual regression testing

## 🚀 Deployment

### Vercel (Recommended)

```bash
npx vercel --prod
```

### Docker

```bash
docker build -t next-map .
docker run -p 3000:3000 next-map
```

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Purpose

This project serves as a comprehensive showcase of modern web development capabilities, designed to demonstrate:

- **Technical Proficiency** - Advanced use of cutting-edge technologies
- **Best Practices** - Industry-standard development patterns
- **Performance Optimization** - Fast loading and responsive user experience
- **Accessibility** - WCAG compliant design and development
- **Testing Excellence** - Comprehensive test coverage and quality assurance
- **Scalability** - Architecture designed for growth and maintenance

---

**Built with ❤️ using the latest web technologies**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
