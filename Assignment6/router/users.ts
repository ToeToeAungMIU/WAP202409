import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1> User List</h1>');
});
router.post('/', (req, res) => {
    res.send('User created');
});

export default router;