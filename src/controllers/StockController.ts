import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Stock from '../models/Stock';
import Product from '../models/Products';

class StockController {
  async create(request: Request, response: Response) {
    const repositorioProduct = await getRepository(Product);
    const repositorioStock = await getRepository(Stock);
    const idProduct = request.params.id;
    const { size, quantity } = request.body;

    const product = await repositorioProduct.findOne({ where: { id: idProduct }});

    if(!product) {
      response.status(404).json({ message: 'Product not found!' });
    };

    const stock = repositorioStock.create({ size, quantity });

    stock.product = product as Product; 
    await repositorioStock.save(stock);

    return response.json(stock)
  };

  async listStock(request: Request, response: Response) {
    const repository = await getRepository(Stock);
    const { id } = request.params;
    const stocks = await repository.find({ relations: ['product'], where: { product: id }});

    if(stocks.length == 0) {
      return response.status(404).json({ message: 'Stock not found!' })
    };

    return response.json(stocks);
  }
};

export default new StockController();