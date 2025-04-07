import express from 'express';
import bcrypt from 'bcryptjs'
const userController = express.Router();
import { registerUser, loginUser } from '../services/userService';
import { UserDataLoginController, UserDataRegisterController } from '../types';



userController.post('/register', async (req, res) => {

    try {
        const { email, firstName, lastName, phone, password, repass }: UserDataRegisterController = req.body;

        if (!email) {
            throw new Error('Email is required.');
        }

        if (!password) {
            throw new Error('Password is required.');
        }

        //TODO: extend password symbols
        if (password.length < 3) {
            throw new Error('Password must be at least 3 characters long.');
        }

        if (password.length > 23) {
            throw new Error('Password must be no longer than 23 characters.');
        }

        if (password !== repass) {
            throw new Error('Password and confirmation password do not match.');
        }


        if (!firstName) {
            throw new Error('First name is required.');
        }
        if (!lastName) {
            throw new Error('Last name is required.');
        }
        if (!phone) {
            throw new Error('Phone number is required.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);



        const user = await registerUser({ email, firstName, lastName, phone, hashedPassword });
        res.status(200).json(user);
        //TODO: remove "any"
    } catch (error: any) {
        res.status(400).json({ message: error.message });

    }

});

userController.post('/login', async (req, res) => {

    try {

        const { email, password }: UserDataLoginController = req.body;
        if (!email) {
            throw new Error('Email is required.');
        }

        if (!password) {
            throw new Error('Password is required.');
        }

        const user = await loginUser(email, password);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
})



export default userController;