import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
    res.json({ message: 'Service operational..' });
});


export default router;