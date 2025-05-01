import express, { json } from 'express';
import mongoose from 'mongoose';
import router from './router'
import cors from './middlewares/cors';
import sanitize from './middlewares/sanitize';
import jwtParser from './utils/jwtParser';



const app = express();

const dataBaseConnectionString = 'mongodb://127.0.0.1:27017/Code-Rider-Shop';

function runDB() {
    mongoose.connect(dataBaseConnectionString)
        .then(() => {
            console.log('Database is connected!');
        })
        .catch((err) => {
            console.log(`Database error: ${err}`);
        });
}

function serverStart() {
    runDB();
    app.use(json())
    app.use(cors())
    app.use(sanitize)
    app.use(jwtParser)
    app.use(router)
    app.listen(3000, () => console.log('Server is running on port 3000'));
}

serverStart();