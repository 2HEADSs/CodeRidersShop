import express from 'express';
import userController from './controllers/userController';
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
router.use('/bikes', userController);
export default router;