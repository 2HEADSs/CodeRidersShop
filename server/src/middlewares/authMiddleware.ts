import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const accesTokenSecret: string | undefined = process.env.AUTH_TOKEN_SECRET;
if (!accesTokenSecret) {
    throw new Error('AUTH_TOKEN_SECRET is not defined');
}


interface TokenPayload {
    userId?: string;
    email?: string;
}

export default function parseToken(token: string): TokenPayload {

    try {
        const decodedToken = jwt.verify(token, accesTokenSecret!) as TokenPayload
        console.log('decodedToken:', decodedToken);

        return decodedToken;
    } catch (error) {
        throw new Error('Invalid acces token!');

    }
}
