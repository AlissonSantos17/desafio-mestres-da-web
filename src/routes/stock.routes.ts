import { Router } from 'express';

import StockController from '../controllers/StockController';

const router = Router();

router.post('/:id', StockController.create);
router.get('/:id', StockController.listStock);

export default router
