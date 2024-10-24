import express from 'express';
import mongoose from 'mongoose';
import router from './src/router.js'
import cors from './src/middlewares/cors.js';
import sanitize from './src/middlewares/sanitize.js';
import jwtParser from './src/utils/jwtParser.js';



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
    app.use(express.json())
    app.use(cors())
    app.use(sanitize)
    app.use(jwtParser)
    app.use(router)
    app.listen(3000, () => console.log('Server is running on port 3000'));
}

serverStart();