import express from 'express';
const bikesRouter = express.Router();


bikesRouter.get('/bikes', (req, res) => {
    res.json({ message: 'All bikes' });
});



export default bikesRouter;