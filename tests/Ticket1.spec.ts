import {test, expect} from '@playwright/test';
import {standardUser, lockedOutUser} from "../saucedemoallscenariosdata";
import {LoginPage} from "../pages/LoginPage";

test.describe("Login", () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    })

    test("user can login with valid credentials", async ({page}) => {
        await loginPage.login(standardUser.username, standardUser.password);
        await expect(page,'page url is /inventory.html').toHaveURL("/inventory.html");
    })

    test("locked user sees error message", async ({page}) => {
        await loginPage.login(lockedOutUser.username, lockedOutUser.password);
        await expect(loginPage.errorMessage).toContainText("Epic sadface: Sorry, this user has been locked out.")
    })

    test("Wrong password shows error message", async ({page}) => {
        await loginPage.login(standardUser.username, "wrongpassword");
        await expect(loginPage.errorMessage).toContainText("Epic sadface: Username and password do not match any user in this service")
    })

    test("Empty username shows validation error", async ({page}) => {
        await loginPage.login("", standardUser.password);
        await expect(loginPage.errorMessage).toContainText("Epic sadface: Username is required")
    })
});