import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware';
import ProductController from '../controllers/ProductController';
// import verifyAdmin from '../middlewares/verification';

const productRouter = Router();

productRouter.post('/create', authMiddleware, ProductController.createProduct);
productRouter.get('/listProducts', authMiddleware, ProductController.listProducts);
productRouter.put('/updateProduct/:id', authMiddleware, ProductController.updateProduct);
productRouter.delete('/delete/:id', authMiddleware, ProductController.deleteProduct);

export default productRouter;