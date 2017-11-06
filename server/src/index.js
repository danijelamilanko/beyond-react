import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import auth from './routes/auth';

const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/beyond', {useMongoClient: true});

app.use('/api/auth', auth);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('running on localhost:8080'));