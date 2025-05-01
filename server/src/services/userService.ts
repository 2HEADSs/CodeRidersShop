
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import prisma from '../prismaClient';
import { UserDataRegisterService } from '../types';

import dotenv from 'dotenv';
dotenv.config();
const secretForAccessToken = process.env.AUTH_TOKEN_SECRET;





async function registerUser(userData: UserDataRegisterService) {
    try {
        const { id, email, firstName, lastName, phone, createdAt, updatedAt } = await prisma.user.create({
            data: {
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                phone: userData.phone,
                hashedPassword: userData.hashedPassword
            }
        });
        const userWithoutPassword = { id, email, firstName, lastName, phone, createdAt, updatedAt };

        const accessToken = createAccessToken({ id, email });
        console.log(userWithoutPassword);



        return Object.assign({ user: userWithoutPassword }, { accessToken })

    } catch (error: any) {
        console.log(error.message)
        //TODO: Change error message
        throw new Error("Wrong email or password!");
    }
}


async function loginUser(email: string, password: string) {

    try {
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                ownedBikes: {
                    include: {
                        owner: true,
                        likedByUsers: true,
                    },
                },
            },
        });
        if (!user) {
            throw new Error('Wrong email or password!');
        }

        const comparePassword = bcrypt.compare(password, user.hashedPassword);

        if (!comparePassword) {
            throw new Error('Wrong email or password!');
        }

        const accessToken = createAccessToken({ id: user.id, email: user.email });
        console.log(user);

        const { hashedPassword, ...safeUser } = user;

        return {
            ...safeUser,
            accessToken,
        };

    } catch (error: any) {
        throw new Error("Wrong email or password!");
    }



}


function createAccessToken(user: {
    id: string,
    email: string
}) {
    const payload = {
        id: user.id,
        email: user.email
    }
    if (!secretForAccessToken) {
        throw new Error('AUTH_TOKEN_SECRET is not defined');
    }

    return jwt.sign(payload, secretForAccessToken)
}

export {
    registerUser,
    loginUser,
    // getOneUser
}