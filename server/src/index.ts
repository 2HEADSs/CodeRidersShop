import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router';
import passport from 'passport';
import './middlewares/passport';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;




function serverRun() {
    app.use(express.json());
    app.use(cors());
    app.use(passport.initialize())
    app.use(router);
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

serverRun();
