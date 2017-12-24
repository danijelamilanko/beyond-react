import express from 'express';
import Job from '../models/Jobs';

const router = express.Router();

router.get('/', (req, res) => {
    Job.find().then(jobs => res.json({jobs}));
});

export default router;