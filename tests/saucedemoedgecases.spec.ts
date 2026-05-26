import { test, expect } from "@playwright/test";
import { standardUser, lockedOutUser, problemUser, performanceGlitchUser, errorUser, visualUser } from "../saucedemoallscenariosdata";

test.describe('Go to login page and login to Standard User', () => {
    test.beforeEach(async ({page}) => {
        await page.goto("/");
        await page.getByTestId("username").fill(standardUser.username);
        await page.getByTestId("password").fill(standardUser.password);
        await page.getByTestId("login-button").click();
    })

    // 'add to cart' multiple rapid clicking, add/remove cycles

    test('add to cart multiple rapid clicking', async ({page}) => {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        const addToCartButton = page.getByTestId("add-to-cart-sauce-labs-backpack");
        const RemoveButton = page.getByTestId("remove-sauce-labs-backpack");

        for (let i = 0; i < 125; i++) {
            await addToCartButton.click();
            await expect(RemoveButton).toBeVisible();
            await RemoveButton.click();
            await expect(addToCartButton).toBeVisible();
        }

        await expect(page.getByTestId("add-to-cart-sauce-labs-backpack")).toBeVisible();
        await expect(page.getByTestId("shopping-cart-badge")).not.toBeVisible()    ;
    }); 


    
    // Write a test that documents any unexpected behavior you find.

    test('unexpected behavior documentation', async ({page}) => {

        // Unexpected behavior: When clicking the "Add to Cart" button for the "Sauce Labs Backpack" product, the shopping cart badge does not update to show the number of items in the cart. This issue occurs intermittently and seems to be related to a delay in updating the UI after adding an item to the cart.

        const addToCartButton = page.getByTestId("add-to-cart-sauce-labs-backpack");
        await addToCartButton.click();
        await expect(page.getByTestId("shopping-cart-badge")).toHaveText("1");
    });




    test('add 3 product, verify badge shows 3, remove 1 and verify badge shows 2', async ({page}) => {
        
        const products = await page.getByTestId("inventory-item")
        await expect(products).toHaveCount(6);

        await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
        await page.getByTestId("add-to-cart-sauce-labs-bike-light").click();
        await page.getByTestId("add-to-cart-sauce-labs-bolt-t-shirt").click();
        await expect(page.getByTestId("shopping-cart-badge")).toHaveText("3");

        await page.getByTestId("remove-sauce-labs-backpack").click();
        await expect(page.getByTestId("shopping-cart-badge")).toHaveText("2");
    });

    test('Change the product sort order. Verify the first product name changes.', async ({page}) => {
        const products = await page.getByTestId("inventory-item");
        const count = await products.count();
        await expect(products).toHaveCount(6);

        await expect(products.first().getByTestId("inventory-item-name")).toHaveText("Sauce Labs Backpack");

        await page.getByTestId("product-sort-container").selectOption("hilo");
        await expect(products.first().getByTestId("inventory-item-name")).toHaveText("Sauce Labs Fleece Jacket");
        
    });

    test('add product, refresh page, verify product is in cart', async ({page}) => {
        await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
        await expect(page.getByTestId("shopping-cart-badge")).toHaveText("1");
        
        await page.reload();
        await expect(page.getByTestId("shopping-cart-badge")).toHaveText("1");
    });

});


 





