import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';

interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}

const listOrders = async (): Promise<Order[]> => {
  const model = await ordersModel.listOrders();
  return model;
};

const newOrder = async (userId: number, productsIds: number[]) => {
  const oModel = await ordersModel.newOrder(userId);
  productsIds.forEach((id) => productsModel.newOrderId(oModel, id));
};

export default {
  listOrders,
  newOrder,
};