import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import { NextFunction, Request, Response } from 'express';

const window = (new JSDOM('')).window;
const purify = DOMPurify(window);

const sanitizeBody = (req: Request, res: Response, next: NextFunction) => {
    if (req.body) {
        for (const key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                req.body[key] = purify.sanitize(req.body[key]);
            }
        }
    }

    next();
};

export default sanitizeBody;
