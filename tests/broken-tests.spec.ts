import { test, expect } from "@playwright/test";

test("login should redirect to inventory", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");   // ← is this the real placeholder?
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/inventory/);
});
//Root cause:   getByPlaceholder text was User Name, but actual text is Username.
//Fix:          changed getByPlaceholder("User Name") to getByPlaceholder("Username")
//How I verified: npx playwright test broken-tests.spec.ts --ui Then I looked at the error, but I 
// already have done similar tasks so when I looked at the problem I already knew what was wrong
// I also looked at Devtools inside UI mode and verified actal placeholder text and it was Username;




test("error message on wrong password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("wrong_password");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByTestId("error")).toHaveText(
    "Epic sadface: Username and password do not "   // ← is this the exact text?
  );
});

//Root cause:   [locator has different text then expected]
//Fix:          [changed getbytestId("error") text to "Epic sadface: Username and password do not match any user in this service"]
//How I verified: [I ran npx playwright test broken-tests.spec.ts --ui, expect "tohaveText" has error. 
// but same as first one, I already new.

test("cart badge appears after adding product", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await page.locator("[data-test=\"add-to-cart-sauce-labs-backpack\"]").click();   // ← something missing here

  await expect(page.locator(".shopping_cart_badge")).toHaveText("1");
});



//Root cause:   [await was missing on 43th line]
//Fix:          [added await before page.locator]
//How I verified: [I ran npx playwright test broken-tests.spec.ts --ui but nothign was wrong with the test,
// then I thougt problem was locator("[data-test=\"add-to-cart-sauce-labs-backpack\"]") because it is not stable.
// but the nI noticed that await was missing.
