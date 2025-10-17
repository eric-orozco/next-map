import { test, expect } from '@playwright/test';

test.describe('Next Map Homepage', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/');

    // Check if the page title is correct
    await expect(page).toHaveTitle(/Next Map/);

    // Check if the main heading is visible (using the actual translation)
    await expect(page.getByRole('heading', { name: 'Next Map' })).toBeVisible();

    // Check if the subtitle is visible
    await expect(
      page.getByText('Advanced 3D Mapping with VR Support')
    ).toBeVisible();

    // Check if the navigation is present
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('should display feature cards', async ({ page }) => {
    await page.goto('/');

    // Check if all feature cards are visible (using actual translation keys)
    await expect(page.getByText('Advanced Mapping')).toBeVisible();
    await expect(page.getByText('3D Visualization')).toBeVisible();
    await expect(page.getByText('VR Integration')).toBeVisible();
    await expect(page.getByText('Internationalization')).toBeVisible();
    await expect(page.getByText('Authentication')).toBeVisible();
    await expect(page.getByText('Performance')).toBeVisible();
  });

  test('should display technology showcase section', async ({ page }) => {
    await page.goto('/');

    // Check if tech stack section is visible
    await expect(page.getByText('Technology Showcase')).toBeVisible();
    await expect(page.getByText('Built With Modern Stack')).toBeVisible();
  });

  test('should have responsive navigation', async ({ page }) => {
    await page.goto('/');

    // Test that navigation exists and has some key items
    await expect(page.getByText('Explore')).toBeVisible();
    await expect(page.getByText('Create Map')).toBeVisible();
    await expect(page.getByText('Dashboard')).toBeVisible();
  });

  test('should have interactive elements', async ({ page }) => {
    await page.goto('/');

    // Check for buttons - use more generic selectors
    await expect(page.getByRole('button', { name: 'Explore Maps' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'View Source' })).toBeVisible();
  });

  test('should load without critical errors', async ({ page }) => {
    // Listen for console errors
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Check that there are no critical JavaScript errors
    const criticalErrors = errors.filter(error => 
      !error.includes('i18next::translator: missingKey') && // Ignore i18n missing keys
      !error.includes('Unsupported metadata') // Ignore metadata warnings
    );
    
    expect(criticalErrors).toHaveLength(0);
  });
});
