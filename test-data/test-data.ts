type Credentials = {
    email: string,
    password: string,
    role?: string
}

const validUser: Credentials = {
    email: "test@test.com",
    password: "example",
}

function getLoginUrl(env: string): string {
    return `https://${env}.example.com/loign`;
}
export { validUser, getLoginUrl };
