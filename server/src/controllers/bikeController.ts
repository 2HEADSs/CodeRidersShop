import express from 'express';
import { createBike, getAllBikes } from '../services/bikesService';
import passport from 'passport';
const bikesController = express.Router();
import { Request, Response } from 'express';

bikesController.get('/', async (req, res) => {
    try {
        const allBikes = await getAllBikes();
        res.status(200).json(allBikes);
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ message: error.message });

    }
})

bikesController.post(
    '/create',
    passport.authenticate('header', { session: false }),
    async (req: Request, res: Response) => {
        try {
            console.log('Authenticated user:', req.user);
            const createdBike = await createBike(req.body, (req.user as any).userId);
            res.status(200).json({ message: 'Bike created!', data: createdBike });
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ message: error.message });
        }
    }
);


export default bikesController;