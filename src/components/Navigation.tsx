'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Badge,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Brightness4,
  Brightness7,
  Language,
  Map as MapIcon,
  Notifications,
  Search,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/stores/appStore';
import { ThemeMode } from '@/lib/theme';
import i18n from '@/lib/i18n';

export default function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation('navigation');

  const { themeMode, setThemeMode, toggleSidebar, setLanguage } = useAppStore();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [themeMenuAnchor, setThemeMenuAnchor] =
    React.useState<null | HTMLElement>(null);
  const [langMenuAnchor, setLangMenuAnchor] =
    React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setThemeMenuAnchor(null);
    setLangMenuAnchor(null);
  };

  const handleThemeMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setThemeMenuAnchor(event.currentTarget);
  };

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLangMenuAnchor(event.currentTarget);
  };

  const handleThemeChange = (newTheme: ThemeMode) => {
    setThemeMode(newTheme);
    handleMenuClose();
  };

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang);

    // Set HTML dir attribute for RTL languages
    if (newLang === 'ar-SA') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = newLang;
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = newLang;
    }

    handleMenuClose();
  };

  const getThemeIcon = () => {
    switch (themeMode) {
      case 'dark':
        return <Brightness7 />;
      case 'cyberpunk':
        return <MapIcon />;
      default:
        return <Brightness4 />;
    }
  };

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleSidebar}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <MapIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: isMobile ? 1 : 0,
              mr: isMobile ? 0 : 4,
              fontWeight: 700,
              background:
                themeMode === 'cyberpunk'
                  ? 'linear-gradient(45deg, #00ffff, #ff0080)'
                  : 'inherit',
              WebkitBackgroundClip:
                themeMode === 'cyberpunk' ? 'text' : 'inherit',
              WebkitTextFillColor:
                themeMode === 'cyberpunk' ? 'transparent' : 'inherit',
            }}
          >
            Next Map
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
              <Button color="inherit">{t('explore')}</Button>
              <Button color="inherit">{t('create')}</Button>
              <Button color="inherit">{t('dashboard')}</Button>
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit">
              <Search />
            </IconButton>

            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>

            <IconButton
              color="inherit"
              onClick={handleThemeMenuOpen}
              aria-label="theme"
            >
              {getThemeIcon()}
            </IconButton>

            <IconButton
              color="inherit"
              onClick={handleLanguageMenuOpen}
              aria-label="language"
            >
              <Language />
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        id="primary-search-account-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My Library</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
      </Menu>

      {/* Theme Menu */}
      <Menu
        anchorEl={themeMenuAnchor}
        open={Boolean(themeMenuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleThemeChange('light')}>
          <Brightness7 sx={{ mr: 1 }} /> Light
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange('dark')}>
          <Brightness4 sx={{ mr: 1 }} /> Dark
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange('cyberpunk')}>
          <MapIcon sx={{ mr: 1 }} /> Cyberpunk
        </MenuItem>
      </Menu>

      {/* Language Menu */}
      <Menu
        anchorEl={langMenuAnchor}
        open={Boolean(langMenuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleLanguageChange('en')}>
          🇺🇸 English
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('es')}>
          🇪🇸 Español
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('fr')}>
          🇫🇷 Français
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('zh-CN')}>
          🇨🇳 简体中文
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ja')}>
          🇯🇵 日本語
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ko')}>
          🇰🇷 한국어
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('no')}>🇳🇴 Norsk</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('pt-BR')}>
          🇧🇷 Português (BR)
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ar-SA')}>
          🇸🇦 العربية
        </MenuItem>
      </Menu>
    </>
  );
}
