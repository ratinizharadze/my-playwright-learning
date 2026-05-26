import { test, expect } from "@playwright/test";

test ('page has text', async ({page}) => {
    await page.goto('https://www.saucedemo.com');

    await expect(page.getByText('Swag Labs')).toBeVisible;
});

test ('user can login', async ({page}) => {
    const user = {
        name: "standard_user",
        pass: "secret_sauce",
    };
    const { name, pass } = user;

    await page.goto('https://www.saucedemo.com');
    await expect(page.getByText('Swag Labs')).toBeVisible();

    await page.getByTestId("username").click();
    await page.getByTestId("username").fill(name);

    await page.getByTestId("password").click();
    await page.getByTestId("password").fill(pass);

    await page.getByTestId("login-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});