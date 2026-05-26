import { test, expect } from "@playwright/test";
import {standardUser, lockedOutUser } from "../saucedemoallscenariosdata"

test.describe('go to login page and login', () => {
    test.beforeEach(async ({page}) => {
        await page.goto("/");
        expect(page,'page url is https://www.saucedemo.com/').toHaveURL("https://www.saucedemo.com/");
        await page.getByTestId("username").fill(standardUser.username);
        await page.getByTestId("password").fill(standardUser.password);
        await page.getByTestId("login-button").click();
        expect(page,'page url is /inventory.html').toHaveURL("/inventory.html");
    })
    
    test('Happy login path', async ({page}) => {
        await expect(page,'page url is /inventory.html').toHaveURL("/inventory.html");
    })

    test('add product to cart', async ({page}) => {
        await expect(page,'page url is /inventory.html').toHaveURL("/inventory.html");
        
        await expect(page.getByTestId("add-to-cart-sauce-labs-backpack"),'Add to Cart button for Sauce Labs Backpack').toBeVisible();
        await expect(page.getByTestId("add-to-cart-sauce-labs-backpack"),'Add to Cart button for Sauce Labs Backpack').toBeEnabled();
        await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
        await expect(page.getByTestId("remove-sauce-labs-backpack"),'Remove button became visible').toBeVisible();
        await expect(page.getByTestId("remove-sauce-labs-backpack"),'Remove button became enabled').toBeEnabled();
        await expect(page.getByTestId("shopping-cart-badge"),'shopping cart badge shows 1 item').toHaveText("1");
    
    });

    test('remove product from cart', async ({page}) => {
        
        await expect(page,'page url is /inventory.html').toHaveURL("/inventory.html");
    
        await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
        await page.getByTestId("remove-sauce-labs-backpack").click();
        await expect(page.getByTestId("add-to-cart-sauce-labs-backpack"),'Add to Cart button became visible').toBeVisible();
        await expect(page.getByTestId("add-to-cart-sauce-labs-backpack"),'Add to Cart button became enabled').toBeEnabled();
        await expect(page.getByTestId("shopping-cart-badge"),'Shopping cart badge is not visible').not.toBeVisible();
    
    });

});


test('Negative login path', async ({page}) => {
    await page.goto("/");
    await expect(page,'page url is https://www.saucedemo.com/').toHaveURL("https://www.saucedemo.com/");

    await page.getByTestId("username").fill(lockedOutUser.username);
    await page.getByTestId("password").fill(lockedOutUser.password);
    await page.getByTestId("login-button").click();
    await expect(page.getByTestId("error"),'Error message is visible').toBeVisible();
    await expect(page.getByText("Epic sadface: Sorry, this user has been locked out.")).toBeVisible();
    
    // about this login: I still want to know if this is a correct way, because I am
    // thinking of some backend shit to verify might be necessary. it works but still.
});



test('Empty form validation', async ({page}) => {
    await page.goto("/");
    await expect(page,'page url is https://www.saucedemo.com/').toHaveURL("https://www.saucedemo.com/");;

    await page.getByTestId("login-button").click();
    await expect(page.getByText("Epic sadface: Username is required"),'error mesage is shown with text').toBeVisible();
});

test('Empty Password validation', async ({ page }) => {
    await page.goto("/");
    await expect(page,'page url is https://www.saucedemo.com/').toHaveURL("https://www.saucedemo.com/");

    await page.getByTestId("username").click();
    await page.getByTestId("username").fill(standardUser.username);
    await page.getByTestId("login-button").click();
    await expect(page.getByText("Epic sadface: Password is required"),'error message is shown with text').toBeVisible();

});

test('Empty Username validation', async ({ page }) => {
    await page.goto("/");
    await expect(page,'page url is https://www.saucedemo.com/').toHaveURL("https://www.saucedemo.com/");

    await page.getByTestId("password").click();
    await page.getByTestId("password").fill(standardUser.password);
    await page.getByTestId("login-button").click();
    await expect(page.getByText("Epic sadface: Username is required"),'error message is shown with text').toBeVisible();

});
