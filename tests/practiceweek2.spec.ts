import { test } from "@playwright/test";
import { first, second, formatPrice } from "../test-data/practiceweek2";

test('test data is wired correctly', async () => {
    const { name, price, inStock } = first ;  // destructuring!
    console.log("First product:", first);
    console.log("Second product:", second);
    console.log("Formatted price:", formatPrice(first.price));
});

