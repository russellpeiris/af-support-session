import express from 'express';
import { connectDB } from './config/DBConnect.js';
import { config } from 'dotenv';
import courseRouter from './routes/course.routes.js';

config();

const app = express();

app.use(express.json());

app.use('/courses', courseRouter);

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})