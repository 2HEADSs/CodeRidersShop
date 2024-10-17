import express from 'express';
import userRouter from './controllers/userController.js';
import bikesRouter from './controllers/bikesController.js';

const router = express.Router();


router.get('/', (req, res) => {
    res.json({ message: 'Service operational..' });
});

router.use('/user', userRouter)
router.use('/bikes', bikesRouter)


router.use((req, res) => {
    res.status(404).json(
        {
            message: 'The requested resource could not be found. Please check the URL or refer to the API documentation for guidance.'
        }
    );
});


export default router;