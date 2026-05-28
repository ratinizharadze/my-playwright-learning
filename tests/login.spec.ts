import { test, expect } from '@playwright/test';

test.describe('go to login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page, 'page has correct URL').toHaveURL('https://www.saucedemo.com');
  })
  
  test('login with valid credentials', async ({ page }) => {
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    await expect(page, 'page has correct URL').toHaveURL('/inventory.html');
  })

  test('login with invalid credentials, error shows correct text', async ({page}) => {
    await page.getByTestId('username').fill('invalid_user');
    await page.getByTestId('password').fill('invalid_password');
    await page.getByTestId('login-button').click();
    await expect(page.getByTestId('error')).toHaveText('Epic sadface: Username and password do not match any user in this service');
  })

});
