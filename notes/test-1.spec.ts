import { Page } from "@playwright/test";

async function login(page: Page): Promise<void> {
  await page.goto("https://example.com/login");     // wait for page to load
  await page.getByPlaceholder("Email").fill("user@test.com");  // wait for typing
  await page.getByRole("button", { name: "Login" }).click();   // wait for click
}




function applyPromoCode(code: string | undefined) {
  // console.log(code.toUpperCase());  // ERROR — code might be undefined!

  // Fix: check first, then use
  if (code) {
    console.log(code.toUpperCase());  // OK — TypeScript knows code is string here
  }
}


