import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Product List </h1>');
});
router.post('/', (req, res) => {
    res.send('Product created.');
});

export default router;