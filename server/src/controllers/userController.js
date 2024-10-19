import express from 'express';
import bcrypt from 'bcryptjs'
const userRouter = express.Router();
import { registerUser } from '../services/userService.js';


userRouter.post('/register', async (req, res) => {
    try {
        //TODO: check password for empty symbols

        if (!req.body.email || req.body.email === '') {
            throw new Error('Email is required.');
        }

        if (!req.body.password || req.body.password === '') {
            throw new Error('Password is required.');
        }

        //TODO: extend password symbols
        if (req.body.password.length < 3) {
            throw new Error('Password must be at least 3 characters long.');
        }

        if (req.body.password.length > 23) {
            throw new Error('Password must be no longer than 23 characters.');
        }

        if (req.body.password !== req.body.repassword) {
            throw new Error('Password and confirmation password do not match.');
        }

        const userData = {
            email: req.body.email,
            firstName: req.body.firstName ? req.body.firstName : '',
            lastName: req.body.lastName ? req.body.lastName : '',
            phone: req.body.phone ? req.body.phone : '',
            hashedPassword: await bcrypt.hash(req.body.password, 10),
        };

        const user = await registerUser(userData)
        console.log(`User from Controlles ${user}`);
        res.status(200);
        res.send(user)
        res.end()
    } catch (error) {
        res.status(400).json({ error: error.message })

    }

});



export default userRouter;