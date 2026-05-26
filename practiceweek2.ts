type Product = {
    name: string
    price: number
    inStock: boolean
}

const first: Product = {
    name: "Shoe",
    price: 10,
    inStock: true,
}

const second: Product = {
    name: "shirt",
    price: 5,
    inStock: false,
}

function formatPrice(price: number): string {
    return `$${price}`;
}

export { first, second, formatPrice };
