import { test, expect } from "@playwright/test";
import { standardUser, lockedOutUser, problemUser, performanceGlitchUser, errorUser, visualUser } from "../saucedemoallscenariosdata";

test.describe('Go to login page', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test('Login with standard user', async ({page}) => {
        await page.getByPlaceholder('Username').fill(standardUser.username);
        await page.getByPlaceholder('Password').fill(standardUser.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('Login with locked out user', async ({page}) => {
        await page.getByPlaceholder('Username').fill(lockedOutUser.username);
        await page.locator('[data-test="password"]').fill(lockedOutUser.password);
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
    
    // test('Login with problem user', async ({page}) => {
    //    await page.getByTestId('username').fill(problemUser.username);
    //    await page.getByTestId('password').fill(problemUser.password);
    //    await page.getByTestId('login-button').click();
    //   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //    await expect(page.getByTestId('inventory-item')).toHaveCount(6);
    //    
    //    const imageSrcs = await page.locator('.inventory_item_img').evaluateAll(
    //    imgs => imgs.map(img => img.getAttribute('src'))
    //    );

    //    const uniqueSrcs = new Set(imageSrcs);
    //    expect(uniqueSrcs.size).toBe(1);
    //});
    //});

//test('Login with performance glitch user', async ({page}) => {
//    await page.getByTestId('username').fill(performanceGlitchUser.username);
//    await page.getByTestId('password').fill(performanceGlitchUser.password);
//    await page.getByTestId('login-button').click();
//    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

<<<<<<< HEAD
    const startTime = Date.now();
    await expect(page.getByTestId('inventory-item')).toHaveCount(6);
    const endTime = Date.now();
    const loadTime = endTime - startTime;
    console.log(`Load time for performance glitch user: ${loadTime} ms`);
    expect(loadTime).toBeGreaterThan(5000);
});

test('Login with error user', async ({page}) => {
    await page.getByTestId("username").fill(errorUser.username);
    await page.getByTestId("password").fill(errorUser.password);
    await page.getByTestId("login-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const errorImage = page.getByTestId('error-image');
    await expect(errorImage).toBeVisible();
    const src = await errorImage.getAttribute('src');
    expect(src).toContain('sl-404.jpg');
});

test('Login with visual user', async ({page}) => {
    await page.getByTestId('username').fill(visualUser.username);
    await page.getByTestId('password').fill(visualUser.password);
    await page.getByTestId('login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const inventoryContainer = page.locator('.inventory_container');
    await expect(inventoryContainer).toBeVisible();
    const backgroundColor = await inventoryContainer.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(backgroundColor).toBe('rgb(255, 0, 0)');
});
=======
//test('Login with error user', async ({page}) => {
//    await page.getByTestId("username").fill(errorUser.username);
//    await page.getByTestId("password").fill(errorUser.password);
//    await page.getByTestId("login-button").click();
//    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
//
//    const errorImage = page.getByTestId('error-image');
//    await expect(errorImage).toBeVisible();
//    const src = await errorImage.getAttribute('src');
//    expect(src).toContain('sl-404.jpg');
//});
>>>>>>> parent of 3134bd5 (changes for command npx fix)
