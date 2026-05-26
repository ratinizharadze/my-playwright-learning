import { test, expect } from "@playwright/test";

test.describe('Go to login page', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test('login with valid credentials', async ({page}) => {
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('/inventory.html');

        const products = page.locator('.inventory_item');
        const count = await products.count();
        expect(count).toBe(6);

        await page.locator('[data-test="item-0-title-link"]').click();
        await expect(page).toHaveURL('/inventory-item.html?id=0');
        await expect(page.locator('.inventory_details_name')).toHaveText('Sauce Labs Bike Light');});
});


