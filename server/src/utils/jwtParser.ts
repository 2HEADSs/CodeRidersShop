// import { NextFunction } from "express";
// import parseToken from "../middlewares/authMiddleware";

// export default function jwtParser(req: Request, res: Response, next: NextFunction) {
//     const token: string | null = req.headers.get('x-authorization');
//     let userId: string | undefined;
//     if (token) {
//         try {
//             const tokenData = parseToken(token);
//             userId = tokenData.userId;
//         } catch (error) {
//             return res.status(401).send('Invalid authorization token');
//         }
//     }
//     next(userId);
// }

