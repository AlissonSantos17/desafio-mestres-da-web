// import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';

// import Products from '../models/Products';

// class ProductController {
//   async createProduct(request: Request, response: Response) {
//     const repository = getRepository(Products);
//     const { name, price, sku, description } = request.body;

//     const skuExists = await repository.findOne({ where: { sku }});

//     if(skuExists) {
//       return response.sendStatus(409);
//     }

//     const product = repository.create({ name, price, sku, description });
//     await repository.save(product);

//     return response.json(repository)
//   }
// }

// export default new ProductController()