import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible;

  await page.getByRole('link', { name: 'Next Writing tests »' }).click();
  await expect(page.getByRole('heading', { name: 'Writing tests' })).toBeVisible;
  
});