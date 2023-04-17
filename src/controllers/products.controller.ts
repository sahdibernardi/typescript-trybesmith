import { Request, Response } from 'express';
import productsService from '../services/products.service';

const newProduct = async (req: Request, res: Response) => {
  const service = await productsService.newProduct(req.body);
  res.status(201).json(service);
};

export default { newProduct };