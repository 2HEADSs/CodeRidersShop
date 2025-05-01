import passport from 'passport';
import { Strategy as HeaderStrategy } from 'passport-http-header-strategy';
import { Request } from 'express';
import parseToken from './authMiddleware';
interface tokenData {
    id?: string;
    email?: string;
}

passport.use('header', new HeaderStrategy(
    {
        header: 'x-authorization',
        param: 'token',
        passReqToCallback: true
    },
    (req: Request, token: string, done: (error: any, user?: any) => void) => {
        try {
            const tokenData: tokenData = parseToken(token);
            console.log('tokenData from passport.js:', tokenData);
            if (!tokenData?.id) return done(null, false);
            return done(null, tokenData);
        } catch (err) {
            return done(null, false);
        }
    }
));

export default passport;
