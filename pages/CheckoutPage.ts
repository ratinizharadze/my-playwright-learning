import { type Locator, type Page } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    readonly title: Locator;
    readonly shoppingcartlink: Locator;
    readonly shoppingcartbadge: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly cancelButton: Locator;
    readonly paymentinformationValue: Locator;
    readonly shippinginformationValue: Locator;
    readonly taxValue: Locator;
    readonly totalamountValue: Locator;
    readonly totalValue: Locator;
    readonly backtohomeButton: Locator;
    readonly completeHeader: Locator;
    readonly itemname: Locator;
    readonly finishButton: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTestId("title");
        this.shoppingcartlink = page.getByTestId("shopping-cart-link");
        this.shoppingcartbadge = page.getByTestId("shopping-cart-badge");
        this.firstNameInput = page.getByTestId("firstName");
        this.lastNameInput = page.getByTestId("lastName");
        this.postalCodeInput = page.getByTestId("postalCode");
        this.continueButton = page.getByTestId("continue");
        this.cancelButton = page.getByTestId("cancel");
        this.paymentinformationValue = page.getByTestId("payment-info-value");
        this.shippinginformationValue = page.getByTestId("shipping-info-value");
        this.taxValue = page.getByTestId("tax-label");
        this.totalamountValue = page.getByTestId("subtotal-label");
        this.totalValue = page.getByTestId("total-label");
        this.backtohomeButton = page.getByTestId("back-to-products");
        this.completeHeader = page.getByTestId("complete-header");
        this.itemname = page.getByTestId("inventory-item-name");
        this.finishButton = page.getByTestId("finish");
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async gobacktoHome() {
        await this.backtohomeButton.click();
    }

    async cancelCheckout() {
        await this.cancelButton.click();
    }
}