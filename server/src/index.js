import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import Promise from 'bluebird';

import auth from './routes/auth';
import jobs from "./routes/jobs";
import authjobs from "./routes/authjobs";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL, {useMongoClient: true});

app.use('/api/auth', auth);
app.use("/api/jobs", jobs);
app.use("/api/authjobs", authjobs);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('running on localhost:8080'));