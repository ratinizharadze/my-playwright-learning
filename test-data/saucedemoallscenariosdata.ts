type User = {
    username: string,
    password: string,
}

const standardUser: User = {
    username: "standard_user",
    password: "secret_sauce"
};

const lockedOutUser: User = {
    username: "locked_out_user",
    password: "secret_sauce",
};

const problemUser: User = {
    username: "problem_user",
    password: "secret_sauce"
};

const performanceGlitchUser: User = {
    username: "performance_glitch_user",
    password: "secret_sauce"
};

const errorUser: User = {
    username: "error_user",
    password: "secret_sauce"
};

const visualUser: User = {
    username: "visual_user",
    password: "secret_sauce"
};

export { standardUser, lockedOutUser, problemUser, performanceGlitchUser, errorUser, visualUser };  
