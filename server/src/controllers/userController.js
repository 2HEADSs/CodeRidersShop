import express from 'express';
const userRouter = express.Router();
import { registerUser } from '../services/userService.js';

userRouter.get('/profile', (req, res) => {
    res.json({ message: 'User profile' });
});

userRouter.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        const user = await registerUser(req.body)
        console.log(`User from Controlles ${user}`);
        res.status(200);
        res.send(user)
        res.end()
    } catch (error) {
        console.log(error.message);

    }

});



export default userRouter;