import express from 'express';
import mongoose from 'mongoose';



const app = express();

const dataBaseConnectionString ='mongodb://127.0.0.1:27017/Code-Rider-Shop';

function runDB() {
    mongoose.connect(dataBaseConnectionString)
        .then(() => {
            console.log('Database is connected');
        })
        .catch((err) => {
            console.log(`Database error: ${err}`);
        });
}

function serverStart() {
    runDB();
    app.listen(3000, () => console.log('Server is running on port 3000'));
}

serverStart();