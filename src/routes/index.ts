import { Router } from 'express';
import { Request, Response } from 'express';

import sessionRoutes from './session.routes';
import userRoutes from './user.routes';
import productRoutes from './product.routes';

const router = Router();

router.get("/", (request: Request, response: Response) => {
  response.json({ message: 'Seja bem vindo!'})
});

// Login de usuario
router.use('/session', sessionRoutes);

//Criação de usuarios e listagem
router.use('/users', userRoutes);

//Criação de produtos, modificação, exclusão e listagem
router.use('/products', productRoutes);

export default router;