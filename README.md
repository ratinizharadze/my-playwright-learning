# Final Project - Playwright Learning Path Part 1

## Test Target
Saucedemo https://www.saucedemo.com/

## E2E Test Plan Coverage
Login Page>>>Item selection/sorting>>>Cart>>>Checkout

## Test Cases
1. user can login with valid credentials
2. ocked user sees error message
3. Wrong password shows error message
4. Empty username shows validation error
- As a shopper, I want my cart to update correctly when I add or remove products.
1. Cart badge shows correct count after adding a product
2. Cart page shows the name of the selected product
3. Removing a product updates the cart (badge disappears or decrements)
4. Adding multiple products shows correct badge count
- As a shopper, I want to be able to complete the checkout process successfully.
1. User can enter first name, last name, and postal code, and complete the checkout process successfully.
2. Overview page shows the selected product
3. Finish button completes the order
4. Success message Thank you for your order! is visible
- As a shopper, I want to sort products by price so I can find the cheapest one.
1. User can select Price (low to high)
2. Product prices are displayed in ascending order

## Project Details
- `/pages` created POMs for three kind of Pages.
- `/tests` tests  
- `test-data/` — credentials
- `playwright.config.ts` — configuration

## How to run
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Notes
- all tests pass
    * Track A. Person of interest can chose to run only (`Ticket1.spec.ts`, `Ticket2.spec.ts`, `Ticket3.spec.ts`, `Ticket4.spec.ts`). These are Week 6 final project Tests.
- No hard waits (`waitForTimeout`) are used
- Tests use semantic locators (`getByRole`, `getByTestId`, `getByPlaceholder`) 
    * most of the time `getByTestId`
- Test data is stored separately from test logic in `test-data/saucedemoallscenariosdata`

## Known limitations
- This suite covers only the selected user journey and my previous practice examples as well
- It does not cover all possible edge cases