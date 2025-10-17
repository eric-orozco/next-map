import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5983',
      dark: '#9a0036',
    },
    tertiary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily:
        'var(--font-orbitron), var(--font-inter), "Roboto", sans-serif',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    },
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#f48fb1',
      light: '#ffc1e3',
      dark: '#c2185b',
    },
    tertiary: {
      main: '#ce93d8',
      light: '#f3e5f5',
      dark: '#ab47bc',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
  },
  typography: lightTheme.typography,
  shape: lightTheme.shape,
  components: {
    ...lightTheme.components,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(30, 30, 30, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        },
      },
    },
  },
});

export const cyberpunkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ffff',
      light: '#64ffff',
      dark: '#00b8d4',
    },
    secondary: {
      main: '#ff0080',
      light: '#ff4081',
      dark: '#c51162',
    },
    tertiary: {
      main: '#76ff03',
      light: '#b2ff59',
      dark: '#64dd17',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#00ffff',
      secondary: '#ff0080',
    },
  },
  typography: {
    ...lightTheme.typography,
    fontFamily: '"Orbitron", "Roboto Mono", monospace',
    h1: {
      ...lightTheme.typography.h1,
      textShadow: '0 0 10px #00ffff',
    },
    h2: {
      ...lightTheme.typography.h2,
      textShadow: '0 0 8px #00ffff',
    },
  },
  shape: lightTheme.shape,
  components: {
    ...lightTheme.components,
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0,
          fontWeight: 600,
          padding: '8px 16px',
          border: '1px solid #00ffff',
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1px solid #00ffff',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
          backgroundColor: 'rgba(26, 26, 26, 0.9)',
        },
      },
    },
  },
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  cyberpunk: cyberpunkTheme,
} as const;

export type ThemeMode = keyof typeof themes;

// Function to create RTL version of a theme
export const createRTLTheme = (theme: Theme): Theme => {
  return createTheme({
    ...theme,
    direction: 'rtl',
  });
};

// Function to get theme with optional RTL support
export const getTheme = (mode: ThemeMode, isRTL = false): Theme => {
  const baseTheme = themes[mode];
  return isRTL ? createRTLTheme(baseTheme) : baseTheme;
};
