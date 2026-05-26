import { test, expect } from '@playwright/test';     // import tools for testing from library /node_modules

test('has title', async ({ page }) => {           // test case name 
  await page.goto('https://playwright.dev/');     // goes to url but waits until page is loaded

  await expect(page).toHaveTitle(/Playwright/);   // checks between expected and actual result
});

test('get started link', async ({ page }) => {   // 2nd test case name
  await page.goto('https://playwright.dev/');     // goes to url

  await page.getByRole('link', { name: 'Get started' }).click();  // clicks the button

  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();   // checks if heading is present 
});
