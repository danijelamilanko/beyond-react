import express from 'express';
import authenticate from '../middlewares/authenticate';
import Item from '../models/Item';

const router = express.Router();
router.use(authenticate);

router.get('/', (req, res) => {
    Item.find({userId: req.currentUser._id}).then(items => res.json({items}));
});

export default router;