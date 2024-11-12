import express from 'express';
import { createBike, editBike, getAllBikes, getById, lastFourAdded } from '../services/bikeService.js';
const bikeController = express.Router();



bikeController.get('/lastAdded', async (req, res) => {
    try {
        const lastAdded = await lastFourAdded();
        res.status(200).json(lastAdded);
        res.end();
    } catch (error) {
        console.log(error.message);

    }
});

bikeController.get('/', async (req, res) => {
    try {
        const allBikes = await getAllBikes();
        res.status(200).json(allBikes);
        res.end();
    } catch (error) {
        res.status(400).json({ message: "An error ocured in server!" });

    }
});

bikeController.get('/:id', async (req, res) => {

    try {
        const bike = await getById(req.params.id);
        res.status(200).json(bike);
        res.end();
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
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
            used: req.body.used ? req.body.used : false,
            img: req.body.img ? req.body.img : '',
            description: req.body.description ? req.body.description : '',
            owner: req.requesterId
        }
        const bike = await createBike(bikeData)

        res.status(200).json(bike);
        res.end()
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
});


bikeController.put('/:id/edit', async (req, res) => {

    try {
        if (Object.keys(req.body).length === 0) {
            throw new Error('Request body is empty');
        }
        console.log(typeof req.body.price);

        const bikeIdFormParams = req.params.id;
        const bikeIdFromBody = req.body._id;
        if (!bikeIdFormParams && !bikeIdFromBody) {
            throw new Error('ID is missing from the request!')
        }
        if (req.body.used == '') {
            req.body.used = false
        }
        const bike = await editBike(req.body);
        res.status(200).json(bike);
        res.end()
    } catch (error) {
        console.log(error.name);
        if (error.name === 'ValidationError') {
            const mongoValidationError = Object.values(error.errors)[0].message;
            res.status(400).json({ message: mongoValidationError });
        } else {
            res.status(400).json({ message: error.message });

        }

    }
});




export default bikeController;