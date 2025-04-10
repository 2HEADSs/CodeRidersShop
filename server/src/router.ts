import express from 'express';
import userController from './controllers/userController';
import bikesController from './controllers/bikeController';
const router = express.Router();

router.get('/', (req, res) => {
    // res.json({ message: 'Service operational..' });
    res.status(200).send('🚀 API is working!');
    // res.status(200).json({
    //     message: 'Service operational..',
    //     status: '🚀 API is working!'
    // });

});

router.use('/users', userController);
router.use('/bikes', bikesController);
export default router;