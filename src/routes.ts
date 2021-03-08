import { Request, Response } from 'express';
import { Router } from 'express';

import { authMiddleware } from './middlewares/authMiddleware';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const router = Router();

router.get("/", (request: Request, response: Response) => {
  response.json({ message: 'Seja bem vindo!'})
})

//Criar usuario, listagem e autenticação
router.post('/session', AuthController.login);
router.use(authMiddleware);

router.post('/users', UserController.create);
router.get('/users', UserController.listUser);

//Products



export default router;