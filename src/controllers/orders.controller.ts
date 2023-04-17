import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const listOrders = async (_req: Request, res: Response) => {
  const service = await ordersService.listOrders();
  res.status(200).json(service);
};

export default {
  listOrders,
};