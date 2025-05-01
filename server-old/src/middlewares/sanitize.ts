import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

const window = (new JSDOM('')).window;
const purify = DOMPurify(window);

const sanitizeBody = (req, res, next) => {
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
