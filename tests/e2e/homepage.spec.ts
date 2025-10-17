import { test, expect } from '@playwright/test'

test.describe('Next Map Homepage', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/')
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/Next Map/)
    
    // Check if the main heading is visible
    await expect(page.getByRole('heading', { name: 'Next Map' })).toBeVisible()
    
    // Check if the tagline is visible
    await expect(page.getByText('Advanced 3D Mapping with VR Support')).toBeVisible()
    
    // Check if the navigation is present
    await expect(page.getByRole('navigation')).toBeVisible()
  })

  test('should display feature cards', async ({ page }) => {
    await page.goto('/')
    
    // Check if all feature cards are visible
    await expect(page.getByText('Advanced Mapping')).toBeVisible()
    await expect(page.getByText('3D Visualization')).toBeVisible()
    await expect(page.getByText('VR Integration')).toBeVisible()
    await expect(page.getByText('Internationalization')).toBeVisible()
    await expect(page.getByText('Authentication')).toBeVisible()
    await expect(page.getByText('Performance')).toBeVisible()
  })

  test('should display technology stack', async ({ page }) => {
    await page.goto('/')
    
    // Check if tech stack section is visible
    await expect(page.getByText('Built With Modern Stack')).toBeVisible()
    
    // Check for some key technologies
    await expect(page.getByText('Next.js 15')).toBeVisible()
    await expect(page.getByText('React 18')).toBeVisible()
    await expect(page.getByText('TypeScript')).toBeVisible()
    await expect(page.getByText('Material UI')).toBeVisible()
    await expect(page.getByText('MapLibre GL')).toBeVisible()
  })

  test('should have responsive navigation', async ({ page }) => {
    await page.goto('/')
    
    // Test desktop navigation
    await expect(page.getByText('Explore')).toBeVisible()
    await expect(page.getByText('Create Map')).toBeVisible()
    await expect(page.getByText('Dashboard')).toBeVisible()
  })

  test('should have theme switcher', async ({ page }) => {
    await page.goto('/')
    
    // Find and click the theme button
    const themeButton = page.getByRole('button', { name: /theme/i })
    await expect(themeButton).toBeVisible()
    
    await themeButton.click()
    
    // Check if theme menu appears
    await expect(page.getByText('Light')).toBeVisible()
    await expect(page.getByText('Dark')).toBeVisible()
    await expect(page.getByText('Cyberpunk')).toBeVisible()
  })

  test('should have language switcher', async ({ page }) => {
    await page.goto('/')
    
    // Find and click the language button
    const langButton = page.getByRole('button', { name: /language/i })
    await expect(langButton).toBeVisible()
    
    await langButton.click()
    
    // Check if language menu appears
    await expect(page.getByText('🇺🇸 English')).toBeVisible()
    await expect(page.getByText('🇪🇸 Español')).toBeVisible()
    await expect(page.getByText('🇫🇷 Français')).toBeVisible()
  })

  test('should load the map component', async ({ page }) => {
    await page.goto('/')
    
    // Wait for the map to load
    await expect(page.locator('[data-testid="map"]')).toBeVisible({ timeout: 10000 })
  })
})