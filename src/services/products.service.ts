import productsModel from '../models/products.model';

interface Product {
  id: number;
  name: string;
  amount: string;
}

interface Order extends Product {
  orderId: number;
}

const newProduct = async (product: Product) => {
  const model = await productsModel.newProduct(product);
  return model;
};

const listProducts = async (): Promise<Order[]> => {
  const model = await productsModel.listProducts();
  return model;
};

export default {
  newProduct,
  listProducts,
};