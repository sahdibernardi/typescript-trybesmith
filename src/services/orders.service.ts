import ordersModel from '../models/orders.model';

interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}

const listOrders = async (): Promise<Order[]> => {
  const model = await ordersModel.listOrders();
  return model;
};

const newOrder = async (userId: number) => {
  const oModel = await ordersModel.newOrder(userId);
};

export default {
  listOrders,
  newOrder,
};