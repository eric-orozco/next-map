import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material'
import '@testing-library/jest-dom'
import Navigation from '@/components/Navigation'

// Mock i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

// Mock the stores
jest.mock('@/stores/appStore', () => ({
  useAppStore: jest.fn(() => ({
    themeMode: 'light',
    setThemeMode: jest.fn(),
    toggleSidebar: jest.fn(),
    language: 'en',
    setLanguage: jest.fn(),
  })),
}))

const theme = createTheme()

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  )
}

describe('Navigation Component', () => {
  it('renders the navigation bar', () => {
    renderWithTheme(<Navigation />)
    
    expect(screen.getByText('Next Map')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /theme/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /language/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /account/i })).toBeInTheDocument()
  })

  it('displays explore, create, and dashboard buttons on desktop', () => {
    renderWithTheme(<Navigation />)
    
    // These buttons should be visible on desktop
    expect(screen.getByText('explore')).toBeInTheDocument()
    expect(screen.getByText('create')).toBeInTheDocument()
    expect(screen.getByText('dashboard')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    renderWithTheme(<Navigation />)
    
    const themeButton = screen.getByRole('button', { name: /theme/i })
    const langButton = screen.getByRole('button', { name: /language/i })
    const accountButton = screen.getByRole('button', { name: /account/i })

    expect(themeButton).toHaveAttribute('aria-label', 'theme')
    expect(langButton).toHaveAttribute('aria-label', 'language')
    expect(accountButton).toHaveAttribute('aria-label', 'account')
  })
})