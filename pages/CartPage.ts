import { type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly HamburgerMenuButton: Locator;
  readonly title: Locator;
  readonly shoppingcartLink: Locator;
  readonly shoppingcartBadge: Locator;
  readonly inventoryItem: Locator;
  readonly continueshoppingButton: Locator;
  readonly checkoutButton: Locator;
  readonly removeItem: Locator;
  readonly itemname: Locator;


  constructor(page: Page) {
    this.page = page;
    this.HamburgerMenuButton = page.getByRole("button", { name: "Open Menu" });
    this.title = page.getByTestId("title");
    this.shoppingcartLink = page.getByTestId("shopping-cart-link");
    this.shoppingcartBadge = page.getByTestId("shopping-cart-badge");
    this.inventoryItem = page.getByTestId("inventory-item");
    this.removeItem = page.getByRole("button", { name: "Remove" });
    this.continueshoppingButton = page.getByTestId("continue-shopping");
    this.checkoutButton = page.getByTestId("checkout");
    this.itemname = page.getByTestId("inventory-item-name");

  }

  async RemoveItem(itemName: string) {
    await this.page
      .getByTestId("inventory-item")
      .filter({ hasText: itemName })
      .getByRole("button", { name: "Remove" })
      .click();
  }

  async continueShopping() {
    await this.continueshoppingButton.click();
  }

    async checkout() {
        await this.checkoutButton.click();
    }

    async gotoPDPPage(itemName: string) {
        await this.itemname.filter({ hasText: itemName }).click();
    }
}