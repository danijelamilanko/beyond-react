import express from 'express';
import authenticate from '../middlewares/authenticate';
import Job from '../models/Job';
import parseErrors from "../utils/parseErrors";

const router = express.Router();

router.get('/', authenticate, (req, res) => {
    Job.find({userId: req.currentUser._id}).then(jobs => res.json({jobs}));
});

router.post("/", authenticate, (req, res) => {
    Job.create({...req.body.job, userId: req.currentUser._id})
        .then(job => res.json({job}))
        .catch(err => res.status(400).json({errors: parseErrors(err.errors)}));
});

export default router;