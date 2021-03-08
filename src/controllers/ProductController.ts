import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Products from '../models/Products';

class ProductController {
  async createProduct(request: Request, response: Response) {
    const repository = getRepository(Products);
    const { name, price, size, color, sku, description } = request.body;

    const skuExists = await repository.findOne({ where: { sku }});

    if(skuExists) {
      return response.status(409).send({ message: 'SKU already exists!' });
    }

    const product = repository.create({ name, price, size, color, sku, description });
    await repository.save(product);
    
    return response.status(201).json(product);
  };

  async listProducts(request: Request, response: Response) {
    const product = await getRepository(Products).find();
    
    if(product.length == 0) {
      return response.status(404).json({ message: 'Products not found!' })
    };
    
    return response.json(product);
  };

  async updateProduct(request: Request, response: Response) {
    const { id } = request.params;

    const product = await getRepository(Products).update(id, request.body);

    if(product.affected === 1) {
      const productUpdated = await getRepository(Products).findOne(id);
      return response.json(productUpdated);
    }

    return response.status(404).json({ message: 'Product not found!'});
  };

  async deleteProduct(request: Request, response: Response) {
    const { id } = request.params;

    const product = await getRepository(Products).delete(id);

    if(product.affected === 1) {
      await getRepository(Products).findOne(id);
      return response.json({ message: 'Product removed!'});
    }

    return response.status(404).json({ message: 'Product not found!'});
  }
}

export default new ProductController()