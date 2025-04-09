import express from 'express';
import { createBike, getAllBikes } from '../services/bikesService';
const bikesController = express.Router();


bikesController.get('/', async (req, res) => {
    try {
        const allBikes = await getAllBikes();
        res.status(200).json(allBikes);
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ message: error.message });

    }
})

bikesController.post('/create', async (req, res) => {
    try {
        const createdBike = await createBike(req.body, req.body.requesterId);
        console.log(createBike);
        res.status(200).json(createdBike);
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
})