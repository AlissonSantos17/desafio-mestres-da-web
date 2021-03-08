import { Router } from 'express';

import UserController from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/create', UserController.create);
router.get('/listUsers', authMiddleware, UserController.listUser);

export default router;