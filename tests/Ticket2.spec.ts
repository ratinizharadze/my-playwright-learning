import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { standardUser } from '../test-data/saucedemoallscenariosdata';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test.describe("As a shopper, I want my cart to update correctly when I add or remove products.", () => {
    let inventoryPage: InventoryPage;
    let loginPage: LoginPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        await loginPage.open();
        await loginPage.login(standardUser.username, standardUser.password);
    })

    test("Cart badge shows correct count after adding a product", async ({ page }) => {
        await inventoryPage.addItemToCart("Sauce Labs Backpack");
        await expect(inventoryPage.shoppingcartBadge).toHaveText("1");
    })

    test("Cart page shows the name of the selected product", async ({ page }) => {
        await inventoryPage.addItemToCart("Sauce Labs Backpack");
        await inventoryPage.gotoCart();
        await expect(cartPage.itemname.filter({ hasText: "Sauce Labs Backpack" })).toBeVisible();
    });

    test("Removing a product updates the cart (badge disappears or decrements)", async ({ page }) => {
        await inventoryPage.addItemToCart("Sauce Labs Backpack");
        await inventoryPage.addItemToCart("Sauce Labs Bike Light");
        await inventoryPage.removeItemFromCart("Sauce Labs Backpack");
        await expect(inventoryPage.shoppingcartBadge).toHaveText("1");
    })

    test("Adding multiple products shows correct badge count", async ({ page }) => {
        await inventoryPage.addItemToCart("Sauce Labs Backpack");
        await inventoryPage.addItemToCart("Sauce Labs Bike Light");
        await inventoryPage.addItemToCart("Sauce Labs Bolt T-Shirt");
        await inventoryPage.addItemToCart("Sauce Labs Fleece Jacket");
        await expect(inventoryPage.shoppingcartBadge).toHaveText("4");
    })

});