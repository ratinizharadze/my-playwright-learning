

// const = value will not change
const username = "john@test.com";

// let = value can change later
let attempts = 0;
attempts = 3;  // OK — let allows reassignment





// TypeScript figures out the type automatically — this is called "type inference"
const name = "Alice";          // TypeScript knows: string
const retries = 3;             // TypeScript knows: number
const isLoggedIn = false;      // TypeScript knows: boolean

// You CAN write the type explicitly, but you don't have to
const email: string = "alice@test.com";
const maxRetries: number = 5;

// When to add explicit types:
// → when it helps YOU understand the code
// → when TypeScript can't figure it out on its own
// → otherwise, let TypeScript infer





const name = "Alice";
const env = "staging";

// Use backticks ` ` and ${...} to insert variables
const greeting = `Hello, ${name}!`;
const url = `https://${env}.example.com/login`;

// This is much cleaner than string concatenation:
// const url = "https://" + env + ".example.com/login";






const browsers = ["chromium", "firefox", "webkit"];              // string[]
const requiredFields = ["email", "password", "confirm password"]; // string[]

// Access by index (starts at 0)
console.log(browsers[0]);       // "chromium"
console.log(browsers.length);   // 3






// Simple object — TypeScript infers the types of each field
const user = {
  email: "john@test.com",
  password: "Secret123",
  isAdmin: false,
};

// Use it in a test
await page.getByPlaceholder("Email").fill(user.email);
await page.getByPlaceholder("Password").fill(user.password);







// You can define the shape of an object with a "type"
type User = {
  email: string;
  password: string;
  role?: string;  // ? means optional — can be missing
};

// Now TypeScript enforces this shape
const admin: User = {
  email: "admin@test.com",
  password: "Admin123",
  role: "admin",
};

const guest: User = {
  email: "guest@test.com",
  password: "Guest123",
  // role is optional — OK to skip it
};





// This is destructuring — pulling "page" out of the object Playwright gives you
test("example", async ({ page }) => {
  await page.goto("https://example.com");
});

// Same idea with your own data:
const user = { email: "john@test.com", password: "Secret123" };

// Instead of writing user.email and user.password everywhere:
const { email, password } = user;
// Now: email = "john@test.com", password = "Secret123"

// Use directly
await page.getByPlaceholder("Email").fill(email);
await page.getByPlaceholder("Password").fill(password);






// Regular function
function formatTestEmail(name: string): string {
  return `${name.toLowerCase()}@test.com`;
}

// Arrow function — shorter syntax, same idea
const buildLoginUrl = (env: string): string => {
  return `https://${env}.example.com/login`;
};

// Use them
const email = formatTestEmail("Alice");    // "alice@test.com"
const url = buildLoginUrl("staging");      // "https://staging.example.com/login"






// Build a URL for a specific environment
function getLoginURl(env: string): string {
  return `https://${env}.example.com/login`;
}

// Function that takes an object as parameter
type CRedentials = {
  email: string;
  password: string;
};

function logCredentials(creds: Credentials): void {
  console.log(`Logging in as: ${creds.email}`);
}