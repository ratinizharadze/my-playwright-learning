import {type Locator, type Page} from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly inventoryItem: Locator;
  readonly AddToCartButton: Locator;
  readonly InventoryList: Locator;
  readonly ProductSortContainer: Locator;
  readonly ShoppingCartLink: Locator;
  readonly ShoppingCartBadge: Locator;
  readonly HamburgerMenuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.InventoryList = page.getByTestId("inventory-list");
    this.inventoryItem = page.getByTestId("inventory-item");
    this.AddToCartButton = page.getByRole("button", { name: "Add to cart" });
    this.ProductSortContainer = page.getByTestId("product_sort_container"); 
    this.ShoppingCartLink = page.getByTestId("shopping-cart-link");
    this.ShoppingCartBadge = page.getByTestId("shopping_cart_badge");
    this.HamburgerMenuButton = page.getByRole("button", { name: "Open Menu" });
    }

    async open() {
        await this.page.goto("/inventory.html");
    }

    async addItemToCart(itemName: string) {
        await this.page
        .getByTestId("inventory-item")
        .filter({ hasText: itemName })
        .getByRole("button", { name: "Add to cart" })
        .click();
    }

    async gotoCart() {
        await this.ShoppingCartLink.click();
    }
}