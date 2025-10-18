'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Map as MapIcon,
  ThreeDRotation,
  ViewInAr,
  Language,
  Security,
  Speed,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import MapComponent from '@/components/MapComponent';

export default function Home() {
  const theme = useTheme();
  const { t, i18n } = useTranslation('homepage');
  
  // Debug current language
  console.log('Homepage: Current language:', i18n.language);
  console.log('Homepage: Translation example:', t('title'));

  const features = [
    {
      id: 'advanced-mapping',
      icon: <MapIcon color="primary" />,
      title: t('features.advancedMapping.title'),
      description: t('features.advancedMapping.description'),
      technologies: ['MapLibre', 'Vector Tiles', 'WebGL'],
    },
    {
      id: '3d-visualization',
      icon: <ThreeDRotation color="primary" />,
      title: t('features.3dVisualization.title'),
      description: t('features.3dVisualization.description'),
      technologies: ['MapLibre 3D', 'WebGL', 'Terrain'],
    },
    {
      id: 'vr-integration',
      icon: <ViewInAr color="primary" />,
      title: t('features.vrIntegration.title'),
      description: t('features.vrIntegration.description'),
      technologies: ['WebXR', 'VR', 'Immersive Web'],
    },
    {
      id: 'internationalization',
      icon: <Language color="primary" />,
      title: t('features.internationalization.title'),
      description: t('features.internationalization.description'),
      technologies: ['i18next', 'RTL', 'Localization'],
    },
    {
      id: 'authentication',
      icon: <Security color="primary" />,
      title: t('features.authentication.title'),
      description: t('features.authentication.description'),
      technologies: ['NextAuth', 'OAuth', 'JWT'],
    },
    {
      id: 'performance',
      icon: <Speed color="primary" />,
      title: t('features.performance.title'),
      description: t('features.performance.description'),
      technologies: ['Next.js', 'Turbopack', 'PWA'],
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Box
        sx={{
          pt: 10, // Account for fixed AppBar
          pb: 4,
          background:
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%)'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                {t('title')}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontWeight: 300,
                }}
              >
                {t('subtitle')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  opacity: 0.8,
                  lineHeight: 1.7,
                }}
              >
                {t('heroDescription')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                    },
                  }}
                >
                  {t('exploreMaps')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {t('viewSource')}
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={8}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: 400,
                }}
              >
                <MapComponent height={400} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          {t('technologyShowcase')}
        </Typography>

        <Grid container spacing={4}>
          {features.map(feature => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={feature.id}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {feature.icon}
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ ml: 1, fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {feature.technologies.map(tech => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Tech Stack Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            {t('builtWithModernStack')}
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[
              'Next.js 15',
              'React 19',
              'TypeScript',
              'Material UI',
              'MapLibre GL',
              'Prisma',
              'Zustand',
              'i18next',
              'Jest',
              'Playwright',
              'pnpm',
              'Turbopack',
            ].map(tech => (
              <Grid key={tech}>
                <Chip
                  label={tech}
                  variant="filled"
                  color="primary"
                  sx={{ fontSize: '1rem', py: 2, px: 1 }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
