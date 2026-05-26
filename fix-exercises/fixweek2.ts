function getTimeout(seconds: number): number {
  return seconds * 1000;  // Hint: look at the return type
}

getTimeout(10)


const config = { baseURL: "https://staging.example.com" };
console.log(config.baseURL);  // Hint: case matters


function printName(name: string) {
  console.log(name);
}
const userName: string | undefined = "undefined";
printName(userName);  // Hint: what if userName is undefined?