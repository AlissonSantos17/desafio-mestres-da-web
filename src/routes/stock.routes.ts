import { Router } from 'express';

import StockController from '../controllers/StockController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/:id', authMiddleware, StockController.create);
router.get('/:id', authMiddleware, StockController.listStock);

export default router
