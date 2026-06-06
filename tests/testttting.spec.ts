import { test, expect } from "@playwright/test";
import {standardUser, lockedOutUser } from "../test-data/saucedemoallscenariosdata"

test.describe("go to login page", () => {
    test.beforeEach(async ({page}) => {
        page.goto("https://www.saucedemo.com/");
    })
});

test('Happy login path', async ({page}) => {
    await page.goto("/");
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    await page.getByRole("textbox", {name: "username"}).fill(standardUser.username);
    await page.getByRole("textbox", {name: "password"}).fill(standardUser.password);
    await page.getByRole("button", {name: "Login"}).click();
    await expect(page).toHaveURL("/inventory.html");

});

test('Negative login path', async ({page}) => {
    await page.goto("/");
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    await page.getByRole("textbox", {name: "username"}).fill(lockedOutUser.username);
    await page.getByRole("textbox", {name: "password"}).fill(lockedOutUser.password);
    await page.getByRole("button", {name: "Login"}).click();
    await expect(page.getByText("Epic sadface: Sorry, this user has been locked out.")).toBeVisible();
    
});