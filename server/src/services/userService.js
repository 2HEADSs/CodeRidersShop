import User from "../models/User.js"

async function registerUser(requestBody) {

    const email = requestBody.email;
    const hashedPassword = requestBody.hashedPassword;

    const user = await User.create({ email, hashedPassword });
    console.log(`User from Service ${user}`);

    return user;
}

export { registerUser }