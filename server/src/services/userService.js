import dotenv from 'dotenv';
dotenv.config();

import User from "../models/User.js"
import jwt from 'jsonwebtoken'
const secretForAccessToken = process.env.AUTH_TOKEN_SECRET


async function registerUser(userData) {

    // const email = requestBody.email;
    // const hashedPassword = requestBody.hashedPassword;

    const user = await User.create(userData);
    console.log(`User from Service ${user}`);
    const accessToken = createAccessToken(user)

    return { user, accessToken };
}

function createAccessToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    }

    return jwt.sign(payload, secretForAccessToken)
}

export { registerUser }