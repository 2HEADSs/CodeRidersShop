import { NextFunction, Request, Response } from 'express';

export default () => (req: Request, res: Response, next: NextFunction) => {



    //TODO: Replace with actual frontend origin in production
       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); //Vite port
    // res.setHeader('Access-Control-Allow-Origin', '*'); //All oirt
    res.setHeader(
        'Access-Control-Allow-Methods',
        'HEAD, OPTIONS, GET, POST, PUT, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, X-Authorization'
    );
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    next();
};
