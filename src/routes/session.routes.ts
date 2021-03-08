import { Router } from 'express';

import AuthController from '../controllers/AuthController';
// import verifyAdmin from '../middlewares/verification';

const router = Router();

router.post('/login', AuthController.login );

export default router;