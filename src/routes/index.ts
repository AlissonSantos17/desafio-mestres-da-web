import { Router } from 'express';
import { Request, Response } from 'express';

import sessionRoutes from './session.routes';
import userRoutes from './user.routes';
import productRoutes from './product.routes';
import stockRoutes from './stock.routes';

const router = Router();

// Login de usuario
router.use('/session', sessionRoutes);

//Criação de usuarios e listagem
router.use('/users', userRoutes);

//Criação de produtos, modificação, exclusão e listagem
router.use('/products', productRoutes);

//Criação de usuarios e listagem
router.use('/stock', stockRoutes);


export default router;