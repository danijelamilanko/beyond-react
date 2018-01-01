import express from 'express';
import mongodb from 'mongodb';
import Job from '../models/Job';

const router = express.Router();

router.get('/', (req, res) => {
    Job.find().then(jobs => res.json({jobs}));
});

router.get('/:_id', (req, res) => {
    Job.find({_id: new mongodb.ObjectId(req.params._id)}).then(jobs => res.json({jobs}));
});

export default router;