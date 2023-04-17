import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const listOrders = async (_req: Request, res: Response) => {
  const service = await ordersService.listOrders();
  res.status(200).json(service);
};

const newOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const service = await ordersService.newOrder(productsIds);
  return res.status(201).json(service);
};

export default {
  listOrders,
  newOrder,
};