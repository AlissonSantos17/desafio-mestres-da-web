import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware';
import ProductController from '../controllers/ProductController';

const router = Router();

router.post('/create', authMiddleware, ProductController.createProduct);
router.get('/listProducts', authMiddleware, ProductController.listProducts);
router.put('/updateProduct/:id', authMiddleware, ProductController.updateProduct);
router.delete('/delete/:id', authMiddleware, ProductController.deleteProduct);

export default router;