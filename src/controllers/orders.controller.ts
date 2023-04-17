import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import usersService from '../services/users.service';

const listOrders = async (_req: Request, res: Response) => {
  const service = await ordersService.listOrders();
  res.status(200).json(service);
};

const newOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { user } = req.body;
  const userById = await usersService.getUserId(user.username);
  const result = {
    userId: userById.id,
    productsIds,
  };
  await ordersService.newOrder(userById.id, productsIds);
  return res.status(201).json(result);
};

export default {
  listOrders,
  newOrder,
};