import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

import User from "../models/User";
const secretForAccessToken = process.env.AUTH_TOKEN_SECRET;


async function registerUser(userData) {

    const user = await User.create(userData);
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.hashedPassword;
    delete userWithoutPassword["__v"];

    const accessToken = createAccessToken(user);
    console.log(user);



    return Object.assign({ user: userWithoutPassword }, { accessToken })
}


async function loginUser(email, password) {


    const user = await User.findOne({ email }).select('+hashedPassword');

    if (!user) {
        throw new Error('Wrong email or password!');
    }

    const comparePassword = bcrypt.compare(password, user.hashedPassword);

    if (!comparePassword) {
        throw new Error('Wrong email or password!');
    }

    const validateUser = user.validateSync();
    if (validateUser) {
        throw new Error('User is not valid!');
    }

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.hashedPassword;
    delete userWithoutPassword["__v"];

    const accessToken = createAccessToken(userWithoutPassword);
    console.log(user);
    return Object.assign(userWithoutPassword, { accessToken })

}
async function getOneUser(id) {
    return await User.findById(id)
}

function createAccessToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    }

    return jwt.sign(payload, secretForAccessToken)
}

export { registerUser, loginUser, getOneUser }