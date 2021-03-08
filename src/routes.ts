// import { Router } from 'express';

// import UserController from './controllers/UserController';
// import ProductController from './controllers/ProductController';

// import AuthController from './controllers/AuthController';
// import { authMiddleware } from './middlewares/authMiddleware';

// const router = Router();

// //Criar usuario, listagem e autenticação
// router.post('/session', AuthController.login);

// router.post('/users', authMiddleware, UserController.create);
// router.get('/users', authMiddleware, UserController.listUser);

// //Products
// router.post('/products', authMiddleware, ProductController.createProduct);
// router.get('/products', authMiddleware, ProductController.listProducts);
// router.put('/products/:id', authMiddleware, ProductController.updateProduct);
// router.delete('/products/:id', authMiddleware, ProductController.deleteProduct);

