import dotenv from 'dotenv';
dotenv.config();
const accesTokenSecret = process.env.AUTH_TOKEN_SECRET;
import jwt from 'jsonwebtoken';

export default function parseToken(token) {
    try {
        return jwt.verify(token, accesTokenSecret)

    } catch (error) {
        throw new Error('Invalid acces token!');

    }
}
