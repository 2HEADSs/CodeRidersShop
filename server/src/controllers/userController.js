import express from 'express';
const userRouter = express.Router();
import { registerUser } from '../services/userService.js';


userRouter.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        //TODO - Check data XSS-library
        const user = await registerUser(req.body)
        console.log(`User from Controlles ${user}`);
        res.status(200);
        res.send(user)
        res.end()
    } catch (error) {
        res.status(400).json({ error: error.message })

    }

});



export default userRouter;