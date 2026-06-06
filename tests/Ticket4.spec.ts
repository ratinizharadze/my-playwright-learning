import { test, expect } from "@playwright/test";
import { standardUser } from "../test-data/saucedemoallscenariosdata";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("As a shopper, I want to sort products by price so I can find the cheapest one.", () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);

        await loginPage.open();
        await loginPage.login(standardUser.username, standardUser.password);
    });

    test("User can select Price (low to high)", async () => {
        const products = await inventoryPage.inventoryItem;
        await expect(inventoryPage.inventoryItem.first()).toContainText("Sauce Labs Backpack");

        await inventoryPage.productsortContainer.selectOption("lohi");
        await expect(inventoryPage.inventoryItem.first()).toContainText("Sauce Labs Onesie");
    });

    test("Product prices are displayed in ascending order", async () => {
        await inventoryPage.productsortContainer.selectOption("lohi");

        const priceTexts = await inventoryPage.inventoryitemPrice.allTextContents();
        const prices = priceTexts.map(price => parseFloat(price.replace("$", "")));
        const sortedPrices = [...prices].sort((a, b) => a - b);
        // I didn't imagine/write this code, I just copied it from the AI. But I can undertand it and describe it.

        expect(prices).toEqual(sortedPrices);
    });
});
