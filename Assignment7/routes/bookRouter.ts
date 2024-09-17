import express from 'express';
import {save, getAll, getById, updateById, deleteById} from '../controllers/bookController';

const router = express.Router();

router.post('/', save);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateById);
router.delete('/:id', deleteById);

export default router;