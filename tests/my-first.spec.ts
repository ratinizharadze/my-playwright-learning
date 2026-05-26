import { test, expect } from "@playwright/test";

test('page has correct title', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    
});

test('page does not contain error text', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    await expect(page.getByText('404 not found')).not.toBeVisible();
 
});