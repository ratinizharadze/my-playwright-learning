import { test, expect } from '@playwright/test';

test.use({ testIdAttribute: 'data-testid' });

test.describe('main page', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.underarmour.com/');
    });
  

    test('go to website and checkout items', async ({page}) => {
        await expect(page).toHaveURL('https://www.underarmour.com/en-us/');

        await expect(page.getByTestId('hero-video')).toBeVisible();

        await page.getByTestId('nav-link-men').click();
        await expect(page.getByRole('heading', { name: "Men's", exact: true })).toBeVisible();
    });
});