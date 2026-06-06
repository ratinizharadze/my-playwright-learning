import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { standardUser } from '../test-data/saucedemoallscenariosdata';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe("As a shopper, I want to be able to complete the checkout process successfully.", () => {
    let inventoryPage: InventoryPage;
    let loginPage: LoginPage;
    let cartPage: CartPage;
    let checkoutPage: CheckoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
        
        await loginPage.open();
        await loginPage.login(standardUser.username, standardUser.password);
        await inventoryPage.addItemToCart("Sauce Labs Backpack");
        await inventoryPage.gotoCart();
        await cartPage.checkout();
    });

    test("User can enter first name, last name, and postal code, and complete the checkout process successfully.", async () => {
        await checkoutPage.fillCheckoutInformation("rati", "rati", "123");
        await checkoutPage.continueButton.click();
        await expect(checkoutPage.title.filter({ hasText: "Checkout: Overview" })).toBeVisible();
    })

    test("Overview page shows the selected product", async () => {
        await checkoutPage.fillCheckoutInformation("rati", "rati", "123");
        await checkoutPage.continueButton.click();
        await expect(checkoutPage.itemname).toHaveText("Sauce Labs Backpack");
    })

    test("Finish button completes the order", async () => {
        await checkoutPage.fillCheckoutInformation("rati", "rati", "123");
        await checkoutPage.continueButton.click();
        await checkoutPage.finishButton.click();
        await expect(checkoutPage.title.filter({ hasText: "Checkout: Complete"})).toBeVisible();
    })

    test("Success message Thank you for your order! is visible", async () => {
        await checkoutPage.fillCheckoutInformation("rati", "rati", "123");
        await checkoutPage.continueButton.click();
        await checkoutPage.finishButton.click();
        await expect(checkoutPage.completeHeader).toBeVisible();
    })
});
