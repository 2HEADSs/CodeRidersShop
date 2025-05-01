import parseToken from "../middlewares/authMiddleware";

export default function jwtParser(req, res, next) {
    const token = req.headers['x-authorization'];

    if (token) {
        try {
            const tokenData = parseToken(token);
            req.requesterId = tokenData._id;
        } catch (error) {
            return res.status(401).json({ message: 'Invalid authorization token' });
        }
    }
    next();
}

