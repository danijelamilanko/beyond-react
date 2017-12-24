import express from 'express';
import authenticate from '../middlewares/authenticate';
import Job from '../models/Jobs';

const router = express.Router();

router.get('/', authenticate, (req, res) => {
    Job.find({userId: req.currentUser._id}).then(jobs => res.json({jobs}));
});

export default router;