import express from 'express';
import { createBike, getAllBikes } from '../services/bikeService.js';
const bikeController = express.Router();


bikeController.get('/bikes', (req, res) => {
    res.json({ message: 'All bikes' });
});

bikeController.post('/create', async (req, res) => {

    try {
        const bikeData = {
            //TODO - Validate data before send to DB
            model: req.body.model ? req.body.model : '',
            manufacturer: req.body.manufacturer ? req.body.manufacturer : '',
            color: req.body.color ? req.body.color : '',
            engineCapacity: req.body.engineCapacity ? req.body.engineCapacity : '',
            price: req.body.price ? req.body.price : '',
            year: req.body.year ? req.body.year : '',
            used: req.body.used ? req.body.used : '',
            img: req.body.img ? req.body.img : '',
            _ownerId: req.requesterId


        }
        const bike = await createBike(bikeData)
        console.log(bike);

        res.status(200).json(bike);
        res.end()
    } catch (error) {
        res.status(400).json({ error: error.message });

    }
});


bikeController.get('/', async (req, res) => {
    try {
        const allBikes = await getAllBikes();
        res.status(200).json(allBikes);
        res.end()
    } catch (error) {
        res.status(400).json({ error: error.message });

    }
})



export default bikeController;