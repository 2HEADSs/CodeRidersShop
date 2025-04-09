import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router';
import jwtParser from './utils/jwtParser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;




function serverRun() {
    app.use(express.json());
    app.use(cors());
    //TODO: Remove "any" type from middleware
    app.use(jwtParser)
    app.use(router);
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

serverRun();
