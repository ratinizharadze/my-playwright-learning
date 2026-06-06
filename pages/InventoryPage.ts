import {type Locator, type Page} from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly inventoryItem: Locator;
  readonly addtocartButton: Locator;
  readonly inventoryList: Locator;
  readonly productsortContainer: Locator;
  readonly shoppingcartLink: Locator;
  readonly shoppingcartBadge: Locator;
  readonly hamburgermenuButton: Locator;
  readonly removeItem: Locator;
  readonly itemname: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.getByTestId("inventory-list");
    this.inventoryItem = page.getByTestId("inventory-item");
    this.addtocartButton = page.getByRole("button", { name: "Add to cart" });
    this.productsortContainer = page.getByTestId("product-sort-container"); 
    this.shoppingcartLink = page.getByTestId("shopping-cart-link");
    this.shoppingcartBadge = page.getByTestId("shopping-cart-badge");
    this.hamburgermenuButton = page.getByRole("button", { name: "Open Menu" });
    this.removeItem = page.getByRole("button", { name: "Remove" });
    this.itemname = page.getByTestId("inventory-item-name");
    }

    async addItemToCart(itemName: string) {
        await this.page
        .getByTestId("inventory-item")
        .filter({ hasText: itemName })
        .getByRole("button", { name: "Add to cart" })
        .click();
    }

    async gotoPDPPage(itemName: string) {
        await this.itemname.filter({ hasText: itemName }).click();
    }

    async removeItemFromCart(itemName: string) {
        await this.page
        .getByTestId("inventory-item")
        .filter({ hasText: itemName })
        .getByRole("button", { name: "Remove" })
        .click();
    }

    async gotoCart() {
        await this.shoppingcartLink.click();
    }
}